// ? Run jets from command line in watch mode => yarn test -- --watch

const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

//* add()
test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});
//* generateGreeting()
test('Should generate greeting with variable name', () => {
  const result = generateGreeting('Jimmy');
  expect(result).toBe('Hello Jimmy!');
});
test('Generate greeting for default value', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
