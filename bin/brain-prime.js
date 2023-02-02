#!/usr/bin/env node
import startBrainGame from '../src/index.js';
import { rules, brainPrime } from '../src/games/brain-prime.js';

startBrainGame(rules, brainPrime);
