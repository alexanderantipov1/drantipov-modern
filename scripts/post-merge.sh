#!/bin/bash
set -e

# Install dependencies after a task merge (idempotent, non-interactive).
npm install --no-audit --no-fund
