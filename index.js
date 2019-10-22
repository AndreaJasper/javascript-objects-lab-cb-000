function updateObjectWithKeyAndValue = (object, key, value) {
  object[key] = value;
  return object
}

const deleteFromObjectByKey = (object, key) => {
  let res = Object.assign({}, object)
  delete res[key]
  return res
}
