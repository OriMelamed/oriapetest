#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix bookable && npm run build --prefix bookable
cp -a bookable/dist/. public/

bundle install
bundle exec rails db:migrate