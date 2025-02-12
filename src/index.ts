declare var define: any;

const TRUTHY_VALUES = 'y yes true'.split(/\s/);

function toBoolean(value: any): boolean {
  // undefined and null are considered falsy values
  if (value === undefined || value === null) {
    return false;
  }

  value = value.toString();
  value = value.trim();
  value = value.toLowerCase();

  // Empty string is considered a falsy value
  if (!value.length) {
    return false;

  // Any number above zero is considered a truthy value
  } else if (!isNaN(Number(value))) {
    return value > 0;

  // Any value not marked as a truthy value is automatically falsy
  } else {
    return TRUTHY_VALUES.includes(value);
  }
}

if (typeof define === 'function' && define.amd) {
  define(function() { return toBoolean; });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = toBoolean;
}

export default toBoolean;
