#!/usr/bin/env node

import {
  getQuestionForPrimeGame,
  gameDescription,
  countQuestion,
} from '../src/games/prime.js';
import startGame from '../src/index.js';

startGame(getQuestionForPrimeGame, gameDescription, countQuestion);
