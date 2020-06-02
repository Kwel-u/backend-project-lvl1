#!/usr/bin/env node

import {
  sayWelcome,
  getUserName,
  greetUser,
} from '../src/cli.js';

sayWelcome();

const userName = getUserName();

greetUser(userName);
