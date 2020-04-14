import { fireEvent } from "@testing-library/react";
/**
 *
 * @function changeInputValue   Simulates changing the value of an HTML input field.
 * @param {String} value        The value for e.target.value.
 * @param {String} testid       The data-testid of an input field.
 * @param {Function} callback   The exported query function.
 * @return {Promise}            The result of the fired event.
 */
export const changeInputValue = async (value, testid, callback) => {
  const fireChangeEvent = await fireEvent.change(callback(testid), {
    target: {
      value: value,
    },
  });

  return fireChangeEvent;
};
