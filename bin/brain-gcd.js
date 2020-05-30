#!/usr/bin/env node

import {
  getQuestionForGameGCD,
  gameDescription,
  countQuestion,
} from '../src/games/gcd.js';
import startGame from '../src/index.js';

startGame(getQuestionForGameGCD, gameDescription, countQuestion);
