import { depths } from './inputs/day-1.input.js';
import { directions } from './inputs/day-2.input.js';
import { countDepths, countWindows } from './utils/day-1.js';
import { countDistance } from './utils/day-2.js';

const test = [1, 2, 3, 2, 4, 1];

countDepths(depths);
countWindows(depths);
countDistance(directions);
