#!/bin/sh

export NODE_ENV=${NODE_ENV:-production}

if [ "$NODE_ENV" = "production" ]; then
  yarn install
  yarn build
  npx serve -l 3000 -s build
else
  yarn install
  yarn start
fi
