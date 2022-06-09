import { failureCallbackFunction } from '../../helpers';

export const safeParse = (inputVariable: any, callbackOnFailure = failureCallbackFunction) => {
  try {
    return JSON.parse(inputVariable);
  } catch (error) {
    return callbackOnFailure(error, inputVariable);
  }
};
