/**
 * @function expectTruthy - Validates truthiness of incoming object.
 * @function expectValidObjectDataType - Validates that incoming object is of "object" data type.
 * @function expectValidStringDataType - Validates that incoming object is of "string" data type.
 * @function expectProperty - Validates the properties of incoming object.
 * @function expectInstanceOfObjectOrArray - Validates the instance of incoming object.
 * @param {object} receivedObj - Incoming object from tests.
 * @param {string} str - Incoming string from tests.
 */

export const expectTruthy = (receivedObj) =>
  expect(receivedObj).toBeTruthy() && expect(receivedObj).not.toBeNull();

export const expectValidObjectDataType = (receivedObj) =>
  expect(typeof receivedObj).toEqual(typeof Object()) &&
  expect(typeof receivedObj).not.toEqual(typeof String());

export const expectValidStringDataType = (receivedObj) =>
  expect(typeof receivedObj).toEqual(typeof String()) &&
  expect(typeof receivedObj).not.toBe(typeof Function());

export const expectProperty = (receivedObj, str) =>
  expect(receivedObj).toHaveProperty(str) &&
  expect(receivedObj).not.toHaveProperty("dummy");

export const expectInstanceOfObjectOrArray = (receivedObj) =>
  expect(receivedObj).not.toBeInstanceOf(String) &&
  expect(receivedObj).toBeInstanceOf(Array) &&
  expect(receivedObj).toBeInstanceOf(Object);
