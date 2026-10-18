#!/bin/bash
set -e

# Install dependencies after a task merge (idempotent, non-interactive).
# The project uses Yarn 1 (yarn.lock), matching the Vercel production build.
# Don't use `npm install` here: it would recreate package-lock.json.
npx --yes yarn@1.22.22 install --non-interactive
