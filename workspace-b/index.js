import { fn } from 'pkg-a';

export const fn2 = () => {
  const str = fn();
  console.log('fn2: str=', str);
};
