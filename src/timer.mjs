/* eslint-disable no-console */
const timer = (name) => {
  const start = performance.now();
  return {
    stop: () => {
      const end = performance.now();
      const time = end - start;
      console.log('Timer:', name, 'finished in', time, 'ms');
    },
  };
};

const t = timer('Some label');

// eslint-disable-next-line no-magic-numbers
for (let i = 0; i < 1000000; i += 1) {
  //
}

t.stop(); // prints the time elapsed to the js console
