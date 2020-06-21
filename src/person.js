export { isAdult, canDrink };

const isAdult = (age) => age >= 18;
const canDrink = (age) => {
  return age >= 18 ? 'You can dring' : 'You are to young for a drink';
};
