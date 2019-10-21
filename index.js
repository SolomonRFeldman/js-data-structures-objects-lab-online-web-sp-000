const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function 