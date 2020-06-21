const isAdult = (age) => age >= 18;
const canDrink = (age) => {
  return age >= 18 ? 'You can dring' : 'You are to young for a drink';
};

const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };
