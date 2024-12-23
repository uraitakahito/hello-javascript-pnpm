/* eslint-disable no-magic-numbers */

// https://meetup-jp.nhncloud.com/896

function delay() {
  for (let i = 0; i < 100000; i += 1) {
    /* empty */
  }
}

function bar() {
  delay();
  console.log('bar!'); // (2)
}

function foo() {
  delay();
  bar();
  console.log('foo!'); // (3)
}

function baz() {
  console.log('baz!'); // (4)
}

setTimeout(baz, 10); // (1)
foo();
// bar!
// foo!
// baz!
