import { getAvgTime } from './lib/date-util';

const input = [
  '2023-02-06T06:00:00+0900',
  '2023-02-16T06:00:00+0900',
  '2023-02-26T06:00:18+0900',
  '2023-01-06T10:00:00+0900',
  '2021-03-06T10:00:00+0900',
  '2022-02-06T10:00:00+0900',
];

const result = getAvgTime(input);
console.log(result);
