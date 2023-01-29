const GetResultOfExpression = (num1, num2, operationSign) => {
  let result = null;
  switch (operationSign) {
    case '+':
      result = (num1 + num2);
      break;
    case '-':
      result = (num1 - num2);
      break;
    case '*':
      result = (num1 * num2);
      break;
    default:
      console.log('GetResultOfExpression eror');
  }
  return String(result);
};
export default GetResultOfExpression;
