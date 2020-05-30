#!/usr/bin/env node

import {
  getQuestionForEvenGame,
  gameDescription,
  countQuestion,
} from '../src/games/even.js';
import startGame from '../src/index.js';

startGame(getQuestionForEvenGame, gameDescription, countQuestion);
