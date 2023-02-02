#!/usr/bin/env node
import startBrainGame from '../src/index.js';
import { rules, brainProgression } from '../src/games/brain-progression.js';

startBrainGame(rules, brainProgression);
