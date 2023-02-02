#!/usr/bin/env node
import startBrainGame from '../src/index.js';
import { rules, brainCalc } from '../src/games/brain-calc.js';

startBrainGame(rules, brainCalc);
