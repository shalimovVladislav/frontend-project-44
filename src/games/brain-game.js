const getRandom = (min = 0, max = 50) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

export default getRandom;
