function updateObjectWithKeyAndValue = (object, key, value) {
  let res = Object.assign({}, object)
  object[key] = value;
  return object
}

const deleteFromObjectByKey = (object, key) => {
  let res = Object.assign({}, object)
  delete res[key]
  return res
}
