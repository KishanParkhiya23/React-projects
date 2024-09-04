import { log } from '../../log.js';

export default function CounterOutput({ value }) {
  log('<CounterOutput /> rendered', 2);
  console.log(value)

  const cssClass = value >= 0 ? 'counter-output' : 'counter-output negative';
  return <span className={cssClass}>{value}</span>;
}
