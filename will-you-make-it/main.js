const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let enoughFuel;
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump;

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};