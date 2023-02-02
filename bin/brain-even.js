#!/usr/bin/env node
import startBrainGame from '../src/index.js';
import { rules, brainEven } from '../src/games/brain-even.js';

startBrainGame(rules, brainEven);
