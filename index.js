function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}