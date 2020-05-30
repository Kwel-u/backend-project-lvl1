#!/usr/bin/env node

import {
  getQuestionForGameProgression,
  gameDescription,
  countQuestion,
} from '../src/games/progression.js';
import startGame from '../src/index.js';

startGame(getQuestionForGameProgression, gameDescription, countQuestion);
