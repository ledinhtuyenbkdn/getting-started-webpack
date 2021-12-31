import moment from 'moment';
import { sum } from './sum.js'

console.log("Start server");
console.log(moment().toISOString());
console.log("1 + 3 = " + sum(1, 3));