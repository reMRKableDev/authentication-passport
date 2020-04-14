/**
 * @function validateTruthiness               Validates truthiness of incoming object.
 * @param {Object} received                   Incoming received value.
 */
export const validateTruthiness = (received) =>
  expect(received).toBeTruthy() && expect(received).not.toBeNull();

/**
 * @function validateTruthiness               Validates truthiness of incoming object.
 * @param {Object} received                   Incoming received value.
 * @param {Object} expected                   Incoming expected value.
 */
export const validateEquality = (received, expected) =>
  expect(received).toEqual(expected) && expect(received).not.toEqual("dummy");

/**
 * @function validateObjectDataType           Validates that incoming object is of "object" data type.
 * @param {Object} received                   Incoming received value.
 */
export const validateObjectDataType = (received) =>
  expect(typeof received).toEqual(typeof Object()) &&
  expect(typeof received).not.toEqual(typeof String());

/**
 * @function validateStringDataType           Validates that incoming object is of "string" data type.
 * @param {Object} received                   Incoming received value.
 */
export const validateStringDataType = (received) =>
  expect(typeof received).toEqual(typeof String()) &&
  expect(typeof received).not.toBe(typeof Function());

/**
 * @function validateObjectProperties         Validates the incoming "object.properties".
 * @param {Object} received                   Incoming received value.
 * @param {string} str                        Incoming string from tests.
 *
 */
export const validateObjectProperties = (received, str) =>
  expect(received).toHaveProperty(str) &&
  expect(received).not.toHaveProperty("dummy");

/**
 * @function validateInstanceOfObjectOrArray  Validates the instance of incoming object.
 * @param {Object} received                   Incoming received value.
 */
export const validateInstanceOfObjectOrArray = (received) =>
  expect(received).not.toBeInstanceOf(String) &&
  expect(received).toBeInstanceOf(Array) &&
  expect(received).toBeInstanceOf(Object);

/**
 * @function validateMultipleTextValues        Validates  multiple text values.
 * @param {Object} received                    Incoming received value.
 * @param {Function} callback                  Incoming callback from tests.
 */
export const validateMultipleTextValues = (expectedValues, callback) =>
  expectedValues.forEach((value) => {
    validateTruthiness(callback(value));
  });

/**
 * @function validateSnapshot                  Validates the snapshot of a component.
 * @param {Object} received                    Incoming received value.
 */
export const validateSnapshot = (received) =>
  expect(received).toMatchSnapshot();
