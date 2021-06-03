const x = 4;
const y = '4';

function assertTrue(firstParameter, secondParameter) {
  return firstParameter === secondParameter;
}

function assertAlmostTrue(firstParameter, secondParameter) {
  return firstParameter == secondParameter;
}

// True
console.log(assertAlmostTrue(x, y));
// False
console.log(assertTrue(x, y));
