#!/usr/bin/env node

import {
  sayWelcome,
  getNameUser,
  greetUser,
} from '../src/cli.js';


sayWelcome();
greetUser(getNameUser());
