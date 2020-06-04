function isString(value)
{
  return value instanceof String;
}

function isNumber(value)
{
  return value === Number(value);
}

function isInteger(value)
{
  return (value === Number(value)) && value%1 === 0;
}

function isFloat(value)
{
  return (value === Number(value)) && value%1 !== 0;
}
