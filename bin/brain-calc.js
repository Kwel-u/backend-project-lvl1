#!/usr/bin/env node

import {
  getQuestionForCalcGame,
  gameDescription,
  countQuestion,
} from '../src/games/calc.js';
import startGame from '../src/index.js';

startGame(getQuestionForCalcGame, gameDescription, countQuestion);
