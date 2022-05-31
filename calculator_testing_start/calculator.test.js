const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

// console.log(Math.pow(2, 74));

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    let actual = sum(1000000000, 2000000000);
    let expected = 3000000000;
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    let actual = sum(-10, -8);
    let expected = -18;
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    let actual = sum(0, 1);
    let expected = 1;
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive number', () => {
    let actual = subtract(2, 3);
    let expected = -1;
    expect(actual).toBe(expected);
  });

  test('can subtract two large number', () => {
    let actual = subtract(20000000000000, 30000000000000);
    let expected = -10000000000000;
    expect(actual).toBe(expected);
  });

  test('can subtract two large number', () => {
    let actual = subtract(20000000000000, 30000000000000);
    let expected = -10000000000000;
    expect(actual).toBe(expected);
  });

  test('can subtract two negative number', () => {
    let actual = subtract(-8, -2);
    let expected = -6;
    expect(actual).toBe(expected);
  });

  test('can subtract two zero', () => {
    let actual = subtract(-3, 0);
    let expected = -3;
    expect(actual).toBe(expected);
  });

  test('can subtract three number', () => {
    let actual = subtract(10, -2, 3);
    let expected = 9;
    expect(actual).toBe(expected);
  });


});

describe('multiply', () => {
  test('can multiply two small positive number', () => {
    let actual = multiply(10, -2);
    let expected = -20;
    expect(actual).toBe(expected);
  });

  test('can multiply two negative number', () => {
    let actual = multiply(-2, -2);
    let expected = 4;
    expect(actual).toBe(expected);
  });

  test('can multiply two zero number', () => {
    let actual = multiply(10, 0);
    let expected = 0;
    expect(actual).toBe(expected);
  });

  test('can multiply three number', () => {
    let actual = multiply(10, 2, -2);
    let expected = -40;
    expect(actual).toBe(expected);
  });

  test('can multiply two positive number with decimals', () => {
    let actual = multiply(10.22, 2.34);
    let expected = 23.9148;
    expect(actual).toBeCloseTo(expected);
  });

});

describe('divide', () => {
  test('can divide two small positive number', () => {
    let actual = divide(10, 2);
    let expected = 5;
    expect(actual).toBe(expected);
  });

  test('can divide two negative number', () => {
    let actual = divide(-10, -5);
    let expected = 2;
    expect(actual).toBe(expected);
  });

  test('can divide zero number', () => {
    let actual = divide(0, 2);
    let expected = 0;
    expect(actual).toBe(expected);
  });

  test('can divide three number', () => {
    let actual = divide(10, -2, 5);
    let expected = -1;
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can modulus two small positive number', () => {
    let actual = modulus(10, 2);
    let expected = 0;
    expect(actual).toBe(expected);
  });

  test('can modulus two negative number', () => {
    let actual = modulus(-10, -2); // the actual is -0
    let expected = 0; 
    expect(actual).toBeCloseTo(expected);
  });

  test('can modulus zero', () => {
    let actual = modulus(0, 2);
    let expected = 0;
    expect(actual).toBe(expected);
  });

  test('can modulus three number', () => {
    let actual = modulus(20, 3, 5);
    let expected = 2;
    expect(actual).toBe(expected);
  });

  
});

describe('even', () => {
  test('can test postive even number', () => {
    let expected = even(2);
    expect(expected).toBeTruthy();
  });

  test('can test large postive even number', () => {
    let expected = even(Math.pow(2, 742));
    expect(expected).toBeTruthy();
  });

  test('can test negative even number', () => {
    let expected = even(-2);
    expect(expected).toBeTruthy();
  });

  test('can test zero number', () => {
    let expected = even(0);
    expect(expected).toBeTruthy();
  });

  test('can test not even number', () => {
    let expected = even(3);
    expect(expected).toBeFalsy();
  });

});

describe('odd', () => {
  test('can test odd number', () => {
    let expected = odd(63);
    expect(expected).toBeTruthy();
  });


  test('can test negative odd number', () => {
    let expected = odd(-67);
    expect(expected).toBeTruthy();
  });

  test('can test not odd number', () => {
    let expected = odd(4);
    expect(expected).toBeFalsy();
  });

  test('can test zero odd number', () => {
    let expected = odd(-0);
    expect(expected).toBeFalsy();
  });



});
