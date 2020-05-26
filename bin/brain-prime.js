#!/usr/bin/env node

import * as cli from '../src/cli.js';
import startGame from '../src/games/index.js';

const countQuestion = 3;

cli.sayWelcome();
cli.greetOfUser();
startGame('primegame', countQuestion);
