import Ember from 'ember';

/**
  Signal if a value is primitive type (exluding null and undefined)

  @helper isPrimitive
  @private
  @returns Bool
*/
export function isPrimitive(params/*, hash*/) {
  let val = params[0];
  return typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number';
};

export default Ember.Helper.helper(isPrimitive);
