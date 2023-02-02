#!/usr/bin/env node
import startBrainGame from '../src/index.js';
import { rules, brainGCD } from '../src/games/brain-gcd.js';

startBrainGame(rules, brainGCD);
