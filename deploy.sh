#!/bin/bash
# Deploy EDD Profiler site to Cloudflare Pages
# Usage: ./deploy.sh

echo "Building site..."
npm run build

echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy out --project-name edd-profiler-site

echo "Done! Site will be live in a few seconds."
