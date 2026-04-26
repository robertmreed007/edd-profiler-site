interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  institution?: string;
  message?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let payload: ContactPayload;
  try {
    payload = await context.request.json<ContactPayload>();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const institution = payload.institution?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return json({ error: 'Name, email, and message are required.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please provide a valid email address.' }, 400);
  }

  const text = [
    'New contact form submission from eddprofiler.com',
    '',
    `Name:        ${name}`,
    `Email:       ${email}`,
    `Institution: ${institution || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'EDD Profiler Forms <forms@send.eddprofiler.com>',
      to: ['info@eddprofiler.com'],
      reply_to: email,
      subject: `Contact form: ${name}${institution ? ` (${institution})` : ''}`,
      text,
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text();
    return json({ error: 'Email delivery failed', detail }, 502);
  }

  return json({ ok: true });
};
