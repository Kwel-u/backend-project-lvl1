#!/usr/bin/env node

import * as cli from '../src/cli.js';
import startGame from '../src/games/index.js';

cli.sayWelcome();
cli.greetOfUser();
startGame('calcgame');