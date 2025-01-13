/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
/* eslint-disable strict */

// https://meetup-jp.nhncloud.com/896

const delay = () => {
  for (let i = 0; i < 100000; i += 1) {
    /* empty */
  }
};

const bar = () => {
  delay();
  console.log('bar!'); // (2)
};

const foo = () => {
  delay();
  bar();
  console.log('foo!'); // (3)
};

const baz = () => {
  console.log('baz!'); // (4)
};

setTimeout(baz, 10); // (1)
foo();
// bar!
// foo!
// baz!
