const GetRandom = (type = 'number') => {
  const max = type === 'number' ? 50 : 3;
  const randomNumber = Math.floor(Math.random() * max);
  if (type === 'number') {
    return randomNumber;
  }
  let result = null;
  switch (randomNumber) {
    case 0:
      result = '+';
      break;
    case 1:
      result = '-';
      break;
    case 2:
      result = '*';
      break;
    default:
      console.log('GetRandiom eror');
      break;
  }
  return result;
};
export default GetRandom;
