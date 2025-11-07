//import statements should be at the top
import figlet from 'figlet';
import chalk from 'chalk';
import os from 'os';
import fs from 'fs'; fs.writeFileSync('message.txt', 'Hello from Node.js (ESM)!'); const data = fs.readFileSync('message.txt', 'utf8'); console.log('File contents:', data);
import { add, multiply } from './math.js';
console.log('the product is ', multiply(19, 19));
console.log("the sum is ", add(59, 50));

console.log('Operating System:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log(os.machine());
console.log(os.version());

console.log(chalk.red("Hello World"));
console.log(chalk.green.bold("Hello World"));
console.log(chalk.blue("Hello World"));

figlet('I  fw  lil  o  twin', (err, data) => { if (err) { console.log('Something went wrong...'); return; } console.log(data); });