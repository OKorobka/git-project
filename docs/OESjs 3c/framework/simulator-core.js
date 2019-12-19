/* jshint browser: true */
'use strict';

/**
 * Compute the max/min of an array
 * Notice that apply requires a context object, which is not really used
 * in the case of a static function such as Math.max
 */
Array.max = function (array) {
  return Math.max.apply( Math, array);
};
Array.min = function (array) {
  return Math.min.apply( Math, array);
};
/**
 * Clone an array
 */
Array.prototype.clone = function () {
  return this.slice(0);
};
/**
 * Merge an array with another one
 */
Array.prototype.merge = function (anotherArray) {
  return Array.prototype.push.apply( this, anotherArray);
};
/**
 * Test if an array is equal to another
 */
Array.prototype.isEqualTo = function (a2) {
  return (this.length === a2.length) && this.every( function( el, i) {
        return el === a2[i]; });
};

/**
 * @fileOverview  Defines error classes (also called "exception" classes)
 * @author Gerd Wagner
 */

function ConstraintViolation( msg, culprit) {
  this.message = msg;
  if (culprit) this.culprit = culprit;
}
function NoConstraintViolation( v) {
  if (v !== undefined) this.checkedValue = v;
  this.message = "";
}
NoConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
NoConstraintViolation.prototype.constructor = NoConstraintViolation;

/*
 * Property Constraint Violations
 */
function MandatoryValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
MandatoryValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
MandatoryValueConstraintViolation.prototype.constructor = MandatoryValueConstraintViolation;

function RangeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RangeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RangeConstraintViolation.prototype.constructor = RangeConstraintViolation;

function StringLengthConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
StringLengthConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
StringLengthConstraintViolation.prototype.constructor = StringLengthConstraintViolation;

function IntervalConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
IntervalConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
IntervalConstraintViolation.prototype.constructor = IntervalConstraintViolation;

function PatternConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
PatternConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
PatternConstraintViolation.prototype.constructor = PatternConstraintViolation;

function UniquenessConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
UniquenessConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
UniquenessConstraintViolation.prototype.constructor = UniquenessConstraintViolation;

function CardinalityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
CardinalityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
CardinalityConstraintViolation.prototype.constructor = CardinalityConstraintViolation;

function ReferentialIntegrityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ReferentialIntegrityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ReferentialIntegrityConstraintViolation.prototype.constructor = ReferentialIntegrityConstraintViolation;

function FrozenValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
FrozenValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
FrozenValueConstraintViolation.prototype.constructor = FrozenValueConstraintViolation;

function OtherConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
OtherConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
OtherConstraintViolation.prototype.constructor = OtherConstraintViolation;

/*
 * Entity Type Constraint Violations
 */
function EntityTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
EntityTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
EntityTypeConstraintViolation.prototype.constructor = EntityTypeConstraintViolation;

function ModelClassConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ModelClassConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ModelClassConstraintViolation.prototype.constructor = ModelClassConstraintViolation;

function ViewConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ViewConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ViewConstraintViolation.prototype.constructor = ViewConstraintViolation;

function ObjectTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ObjectTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ObjectTypeConstraintViolation.prototype.constructor = ObjectTypeConstraintViolation;

function AgentTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
AgentTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
AgentTypeConstraintViolation.prototype.constructor = AgentTypeConstraintViolation;

function KindConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
KindConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
KindConstraintViolation.prototype.constructor = KindConstraintViolation;

function RoleConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RoleConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RoleConstraintViolation.prototype.constructor = RoleConstraintViolation;

/*******************************************************************************
 * @fileOverview A collection of utilities: methods, objects, etc used all over the code.
 * @author Mircea Diaconescu
 * @copyright Copyright © 2014 Gerd Wagner, Mircea Diaconescu et al,
 *            Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @date July 08, 2014, 11:04:23
 * @license The MIT License (MIT)
 ******************************************************************************/
var util = {};  //typeof util === undefined ? {} : util;

/**
 * Serialize a Date object as an ISO date string
 * @return  YYYY-MM-DD
 */
util.createIsoDateString = function (d) {
  return d.toISOString().substring(0,10);
};
/**
 * Return the next year value (e.g. if now is 2013 the function will return 2014)
 * @return {number}  the integer representing the next year value
 */
util.nextYear = function () {
  var date = new Date();
  return (date.getFullYear() + 1);
};
/**
 * Capitalize the first character of a string
 * @param {string} str
 * @return {string}
 */
util.capitalizeFirstChar = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Copy all own (property and method) slots of a number of untyped objects
 * to a new untyped object.
 * @author Gerd Wagner
 * @return {object}  The merge result.
 */
util.mergeObjects = function () {
  var i = 0, k = 0, n = arguments.length, m = 0,
      foundArrayArg = false,
      foundObjectArg = false,
      arg = null, mergedResult,
      keys=[], key="";
  for (i = 0; i < n; i++) {
    arg = arguments[i];
    if (arg === undefined) {
      continue;
    }
    if (Array.isArray( arg)) {
      if (!foundObjectArg) {
        mergedResult = mergedResult ? mergedResult : [];
        foundArrayArg = true;
        mergedResult = mergedResult.concat( arg);
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Array with an Object! Expected Array arguments only!";
      }
    } else if (typeof arg === 'object') {
      if (!foundArrayArg) {
        mergedResult = mergedResult ? mergedResult : {};
        foundObjectArg = true;
        keys = Object.keys( arg);
        m = keys.length;
        for (k = 0; k < m; k++) {
          key = keys[k];
          mergedResult[key] = arg[key];
        }
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Object with an Array! Expected Object arguments only!";
      }
    } else {
      throw "util.mergeObjects: only arguments of type Array or Object are allowed, but '" +
             typeof arguments[i] + "' type was found for argument number " + i;
    }
  }
  return mergedResult;
};
/**********************************************
 * Name conversions
 **********************************************/
// Example 1: EnglishTeacher => english_teachers
// Example 2: eXPERIMENTdEF => EXPERIMENT_DEFS
util.class2TableName = function (className) {
  var tableName="";
  if (className.charAt(0) === className.charAt(0).toUpperCase()) { // starts with upper case
    if (className.charAt( className.length-1) === "y") {
      tableName = util.camelToLowerCase( className.slice( 0, className.length-1)) + "ies";
    } else {
      tableName = util.camelToLowerCase( className) + "s";
    }
    return tableName;
  } else { // inverse camel case (starts with lower case)
    if (className.charAt( className.length-1) === "Y") {
      tableName = util.invCamelToUppercase( className.slice( 0, className.length-1)) + "IES";
    } else {
      tableName = util.invCamelToUppercase( className) + "S";
    }
    return tableName;
  }
};
// Example: books => Book
util.table2ClassName = function (tableName) {
  var result = util.lowercaseToCamel( tableName);
  result = result.charAt( 0).toUpperCase() + result.slice( 1);
  // if there is an 's' at the end, drop it
  if (result.charAt( result.length - 1) === 's') {
    result = result.slice( 0, result.length - 1);
  }
  /*
  if (!util.JsIdentifierPattern.test( result)) {
    throw Error("util.camelToLowerCase: the provided 'identifier' (" + result +
        ") is not a valid JS identifier!");
  }
  */
  return result;
};
// Example: dateOfBirth => date_of_birth
util.property2ColumnName = function (propertyName) {
  return util.camelToLowerCase( propertyName);
};
// Example: date_of_birth => dateOfBirth
util.column2PropertyName = function (columnName) {
  return util.lowercaseToCamel( columnName);
};
util.camelToLowerCase = function (identifier) {
  var result = '';
  // if the first is a A-Z char, replace it with its lower case equivalent
  identifier = identifier.charAt( 0).toLowerCase() + identifier.slice( 1);
  // replace upper case letter with '_' followed by the lower case equivalent leter
  result = identifier.replace( /([A-Z])/g, function( $1) {
    return "_" + $1.toLowerCase();
  });
  return result;
};
util.invCamelToUppercase = function (name) {
  var result = '';
  // if the first is a a-z, replace it with corresponding upper case
  name = name.charAt(0).toUpperCase() + name.slice( 1);
  // replace lower case letter with '_' followed by the corresponding upper case
  result = name.replace( /([a-z])/g, function( $1) {
    return "_" + $1.toUpperCase();
  });
  return result;
};
util.lowercaseToCamel = function (identifier) {
  var result = '';
  // replace upper case letter with '_' followed by the lower case equivalent letter
  result = identifier.replace( /(\_[a-z])/g, function ($1) {
    return $1.toUpperCase().replace( '_', '');
  });
  return result;
};

/** REGEX to check if valid JS identifier **/
util.JsIdentifierPattern = /^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/;

//***** NOT USED IN cLASSjs ************************
/**
 * Verifies if a value represents an integer or integer string
 * @param {string} x
 * @return {boolean}
 */
util.isIntegerString = function (x) {
  return typeof(x) === "string" && x.search(/^-?[0-9]+$/) == 0;
};
/**
 * Extract the data record part of an object. The extracted property values
 * are either primitive data values, Date objects, or arrays of primitive
 * data values.
 * @param {object} obj
 */
util.createRecordFromObject = function (obj) {
  var record={}, p="", val;
  for (p in obj) {
    val = obj[p];
    if (obj.hasOwnProperty(p) && (typeof(val) === "string" ||
            typeof(val) === "number" || typeof(val) === "boolean" ||
            val instanceof Date ||
            Array.isArray( val) &&  // array list of data values
            !val.some( function (el) {
              return typeof(el) === "object";
            })
        )) {
      if (val instanceof Date) record[p] = val.toISOString();
      else if (Array.isArray( val)) record[p] = val.slice(0);
      else record[p] = val;
    }
  }
  return record;
};
// create an alias for cloning records
util.cloneRecord = util.createRecordFromObject;

/**
 * Create a "deep" clone of a JS object at the level of own properties/slots
 * @param o  the object to be cloned
 * @return {object}
 */
util.cloneObject = function (o) {
  var clone = Array.isArray(o) ? [] : {};
  Object.keys(o).forEach( function (key) {
    clone[key] = (typeof o[key] === "object") ? util.cloneObject(o[key]) : o[key];
  });
  return clone;
};
/**
 * Copy all own (property and method) slots of a number of (untyped) objects
 * to a new (untyped) object.
 * @author Gerd Wagner
 * @return {object}  The merge result.
 *
util.mergeObjects = function () {
  var i=0, k=0, obj=null, mergeObj={}, keys=[], key="";
  for (i=0; i < arguments.length; i++) {
    obj = arguments[i];
    if (obj && typeof obj === "object") {
      keys = Object.keys( obj);
      for (k=0; k < keys.length; k++) {
        key = keys[k];
        mergeObj[key] = obj[key];
      }
    }
  }
  return mergeObj;
};
 */
/**
 * Swap two elements of an array
 * using the ES6 method Object.assign for creating a shallow clone of an object
 * @param a  the array
 * @param i  the first index
 * @param i  the 2nd index
 */
util.swapArrayElements = function (a,i,j) {
  var tempStore = (typeof a[i] === "object") ? Object.assign( {}, a[i]) : a[i];
  a[i] = (typeof a[j] === "object") ? Object.assign( {}, a[j]) : a[j];
  a[j] = tempStore;
};
/**
 * Shuffles array in place using the Fisher-Yates shuffle algorithm
 * @param {Array} a - An array of items to be shuffled
 */
util.shuffleArray = function (a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor( Math.random() * (i + 1) );
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
};
/**
 * Compute the Cartesian Product of an array of arrays
 * From https://stackoverflow.com/a/36234242/2795909
 * @param {Array} arr - An array of arrays of values to be combined
 */
util.cartesianProduct = function (arr) {
  return arr.reduce( function (a,b) {
    return a.map( function (x) {
      return b.map( function (y) {
        return x.concat(y);
      })
    }).reduce( function (a,b) {return a.concat(b)}, [])
  }, [[]])
};
/**
 * Load a script
 * @param {Array} arr - An array of arrays of values to be combined
 */
util.loadScript = function (pathAndFilename, basePath, callback, errCallback) {
  var loadEl = document.createElement('script');
  // if a full URL is provided, the base path is ignored
  if (pathAndFilename.indexOf("://") === -1)
    pathAndFilename = basePath + pathAndFilename;
  // if no callback(s) provided, define an empty function
  callback = typeof callback === "function" ? callback : function () {};
  errCallback = typeof errCallback === "function" ? errCallback : function () {};
  loadEl.src = pathAndFilename;
  loadEl.onload = function () {
    callback(loadEl);
  };
  loadEl.onerror = function (e) {
    console.log("Failed loading file '" + pathAndFilename + "'!");
    loadEl.remove();
    errCallback(e);
  };
  document.head.appendChild( loadEl);
};

/****************************************************************
 * Math Library
 ****************************************************************/
var math = {};
/**
 * Compute the sum of an array of numbers
 * @param {Array} data - An array of numbers
 */
math.sum = function (data) {
  function add( a, b) {return a + b;}
  return data.reduce( add, 0);
};
/**
 * Compute the arithmetic mean of an array of numbers
 * @param {Array} data - An array of numbers
 */
math.mean = function (data) {
  return math.sum( data) / data.length;
};
/**
 * Compute the standard deviation of an array of numbers
 * @param {Array} data - An array of numbers
 */
math.stdDev = function (data) {
  var m = math.mean( data);
  return Math.sqrt( data.reduce( function (acc, x) {
    return acc + Math.pow( x - m, 2);}, 0) / (data.length - 1));
};
/**
 * Compute the confidence interval of an array of numbers. Based on
 *   Efron, B. (1985). Bootstrap confidence intervals for a class of parametric
 *   problems. Biometrika, 72(1), 45-58.
 * @param {Array} data - An array of numbers
 * @param {integer} samples - Number of bootstrap samples (default 10000)
 * @param {decimal} alpha - Confidence interval to estimate [0,1] (default 0.95)
 * @returns {Array} Lower and upper confidence interval
 */
math.confInt = function ( data, samples, alpha ) {
  var n = samples || 10000;
  var p = alpha || 0.95;
  var i, j, t;
  var mu = Array( n );
  var m = math.mean( data );
  var len = data.length;

  /* Calculate bootstrap samples */
  for ( i = 0; i < n; i += 1 ) {
    t = 0;
    for ( j = 0; j < len; j += 1 ) {
      t += data[ Math.floor( Math.random() * len ) ];
    }
    mu[ i ] = ( t / len ) - m;
  }

  /* Sort in ascending order */
  mu.sort( function ( a, b ) {
    return a - b;
  } );

  /* Return the lower and upper confidence interval */
  return {
    lowerBound: m - mu[ Math.floor( Math.min( n - 1,
      n * ( 1 - ( ( 1 - p ) / 2 ) ) ) ) ],
    upperBound: m - mu[ Math.floor( Math.max( 0, n * ( ( 1 - p ) / 2 ) ) ) ]
  };
};
/**
 * Predefined class for creating enumerations as special JS objects.
 * @copyright Copyright 2014 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 * @constructor
 * @this {eNUMERATION}
 * @param {string} name  The name of the new enumeration data type.
 * @param {array} enumArg  The labels array or code list map of the enumeration
 *
 * An eNUMERATION has the following properties:
 * labels         an array list of label strings such that enumLabel = labels[enumIndex-1]
 * enumLitNames
 *
 */
/* globals eNUMERATION */
function eNUMERATION( name, enumArg) {
  var i = 0, lbl = "", LBL = "";
  if (typeof name !== "string") {
    throw new Error(
      "The first constructor argument of an enumeration must be a string!");
  }
  this.name = name;
  if (Array.isArray(enumArg)) {
    // a simple enum defined by a list of labels
    if (!enumArg.every(function (n) {
        return (typeof n === "string");
      })) {
      throw new Error("A list of enumeration labels as the second " +
        "constructor argument must be an array of strings!");
    }
    this.labels = enumArg;
    this.enumLitNames = this.labels;
    this.codeList = null;
  } else if (typeof enumArg === "object" && Object.keys(enumArg).length > 0) {
    // a code list defined by a map
    if (!Object.keys(enumArg).every(function (code) {
        return (typeof enumArg[code] === "string");
      })) {
      throw new Error("All values of a code list map must be strings!");
    }
    this.codeList = enumArg;
    // use codes as the names of enumeration literals
    this.enumLitNames = Object.keys( this.codeList);
    this.labels = this.enumLitNames.map(function (c) {
      return enumArg[c] + " (" + c + ")";
    });
  } else {
    throw new Error(
      "Invalid Enumeration constructor argument: " + enumArg);
  }
  this.MAX = this.enumLitNames.length;
  // generate the enumeration literals by capitalizing/normalizing the names
  for (i = 1; i <= this.enumLitNames.length; i++) {
    // replace " " and "-" with "_"
    lbl = this.enumLitNames[i - 1].replace(/( |-)/g, "_");
    // convert to array of words, capitalize them, and re-convert
    LBL = lbl.split("_").map(function (lblPart) {
      return lblPart.toUpperCase();
    }).join("_");
    // assign enumeration index
    this[LBL] = i;
  }
  // protect the enumeration from change attempts
  Object.freeze( this);
  // add new enumeration to the population of all enumerations
  eNUMERATION.instances[this.name] = this;
}
/*
 * Check if a value represents an enumeration literal or a valid index
 */
eNUMERATION.prototype.isValidEnumLitOrIndex = function (v) {
  return (Number.isInteger(v) && v > 0 && v < this.MAX);
};
/*
 * Serialize a list of enumeration literals/indexes as a list of
 * enumeration literal names
 */
eNUMERATION.prototype.enumIndexesToNames = function (a) {
  if (!Array.isArray(a)) {
    throw new Error(
      "The argument must be an Array!");
  }
  var listStr = a.map(function (enumInt) {
    return this.enumLitNames[enumInt - 1];
  }, this).join(", ");
  return listStr;
};
/*
 * Define a map of all enumerations as a class-level property
 */
eNUMERATION.instances = {};

 /*******************************************************************************
 * cLASS allows defining constructor-based JavaScript classes and
 * class hierarchies based on a declarative description of the form:
 *
 *   var Student = new cLASS({
 *     Name: "Student",
 *     supertypeName: "Person",
 *     properties: {
 *       "university": {range:"String", label:"University", max: 50, ...}
 *     },
 *     methods: {
 *     }
 *   });
 *   var stud1 = new Student({id: 1, university:"MIT"});
 *   // test if direct instance
 *   if (stud1.constructor.Name === "Student") ...
 *   // test if instance
 *   if (stud1 instanceof Student) ...
 *
 * Notice that it is assumed that a class has (or inherits) an "id" attribute
 * as its standard ID attribute.
 *
 *
 * @copyright Copyright 2015-2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
/* globals cLASS */
function cLASS (classSlots) {
  var propDefs = classSlots.properties || {},  // property declarations
      methods = classSlots.methods || {},
      supertypeName = classSlots.supertypeName,
      superclass=null, constr=null, missingRangeProp="",
      propsWithInitialValFunc = [];
  // check Class definition constraints
  if (supertypeName && !cLASS[supertypeName]) {
    throw "Specified supertype "+ supertypeName +" has not been defined!";
  }
  if (!Object.keys( propDefs).every( function (p) {
        if (!propDefs[p].range) missingRangeProp = p;
        return (propDefs[p].range !== undefined);
      }) ) {
    throw "No range defined for property "+ missingRangeProp +
        " of class "+ classSlots.Name +" !";
  }
  // define a constructor function for creating a new object
  constr = function (instanceSlots) {
    // take care of cLASS-specific provisions (e.g., set a fixed property value)
    if ("onConstructionBeforeAssigningProperties" in methods) this.onConstructionBeforeAssigningProperties();
    if (!instanceSlots) return;
    if (supertypeName) {
      // invoke supertype constructor
      cLASS[supertypeName].call( this, instanceSlots);
    }
    // assign own properties  TODO: use the checked value from validationResult
    Object.keys( propDefs).forEach( function (p) {
      var pDef = propDefs[p], range = pDef.range, Class=null,
          val, rangeTypes=[], i=0, validationResult=null;
      if (typeof instanceSlots === "object" && p in instanceSlots) {
        // property p has an initialization slot
        val = instanceSlots[p];
        validationResult = cLASS.check( p, pDef, val);
        if (!(validationResult instanceof NoConstraintViolation)) throw validationResult;
        // is range a cLASS collection datatype?
        if (typeof range === "object" && range.dataType !== undefined) {
          this[p] = Array.isArray( val) ? val.slice(0) : Object.assign({}, val);  // assign clone
        } else if (typeof range === "string" && typeof val !== "object" &&
            (cLASS[range] || range.includes("|"))) {
          // is range a class (or class disjunction)?
          if (range.includes("|")) {
            rangeTypes = range.split("|");
            for (i=0; i < rangeTypes.length; i++) {
              Class = cLASS[rangeTypes[i]];
              if (Class) {  // type disjunct is a cLASS
                if (Class.instances[String(val)])  {
                  // convert IdRef to object reference
                  this[p] = Class.instances[String(val)];
                  break;
                }
              }
            }
            if (!this[p]) this[p] = val;
          } else {  // range is a class
            // convert IdRef to object reference
            this[p] = cLASS[range].instances[String(val)] || val;
          }
        } else this[p] = val;
      } else if (this[p] === undefined) {
        if (pDef.initialValue !== undefined) {  // assign initial value
          if (typeof pDef.initialValue === "function") {
            propsWithInitialValFunc.push(p);
          } else this[p] = pDef.initialValue;
        } else if (p === "id" && range === "AutoNumber") {    // assign auto-ID
          if (typeof this.constructor.getAutoId === "function") {
            this[p] = this.constructor.getAutoId();
          } else if (this.constructor.idCounter !== undefined) {
            this[p] = ++this.constructor.idCounter;
          }
        } else if (!pDef.optional) {  // assign default values to mandatory properties
          if (pDef.maxCard > 1) {
            if (pDef.minCard === 0) {  // optional multi-valued property
            if (pDef.range in cLASS && !pDef.isOrdered) this[p] = {};  // map
            else this[p] = [];  // array list
            } else throw "A non-empty collection value for "+ p +" is required!";
          } else if (cLASS.isIntegerType(range) || cLASS.isDecimalType(range)) {
            this[p] = 0;
          } else if (range === "String") {
            this[p] = "";
          } else if (range === "Boolean") {
            this[p] = false;
          } else if (typeof range === "object") {
            if (["Array", "ArrayList"].includes(range.dataType)) {
              this[p] = [];
            } else if (range.dataType === "Map") {
              this[p] = {};
            }
          } else {
            throw "A value for "+ p +" is required when creating a(n) "+ classSlots.Name;
          }
        }		  
      }
      // initialize historical properties
      if (pDef.historySize) {
        this.history = this.history || {};  // a map
        this.history[p] = pDef.decimalPlaces ?
            new cLASS.RingBuffer( pDef.range, pDef.historySize,
                {decimalPlaces: pDef.decimalPlaces}) :
            new cLASS.RingBuffer( pDef.range, pDef.historySize);
      }
    }, this);
    // call the functions for initial value expressions
    propsWithInitialValFunc.forEach( function (p) {
      this[p] = propDefs[p].initialValue.call(this);
    }, this);
    // assign remaining fields not defined as properties by the object's class
    if (typeof( instanceSlots) === "object") {
      Object.keys( instanceSlots).forEach( function (f) {
        if (!propDefs[f]) this[f] = instanceSlots[f];
      }, this);
    }
    // take care of cLASS-specific provisions (e.g., update a materialized view)
    if ("onConstructionAfterAssigningProperties" in methods) this.onConstructionAfterAssigningProperties();
    // is the class neither a complex DT nor abstract and does the object have an ID slot?
    if (!classSlots.isComplexDatatype && !classSlots.isAbstract && "id" in this) {
      // add new object to the population/extension of the class
      cLASS[classSlots.Name].instances[String(this.id)] = this;
    }
  };
  // assign class-level (meta-)properties
  constr.constructor = cLASS;
  constr.Name = classSlots.Name;
  if (classSlots.isComplexDatatype) constr.isComplexDatatype = true;
  if (classSlots.isAbstract) constr.isAbstract = true;
  if (classSlots.label) constr.label = classSlots.label;
  if (classSlots.shortLabel) constr.shortLabel = classSlots.shortLabel;
  if (classSlots.primaryKey) constr.primaryKey = classSlots.primaryKey;
  if (classSlots.tableName) constr.tableName = classSlots.tableName;
  if (supertypeName) {
    constr.supertypeName = supertypeName;
    superclass = cLASS[supertypeName];
    // apply classical inheritance pattern for methods
    constr.prototype = Object.create( superclass.prototype);
    constr.prototype.constructor = constr;
    // merge superclass property declarations with own property declarations
    constr.properties = Object.create( superclass.properties);
   //  assign own property declarations, possibly overriding super-props                                     
    Object.keys( propDefs).forEach( function (p) {
      constr.properties[p] = propDefs[p];
    });
  } else {  // if class is root class
    constr.properties = propDefs;
    /***************************************************/
    constr.prototype.set = function ( prop, val) {
    /***************************************************/
      // this = object
      var validationResult = cLASS.check( prop, this.constructor.properties[prop], val);
      if (validationResult instanceof NoConstraintViolation) {
        this[prop] = validationResult.checkedValue;
      } else {
        throw validationResult;
      }
    };
    /***************************************************/
    // overwrite and improve the standard toString method
    constr.prototype.toString = function () {
    /***************************************************/
      var str1="", str2="", i=0;
      if (this.name) str1 = this.name;
      else {
        str1 = this.constructor.shortLabel || this.constructor.Name;
        if (this.id) str1 += ":"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            propLabel = propDecl ? (propDecl.shortLabel || propDecl.label) : key,
            valStr = "";
        // is the slot of a declared reference property?
        if (propDecl && typeof propDecl.range === "string" && cLASS[propDecl.range]) {
          // is the property multi-valued?
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (Array.isArray( this[key])) {
              valStr = this[key].map( function (o) {return o.id;}).toString();
            } else valStr = JSON.stringify( Object.keys( this[key]));
          } else {  // if the property is single-valued
            valStr = String( this[key].id);
          }
        } else if (typeof this[key] === "function") {
          // the slot is an instance-level method slot
          valStr = "a function";
        } else {  // the slot is an attribute slot or an undeclared reference property slot
          valStr = JSON.stringify( this[key]);
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    };
    /***************************************************/
    constr.prototype.toRecord = function () {
    /***************************************************/
      var obj = this, rec={}, propDecl={}, valuesToConvert=[], range, val;
      Object.keys( obj).forEach( function (p) {
        if (obj[p] !== undefined) {
          val = obj[p];
          propDecl = obj.constructor.properties[p];
          range = propDecl.range;
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (range.constructor && range.constructor === cLASS) { // object reference(s)
              if (Array.isArray( val)) {
                valuesToConvert = val.slice(0);  // clone;
              } else {  // val is a map from ID refs to obj refs
                valuesToConvert = Object.values( val);
              }
            } else if (Array.isArray( val)) {
              valuesToConvert = val.slice(0);  // clone;
            } else console.log("Invalid non-array collection in toRecord!");
          } else {  // maxCard=1
            valuesToConvert = [val];
          }
          valuesToConvert.forEach( function (v,i) {
            // alternatively: enum literals as labels
            // if (range instanceof eNUMERATION) rec[p] = range.labels[val-1];
            if (["number","string","boolean"].includes( typeof(v)) || !v) {
              valuesToConvert[i] = String( v);
            } else if (range === "Date") {
              valuesToConvert[i] = util.createIsoDateString( v);
            } else if (range.constructor && range.constructor === cLASS) { // object reference(s)
              valuesToConvert[i] = v.id;
            } else if (Array.isArray( v)) {  // JSON-compatible array
              valuesToConvert[i] = v.slice(0);  // clone
            } else valuesToConvert[i] = JSON.stringify( v);
          });
          if (!propDecl.maxCard || propDecl.maxCard <= 1) {
            rec[p] = valuesToConvert[0];
          } else {
            rec[p] = valuesToConvert;
          }
        }
      });
      return rec;
    };
    /***************************************************/
    // Convert property value to (form field) string.
    constr.prototype.getValueAsString = function ( prop) {
    /***************************************************/
      // make sure the eNUMERATION meta-class object can be checked if available
      var eNUMERATION = typeof eNUMERATION === "undefined" ? undefined : eNUMERATION;
      var propDecl = this.constructor.properties[prop],
          range = propDecl.range, val = this[prop];
      var valuesToConvert=[], displayStr="", k=0,
          listSep = ", ";
      if (val === undefined || val === null) return "";
      if (propDecl.maxCard && propDecl.maxCard > 1) {
        if (Array.isArray( val)) {
          valuesToConvert = val.length>0 ? val.slice(0) : [];  // clone;
        } else if (typeof val === "object") {
          valuesToConvert = Object.keys( val);
        } else console.log("The value of a multi-valued " +
            "property like "+ prop +" must be an array or a map!");
      } else valuesToConvert = [val];
      valuesToConvert.forEach( function (v,i) {
        if (typeof propDecl.val2str === "function") {
          valuesToConvert[i] = propDecl.val2str( v);
        } else if (eNUMERATION && range instanceof eNUMERATION) {
          valuesToConvert[i] = range.labels[v-1];
        } else if (["number","string","boolean"].includes( typeof v) || !v) {
          valuesToConvert[i] = String( v);
        } else if (range === "Date") {
          valuesToConvert[i] = util.createIsoDateString( v);
        } else if (Array.isArray( v)) {  // JSON-compatible array
          valuesToConvert[i] = v.slice(0);  // clone
        } else if (typeof range === "string" && cLASS[range]) {
          if (typeof v === "object" && v.id !== undefined) {
            valuesToConvert[i] = v.id;
          } else {
            valuesToConvert[i] = v.toString();
            propDecl.stringified = true;
            console.log("Property "+ this.constructor.Name +"::"+ prop +" has a cLASS object value without an 'id' slot!");
          }
        } else {
          valuesToConvert[i] = JSON.stringify( v);
          propDecl.stringified = true;
        }
      }, this);
      if (valuesToConvert.length === 0) displayStr = "[]";
      else {
        displayStr = valuesToConvert[0];
        if (propDecl.maxCard && propDecl.maxCard > 1) {
          displayStr = "[" + displayStr;
          for (k=1; k < valuesToConvert.length; k++) {
            displayStr += listSep + valuesToConvert[k];
          }
          displayStr = displayStr + "]";
        }
      }
      return displayStr;
    };
    /***************************************************/

    /***************************************************
     * A class-level de-serialization method
     ***************************************************/
    constr.createObjectFromRecord = function (record) {
      var obj={};
      try {
        obj = new constr( record);
      } catch (e) {
        console.log( e.constructor.name + " while deserializing a "+
            constr.Name +" record: " + e.message);
        obj = null;
      }
      return obj;
    };
  }
  // assign instance-level methods
  Object.keys( methods).forEach( function (m) {
    constr.prototype[m] = methods[m];
  });
  // store class/constructor as value associated with its name in a map
  cLASS[classSlots.Name] = constr;
  // initialize the class-level instances property
   if (!classSlots.isAbstract) {
     cLASS[classSlots.Name].instances = {};
   }
  // return the constructor as the object constructed with new cLASS
  return constr;
}
 /**
  * Determine if a type is an integer type.
  * @method
  * @author Gerd Wagner
  * @param {string|eNUMERATION} T  The type to be checked.
  * @return {boolean}
  */
cLASS.isIntegerType = function (T) {
  return ["Integer","PositiveInteger","AutoNumber","NonNegativeInteger"].includes(T) ||
      T instanceof eNUMERATION;
};
 /**
  * Determine if a type is a decimal type.
  * @method
  * @author Gerd Wagner
  * @param {string} T  The type to be checked.
  * @return {boolean}
  */
 cLASS.isDecimalType = function (T) {
   return ["Number","Decimal","Percent","ClosedUnitInterval","OpenUnitInterval"].includes(T);
 };
 /**
  * Constants
  */
 cLASS.patterns = {
   ID: /^([a-zA-Z0-9][a-zA-Z0-9_\-]+[a-zA-Z0-9])$/,
   // defined in WHATWG HTML5 specification
   EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
   // proposed by Diego Perini (https://gist.github.com/729294)
   URL: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
   INT_PHONE_NO: /^\+(?:[0-9] ?){6,14}[0-9]$/
 };
 /**
  * Generic method for checking the integrity constraints defined in property declarations.
  * The values to be checked are first parsed/deserialized if provided as strings.
  * Copied from the cOMPLEXtYPE class of oNTOjs
  *
  * min/max: numeric (or string length) minimum/maximum
  * optional: true if property is single-valued and optional (false by default)
  * range: String|NonEmptyString|Integer|...
  * pattern: a regular expression to be matched
  * minCard/maxCard: minimum/maximum cardinality of a multi-valued property
  *     By default, maxCard is 1, implying that the property is single-valued, in which
  *     case minCard is meaningless/ignored. maxCard may be Infinity.
  *
  * @method
  * @author Gerd Wagner
  * @param {string} fld  The property for which a value is to be checked.
  * @param {object} decl  The property's declaration.
  * @param {string|number|boolean|object} val  The value to be checked.
  * @param optParams.checkRefInt  Check referential integrity
  * @return {ConstraintViolation}  The constraint violation object.
  */
 cLASS.check = function (fld, decl, val, optParams) {
   var constrVio=null, valuesToCheck=[],
       msg = decl.patternMessage || "",
       minCard = decl.minCard!=="umdefined" ? decl.minCard : decl.optional?0:1,  // by default, a property is mandatory
       maxCard = decl.maxCard || 1,  // by default, a property is single-valued
       min = decl.min || 0, max = decl.max,
       range = decl.range,
       pattern = decl.pattern;
   // check Mandatory Value Constraint
   if (val === undefined || val === "") {
     if (decl.optional) return new NoConstraintViolation();
     else {
       return new MandatoryValueConstraintViolation(
           "A value for "+ fld +" is required!");
     }
   }
   if (maxCard === 1) {  // single-valued property
     valuesToCheck = [val];
   } else {  // multi-valued properties can be array-valued or map-valued
     if (Array.isArray( val) ) {
       valuesToCheck = val;
     } else if (typeof range === "string" && cLASS[range]) {
       if (!decl.isOrdered) {
         valuesToCheck = Object.keys( val).map( function (id) {
           return val[id];
         });
       } else {
         return new RangeConstraintViolation("Values for the ordered property "+ fld +
             " must be arrays, and not maps!");
       }
     } else {
       return new RangeConstraintViolation("Values for "+ fld +
           " must be arrays or maps of IDs to cLASS instances!");
     }
   }
   // convert integer strings to integers
   if (cLASS.isIntegerType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseInt( v);
     });
   }
   // convert decimal strings to decimal numbers
   if (cLASS.isDecimalType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseFloat( v);
     });
   }
   /*********************************************************************
    ***  Convert value strings to values and check range constraints ****
    ********************************************************************/
   switch (range) {
     case "String":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be strings!");
         }
       });
       break;
     case "NonEmptyString":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || v.trim() === "") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be non-empty strings!");
         }
       });
       break;
     case "Identifier":  // add regexp test
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || v.trim() === "" || !cLASS.patterns.ID.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid identifiers/names!");
         }
       });
       break;
     case "Email":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.EMAIL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid email addresses!");
         }
       });
       break;
     case "URL":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.URL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid URLs!");
         }
       });
       break;
     case "PhoneNumber":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.INT_PHONE_NO.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid international phone numbers!");
         }
       });
       break;
     case "Integer":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be an integer!");
         }
       });
       break;
     case "NonNegativeInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 0) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a non-negative integer!");
         }
       });
       break;
     case "AutoNumber":
       if (valuesToCheck.length === 1) {
         if (!Number.isInteger( valuesToCheck[0]) || valuesToCheck[0] < 1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a positive integer!");
         }
       } else {
         constrVio = new RangeConstraintViolation("The value of "+ fld +
             " must not be a collection like "+ valuesToCheck);
       }
       break;
     case "PositiveInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a positive integer!");
         }
       });
       break;
     case "Number":
     case "Decimal":
     case "Percent":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         }
       });
       break;
     case "ClosedUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<0 || v>1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in [0,1]!");
         }
       });
       break;
     case "OpenUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<=0 || v>=1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in (0,1)!");
         }
       });
       break;
     case "Boolean":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string") {
           if (["true","yes"].includes(v)) valuesToCheck[i] = true;
           else if (["no","false"].includes(v)) valuesToCheck[i] = false;
           else constrVio = new RangeConstraintViolation("The value of "+ fld +
                 " must be either 'true'/'yes' or 'false'/'no'!");
         } else if (typeof v !== "boolean") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either 'true' or 'false'!");
         }
       });
       break;
     case "Date":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string" &&
             /\d{4}-(0\d|1[0-2])-([0-2]\d|3[0-1])/.test(v) && !isNaN( Date.parse(v))) {
           valuesToCheck[i] = new Date(v);
         } else if (!(v instanceof Date)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either a Date value or an ISO date string. "+
               v +" is not admissible!");
         }
       });
       break;
     case "DateTime":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string" && !isNaN( Date.parse(v))) {
           valuesToCheck[i] = new Date(v);
         } else if (!(v instanceof Date)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either a Date value or an ISO date-time string. "+
               v +" is not admissible!");
         }
       });
       break;
     default:
       if (range instanceof eNUMERATION || typeof range === "string" && eNUMERATION[range]) {
         if (typeof range === "string") range = eNUMERATION[range];
         valuesToCheck.forEach( function (v) {
           if (!Number.isInteger( v) || v < 1 || v > range.MAX) {
             constrVio = new RangeConstraintViolation("The value "+ v +
                 " is not an admissible enumeration integer for "+ fld);
           }
         });
       } else if (Array.isArray( range)) {
         // *** Ad-hoc enumeration ***
         valuesToCheck.forEach( function (v) {
           if (range.indexOf(v) === -1) {
             constrVio = new RangeConstraintViolation("The "+ fld +" value "+ v +
                 " is not in value list "+ range.toString());
           }
         });
       } else if (typeof range === "string" && cLASS[range]) {
         valuesToCheck.forEach( function (v, i) {
           var recFldNames=[], propDefs={};
           if (!cLASS[range].isComplexDatatype && !(v instanceof cLASS[range])) {
             // convert IdRef to object reference
             if (cLASS[range].instances[String(v)]) {
               v = valuesToCheck[i] = cLASS[range].instances[String(v)];
             } else if (optParams && optParams.checkRefInt) {
               constrVio = new ReferentialIntegrityConstraintViolation("The value " + v +
                   " of property '"+ fld +"' is not an ID of any " + range + " object!");
             }
           } else if (cLASS[range].isComplexDatatype && typeof v === "object") {
             v = Object.assign({}, v);  // use a clone
             // v is a record that must comply with the complex datatype
             recFldNames = Object.keys(v);
             propDefs = cLASS[range].properties;
             // test if all mandatory properties occur in v and if all fields of v are properties
             if (Object.keys( propDefs).every( function (p) {return !!propDefs[p].optional || p in v;}) &&
                 recFldNames.every( function (fld) {return !!propDefs[fld];})) {
               recFldNames.forEach( function (p) {
                 var validationResult = cLASS.check( p, propDefs[p], v[p]);
                 if (validationResult instanceof NoConstraintViolation) {
                   v[p] = validationResult.checkedValue;
                 } else {
                   throw validationResult;
                 }
               })
             } else {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an instance of "+ range +" or a compatible record!"+
                   JSON.stringify(v) + " is not admissible!");
             }
/* DROP
           } else {  // v may be a (numeric or string) ID ref
             if (typeof v === "string") {
               if (!isNaN( parseInt(v))) v = valuesToCheck[i] = parseInt(v);
             } else if (!Number.isInteger(v)) {
               constrVio = new RangeConstraintViolation("The value (" + JSON.stringify(v) +
                   ") of property '" +fld + "' is neither an integer nor a string!");
             }
*/
           }
         });
       } else if (typeof range === "string" && range.includes("|")) {
         valuesToCheck.forEach( function (v, i) {
           var rangeTypes=[];
           rangeTypes = range.split("|");
           if (typeof v === "object") {
             if (!rangeTypes.some( function (rc) {
               return v instanceof cLASS[rc];
             })) {
               constrVio = ReferentialIntegrityConstraintViolation("The object " + JSON.stringify(v) +
                   " is not an instance of any class from " + range + "!");
             } else {
               v = valuesToCheck[i] = v.id;  // convert to IdRef
             }
           } else if (Number.isInteger(v)) {
             if (optParams && optParams.checkRefInt) {
               if (!cLASS[range].instances[String(v)]) {
                 constrVio = new ReferentialIntegrityConstraintViolation("The value " + v +
                     " of property '"+ fld +"' is not an ID of any " + range + " object!");
               }
             }
           } else if (typeof v === "string") {
             if (!isNaN( parseInt(v))) v = valuesToCheck[i] = parseInt(v);
           } else {
             constrVio = new RangeConstraintViolation("The value (" + v + ") of property '" +
                 fld + "' is neither an integer nor a string!");
           }
         });
       } else if (typeof range === "object" && range.dataType !== undefined) {
         // the range is a (collection) datatype declaration record
         valuesToCheck.forEach( function (v) {
           var i = 0;
           if (typeof v !== "object") {
             constrVio = new RangeConstraintViolation("The value of " + fld +
                 " must be an object! " + JSON.stringify(v) + " is not admissible!");
           }
           switch (range.dataType) {
           case "Array":
             if (!Array.isArray(v)) {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an array! " + JSON.stringify(v) + " is not admissible!");
               break;
             }
             if (v.length !== range.size) {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an array of length " + range.size + "! " + JSON.stringify(v) + " is not admissible!");
               break;
             }
             for (i = 0; i < v.length; i++) {
               if (!cLASS.isOfType(v[i], range.itemType)) {
                 constrVio = new RangeConstraintViolation("The items of " + fld +
                     " must be of type " + range.itemType + "! " + JSON.stringify(v) +
                     " is not admissible!");
               }
             }
             break;
           case "ArrayList":
             if (!Array.isArray(v)) {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an array! " + JSON.stringify(v) + " is not admissible!");
               break;
             }
             for (i = 0; i < v.length; i++) {
               if (!cLASS.isOfType(v[i], range.itemType)) {
                 constrVio = new RangeConstraintViolation("The items of " + fld +
                     " must be of type " + range.itemType + "! " + JSON.stringify(v) +
                     " is not admissible!");
               }
             }
             break;
           }
         });
       } else if (range === Object) {
         valuesToCheck.forEach(function (v) {
           if (!(v instanceof Object)) {
             constrVio = new RangeConstraintViolation("The value of " + fld +
                 " must be a JS object! " + JSON.stringify(v) + " is not admissible!");
           }
         });
       }
   }
   // return constraint violation found in range switch
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check constraints that apply to several ranges  ***
    ********************************************************/
   if (range === "String" || range === "NonEmptyString") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v.length < min) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be smaller than "+ min);
       } else if (max !== undefined && v.length > max) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be greater than "+ max);
       } else if (pattern !== undefined && !pattern.test( v)) {
         constrVio = new PatternConstraintViolation( msg || v +
             "does not comply with the pattern defined for "+ fld);
       }
     });
   }
   if (range === "Integer" || range === "NonNegativeInteger" ||
       range === "PositiveInteger") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v < min) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be greater than "+ min);
       } else if (max !== undefined && v > max) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be smaller than "+ max);
       }
     });
   }
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check cardinality constraints  *********************
    ********************************************************/
   if (maxCard > 1) { // (a multi-valued property can be array- or map-valued)
     // check minimum cardinality constraint
     if (minCard > 0 && valuesToCheck.length < minCard) {
       return new CardinalityConstraintViolation("A collection of at least "+
           minCard +" values is required for "+ fld);
     }
     // check maximum cardinality constraint
     if (valuesToCheck.length > maxCard) {
       return new CardinalityConstraintViolation("A collection value for "+
           fld +" must not have more than "+ maxCard +" members!");
     }
   }
   // return deserialized value available in validationResult.checkedValue
   return new NoConstraintViolation( maxCard === 1 ? valuesToCheck[0] : valuesToCheck);
 };
 /**
  * Map range datatype to JS datatype.
  * @method
  * @author Gerd Wagner
  * @return {string}
  */
 cLASS.range2JsDataType = function ( range) {
   var jsDataType="";
   switch (range) {
     case "String":
     case "NonEmptyString":
     case "Email":
     case "URL":
     case "PhoneNumber":
     case "Date":
       jsDataType = "string";
       break;
     case "Integer":
     case "NonNegativeInteger":
     case "PositiveInteger":
     case "Number":
     case "AutoNumber":
     case "Decimal":
     case "Percent":
     case "ClosedUnitInterval":
     case "OpenUnitInterval":
       jsDataType = "number";
       break;
     case "Boolean":
       jsDataType = "boolean";
       break;
     default:
       if (range instanceof eNUMERATION) {
         jsDataType = "number";
       } else if (typeof range === "string" && cLASS[range]) {
         jsDataType = "string";  // for the standard ID (TODO: can also be "number")
       } else if (typeof range === "object") {  // a.g. Array or Object
         jsDataType = "object";
       }
   }
   return jsDataType;
 };
 /**
  * Check if a value is of some type.
  * @method
  * @author Gerd Wagner
  * @return {boolean}
  */
 cLASS.isOfType = function ( v, Type) {
   switch (Type) {
     case "String": return (typeof v === "string");
     case "NonEmptyString": return (typeof v === "string" && v.trim() !== "");
     case "Integer": return Number.isInteger(v);
     case "NonNegativeInteger": return (Number.isInteger(v) && v >= 0);
     case "PositiveInteger": return (Number.isInteger(v) && v > 0);
     case "Decimal": return (typeof v === "number");
     case "ClosedUnitInterval":
       return (typeof v === "number" && v>=0 && v<=1);
     case "OpenUnitInterval":
       return (typeof v === "number" && v>0 && v<1);
     default: return true;
   }
 };

 /********************************************************
  ***  Collection datatypes  *****************************
  ********************************************************/
/*
 * cLASS datatypes, such as collection types, are defined in the form of
 * cOLLECTIONdATATYPE objects that specify the collection type, the
 * item type and the size of the collection.
 */
 cLASS.cOLLECTIONdATATYPE = function (typeName, itemType, size, optParams) {
   this.type = typeName;
   this.itemType = itemType;
   this.size = size;
   this.optParams = optParams;
 };
 cLASS.Array = function (itemType, size, optParams) {
  if (this instanceof cLASS.Array) {
    // called with new, so return an array object
    this.type = "Array";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.array = new Array( size);
  } else {
    // called without new, return an object representing an Array datatype
    return new cLASS.cOLLECTIONdATATYPE("Array",
        {itemType:itemType, size:size, optParams:optParams});
  }
 };
cLASS.ArrayList = function (itemType, constraints) {
   if (constraints) {
     return {dataType:"ArrayList", itemType: itemType, constraints: constraints};
   } else return {dataType:"ArrayList", itemType: itemType};
 };
cLASS.Map = function (itemType, constraints) {
  if (constraints) {
    return {dataType:"Map", itemType: itemType, constraints: constraints};
  } else return {dataType:"Map", itemType: itemType};
};

cLASS.RingBuffer = function (itemType, size, optParams) {
  if (this instanceof cLASS.RingBuffer) {
    // called with new, so return a ring buffer object
    this.type = "RingBuffer";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.first = 0;  // index of first item
    this.last = -1;  // index of last item
    this.buffer = new Array( size);
  } else {
    // called without new, return an object representing a RingBuffer datatype
    return new cLASS.cOLLECTIONdATATYPE("RingBuffer",
        {itemType:itemType, size:size, optParams:optParams});
  }
};
cLASS.RingBuffer.prototype.nmrOfItems = function () {
  if (this.last === -1) return 0;
  else if (this.first <= this.last) return this.last - this.first + 1;
  else return this.last + this.size - this.first + 1;
};
cLASS.RingBuffer.prototype.add = function (item) {
  if (this.nmrOfItems() < this.size) {
   this.last++;  // still filling the buffer
  } else {  // buffer is full, move both pointers
   this.first = (this.first+1) % this.size;
   this.last = (this.last+1) % this.size;
  }
  this.buffer[this.last] = item;
};
cLASS.RingBuffer.prototype.toString = function (n) {
  var i=0, str = "[", item, roundingFactor=1,
      N = this.nmrOfItems(),
      outputLen = n ? Math.min( n, N) : N;
  if (N === 0) return " ";
  for (i=0; i < outputLen; i++) {
    item = this.buffer[(this.first+i) % this.size];
    // serialize enum values as labels
    if (this.itemType instanceof eNUMERATION) item = this.itemType.labels[item-1];
    else if (cLASS.isDecimalType( this.itemType)) {
      //decimalPlaces:
      roundingFactor = Math.pow( 10, this.decimalPlaces);
      item = Math.round( item * roundingFactor) / roundingFactor;
    }
    str += item;
    if (i < outputLen-1) str += ", ";
  }
  return str + "]";
 };
// Simple Moving Average (SMA)
 cLASS.RingBuffer.prototype.getSMA = function (n) {
   var N = this.nmrOfItems(), i=0, val=0, sum=0;
   if (n) N = Math.min( n, N);
   for (i=0; i < N; i++) {
     val = this.buffer[(this.first+i) % this.size];
     sum += val;
   }
   return sum / N;
 };

 /**
 * @fileOverview  A library of DOM element creation methods and 
 * other DOM manipulation methods.
 * 
 * @author Gerd Wagner
 */

var dom = {
  /**
   * Create an element
   *
   * @param {string} elemType
   * @param {object} slots
   * @return {object}
   */
  createElement: function (elemType, slots) {
    var el = document.createElement( elemType);
    if (slots) {
      if (slots.id) el.id = slots.id;
      if (slots.classValues) el.className = slots.classValues;
      if (slots.title) el.title = slots.title;
      if (slots.content) el.innerHTML = slots.content;
      if (slots.borderColor) el.style.borderColor = slots.borderColor;
    }
    return el;
  },
   /**
    * Create a time element from a Date object
    *
    * @param {object} d
    * @return {object}
    */
   createTime: function (d) {
     var tEl = document.createElement("time");
     tEl.textContent = d.toLocaleDateString();
     tEl.setAttribute("datetime", d.toISOString());
     return tEl;
   },
   /**
    * Create an img element
    * 
    * @param {string} id
    * @param {string} classValues
    * @param {object} content
    * @return {object}
    */
    createImg: function (slots) {
      var el = document.createElement("img");
      el.src = slots.src;
      if (slots.id) el.id = slots.id;
      if (slots.classValues) el.className = slots.classValues;
      return el;
    },
  /**
   * Create an option element
   * 
   * @param {object} content
   * @return {object}
   */
  createOption: function (slots) {
    var el = document.createElement("option");
    if (slots.text) el.textContent = slots.text;
    if (slots.value !== undefined) el.value = slots.value;
    return el;
  },
  /**
   * Create a button element
   * 
   * @param {string} id
   * @param {string} classValues
   * @param {object} content
   * @return {object}
   */
  createButton: function (slots) {
    var el = document.createElement("button");
    if (!slots.type) el.type = "button";
    else el.type = slots.type;
    if (slots.id) el.id = slots.id;
    if (slots.name) el.name = slots.name;
    if (slots.classValues) el.className = slots.classValues;
    if (slots.title) el.title = slots.title;
    if (slots.handler) el.addEventListener( 'click', slots.handler);
    if (slots.content) el.innerHTML = slots.content;
    else el.textContent = slots.label || slots.name;
    return el;
  },
  /**
   * Create a labeled output field
   * 
   * @param {{labelText: string, name: string?, value: string?}}
   *        slots  The view definition slots.
   * @return {object}
   */
  createLabeledOutputField: function (slots) {
    var outpEl = document.createElement("output"),
        lblEl = document.createElement("label");
    if (slots.name) outpEl.name = slots.name;
    if (slots.value !== undefined) outpEl.value = slots.value;
    lblEl.textContent = slots.labelText;
    lblEl.appendChild( outpEl);
    return lblEl;
  },
  /**
   * Create a labeled input field
   *
   * @param {{labelText: string, name: string?, type: string?,
   *          value: string?, disabled: string?}}
   *        slots  The view definition slots.
   * @return {object}
   */
  createLabeledInputField: function (slots) {
    var inpEl = document.createElement("input"),
        lblEl = document.createElement("label");
    if (slots.name) inpEl.name = slots.name;
    if (slots.type) inpEl.type = slots.type;
    else inpEl.type = "text";
    if (slots.value !== undefined) inpEl.value = slots.value;
    if (slots.disabled) inpEl.disabled = "disabled";
    lblEl.textContent = slots.labelText;
    lblEl.appendChild( inpEl);
    return lblEl;
  },
  /**
  * Create a radio button or checkbox element
  *
  * @param {{labelText: string, name: string?, type: string?,
  *          value: string?, disabled: string?}}
  *        slots  The view definition slots.
  * @return {object}
  */
  createLabeledChoiceControl: function (t,n,v,lblTxt) {
    var ctrlEl = document.createElement("input"),
        lblEl = document.createElement("label");
    ctrlEl.type = t;
    ctrlEl.name = n;
    ctrlEl.value = v;
    lblEl.appendChild( ctrlEl);
    lblEl.appendChild( !lblTxt.includes("</") ?
        document.createTextNode( lblTxt) :
        dom.createElement("div", {content: lblTxt})
    );
    return lblEl;
  },
  /**
  * Create a labeled select element
  *
  * @param {{labelText: string, name: string?, index: integer?}}
  *     slots  The view definition slots.
  * @return {object}
  */
  createLabeledSelect: function (slots) {
    var selEl = document.createElement("select"),
        lblEl = document.createElement("label");
    if (slots.name) selEl.name = slots.name;
    if (slots.index !== undefined) selEl.index = slots.index;
    lblEl.textContent = slots.labelText;
    lblEl.appendChild( selEl);
    return lblEl;
  },
  /**
  * Create option elements from an array list of option text strings
  * and insert them into a selection list element
  *
  * @param {object} selEl  A select(ion list) element
  * @param {object} strings  An array list of strings
  * @param {object} optPar  A record of optional parameters
  */
  fillSelectWithOptionsFromStringList: function (selEl, strings, optPar) {
    selEl.innerHTML = "";
    if (!selEl.multiple) {
      selEl.add( dom.createOption({text:" --- ", value:""}), null);
    }
    strings.forEach( function (str) {
      var optEl = dom.createOption({text: str, value: str});
      if (selEl.multiple) {
        if (optPar && optPar.selection && optPar.selection.includes( str)) {
          // flag the option element with this value as selected
          optEl.selected = true;
        }
      }
      selEl.add( optEl, null);
    });
  },
   /**
    * Create option elements from an array list of option text strings
    * and insert them into a selection list element
    *
    * @param {object} selEl  A select(ion list) element
    * @param {object} options  An array list of entity records or text items
    * @param {object} optPar  A record of optional parameters
    */
   fillSelectWithOptionsFromArrayList: function (selEl, options, optPar) {
     selEl.innerHTML = "";
     if (!selEl.multiple) {
       selEl.add( dom.createOption({text:" --- ", value:""}), null);
     }
     options.forEach( function (opt,i) {
       var optEl=null, id;
       if (typeof opt === "string") optEl = dom.createOption({text: opt, value: i});
       else {  // entity record
         id = optPar && optPar.primaryKey ? opt[optPar.primaryKey] : opt.id;
         optEl = dom.createOption({
           text: optPar && optPar.displayProp ? opt[optPar.displayProp] : id,
           value: id
         });
       }
       if (selEl.multiple) {
         if (optPar && optPar.selection && optPar.selection.includes(i+1)) {
           // flag the option element with this value as selected
           optEl.selected = true;
         }
       } else {
         if (optPar && optPar.selected && optPar.selected === opt) {
           selEl.value = i;
         }
       }
       selEl.add( optEl, null);
     });
   },
   /**
    * Create option elements from a map of ID values to entity objects/records
    * and insert them into a selection list element
    *
    * @param {object} selEl  A select(ion list) element
    * @param {object} entityMap  A map of entity IDs to entity records
    * @param {object} optPar  A record of optional parameters
    */
   fillSelectWithOptionsFromEntityMap: function (selEl, entityMap, optPar) {
     var i=0, keys=[], obj={}, optEl=null, txt="";
     selEl.innerHTML = "";
     if (!optPar || !optPar.noVoidOption) {
       selEl.add( dom.createOption({value:"", text:"---"}), null);
     }
     keys = Object.keys( entityMap);
     for (i=0; i < keys.length; i++) {
       obj = entityMap[keys[i]];
       if (optPar && optPar.displayProp) txt = obj[optPar.displayProp];
       else txt = obj.id;
       optEl = dom.createOption({ value: obj.id, text: txt });
       // if invoked with a selection argument, flag the selected options
       if (selEl.multiple && optPar && optPar.selection &&
           optPar.selection[keys[i]]) {
         // flag the option element with this value as selected
         optEl.selected = true;
       }
       selEl.add( optEl, null);
     }
   }
};
 /**
  * Insert a new node/element after another one
  *
  * @return {object}  tbody element object
  */
dom.insertAfter = function (newNode, referenceNode) {
   referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling);
};
 /* Polyfill for ChildNode.remove()
    from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
 */
 (function (arr) {
   arr.forEach(function (item) {
     if (item.hasOwnProperty('remove')) {
       return;
     }
     Object.defineProperty(item, 'remove', {
       configurable: true,
       enumerable: true,
       writable: true,
       value: function remove() {
         if (this.parentNode !== null)
           this.parentNode.removeChild(this);
       }
     });
   });
 })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/**
 * @fileOverview  This file contains the definition of the class ObjectView.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
/**
 * Class for creating (and rendering) view models based on "model objects". A view model
 * is a (logical) UI model consisting of (input and output) fields, which are typically
 * based on model properties, and user action types, defined as named JS methods that can
 * be used as event handlers for UI events.
 *
 * A view model may have a field order definition and field group definitions
 * in the constructor parameter "fields", which is processed into a "fields" map
 * of field definition records and a field order definition list "fieldOrder".
 * The constructor parameter "fields" may contain additional fields not based
 * on model object properties. When a view model is created without a "fields"
 * argument, the view fields are generated from the labeled properties of the
 * underlying model object.
 *
 * In addition to the field definition map "fields", there is a field value map
 * "fieldValues", which has a top-down databinding to corresponding model object
 * properties (via implicit setters). The underlying model object is associated
 * with a view field via the record field "moName" of the corresponding "fields"
 * definition record and the view's map "modelObjects".
 *
 * A view (or 'view model') is a logical representation of the interaction
 * elements of a UI, which typically correspond to properties and methods
 * of a model object. A view consists of (input/output) fields and of user
 * action types, such as "run", "saveSimulationState", etc.
 *
 * A view field has an I/O mode of either "I/O" (input/output) or "O". When a view
 * is rendered, its fields are rendered as HTML UI elements in the following way:
 *
 * 1) ordinary fields as form fields (HTML input/output elements),
 * 2) Boolean fields as HTML checkbox-typed input elements,
 * 3) enumeration and reference fields as choice widgets (radio button groups or
 *    checkbox groups, HTML select elements or other selection list widgets)
 *
 * or as any HTML element that allows for text content, or as special UI widgets
 * (such as calendar date selection widgets or color pickers). User action
 * types are exposed in the form of HTML buttons or other actionable (e.g.
 * clickable) HTML elements.
 *
 * A view's UI with its view-field-based input/output elements and widgets
 * is rendered by invoking the ender method on the view. UI fields/widgets are
 * subsequently synchronized with view field values and model object property values
 * by means of a top-down data binding mechanism: value changes of UI fields are
 * propagated to corresponding view fields (typically in a change event listener)
 * and then to model object properties in the setter of the fields.<fld>.value property.
 * TODO: implement this two-step data binding mechanism
 *
 * A user action type is a named JS function where the name indicates the
 * intended meaning of the user action (such as "saveSimulationState"). It
 * binds a UI event type, such as clicking on a button, to a view method as
 * its "event handler".

 * TODO: bottom-up data binding from model object properties to view fields:
 * When a view field is bound to a model object property, its value is updated
 * whenever the corresponding property value of the model object is updated.
 *
 * TODO: Support multiple model objects when using field definitions instead of names
 *
 * A view can be rendered in two different ways:
 * - (normally) By creating all required DOM elements (form elements with controls), and
 *    appending them to the child elements of the body element, if the document
 *    does not contain suitable form elements.
 * - By accessing existing form elements and controls, just setting/updating their
 *    contents (and dynamic parts)
 *
 * Notice that slots.fields is an array of property names or view field definitions
 * while this.fields is a map of view field definitions.
 *
 * Example invocation:

 // create a view based on a single model object
 var view = new oBJECTvIEW({
      modelObject: sim.scenario,
	  // create a horizontal field group
      fields: [["simulationEndTime", "stepDuration", "visualize", "createLog"]],
      userActions: {
        "run": function () {...}
	  }
  })
 // render the view and store its databinding
 view.dataBinding = view.render();

 // create a view based on multiple model objects
 var view = new oBJECTvIEW({
     modelObjects: {"scenario":sim.scenario, "model":sim.model},
	   // create a horizontal field group
     fields: [["scenario.simulationEndTime", "model.timeUnit", "scenario.stepDuration", ...]],
     userActions: {
        "run": function () {...}
	   }
 })
 +
 * @constructor
 * @this {oBJECTvIEW}
 * @param {{modelObject: Object, fields: Array, methods: Map?}}
 *        slots  The view definition slots
 */
/* globals oBJECTvIEW */
var oBJECTvIEW = function (slots) {
  var properties={},
      multipleModelObjects = slots.modelObjects && slots.modelObjects instanceof Object;
  // check oBJECTvIEW definition constraints
  if (!(slots.modelObject && (slots.modelObject instanceof Object)) &&
      !multipleModelObjects) {
    throw ViewConstraintViolation("Creating an object view requires a (set of) model object(s)!");
  }
  if (multipleModelObjects) {
    if (!slots.fields) {
      throw ViewConstraintViolation(
          "A view def with multiple model objects requires field definitions!");
    }
    if (!slots.fields.every( function (fGrp) {
        // turn single field into singleton field group
        if (!Array.isArray(fGrp)) fGrp = [fGrp];
        return fGrp.every( function (f) {
            return typeof f === "string" && f.indexOf(".") > -1;});
        })) {
      throw ViewConstraintViolation("Field definitions based on multiple model objects " +
          "need to be two-part strings with a dot as separator!");
    }
  }
  // check if i18n translation function is defined
  if (typeof i18n !== "object" || !i18n.t) {
    // define dummy function
    i18n = {t: function (txt) {return txt;}}
  }
  if (multipleModelObjects) {
    this.modelObjects = slots.modelObjects;
  } else {
    this.modelObject = slots.modelObject;
    // store the modelObject also in the modelObjects map
    this.modelObjects = {};
    this.modelObjects[slots.modelObject.objectName] = slots.modelObject;
  }
  this.heading = slots.heading;
  // Process the "slots.fields" array (or the properties map) into a "fields" map
  // of view field declarations and a field order definition array "fieldOrder"
  this.fields = {};
  this.fieldValues = {};
  this.fieldOrder = [];
  if (slots.suppressNoValueFields === undefined) this.suppressNoValueFields = true;  // default
  else this.suppressNoValueFields = slots.suppressNoValueFields;
  if (slots.fields) {
    slots.fields.forEach( function (el) {
      var j=0, fld, fldGrp=[], fldOrdEl=[], moName="", mo=null, pos=0;
      // turn single field into singleton field group
      if (!Array.isArray( el)) fldGrp = [el];
      else fldGrp = el;        // field group
      for (j=0; j < fldGrp.length; j++) {
        fld = fldGrp[j];
        if (typeof fld === "string") {  // name of property-induced field
          if (multipleModelObjects) {  // two-part field name
            pos = fld.indexOf(".");
            moName = fld.substring( 0, pos);
            mo = this.modelObjects[moName];
            fld = fld.substring( pos+1);  // proper field name
          } else {
            mo = this.modelObject;
          }
          properties = mo.properties;
          if (!properties[fld]) {
            throw new ViewConstraintViolation(
                "View field "+ fld +" does not correspond to a model property!");
          }
          if (this.suppressNoValueFields && mo[fld] === undefined) continue;
          // else
          this.fields[fld] = util.cloneRecord( properties[fld]);
          // in case range is a JS constructor function or object
          if (typeof properties[fld].range !== "string") {
            if (cLASS[properties[fld].range.Name]) {
              this.fields[fld].range = properties[fld].range.Name;
            } else {
              this.fields[fld].range = properties[fld].range;
            }
          }
          this.fields[fld].moName = mo.objectName;
          this.fields[fld].inputOutputMode = "I/O";
          this.fields[fld].label = i18n.t( this.fields[fld].label);
          if (this.fields[fld].hint) {
            this.fields[fld].hint = i18n.t( this.fields[fld].hint);
          }
          fldOrdEl.push( fld);
        } else if (typeof fld === "object") {  // field definition
          properties = this.modelObject.properties;
          this.fields[fld.name] = {
            moName: this.modelObject.objectName,
            label: i18n.t( fld.label || properties[fld.name].label),
            hint: i18n.t( fld.hint || properties[fld.name].hint),
            range: fld.range || properties[fld.name].range,
            inputOutputMode: fld.inputOutputMode
          };
          fldOrdEl.push( fld.name);
          if (fldGrp.derivationFunction) {
            this.fields[fld.name].derivationFunction = fld.derivationFunction;
          }
          if (fld.optional) this.fields[fld.name].optional = true;
        } else {  // neither property field nor defined field
          throw new ViewConstraintViolation(
              "Neither property field nor defined field: "+ fld);
        }
      }
      if (fldGrp.length === 1) this.fieldOrder.push( fldOrdEl[0]);
      else this.fieldOrder.push( fldOrdEl);
    }, this);
  } else {  // no view field definitions provided in constructor slots
    properties = this.modelObject.properties;
    // create view fields from labeled model properties
    Object.keys( properties).forEach( function (prop) {
      if (properties[prop].label &&
          (!this.suppressNoValueFields ||
           this.modelObject[prop] !== undefined ||
           properties[prop].dependsOn  !== undefined)) {
        this.fieldOrder.push( prop);
        this.fields[prop] = util.cloneRecord( properties[prop]);
        this.fields[prop].inputOutputMode = "I/O";
        this.fields[prop].label = i18n.t( this.fields[prop].label);
        if (this.fields[prop].hint) {
          this.fields[prop].hint = i18n.t( this.fields[prop].hint);
        }
      }
    }, this);
  }
  this.maxNmrOfEnumLitForChoiceButtonRendering =
      slots.maxNmrOfEnumLitForChoiceButtonRendering || 7;
  this.methods = slots.methods || {};
  this.userActions = slots.userActions || {};
  //this.fieldGroupSeparator = slots.fieldGroupSeparator || ", ";
  /**
   * Generic setter for view fields
   * this = view object
   * @method
   * @author Gerd Wagner
   * TODO: what about derived view fields?
   */
  this.methods.set = function (f,v) {
    var el=null, elems=null, i=0,
        mo = this.modelObjects[this.fields[f].moName],
        properties = mo.properties,
        fldGrpSep = this.fieldGroupSeparator,
        range = properties[f].range,
        uiEl = this.dataBinding[this.viewMode][f];
    if (v === undefined) {
      if (properties[f] && properties[f].maxCard) v = [];
      else v = "";
      this[f] = v;
      return;
    }
    // assign view field
    if (Array.isArray(v)) this[f] = v.clone();
    else this[f] = v;
    // bottom-up data-binding: assign UI/form field
    if (uiEl.tagName === "INPUT" || uiEl.tagName === "OUTPUT") {
      if (!Array.isArray(v)) {
        uiEl.value = cLASS.getValueAsString( mo, f, v);
      } else {
        v.forEach( function (el,i) {
          var ds = cLASS.getValueAsString( mo, f, el);
          if (i===0) uiEl.value = ds;
          else uiEl.value += fldGrpSep + ds;
        });
      }
    } else if (uiEl.tagName === "FIELDSET" &&
        uiEl.classList.contains("radio-button-group")) {
      elems = uiEl.querySelectorAll("input[type='radio']");
      for (i=0; i < elems.length; i++) {
        el = elems[i];
        if (el.value === String(v)) el.checked = true;
      }
    } else if (uiEl.tagName === "FIELDSET" &&
        uiEl.classList.contains("checkbox-group")) {
      elems = uiEl.querySelectorAll("input[type='checkbox']");
      for (i=0; i < elems.length; i++) {
        el = elems[i];
        if (v.indexOf( parseInt( el.value)) > -1) el.checked = true;
        else el.checked = false;
      }
    } else if (uiEl.tagName === "SELECT" && uiEl.multiple !== "multiple") {
      uiEl.selectedIndex = v;
    } else {
      uiEl.setAttribute("data-value", v);
    }
  };
};
/**
 * Render the HTML form DOM of a model object's view model
 * this = view model object
 * @author Gerd Wagner
 * @method
 * @return {object} dataBinding
 */
oBJECTvIEW.maxCardButtonGroup = 7;
oBJECTvIEW.prototype.render = function (objViewParentEl) {
  var fields = this.fields,  // fields map
      fieldOrder = this.fieldOrder,  // field order array
      mObject = this.modelObject,  // model object
      mObjects = this.modelObjects,  // model objects
      // a map for storing the bindings of UI elems to view fields
      dataBinding = {},
      userActions = this.userActions,
      validateOnInput = true,
      uiElemType = "form", parentEl=null,
      maxELforButton = 7,
      uiContainerEl=null, footerEl=null, i=0;
  /* ==================================================================== */
  /**
   * Create a labeled text field. When validation is not performed on input
   * it is performed on blur in the case of "Create" for catching mandatory
   * value constraint violations, and on change in the case of "Update".
   * @method
   */
  function createLabeledTextField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        fDef = fields[fld];   // field definition
    if (fDef.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDef, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDef, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value;
        if (!validateOnInput) {
          fldEl.setCustomValidity( cLASS.check( fld, fDef, v).message);
        }
        // UI element to model property data binding (top-down)
        if (fldEl.validity.valid) mObjects[fDef.moName][fld] = v;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    fldEl.value = typeof mObject[fld] === "object" ? JSON.stringify( mObject[fld]) : mObject[fld] || "";
    fldEl.size = 7;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a labeled Yes/No field.
   * @method
   */
  function createLabeledYesNoField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        fDef = fields[fld];   // field declaration
    if (fields[fld].inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        mObjects[fDef.moName][fld] = fldEl.checked;  // UI element to model property data binding
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    fldEl.name = fld;
    fldEl.checked = mObject[fld];
    lblEl.textContent = fields[fld].label;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a choice control group in a container element.
   * A choice control is either an HTML radio button or an HTML checkbox.
   * @method
   */
  function createChoiceButtonGroup( fld) {
    var j=0, btnType="", containerEl=null, el=null, choiceItems=[],
        range = fields[fld].range;
    el = document.createElement("legend");
    el.textContent = fields[fld].label;
    containerEl = document.createElement("fieldset");
    containerEl.appendChild( el);
    containerEl.setAttribute("data-bind", fld);
    // store data binding of UI element
    dataBinding[fld] = containerEl;
    // if maxCard is defined, use checkboxes
    if (fields[fld].maxCard) {
      btnType = "checkbox";
      containerEl.className = "checkbox-group";
    } else {
      btnType = "radio";
      containerEl.className = "radio-button-group";
    }
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    for (j=0; j < choiceItems.length; j++) {
      // button values = 1..n
      el = dom.createLabeledChoiceControl( btnType, fld, j+1, choiceItems[j]);
      containerEl.appendChild( el);
      el.firstElementChild.addEventListener("click", function (e) {
        // UI element to model property data binding (top-down)
        var btnEl = e.target, i=0,
            mo = mObjects[fields[fld].moName],
            val = parseInt( btnEl.value);
        if (btnType === "radio") {
          if (val !== mo[fld]) {
            mo[fld] = val;
          } else if (fields[fld].optional) {
            // turn off radio button
            btnEl.checked = false;
            mo[fld] = undefined;
          }
        } else {  // checkbox
          i = mo[fld].indexOf( val);
          if (i > -1) {  // delete from value list
            mo[fld].splice(i, 1);
          } else {  // add to value list
            mo[fld].push( val);
          }
        }
      });
    }
    return containerEl;
  }
  /**
   * Create a selection list
   * @method
   */
  function createSelectionList( fld) {
    var choiceItems = [],
        selEl = document.createElement("select"),
        lblEl = document.createElement("label"),
        range  = fields[fld].range;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( selEl);
    selEl.setAttribute("data-bind", fld);
    // store data binding assignment of UI element to view field
    dataBinding[fld] = selEl;
    // if maxCard is defined, make a multi-selection list
    if (fields[fld].maxCard) selEl.multiple = "multiple";
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    dom.fillSelectWithOptionsFromArrayList( selEl, choiceItems);
    selEl.addEventListener("change", function () {
      var mo = mObjects[fields[fld].moName];
      // UI element to model property data binding (top-down)
      if (selEl.value !== "") {
        if (oBJECTvIEW.isIntegerType( range)) {
          mo[fld] = parseInt( selEl.value);
          // increment by 1 for enumerations
          if (range instanceof eNUMERATION) mo[fld]++;
        } else if (fields[fld].range === "Date") {
          mo[fld] = new Date( selEl.value);
        } else {
          mo[fld] = selEl.value;
        }
      }
    });
    return lblEl;
  }
  /**
   * Create UI elements for view fields
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForVmFields() {
    //============= Inner Function ==============================
    function createUiElemForVmField (containerEl, fld) {
      var fDef = fields[fld],
          range = fDef.range,
          isEnum = range instanceof eNUMERATION,
          isArr = Array.isArray( range);
      // convert cLASS Name to cLASS object
      if (typeof range === "string" && cLASS[range]) range = cLASS[range];
      // retrieve model object for views based on multiple model objects
      if (mObjects) mObject = mObjects[fDef.moName];
      if (isEnum || isArr) {  // (ad-hoc) enumeration
        if (isEnum && range.MAX <= maxELforButton ||
            isArr && range.length <= maxELforButton) {
          containerEl = createChoiceButtonGroup( fld);
          if (!containerEl.className) containerEl.className = "choice";
        } else {
          if (!containerEl.className) containerEl.className = "select";
          containerEl.appendChild( createSelectionList( fld));
        }
      } else if (range && range.constructor === cLASS && range.isComplexDatatype) {
        if (fDef.maxCard && fDef.maxCard > 1) {
          if (!containerEl.className) containerEl.className = "RecordTableWidget";
          containerEl.appendChild( oBJECTvIEW.createRecordTableWidget(
              {type: range, records: mObject[fld], tableTitle: fDef.label}));
        }
      } else if (range === "Boolean") {
        if (!containerEl.className) containerEl.className = "yes-no-field";
        containerEl.appendChild( createLabeledYesNoField( fld));
      } else {  // string/numeric property field
        if (!containerEl.className) containerEl.className = "I-O-field";
        containerEl.appendChild( createLabeledTextField( fld));
      }
      if (fDef.dependsOn) {
        if (mObject[fDef.dependsOn]) containerEl.style.display = "block";
        else containerEl.style.display = "none";
        dataBinding[fDef.dependsOn].addEventListener("change", function () {
          // toggle CSS style.display of containerEl
          containerEl.style.display = (containerEl.style.display === "none") ? "block" : "none";
        });
      }
    }
    //=========================================================
    fieldOrder.forEach( function (fldOrdEl) {
      var containerEl = document.createElement("div");
      if (!Array.isArray( fldOrdEl)) {  // single field
        createUiElemForVmField( containerEl, fldOrdEl);
      } else {  // field group
        containerEl.className = "field-group";
        fldOrdEl.forEach( function (fld) {
          createUiElemForVmField( containerEl, fld);
        });
      }
      uiContainerEl.appendChild( containerEl);
    });
  }
  /**
   * Create UI elements (like buttons) for all user actions of the view
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForUserActions( parentEl) {
    var containerEl = dom.createElement("div", {
      classValues:"action-group"
    });
    Object.keys( userActions).forEach( function (usrAct) {
      var renderActBtn = typeof userActions[usrAct].showCondition !== "function" ||
          userActions[usrAct].showCondition();
      if (renderActBtn) {
        containerEl.appendChild( dom.createButton({
          name: usrAct,
          label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
          title: userActions[usrAct].hint,
          handler: userActions[usrAct]
        }));
        parentEl.appendChild( containerEl);
      }
    });
  }
  /* ==================================================================== */
  /* MAIN CODE of render                                                  */
  /* ==================================================================== */
  // check if objView is descendant of a "form" element
  parentEl = objViewParentEl;
  while (parentEl && parentEl.tagName !== "BODY") {
    if (parentEl.tagName === "FORM") {
      uiElemType = "div";
      break;
    } else {
      parentEl = parentEl.parentElement;
    }
  }
  uiContainerEl = dom.createElement(
    uiElemType,
    {id: this.modelObject ?
         this.modelObject.objectName : Object.keys( this.modelObjects)[0],
     classValues:"oBJECTvIEW"}
   );
  if (this.heading) {
    uiContainerEl.appendChild( dom.createElement("h2", {content:this.heading}));
  }
  // store the object view's DOM element
  this.domElem = uiContainerEl;
  if (!objViewParentEl) objViewParentEl = document.querySelector("#uiContainerEl");
  if (!objViewParentEl) {
    objViewParentEl = document.body;
    footerEl = document.querySelector("html>body>footer");
    if (footerEl) {
      document.body.insertBefore( uiContainerEl, footerEl);
    } else {
      document.body.appendChild( uiContainerEl);
    }
  } else objViewParentEl.appendChild( uiContainerEl);
  if (uiContainerEl.tagName === "FORM") {  // reset custom validity
    for (i=0; i < uiContainerEl.elements.length; i++) {
      uiContainerEl.elements[i].setCustomValidity("");
    }
    uiContainerEl.reset();
  }
  // create DOM elements for all UI/view fields
  createUiElemsForVmFields();
  // create DOM elements (like buttons) for all user actions of the UI/view model
  createUiElemsForUserActions( uiContainerEl);
  return dataBinding;  // a map of field names to corresponding DOM elements 
};
/**
 * Set up a tabular UI for defining/editing entity records of a given
 * entity type or data records of a given complex datatype
 * @author Gerd Wagner
 * @method
 * @param slots.type  a cLASS
 * @param slots.records?  a collection (array list or map) of records
 * @return {object}  the created DOM element object
 */
oBJECTvIEW.createRecordTableWidget = function (slots) {
  var tableEl = dom.createElement("table", {classValues: "RecTbl"});
  var headerRowEl=null, cell=null, rowIdx=0, obj=null, rowEl=null, N=0,
      rowObjects=[], colProperties=[],  colHeadings=[], colTypes=[],
      maxNmrOfRows = slots.maxNmrOfRows || 13,  // default is 13
      tBody = document.createElement("tBody"),
      Class=null, propDefs=null, tableTitle = "",
      keys=[], records=null, nmrOfRecords=0, p="";
  if (!slots.type) {
    throw Error("No type provided when calling 'createRecordTableWidget'!")
  }
  // convert cLASS name to cLASS object reference
  if (typeof slots.type === "string" && cLASS[slots.type]) {
    Class = cLASS[slots.type];
  } else if (slots.type.constructor === cLASS) {
    Class = slots.type;
  } else {
    throw Error("No cLASS type provided when calling 'createRecordTableWidget'!")
  }
  propDefs = Class.properties;
  tableEl.appendChild( tBody);
  tableTitle = i18n.t( slots.tableTitle || Class.label || Class.Name);
  if (!Class.isComplexDatatype) {
    if (slots.editableProperties) colProperties = slots.editableProperties;
    records = slots.records || Class.instances;
    keys = Object.keys( records);
    nmrOfRecords = keys.length;
  } else if (Array.isArray( slots.records)) {
    records = slots.records || [];
    nmrOfRecords = records.length;
  } else if (typeof slots.records === "object") { // a map
    records = slots.records || {};
    keys = Object.keys( records);
    nmrOfRecords = keys.length;
  }
  if (propDefs.id) {
    if (propDefs.name) colHeadings[0] = "ID/Name";
    else colHeadings[0] = "ID";
  } else if (propDefs.name) {
    colHeadings[0] = "Name";
  }
  // loop over all property definitions (including inherited ones)
  for (p in propDefs) {
    if (p !== "id" && p !== "name" && propDefs[p].label) {
      colProperties.push( p);
      colHeadings.push( i18n.t( propDefs[p].label));
      colTypes.push( propDefs[p].range);
    }
  }
  // store properties displayed in table  TODO: currently not used...
  tableEl.setAttribute("data-properties", colProperties.join(" "));
  // create table heading
  tableEl.appendChild( document.createElement("thead"));
  // create row for table name
  headerRowEl = tableEl.tHead.insertRow();
  cell = headerRowEl.insertCell();
  cell.textContent = tableTitle;
  cell.colSpan = colHeadings.length;
  // create row for column names
  headerRowEl = tableEl.tHead.insertRow();
  // create table column headings
  colHeadings.forEach( function (cH) {
    var c = headerRowEl.insertCell();
    c.textContent = cH;
  });
  // create table rows
  N = Math.min( nmrOfRecords, maxNmrOfRows);
  for (rowIdx=0; rowIdx < N; rowIdx++) {
    obj = keys.length>0 ? records[keys[rowIdx]] : records[rowIdx];
    rowEl = tBody.insertRow();
    // create object row
    rowObjects[rowIdx] = obj;
    if (obj.id) {
      rowEl.insertCell().textContent = obj.name ? obj.id +" / "+ obj.name : obj.id;
    } else if (obj.name) {
      rowEl.insertCell().textContent = obj.name;
    }
    // create property value cells
    colProperties.forEach( function (p) {
      var c=null;
      c = rowEl.insertCell();
      //c.textContent = cLASS.convertPropValToStr( Class, p, obj[p]);
      c.textContent = obj.getValueAsString( p);
      // save value for being able to restore it
      c.setAttribute("data-oldVal", c.textContent);
      if (!propDefs || !propDefs[p].stringified) {
        c.setAttribute("contenteditable","true");
        c.title = "Click to edit!";
      }
      c.addEventListener("blur", function (e) {
        var tdEl = e.target,
            val = tdEl.textContent,
            colNo = tdEl.cellIndex - 1, // skip first column (name/ID)
            rowNo = tdEl.parentElement.rowIndex - 2,  // rowIndex includes 2 tHead rows
            prop = colProperties[colNo],
            constrVio = cLASS.check( prop, propDefs[prop], val);
        if (constrVio.message) {
          alert( constrVio.message);
          tdEl.textContent = tdEl.getAttribute("data-oldVal");
        } else {
          val = constrVio.checkedValue;
          // update corresponding object slot
          rowObjects[rowNo][prop] = val;
          tdEl.setAttribute("data-oldVal", tdEl.textContent);
        }
      });
    });
  }
  // create an overflow indication row
  if (nmrOfRecords > maxNmrOfRows) {
    rowEl = tBody.insertRow();
    if (obj.id) rowEl.insertCell().textContent = "...";
    Object.keys( propDefs).forEach( function (p) {
      var c=null;
      if (colProperties.includes( p)) {
        c = rowEl.insertCell();
        c.textContent = "...";
      }
    });
  }
  // create an AddRow button
  //oBJECTvIEW.createUiElemsForUserActions( popTableEl, this.userActions);
  return tableEl;
};
/**
 * Create UI elements (like buttons) for all user actions of the view
 * depends on: fieldOrder
 * @method
 */
oBJECTvIEW.createUiElemsForUserActions = function (userActions) {
  var containerEl = dom.createElement("div", {
    classValues:"action-group"
  });
  Object.keys( userActions).forEach( function (usrAct) {
    containerEl.appendChild( dom.createButton({
      name: usrAct,
      label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
      handler: userActions[usrAct]
    }));
  });
  return containerEl;
};
/**
 * Render an HTML form based on a view model (an abstract UI definition)
 *
 * The viewModel.fieldValues map holds the name-value slots of fields that
 * have been changed in the UI.
 *
 * @author Gerd Wagner
 * @method
 */
oBJECTvIEW.createUiFromViewModel = function (viewModel) {
  var outFields = viewModel.outputFields || {},  // map of field definitions
      inFields = viewModel.inputFields || {},  // map of field definitions
      fields = {},
      // list of field names or field name lists
      fieldOrder = viewModel.fieldOrder ||
          Object.keys( outFields).concat( Object.keys( inFields)),
      fieldValues = viewModel.fieldValues,
      userActions = viewModel.userActions || {},
      // a map for storing the bindings of view fields to UI elems/widgets
      dataBinding = {},
      validateOnInput = viewModel.validateOnInput || true,
      fldGrpSep = viewModel.fieldGroupSeparator,
      uiContainerEl=null;
  /* ==================================================================== */
  /**
   * Create a labeled text field. When validation is not performed on input
   * it is performed on blur in the case of "Create" for catching mandatory
   * value constraint violations, and on change in the case of "Update".
   * @method
   */
  function createLabeledTextField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        fldDef = fields[fld],   // field declaration
        range = fldDef.range;
    if (fldDef.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      if (cLASS.isIntegerType( range) || cLASS.isDecimalType( range)) {
        fldEl.type = "number";
        if (cLASS.isDecimalType( range)) {
          if (!isNaN( parseInt( fldDef.decimalPlaces))) {
            fldEl.step = "0." + "000000000".substring( 0, fldDef.decimalPlaces-1) + "1";
          } else fldEl.step = "0.01";  // default
        }
      } else fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fldDef, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fldDef, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value, validationResult = {};
        if (typeof fldDef.str2val === "function") v = fldDef.str2val(v);
        validationResult = cLASS.check( fld, fldDef, v);
        if (!validateOnInput) fldEl.setCustomValidity( validationResult.message);
        // UI element to view model property data binding (top-down)
        if (fldEl.validity.valid) fieldValues[fld] = validationResult.checkedValue;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    if (typeof fldDef.value === "function") {
      fldEl.value = fldDef.value();
    } else if (typeof fldDef.val2str === "function") {
      fldEl.value = fldDef.val2str( fldDef.value);
    } else if (typeof fldDef.value === "object") {
      fldEl.value = JSON.stringify( fldDef.value);
    } else {
      fldEl.value = fldDef.value || fldDef.initialValue || "";
    }
    fldEl.size = fldDef.inputFieldSize || 7;
    if (fldDef.hint) lblEl.title = fldDef.hint;
    lblEl.textContent = fldDef.label;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a labeled Yes/No field.
   * @method
   */
  function createLabeledYesNoField( fld) {
    var fldEl = null, lblEl = document.createElement("label");
    if (fields[fld].inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        fieldValues[fld] = fldEl.checked;  // UI element to view model property data binding
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    fldEl.name = fld;
    fldEl.checked = fieldValues[fld];
    lblEl.textContent = fields[fld].label;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a choice control group in a container element.
   * A choice control is either an HTML radio button or an HTML checkbox.
   * @method
   */
  function createChoiceButtonGroup( fld) {
    var j=0, btnType="", containerEl=null, el=null, choiceItems=[],
        range = fields[fld].range;
    el = document.createElement("legend");
    el.textContent = fields[fld].label;
    containerEl = document.createElement("fieldset");
    containerEl.appendChild( el);
    containerEl.setAttribute("data-bind", fld);
    // store data binding of UI element
    dataBinding[fld] = containerEl;
    // if maxCard is defined, use checkboxes
    if (fields[fld].maxCard) {
      btnType = "checkbox";
      containerEl.className = "checkbox-group";
    } else {
      btnType = "radio";
      containerEl.className = "radio-button-group";
    }
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    for (j=0; j < choiceItems.length; j++) {
      // button values = 1..n
      el = dom.createLabeledChoiceControl( btnType, fld, j+1, choiceItems[j]);
      containerEl.appendChild( el);
      el.firstElementChild.addEventListener("click", function (e) {
        // data binding of UI element to model property (top-down)
        var btnEl = e.target, i=0,
            val = parseInt( btnEl.value);
        if (btnType === "radio") {
          if (val !== fieldValues[fld]) {
            fieldValues[fld] = val;
          } else if (fields[fld].optional) {
            // turn off radio button
            btnEl.checked = false;
            fieldValues[fld] = undefined;
          }
        } else {  // checkbox
          i = fieldValues[fld].indexOf( val);
          if (i > -1) {  // delete from value list
            fieldValues[fld].splice(i, 1);
          } else {  // add to value list
            fieldValues[fld].push( val);
          }
        }
      });
    }
    return containerEl;
  }
  /**
   * Create a selection list
   * @method
   */
  function createSelectionList( fld) {
    var choiceItems = [],
        selEl = document.createElement("select"),
        lblEl = document.createElement("label"),
        range  = fields[fld].range;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( selEl);
    selEl.setAttribute("data-bind", fld);
    // store data binding assignment of UI element to view field
    dataBinding[fld] = selEl;
    // if maxCard is defined, make a multi-selection list
    if (fields[fld].maxCard) selEl.multiple = "multiple";
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    dom.fillSelectWithOptionsFromArrayList( selEl, choiceItems);
    selEl.addEventListener("change", function () {
      // UI element to model property data binding (top-down)
      if (selEl.value !== "") {
        if (oBJECTvIEW.isIntegerType( range)) {
          fieldValues[fld] = parseInt( selEl.value);
          // increment by 1 for enumerations
          if (range instanceof eNUMERATION) fieldValues[fld]++;
        } else if (fields[fld].range === "Date") {
          fieldValues[fld] = new Date( selEl.value);
        } else {
          fieldValues[fld] = selEl.value;
        }
      }
    });
    return lblEl;
  }
  /**
   * Create UI elements for view fields
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForVmFields() {
    //============= Inner Function ==============================
    function createUiElemForVmField (containerEl, fld) {
      var range = fields[fld].range,
          isEnum = range instanceof eNUMERATION,
          isArr = Array.isArray( range);
      if (isEnum || isArr) {  // (ad-hoc) enumeration
        if (isEnum && range.MAX <= oBJECTvIEW.maxCardButtonGroup ||
            isArr && range.length <= oBJECTvIEW.maxCardButtonGroup) {
          containerEl.appendChild( createChoiceButtonGroup( fld));
          if (!containerEl.className) containerEl.className = "choice";
        } else {
          if (!containerEl.className) containerEl.className = "select";
          containerEl.appendChild( createSelectionList( fld));
        }
      } else if (range === "Boolean") {
        if (!containerEl.className) containerEl.className = "yes-no-field";
        containerEl.appendChild( createLabeledYesNoField( fld));
      } else {  // string/numeric property field
        if (!containerEl.className) containerEl.className = "I-O-field";
        containerEl.appendChild( createLabeledTextField( fld));
      }
      if (fields[fld].dependsOn) {
        if (fieldValues[fields[fld].dependsOn]) containerEl.style.display = "block";
        else containerEl.style.display = "none";
        dataBinding[fields[fld].dependsOn].addEventListener("change", function () {
          // toggle CSS style.display of containerEl
          containerEl.style.display = (containerEl.style.display === "none") ? "block" : "none";
        });
      }
    }
    //=========================================================
    fieldOrder.forEach( function (fldOrdEl) {
      var containerEl = document.createElement("div");
      if (!Array.isArray( fldOrdEl)) {  // single field
        createUiElemForVmField( containerEl, fldOrdEl);
      } else {  // field group
        containerEl.className = "field-group";
        fldOrdEl.forEach( function (fld) {
          createUiElemForVmField( containerEl, fld);
        });
      }
      uiContainerEl.appendChild( containerEl);
    });
  }
  /**
   * Create UI elements (like buttons) for all user actions of the view
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForUserActions( parentEl) {
    var containerEl = dom.createElement("div", {
      classValues:"action-group"
    });
    Object.keys( userActions).forEach( function (usrAct) {
      containerEl.appendChild( dom.createButton({
        name: usrAct,
        label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
        handler: userActions[usrAct]
      }));
      parentEl.appendChild( containerEl);
    });
  }
  /* ====================================================================
     M A I N
     ==================================================================== */
  if (!fieldValues) fieldValues = viewModel.fieldValues = {};
  Object.keys( outFields).forEach( function (fld) {
    outFields[fld].inputOutputMode = "O";
  });
  fields = util.mergeObjects( outFields, inFields);
  uiContainerEl = dom.createElement("form");
  if (viewModel.formID) uiContainerEl.id = viewModel.formID;
  if (viewModel.title) {
    uiContainerEl.appendChild( dom.createElement("h1", {content:viewModel.title}));
  }
  // store the view model's DOM element
  viewModel.domElem = uiContainerEl;
  /*
  // reset custom validity
  for (i=0; i < uiContainerEl.elements.length; i++) {
    uiContainerEl.elements[i].setCustomValidity("");
  }
  uiContainerEl.reset();
  */
  // create UI elements for all view fields
  createUiElemsForVmFields();
  // create actionable UI elements (like buttons) for all user actions of the view model
  createUiElemsForUserActions( uiContainerEl);
  // store the view model's data binding (map field names to corresponding DOM elements)
  viewModel.dataBinding = dataBinding;
  return uiContainerEl;
};


'use strict';

(function() {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };

      return p.then(function(db) {
        return new DB(db);
      });
    },
    delete: function(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (typeof module !== 'undefined') {
    module.exports = exp;
    module.exports.default = module.exports;
  }
  else {
    self.idb = exp;
  }
}());

/**
 * @fileOverview  This file contains the definition of the library class
 * sTORAGEmANAGER.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
/**
 * Library class providing storage management methods for a number of predefined
 * storage adapters
 *
 * @constructor
 * @this {sTORAGEmANAGER}
 * @param storageAdapter: object
 */
function sTORAGEmANAGER( storageAdapter) {
  if (typeof storageAdapter !== 'object' ||
      typeof storageAdapter.name !== "string" ||
      !(["LocalStorage","IndexedDB","MariaDB"].includes( storageAdapter.name))) {
    throw new ConstraintViolation("Invalid storage adapter name!");
  } else if (!storageAdapter.dbName) {
    throw new ConstraintViolation("Storage adapter: missing DB name!");
  } else {
    this.adapter = storageAdapter;
    // if "LocalStorage", create a main memory DB
    if (storageAdapter.name === "LocalStorage") {
      Object.keys( cLASS).forEach( function (key) {
        // load all cLASSes
        if (cLASS[key].instances) {
          sTORAGEmANAGER.adapters["LocalStorage"].retrieveLsTable( cLASS[key]);
        }
      });
    }
  }
  // copy storage adapter to the corresponding adapter's storage management method library
  sTORAGEmANAGER.adapters[this.adapter.name].currentAdapter = storageAdapter;
}
/**
 * Generic method for creating an empty DB
 * @method
 */
sTORAGEmANAGER.prototype.createEmptyDb = function (classes) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    var modelClasses=[];
    if (Array.isArray( classes) && classes.length > 0) {
      modelClasses = classes;
    } else {
      Object.keys( cLASS).forEach( function (key) {
        // test if cLASS[key] represents a cLASS
        if (typeof cLASS[key] === "function" && cLASS[key].properties) {
          // collect all non-abstract cLASSes that are not datatype classes
          if (!cLASS[key].isAbstract && !cLASS[key].isComplexDatatype) {
            modelClasses.push( cLASS[key]);
          }
        }
      });
    }
    sTORAGEmANAGER.adapters[adapterName].createEmptyDb( dbName, modelClasses)
    .then( resolve);
  });
};
/**
 * Generic method for creating and "persisting" new model objects
 * @method
 * @param {object} mClass  The model cLASS concerned
 * @param {object} rec  A record or record list
 */
sTORAGEmANAGER.prototype.add = function (mClass, rec) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      createLog = this.createLog,
      checkConstraints = this.validateBeforeSave,
      records=[], validRecords=[];
  if (typeof rec === "object" && !Array.isArray(rec)) {
    records = [rec];
  } else if (Array.isArray(rec) && rec.every( function (r) {
             return typeof r === "object" && !Array.isArray(r)})) {
    records = rec;
  } else throw Error("2nd argument of 'add' must be a record or record list!");
  // create auto-IDs if required
  if (mClass.properties.id && mClass.properties.id.range === "AutoNumber") {
    records.forEach( function (r) {
      if (!r.id) {  // do not overwrite assigned ID values
        if (typeof mClass.getAutoId === "function") r.id = mClass.getAutoId();
        else if (mClass.idCounter !== undefined) r.id = ++mClass.idCounter;
      }
    })
  }
  // check constraints before save if required
  if (checkConstraints) {
    records.forEach( function (r) {
      var newObj=null;
      if (r instanceof mClass) {
        validRecords.push( r);
      } else {
        try {newObj = new mClass( r);}  // check constraints
        catch (e) {
          if (e instanceof ConstraintViolation) {
            console.log( e.constructor.name +": "+ e.message);
          } else console.log( e);
        }
        if (newObj) validRecords.push( newObj);
      }
    });
    records = validRecords;
  }
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].add( dbName, mClass, records).then( function () {
      if (createLog) console.log( records.length +" "+ mClass.Name +"(s) added.");
      if (typeof resolve === "function") resolve();
    }).catch( function (error) {
      console.log( error.name +": "+ error.message);
    });
  });
};
/**
 * Generic method for loading/retrieving a model object
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 */
sTORAGEmANAGER.prototype.retrieve = function (mc, id) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].retrieve( dbName, mc, id)
    .then( function (obj) {
      if (!obj) {
        obj = null;
        console.log("There is no " + mc.Name + " with ID value " + id + " in the database!");
      }
      resolve( obj);
    });
  });
};
/**
 * Generic method for loading all table rows and converting them
 * to model objects
 *
 * @method
 * @param {object} mc  The model cLASS concerned
 */
sTORAGEmANAGER.prototype.retrieveAll = function (mc) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      createLog = this.createLog,
      validateAfterRetrieve = this.validateAfterRetrieve;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].retrieveAll( dbName, mc)
    .then( function (records) {
      var i=0, newObj=null;
      if (createLog) {
        console.log( records.length +" "+ mc.Name +" records retrieved.")
      }
      if (validateAfterRetrieve) {
        for (i=0; i < records.length; i++) {
          try {
            newObj = new mc( records[i]);
          } catch (e) {
            if (e instanceof ConstraintViolation) {
              console.log( e.constructor.name +": "+ e.message);
            } else console.log( e.name +": "+ e.message);
          }
        }
      }
      resolve( records);
    })
  });
};
/**
 * Generic method for updating model objects
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 * @param {object} slots  The object's update slots
 */
sTORAGEmANAGER.prototype.update = function (mc, id, slots) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      currentSM = this;
  return new Promise( function (resolve) {
    var objectBeforeUpdate = null, properties = mc.properties,
        updatedProperties=[], noConstraintViolated = true,
        updSlots = util.cloneObject( slots);
    // first check if object exists
    currentSM.retrieve( mc, id).then( function (objToUpdate) {
      if (objToUpdate) {
        if (typeof objToUpdate === "object" && objToUpdate.constructor !== mc) {
          // if the retrieved objToUpdate is not of type mc, check integrity constraints
          objToUpdate = mc.createObjectFromRecord( objToUpdate);
          if (!objToUpdate) return;  // constraint violation
        }
        objectBeforeUpdate = util.cloneObject( objToUpdate);
        try {
          Object.keys( slots).forEach( function (prop) {
            var oldVal = objToUpdate[prop],
                newVal = slots[prop],
                propDecl = properties[prop];
            if (prop !== "id") {
              if (propDecl.maxCard === undefined || propDecl.maxCard === 1) {  // single-valued
                if (Number.isInteger( oldVal) && newVal !== "") {
                  newVal = parseInt( newVal);
                } else if (typeof oldVal === "number" && newVal !== "") {
                  newVal = parseFloat( newVal);
                } else if (oldVal===undefined && newVal==="") {
                  newVal = undefined;
                }
                if (newVal !== oldVal) {
                  updatedProperties.push( prop);
                  objToUpdate.set( prop, newVal);  // also checking constraints
                } else {
                  delete updSlots[prop];
                }
              } else {   // multi-valued
                if (oldVal.length !== newVal.length ||
                    oldVal.some( function (vi,i) { return (vi !== newVal[i]);})) {
                  objToUpdate.set(prop, newVal);
                  updatedProperties.push(prop);
                } else {
                  delete updSlots[prop];
                }
              }
            }
          });
        } catch (e) {
          console.log( e.constructor.name +": "+ e.message);
          noConstraintViolated = false;
          // restore object to its state before updating
          objToUpdate = objectBeforeUpdate;
        }
        if (noConstraintViolated) {
          if (updatedProperties.length > 0) {
            sTORAGEmANAGER.adapters[adapterName].update( dbName, mc, id, slots, updSlots)
            .then( function () {
              console.log("Properties "+ updatedProperties.toString() +
                  " of "+ mc.Name +" "+ id +" updated.");
              if (typeof resolve === "function") resolve();
            });
          } else {
            console.log("No property value changed for "+ mc.Name +" "+ id +"!");
          }
        }
      }
    });
  });
};
/**
 * Generic method for deleting model objects
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 */
sTORAGEmANAGER.prototype.destroy = function (mc, id) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      currentSM = this;
  return new Promise( function (resolve) {
    currentSM.retrieve( mc, id).then( function (record) {
      if (record) {
        sTORAGEmANAGER.adapters[adapterName].destroy( dbName, mc, id)
        .then( function () {
          console.log( mc.Name +" "+ id +" deleted.");
          if (typeof resolve === "function") resolve();
        });
      } else {
        console.log("There is no "+ mc.Name +" with ID value "+ id +" in the database!");
      }
    });
  });
};
/**
 * Generic method for clearing the DB table, or object store, of a cLASS
 * @method
 */
sTORAGEmANAGER.prototype.clearTable = function (mc) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].clearTable( dbName, mc)
    .then( resolve);
  });
};
/**
 * Generic method for clearing the DB of an app
 * @method
 */
sTORAGEmANAGER.prototype.clearDB = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    if ((typeof confirm === "function" &&
        confirm("Do you really want to delete all data?")) ||
        typeof confirm !== "function") {
      sTORAGEmANAGER.adapters[adapterName].clearDB( dbName)
      .then( resolve);
    }
  });
};
/**
 * Generic method for storing unsaved data on page unload
 * @method
 */
sTORAGEmANAGER.prototype.saveOnUnload = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  sTORAGEmANAGER.adapters[adapterName].saveOnUnload( dbName);
};

sTORAGEmANAGER.adapters = {};


/*****************************************************************************
 * Storage management methods for the "LocalStorage" adapter
 * Only in the case of "LocalStorage", due to its non-concurrent architecture,
 * the entire data is loaded into a kind of main memory DB, which is saved
 * back to LocalStorage on page unload.
 ****************************************************************************/
sTORAGEmANAGER.adapters["LocalStorage"] = {
  //-----------------------------------------------------------------
  createEmptyDb: function (dbName, modelClasses) {
  //-----------------------------------------------------------------
    // nothing to do
    return new Promise( function (resolve) {
      resolve();
    });
  },
  //------------------------------------------------
  add: function (dbName, mc, records) {  // does not access localStorage
  //------------------------------------------------
    var recordsCopy = JSON.parse( JSON.stringify( records));
    return new Promise( function (resolve) {
      var newObj=null;
      if (!Array.isArray( recordsCopy)) {  // single record insertion
        recordsCopy = [recordsCopy];
      }
      recordsCopy.forEach( function (rec) {
        newObj = new mc( rec);
        mc.instances[newObj.id] = newObj;
      })
      resolve( newObj);
    });
  },
  //------------------------------------------------
  retrieve: function (dbName, mc, id) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      resolve( mc.instances[id]);
    });
  },
  //-------------------------------------------------------------
  // *** A LocalStorage-specific, and not an interface method ***
  //-------------------------------------------------------------
  retrieveLsTable: function (mc) {
  //-------------------------------------------------------------
    var key="", keys=[], i=0,
        tableString="", table={},
        tableName = util.class2TableName( mc.Name);
    try {
      if (localStorage[tableName]) {
        tableString = localStorage[tableName];
      }
    } catch (e) {
      console.log( "Error when reading from Local Storage\n" + e);
    }
    if (tableString) {
      table = JSON.parse( tableString);
      keys = Object.keys( table);
      console.log( keys.length + " " + mc.Name + " records loaded.");
      for (i=0; i < keys.length; i++) {
        key = keys[i];
        mc.instances[key] = mc.createObjectFromRecord( table[key]);
      }
    }
  },
  //------------------------------------------------
  retrieveAll: function (dbName, mc) {
    //------------------------------------------------
    var  currentSM = this;
    return new Promise( function (resolve) {
      var records=[];
      /* OLD
      function retrieveAll (mc) {
        var key = "", keys = [], i = 0,
            tableString = "", table={},
            tableName = util.class2TableName( mc.Name);
        // do no retrieve the same class population twice
        if (Object.keys( mc.instances).length > 0) return;
        // first retrieve the population of the classes that are ranges of reference properties
        Object.keys( mc.properties).forEach( function (p) {
          var range = mc.properties[p].range;
          if (range instanceof cLASS) retrieveAll( range);
        });
        currentSM.retrieveTable( mc);      }
      retrieveAll( mc);
      */
      // convert entity map mc.instances to an array list
      records = Object.keys( mc.instances).map( function (key) {return mc.instances[key];});
      resolve( records);
    });
  },
  //------------------------------------------------
  update: function (dbName, mc, id, slots) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      // in-memory object has already been updated in the generic update
      /*
      Object.keys( slots).forEach( function (prop) {
        obj = mc.instances[id];
        obj[prop] = slots[prop];
      });
      */
      resolve();
    });
  },
  //------------------------------------------------
  destroy: function (dbName, mc, id) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      delete mc.instances[id];
      resolve();
    });
  },
  //------------------------------------------------
  clearTable: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      mc.instances = {};
      try {
        localStorage[tableName] = JSON.stringify({});
        console.log("Table "+ tableName +" cleared.");
      } catch (e) {
        console.log("Error when writing to Local Storage\n" + e);
      }
      resolve();
    });
  },
  //------------------------------------------------
  clearDB: function () {
  //------------------------------------------------
    return new Promise( function (resolve) {
      Object.keys( cLASS).forEach( function (key) {
        var tableName="";
        if (!cLASS[key].isComplexDatatype && Object.keys( cLASS[key].instances).length > 0) {
          cLASS[key].instances = {};
          tableName = mc.tableName || util.class2TableName( cLASS[key].Name);
          try {
            localStorage[tableName] = JSON.stringify({});
          } catch (e) {
            console.log("Error when writing to Local Storage\n" + e);
          }
        }
      });
      resolve();
    });
  },
  //------------------------------------------------
  saveOnUnload: function () {
  //------------------------------------------------
    Object.keys( cLASS).forEach( function (key) {
      var id="", table={}, obj=null, i=0, mc=null,
          keys=[], tableName="";
      if (cLASS[key].instances) {
        mc = cLASS[key];
        keys = Object.keys( mc.instances)
        tableName = util.class2TableName( mc.Name);
        for (i=0; i < keys.length; i++) {
          id = keys[i];
          obj = mc.instances[id];
          table[id] = obj.toRecord();
        }
        try {
          localStorage[tableName] = JSON.stringify( table);
          console.log( keys.length +" "+ mc.Name +" records saved.");
        } catch (e) {
          console.log("Error when writing to Local Storage\n" + e);
        }
      }
    });
  }
};
/**
 * @fileOverview  Storage management methods for the "IndexedDB" adapter
 * @author Gerd Wagner
 * @copyright Copyright 2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
sTORAGEmANAGER.adapters["IndexedDB"] = {
  //------------------------------------------------
  createEmptyDb: function (dbName, modelClasses) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      idb.open( dbName, 1, function (upgradeDb) {
        modelClasses.forEach( function (mc) {
          var tableName = mc.tableName || util.class2TableName( mc.Name),
              keyPath = mc.primaryKey || "id";
          if (!upgradeDb.objectStoreNames.contains( tableName)) {
            upgradeDb.createObjectStore( tableName, {keyPath: keyPath});
          }
        })
      }).then( resolve);
    });
  },
  //------------------------------------------------
  add: function (dbName, mc, records) {
  //------------------------------------------------
    var recordsCopy = JSON.parse( JSON.stringify( records));
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        // Promise.all takes a list of promises and resolves if all of them do
        return Promise.all( recordsCopy.map( function (rec) {return os.add( rec);}))
            .then( function () {return tx.complete;});
      }).then( resolve)
      .catch( function (err) {
        console.log( err.name +": "+ err.message +"Table: "+ tableName);}
      );
    });
  },
  //------------------------------------------------
  retrieve: function (dbName, mc, id) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readonly");
        var os = tx.objectStore( tableName);
        return os.get( id);
      }).then( function( result) {
        if (result === undefined) result = null;
        resolve( result);
      }).catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  retrieveAll: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readonly");
        var os = tx.objectStore( tableName);
        return os.getAll();
      }).then( function (results) {
        if (results === undefined) results = [];
        resolve( results);
      }).catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  update: function (dbName, mc, id, slots) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        slots["id"] = id;
        os.put( slots);
        return tx.complete;
      }).then( resolve)
      .catch( function (err) {
        console.log( err.name +": "+ err.message +"Table: "+ tableName);}
      );
    });
  },
  //------------------------------------------------
  destroy: function (dbName, mc, id) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        os.delete( id);
        return tx.complete;
      }).then( resolve)
      .catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  clearTable: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        os.clear();
        return tx.complete;
      }).then( resolve)
      .catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  clearDB: function (dbName) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( idbCx.objectStoreNames, "readwrite");
        // Promise.all takes a list of promises and resolves if all of them do
        return Promise.all( Array.from( idbCx.objectStoreNames,
            function (osName) {return tx.objectStore( osName).clear();}))
            .then( function () {return tx.complete;});
      }).then( resolve)
      .catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  saveOnUnload: function (dbName) {  // not yet implemented
  //------------------------------------------------
  }
};
 /**
 * @fileOverview  A library of DOM element creation methods and 
 * other DOM manipulation methods.
 * 
 * @author Gerd Wagner
 */
 /**
  * Create a progress bar
  * @param {string} title
  * @return {object}  an element object
  */
 dom.createProgressBar = function (title, initialProgress) {
   var progressContainer = document.createElement("div"),
       progress = document.createElement("progress"),
       progressTitle = document.createElement("h1"),
       progressInfo = document.createElement("p");
   progress.max = 100;  // for 100%
   progress.value = initialProgress || 10;  // initial value, 10% by default
   progressTitle.textContent = title;
   progressContainer.id = "progress-container";
   progressContainer.appendChild( progressTitle);
   progressContainer.appendChild( progress);
   progressContainer.appendChild( progressInfo);
   return progressContainer
 };
 /**
  * Create an expandable UI panel
  * @param {object} slots
  * @return {object} uiPanelEl  element object
  */
 dom.createExpandablePanel = function (slots) {
   var uiPanelEl = dom.createElement("div", slots),
       contentEl = dom.createElement("div", {classValues:"xpanel-content"}),
       expandButtonEl = dom.createElement("button", {content:"+"});
   uiPanelEl.classList.add("expandablePanel");
   uiPanelEl.appendChild( dom.createElement("h2", {
     content:"<span>"+ slots.heading +"</span>",
     title: slots.hint
   }));
   uiPanelEl.appendChild( contentEl);
   uiPanelEl.firstElementChild.insertBefore(
       expandButtonEl, uiPanelEl.firstElementChild.firstElementChild);
   expandButtonEl.addEventListener("click", function (e) {
     // toggle display of main content
     if (contentEl.style.display !== "none") {
       contentEl.style.display = "none";
       e.target.textContent = "+";  // or "►" = "&#9654;"
     }
     else {
       contentEl.style.display = "block";
       e.target.textContent = "−";  // = "&minus;" or "▼"
     }
     e.preventDefault();
   });
   uiPanelEl.style.overflowX = "auto";  // horizontal scrolling
   contentEl.style.display = "none";
   return uiPanelEl;
 };
 /**
  * Create a Modal Window/Panel
  *
  * @param {object} slots
  * @return {object} uiPanelEl  element object
  */
 dom.createModal = function (slots) {
   var modalEl = dom.createElement("div", {classValues:"modal"}),
       el = document.getElementById("overlay"),
       overlayEl = el ? el : dom.createElement("div", {id:"overlay"}),
       h1El=null;
   if (slots.id) modalEl.id = slots.id;
   if (slots.classValues) modalEl.className += " "+ slots.classValues;
   if (slots.width) modalEl.style.width = slots.width;
   if (!slots.title) slots.title = "No Title?";
   h1El = dom.createElement("h1", {content: "<span class='title'>"+ slots.title +"</span>"});
     //  "</span><span class='closeButton'>&times;</span>"});
   if (!slots.classValues || !slots.classValues.includes("action-required")) {
     el = dom.createElement("span", {classValues:"closeButton", content:"&times;"});
     el.addEventListener("click", function () {
       overlayEl.style.display = "none";
       modalEl.style.display = "none";
     });
     h1El.appendChild( el);
   }
   modalEl.appendChild( h1El);
   if (slots.fromElem) {
     modalEl.appendChild( slots.fromElem);
     slots.fromElem.classList.add("modal-body");
   } else {
     el = dom.createElement("div", {classValues:"modal-body"});
     if (slots.textContent) el.textContent = slots.textContent;
     modalEl.appendChild( el);
   }
   overlayEl.appendChild( modalEl);
   document.body.appendChild( overlayEl);
   return modalEl;
 };
 /**
  * Create a Draggable Modal Window/Panel
  *
  * @param {object} slots
  * @return {object} uiPanelEl  element object
  */
 dom.createDraggableModal = function (slots) {
   var modalEl = dom.createModal( slots),
       overlayEl = document.getElementById("overlay");
   // make the element draggable
   modalEl.draggable = true;
   if (!modalEl.id) modalEl.id = "dragMod";
   modalEl.addEventListener("dragstart", dom.handleDragStart);
   overlayEl.addEventListener("dragover", dom.handleDragOver);
   overlayEl.addEventListener("drop", dom.handleDrop);
   return modalEl;
 };
 dom.handleDragStart = function (evt) {
   evt.dataTransfer.dropEffect = 'move';
   evt.dataTransfer.setData("text/plain", evt.target.id);
 };
 dom.handleDragOver = function (evt) {
   // allow dropping by preventing the default behavior
   evt.preventDefault();
 };
 dom.handleDrop = function (evt) {
   var elId = evt.dataTransfer.getData("text/plain"),
       el = document.getElementById( elId),
       x = evt.clientX, y = evt.clientY;
   evt.preventDefault();
   el.style.position = "absolute";
   el.style.left = x +"px";
   el.style.top = y +"px";
 };
 /**
  * Convert HTML to Text
  * @param {string} htmlElemContent
  * @return {string}
  */
 dom.convertHtml2Text = function (htmlElemContent) {
   var blockElem = document.createElement("div");
   blockElem.innerHTML = htmlElemContent;
   return blockElem.textContent;
 };

/**
* SVG library
* @author Gerd Wagner
*/
var svg = {
  NS: "http://www.w3.org/2000/svg",  // namespace
  XLINK_NS: "http://www.w3.org/1999/xlink",
  /**
  * Create an SVG element
  * 
  * @param {object} params  a lsit of optional parameters
  * @return {node} svgElement
  */
  createSVG: function (params) {
    var el = document.createElementNS( svg.NS,"svg");
    el.setAttribute("version", "1.1");
    if (params.id) el.id = params.id;
    if (params.class) el.class = params.class;
    if (params.width) el.setAttribute("width", params.width);
    if (params.height) el.setAttribute("height", params.height);
    if (params.viewBox) el.setAttribute("viewBox", params.viewBox);
    return el;
  },
  createDefs: function () {
    return document.createElementNS( svg.NS,"defs");
  },
  setOptionalAttr: function (el, optParams) {
    if (optParams === undefined) optParams = {};
    if (optParams.id) el.id = optParams.id;
    if (optParams.class) el.class = optParams.class;
    el.setAttribute("stroke", optParams.stroke || "black");
    el.setAttribute("stroke-width", optParams.strokeWidth || "1");
    el.setAttribute("fill", optParams.fill || "white");
  },
  /**
  * Create a rect element
  * 
  * @param {number} x 
  * @param {number} y 
  * @param {number} width 
  * @param {number} height 
  * @param {object} optParams 
  *
  * @return (object)
  */
  createRect: function (x, y, width, height, optParams) {
    var el = document.createElementNS( svg.NS,"rect");
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("width", width);
    el.setAttribute("height", height);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Create a circle element
  * 
  * @param {number} x 
  * @param {number} y 
  * @param {number} width 
  * @param {number} height 
  * @param {string} color 
  *
  * @return (object)
  */
  createCircle: function ( cx, cy, r, optParams) {
    var el = document.createElementNS( svg.NS,"circle");
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", r);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
   * Create a line element 
   * 
   * @param {number} x1 
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {string} color  the stroke color
   * @param {number} width 
   * @return {object}
   */
  createLine: function (x1, y1, x2, y2, optParams) {
    var el = document.createElementNS( svg.NS,"line");
    el.setAttribute("x1", x1);
    el.setAttribute("y1", y1);
    el.setAttribute("x2", x2);
    el.setAttribute("y2", y2);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
   * Create a path element
   * 
   * @param {number} d  the path description
   * @param {string} color  the stroke color
   * @param {number} width  the stroke width
   * @return {object}
   */
  createPath: function (d, optParams) {
    var el = document.createElementNS( svg.NS,"path");
    el.setAttribute("d", d);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Create a group element
  * 
  * @return gNode
  */
  createGroup: function (optParams) {
    var el = document.createElementNS( svg.NS,"g");
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Function created for the node Text
  * @param {number} x start position
  * @param {number} y start position
  * @param {string} name the content of the node
  * @param {number} fontSize of the content
  * @param {string} color of the content
  * 
  * @return text object
  */
  createText: function ( x, y, txt, style) {
    var el = document.createElementNS( svg.NS,"text");
    el.textContent = txt;
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    if (style) el.style = style;  // el.setAttribute("style", style);
    return el;
  },
  createShape: function (shape, shapeAttributes, style, obj) {
    var el = document.createElementNS( svg.NS, shape);
    Object.keys( shapeAttributes).forEach( function (attrName) {
      var val;
      if (typeof shapeAttributes[attrName] === "function") {
        val = shapeAttributes[attrName](obj);
      } else val = shapeAttributes[attrName];
      el.setAttribute( attrName, val);
    })
    if (style) el.setAttribute("style", style);
    return el;
  },
  createShapeFromDefRec: function (shDefRec, obj) {
    var el = document.createElementNS( svg.NS, shDefRec.shapeName),
        shAttribs = shDefRec.shapeAttributes;
    Object.keys( shAttribs).forEach( function (attrName) {
      var val;
      if (typeof shAttribs[attrName] === "function") {
        val = shAttribs[attrName](obj);
      } else val = shAttribs[attrName];
      switch (attrName) {
      case "textContent":
        el.textContent = val;
        break;
      case "file":
        el.setAttributeNS( svg.XLINK_NS, "href", val);
        break;
      default:
        el.setAttribute( attrName, val);
        break;
      }
    })
    if (shDefRec.style) el.setAttribute("style", shDefRec.style);
    return el;
  },
  createImageFillPattern: function (id, file, optParams) {
    var patEl = document.createElementNS( svg.NS,"pattern"),
        imgEl = document.createElementNS( svg.NS,"image");
    if (!optParams) optParams = {};
    imgEl.setAttributeNS( svg.XLINK_NS, "href", file);
    imgEl.setAttribute("width", optParams.width || 20);
    imgEl.setAttribute("height", optParams.height || 20);
    patEl.appendChild( imgEl);
    patEl.id = id;
    patEl.setAttribute("patternUnits", "userSpaceOnUse");
    patEl.setAttribute("width", optParams.width || 20);
    patEl.setAttribute("height", optParams.height || 20);
    if (optParams.x) patEl.setAttribute("x", optParams.x);
    if (optParams.y) patEl.setAttribute("y", optParams.y);
    return patEl;
  }
};


/**
 * @fileOverview  A port of a C implementation of MT19937, providing a collection of classes
 * and methods used to generate random numbers and random variates. From the Random.js library
 * of SimJS.
 *
 * @copyright Copyright © 1997-2002, Makoto Matsumoto and Takuji Nishimura.
 * @license LGPL
 */


/*
 A C-program for MT19937, with initialization improved 2002/1/26.
 Coded by Takuji Nishimura and Makoto Matsumoto.

 Before using, initialize the state by using init_genrand(seed)
 or init_by_array(init_key, key_length).

 Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:

 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.

 3. The names of its contributors may not be used to endorse or promote
 products derived from this software without specific prior written
 permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// default non-seeded random stream based on Math.random
var rand = null;

/***
 * The following constructor function definition has been modified
 * Use new Date()).getTime() as seed for getting MT with a randomized seed
 */
var Random = function( seed) {
  if (seed === undefined) {
    this.random = Math.random;  // use the JS built-in RNG
  } else {  // use the Mersenne Twister
    if (!Number.isInteger( seed)) {
      throw new TypeError("Seed value must be an integer");
    }
    /* Period parameters */
    this.N = 624;
    this.M = 397;
    this.MATRIX_A = 0x9908b0df;   /* constant vector a */
    this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
    this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

    this.mt = new Array(this.N); /* the array for the state vector */
    this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */

    //this.init_genrand(seed);
    this.init_by_array([seed], 1);
  }
};

/* initializes mt[N] with a seed */
Random.prototype.init_genrand = function(s) {
  this.mt[0] = s >>> 0;
  for (this.mti=1; this.mti<this.N; this.mti++) {
    var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
    this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
        + this.mti;
    /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
    /* In the previous versions, MSBs of the seed affect   */
    /* only MSBs of the array mt[].                        */
    /* 2002/01/09 modified by Makoto Matsumoto             */
    this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */
  }
};

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
Random.prototype.init_by_array = function(init_key, key_length) {
  var i, j, k;
  this.init_genrand(19650218);
  i=1; j=0;
  k = (this.N>key_length ? this.N : key_length);
  for (; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
        + init_key[j] + j; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++; j++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
    if (j>=key_length) j=0;
  }
  for (k=this.N-1; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
        - i; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
  }

  this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
};

/* generates a random number on [0,0xffffffff]-interval */
Random.prototype.genrand_int32 = function() {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */

  if (this.mti >= this.N) { /* generate N words at one time */
    var kk;

    if (this.mti == this.N+1)   /* if init_genrand() has not been called, */
      this.init_genrand(5489); /* a default initial seed is used */

    for (kk=0;kk<this.N-this.M;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    for (;kk<this.N-1;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
    this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

    this.mti = 0;
  }

  y = this.mt[this.mti++];

  /* Tempering */
  y ^= (y >>> 11);
  y ^= (y << 7) & 0x9d2c5680;
  y ^= (y << 15) & 0xefc60000;
  y ^= (y >>> 18);

  return y >>> 0;
};

/* generates a random number on [0,0x7fffffff]-interval */
Random.prototype.genrand_int31 = function() {
  return (this.genrand_int32()>>>1);
};

/* generates a random number on [0,1]-real-interval */
Random.prototype.genrand_real1 = function() {
  return this.genrand_int32()*(1.0/4294967295.0);
  /* divided by 2^32-1 */
};

/* generates a random number on [0,1)-real-interval */
Random.prototype.random = function() {
  if (this.pythonCompatibility) {
    if (this.skip) {
      this.genrand_int32();
    }
    this.skip = true;
  }
  return this.genrand_int32()*(1.0/4294967296.0);
  /* divided by 2^32 */
};

/* generates a random number on (0,1)-real-interval */
Random.prototype.genrand_real3 = function() {
  return (this.genrand_int32() + 0.5)*(1.0/4294967296.0);
  /* divided by 2^32 */
};

/* generates a random number on [0,1) with 53-bit resolution*/
Random.prototype.genrand_res53 = function() {
  var a=this.genrand_int32()>>>5, b=this.genrand_int32()>>>6;
  return(a*67108864.0+b)*(1.0/9007199254740992.0);
};

/* These real versions are due to Isaku Wada, 2002/01/09 added */


/**************************************************************************/
Random.prototype.LOG4 = Math.log(4.0);
Random.prototype.SG_MAGICCONST = 1.0 + Math.log(4.5);

Random.prototype.exponential = function (lambda) {
  if (arguments.length != 1) {                         // ARG_CHECK
    throw new SyntaxError("exponential() must "     // ARG_CHECK
        + " be called with 'lambda' parameter"); // ARG_CHECK
  }                                                   // ARG_CHECK
  var r = this.random();
  return -Math.log(r) / lambda;
};

Random.prototype.gamma = function (alpha, beta) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("gamma() must be called"  // ARG_CHECK
        + " with alpha and beta parameters"); // ARG_CHECK
  }                                                   // ARG_CHECK
  /* Based on Python 2.6 source code of random.py.
   */
  if (alpha > 1.0) {
    var ainv = Math.sqrt(2.0 * alpha - 1.0);
    var bbb = alpha - this.LOG4;
    var ccc = alpha + ainv;
    while (true) {
      var u1 = this.random();
      if ((u1 < 1e-7) || (u > 0.9999999)) {
        continue;
      }
      var u2 = 1.0 - this.random();
      var v = Math.log(u1 / (1.0 - u1)) / ainv;
      var x = alpha * Math.exp(v);
      var z = u1 * u1 * u2;
      var r = bbb + ccc * v - x;
      if ((r + this.SG_MAGICCONST - 4.5 * z >= 0.0) || (r >= Math.log(z))) {
        return x * beta;
      }
    }
  } else if (alpha == 1.0) {
    var u = this.random();
    while (u <= 1e-7) {
      u = this.random();
    }
    return - Math.log(u) * beta;
  } else {
    while (true) {
      var u = this.random();
      var b = (Math.E + alpha) / Math.E;
      var p = b * u;
      if (p <= 1.0) {
        var x = Math.pow(p, 1.0 / alpha);
      } else {
        var x = - Math.log((b - p) / alpha);
      }
      var u1 = this.random();
      if (p > 1.0) {
        if (u1 <= Math.pow(x, (alpha - 1.0))) {
          break;
        }
      } else if (u1 <= Math.exp(-x)) {
        break;
      }
    }
    return x * beta;
  }

};

Random.prototype.normal = function (mu, sigma) {
  if (arguments.length != 2) {                          // ARG_CHECK
    throw new SyntaxError("normal() must be called"  // ARG_CHECK
        + " with mu and sigma parameters");      // ARG_CHECK
  }                                                    // ARG_CHECK
  var z = this.lastNormal;
  this.lastNormal = NaN;
  if (!z) {
    var a = this.random() * 2 * Math.PI;
    var b = Math.sqrt(-2.0 * Math.log(1.0 - this.random()));
    z = Math.cos(a) * b;
    this.lastNormal = Math.sin(a) * b;
  }
  return mu + z * sigma;
};

Random.prototype.pareto = function (alpha) {
  if (arguments.length != 1) {                         // ARG_CHECK
    throw new SyntaxError("pareto() must be called" // ARG_CHECK
        + " with alpha parameter");             // ARG_CHECK
  }                                                   // ARG_CHECK
  var u = this.random();
  return 1.0 / Math.pow((1 - u), 1.0 / alpha);
};

Random.prototype.weibull = function (alpha, beta) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("weibull() must be called" // ARG_CHECK
        + " with alpha and beta parameters");    // ARG_CHECK
  }                                                   // ARG_CHECK
  var u = 1.0 - this.random();
  return alpha * Math.pow(-Math.log(u), 1.0 / beta);
};

Random.prototype.triangular = function (lower, upper, mode) {
  // http://en.wikipedia.org/wiki/Triangular_distribution
  if (arguments.length != 3) {
    throw new SyntaxError("triangular() must be called"
        + " with 3 parameters (lower, upper and mode)");
  }
  if (!(lower < upper && lower <= mode && mode <= upper)) {
    throw new SyntaxError("The lower, upper and mode parameters " +
        "must satisfy the conditions l < U and l <= m <= u!");
  }
  var c = (mode - lower) / (upper - lower);
  var u = this.random();
  if (u <= c) {
    return lower + Math.sqrt(u * (upper - lower) * (mode - lower));
  } else {
    return upper - Math.sqrt((1 - u) * (upper - lower) * (upper - mode));
  }
};

Random.prototype.uniform = function (lower, upper) {
  if (arguments.length === 1) {
    throw new SyntaxError("uniform(lower, upper) must be called"
        + " 1. with lower and upper parameters [e.g., uniform(lower, upper)] or "
        + " 2. without any parameter [e.g., uniform()]");
  } else if (arguments.length >= 2) {
    return lower + this.random() * (upper - lower);
  } else {
    return this.random();
  }
};
/***
 Added by Gerd Wagner (20160921)
 */
Random.prototype.uniformInt = function (lower, upper) {
  if (arguments.length != 2 ||
      !(Number.isInteger(lower) && Number.isInteger(upper))) {
    throw new SyntaxError("uniformInt() must be called"
        + " with lower and upper integer values!");
  }
  return lower + Math.floor( this.random() * (upper - lower + 1));
};

Random.prototype.frequency = function (freqMap) {
  if (typeof freqMap !== "object") {
    throw new SyntaxError("rand.frequency() must be called"
        + " with a frequency map argument!");
  }
  var probabilities = Object.values( freqMap);
  if (math.sum( probabilities) !== 1 ) {
    throw new SyntaxError("rand.frequency(): rel. frequency values " +
        "do not add up to 1!");
  }
  var cumProb=0;
  var cumProbs = probabilities.map( function (p) {
    cumProb += p;
    return cumProb;
  });
  var valueStrings = Object.keys( freqMap);
  var valuesAreNumeric = !isNaN( parseInt( valueStrings[0]));
  var randX = this.random(), i=0;
  for (i=0; i <= cumProbs.length; i++) {
    if (randX < cumProbs[i]) return valuesAreNumeric ?
        parseInt( valueStrings[i]) : valueStrings[i];
  }
};

/**
 * Shuffles array in place using the Fisher-Yates shuffle algorithm
 * @param {Array} a - An array of items to be shuffled
 */
Random.prototype.shuffleArray = function (a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i -= 1) {
    j = Math.floor( this.random() * (i + 1) );
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
};
/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism&languages=clike+javascript */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var r=n.util.type(e);switch(t=t||{},r){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a={};t[n.util.objId(e)]=a;for(var l in e)e.hasOwnProperty(l)&&(a[l]=n.util.clone(e[l],t));return a;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a=[];return t[n.util.objId(e)]=a,e.forEach(function(e,r){a[r]=n.util.clone(e,t)}),a}return e}},languages:{extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var a in t)r[a]=t[a];return r},insertBefore:function(e,t,r,a){a=a||n.languages;var l=a[e];if(2==arguments.length){r=arguments[1];for(var i in r)r.hasOwnProperty(i)&&(l[i]=r[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);o[s]=l[s]}var u=a[e];return a[e]=o,n.languages.DFS(n.languages,function(t,n){n===u&&t!=e&&(this[t]=o)}),o},DFS:function(e,t,r,a){a=a||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],r||l),"Object"!==n.util.type(e[l])||a[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||a[n.util.objId(e[l])]||(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,a)):(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,a)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var a={callback:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var l,i=a.elements||e.querySelectorAll(a.selector),o=0;l=i[o++];)n.highlightElement(l,t===!0,a.callback)},highlightElement:function(t,r,a){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1].toLowerCase(),i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l));var s=t.textContent,u={element:t,language:l,grammar:i,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),r&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,a){var l={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",l),l.tokens=n.tokenize(l.code,l.grammar),n.hooks.run("after-tokenize",l),r.stringify(n.util.encode(l.tokens),l.language)},matchGrammar:function(e,t,r,a,l,i,o){var s=n.Token;for(var u in r)if(r.hasOwnProperty(u)&&r[u]){if(u==o)return;var g=r[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=a,k=l;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){if(m&&b!=t.length-1){h.lastIndex=k;var _=h.exec(e);if(!_)break;for(var j=_.index+(d?_[1].length:0),P=_.index+_[0].length,A=b,x=k,O=t.length;O>A&&(P>x||!t[A].type&&!t[A-1].greedy);++A)x+=t[A].length,j>=x&&(++b,k=x);if(t[b]instanceof s)continue;I=A-b,w=e.slice(k,x),_.index-=k}else{h.lastIndex=0;var _=h.exec(w),I=1}if(_){d&&(p=_[1]?_[1].length:0);var j=_.index+p,_=_[0].slice(p),P=j+_.length,N=w.slice(0,j),S=w.slice(P),C=[b,I];N&&(++b,k+=N.length,C.push(N));var E=new s(u,f?n.tokenize(_,f):_,y,_,m);if(C.push(E),S&&C.push(S),Array.prototype.splice.apply(t,C),1!=I&&n.matchGrammar(e,t,r,b,k,!0,u),i)break}else if(i)break}}}}},tokenize:function(e,t){var r=[e],a=t.rest;if(a){for(var l in a)t[l]=a[l];delete t.rest}return n.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var a,l=0;a=r[l++];)a(t)}}},r=n.Token=function(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var l={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o=Object.keys(l.attributes).map(function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(o?" "+o:"")+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(n.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,a=t.code,l=t.immediateClose;_self.postMessage(n.highlight(a,n.languages[r],r)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(n.filename=a.src,n.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},/\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,"function":/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript;

/*******************************************************************************
 * Binary Heap function based on the Appendix 2 Binary Heaps of M. Haverbeke
 * "Eloquent JavaScript", 3rd Edition
 *
 * @copyright Copyright 2018-2019 Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Luis Gustavo Nardin
 ******************************************************************************/
function BinaryHeap( scoreFunction ) {
  this.content = [];
  this.scoreFunction = scoreFunction;
}
BinaryHeap.prototype.push = function ( element ) {
  this.content.push( element );
  this.bubbleUp( this.content.length - 1 );
};
BinaryHeap.prototype.pop = function () {
  var result = this.content[ 0 ];
  var end = this.content.pop();

  if ( this.content.length > 0 ) {
    this.content[ 0 ] = end;
    this.sinkDown( 0 );
  }
  return result;
};
BinaryHeap.prototype.remove = function ( element ) {
  var len = this.content.length;
  var end, i;
  for ( i = 0; i < len; i += 1 ) {
    if ( this.content[ i ] !== element ) {
      continue;
    }

    end = this.content.pop();
    if ( i === len - 1 ) {
      break;
    }

    this.content[ i ] = end;
    this.bubbleUp( i );
    this.sinkDown( i );
    break;
  }
};
BinaryHeap.prototype.getContent = function () {
  return this.content;
};
BinaryHeap.prototype.getFirst = function () {
  if ( this.content.length > 0 ) {
    return this.content[ 0 ];
  }
  return [];
};
BinaryHeap.prototype.clear = function () {
  this.content = [];
};
BinaryHeap.prototype.isEmpty = function () {
  return this.content.length <= 0;
};
BinaryHeap.prototype.size = function () {
  return this.content.length;
};
BinaryHeap.prototype.bubbleUp = function ( n ) {
  var element = this.content[ n ];
  var score = this.scoreFunction( element );
  var parentN, parentEl;

  while ( n > 0 ) {
    parentN = Math.floor( ( n + 1 ) / 2 ) - 1;
    parentEl = this.content[ parentN ];
    if ( score >= this.scoreFunction( parentEl ) ) {
      break;
    }

    this.content[ parentN ] = element;
    this.content[ n ] = parentEl;
    n = parentN;
  }
};
BinaryHeap.prototype.sinkDown = function ( n ) {
  var len = this.content.length;
  var element = this.content[ n ];
  var elemScore = this.scoreFunction( element );
  var swap, child1, child2, child1N, child2N, child1Score, child2Score;

  while ( true ) {
    child2N = ( n + 1 ) * 2;
    child1N = child2N - 1;
    swap = null;
    if ( child1N < len ) {
      child1 = this.content[ child1N ];
      child1Score = this.scoreFunction( child1 );
      if ( child1Score < elemScore ) {
        swap = child1N;
      }
    }
    if ( child2N < len ) {
      child2 = this.content[ child2N ];
      child2Score = this.scoreFunction( child2 );
      if ( child2Score < ( swap === null ? elemScore : child1Score ) ) {
        swap = child2N;
      }
    }
    if ( swap === null ) {
      break;
    }

    this.content[ n ] = this.content[ swap ];
    this.content[ swap ] = element;
    n = swap;
  }
};

/*******************************************************************************
 * This library file contains several OES foundation elements
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
var oes = oes || {};
var sim = sim || {};

oes.defaults = {
  license: "CC BY-SA",
  imgFolder: "img/",
  validateOnInput: false,
  expostStatDecimalPlaces: 2,
  timeRoundingDecimalPlaces: 2
};
oes.predfinedProperties = ["shortLabel", "history"];

oes.Object = new cLASS({
  Name: "oBJECT",
  isAbstract: true,
  properties: {
    "id": {range: "Integer"},
    "name": {range: "NonEmptyString", optional:true}
  },
  methods: {
    "toLogString": function () {
      var str1="", str2="", i=0;
      if (!this.constructor.shortLabel && !this.name) return "";
      else {  // show class name + object ID
        str1 = this.name || this.constructor.shortLabel +"-"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            val = this[key], propLabel="", valStr="", listOfActTypeNames=[];
        if (key==="activityState") {
          listOfActTypeNames = Object.keys( val);
          valStr = JSON.stringify( listOfActTypeNames.map( function (atn) {
            var shortLabel = cLASS[atn].shortLabel;
            return shortLabel || atn;
          }));
          propLabel = "actState";
        } else if (propDecl && propDecl.shortLabel) {
          propLabel = propDecl.shortLabel;
          if (cLASS[propDecl.range]) {  // a reference property
            // is the property multi-valued?
            if (propDecl.maxCard && propDecl.maxCard > 1) {
              if (Array.isArray( val)) {
                valStr = JSON.stringify( val.map( function (o) {return o.id;}));
              } else valStr = JSON.stringify( Object.keys( val));
            } else {  // if the property is single-valued
              valStr = val.id;
            }
          } else {  // if the property is not a reference property
            if (typeof val === "number" && !Number.isInteger(val) && sim.timeRoundingFactor) {
              valStr = JSON.stringify( Math.round(
                         val * sim.timeRoundingFactor) / sim.timeRoundingFactor);
            } else valStr = JSON.stringify( val);
          }
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    }
  }
});
/***
 * Events subsume activities. While instantaneous events have an occTime,
 * activities may not have an occTime on creation, but only a startTime.
 * For events with duration it holds that occTime = startTime + duration.
 */
oes.Event = new cLASS({
  Name: "eVENT",
  isAbstract: true,
  properties: {
    "occTime": {range: "NonNegativeNumber", optional:true},
    "priority": {range: "NonNegativeNumber", optional:true},
    // only meaningful for events with duration
    "startTime": {range: "NonNegativeNumber", optional:true},
    "duration": {range: "NonNegativeNumber", optional:true}
  },
  methods: {
    "toLogString": function () {
      var occT = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( this.occTime * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          this.occTime;
      var str1="", str2="", evtStr="", i=0,
          eventTypeName = this.constructor.Name, AT=null,
          propDs={}, slots={};
      switch (eventTypeName) {
      case "aCTIVITYsTART":
        AT = cLASS[this.activityType];
        if (!AT.shortLabel) return "";
        str1 = AT.shortLabel + "Start";
        propDs = AT.properties;
        slots = this.resources;
        break;
      case "pROCESSINGaCTIVITYsTART":
        break;
      case "aCTIVITYeND":
        AT = cLASS[this.activityType];
        if (!AT.shortLabel) return "";
        str1 = AT.shortLabel + "End";
        propDs = AT.properties;
        slots = {"activityIdRef": this.activityIdRef};
        break;
      default:
        if (!this.constructor.shortLabel) return "";
        str1 = this.constructor.shortLabel;
        propDs = cLASS[eventTypeName].properties;
        slots = this;
      }
      str2 = "{";
      Object.keys( slots).forEach( function (p) {
        var propDecl = propDs[p], val = slots[p], propLabel="", valStr="";
        if (propDecl && propDecl.shortLabel) {
          propLabel = propDecl.shortLabel;
          if (cLASS[propDecl.range]) {  // a reference property
            valStr = val.id;
          } else {  // if the property is not a reference property
            if (typeof val === "number" && !Number.isInteger(val) && sim.timeRoundingFactor) {
              valStr = JSON.stringify( Math.round(
                      val * sim.timeRoundingFactor) / sim.timeRoundingFactor);
            } else valStr = JSON.stringify( val);
          }
        }
        if (val !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +":"+ valStr;
          i = i+1;
        }
      });
/*
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[eventTypeName].properties[key],
            val = this[key], propLabel="", valStr="";
        if (propDecl && propDecl.shortLabel) {
          propLabel = propDecl.shortLabel;
          if (cLASS[propDecl.range]) {  // a reference property
            valStr = val.id;
          } else {  // if the property is not a reference property
            if (typeof val === "number" && !Number.isInteger(val) && sim.timeRoundingFactor) {
              valStr = JSON.stringify( Math.round(
                      val * sim.timeRoundingFactor) / sim.timeRoundingFactor);
            } else valStr = JSON.stringify( val);
          }
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +":"+ valStr;
          i = i+1;
        }
      }, this);
*/
      str2 += "}";
      if (str2 === "{}") str2 = "";
      evtStr = str1 + str2 + "@" + occT;
      return evtStr;
    }
  }
});
// compare function for Array.sort
oes.Event.rank = function (e1, e2) {
  var p1=0, p2=0;
  if (e1.constructor.priority) p1 = e1.constructor.priority;
  if (e2.constructor.priority) p2 = e2.constructor.priority;
  return p2 - p1;
}
/******************************************************************************
 *** Activities Package *******************************************************
 ******************************************************************************/
/**
 *TODO: (1) merge AT.fixedDuration and AT.randomDuration() into AT.duration()
 *      (2) rename the property "resources" to "resourceRoles"
 *      (3) rename the property "actor" to "performer"
 *  Activities are events having some duration and using resources. Their duration
 *  may be either pre-set to a fixed value or to a random value (in which case they
 *  have a scheduled end), or it may be determined by the occurrence of an activity
 *  end event that is caused by another simulation event (in which case they have an
 *  open end). The duration of a pre-set duration activity can be defined in 3 ways:
 *  either for all activities of some type AT by a) a class-level attribute
 *  AT.fixedDuration or b) a class-level method AT.randomDuration(), or
 *  c) by setting the attribute "duration" of its aCTIVITYsTART event.
 *
 *  Activities may consume, and also produce, resources. The actor(s)
 *  that (jointly) perform(s) an activity can be viewed as (a) special resource(s).
 *  At any simulation step there is a (possibly empty) set of ongoing activities.
 *  The objects that participate in an ongoing activity as resources are in a
 *  certain activity state (e.g., "printing", "service-performing"), in which they
 *  are no more available for other activities that try to allocate them as
 *  resources, if their resource role is exclusive/non-shareable.
 *
 *  For any resource of an activity, its utilization by that activity during
 *  a certain time period is measured by the simulator and can be included
 *  in the ex-post statistics.
 *
 *  An activity type is defined as a subtype of the OES class "aCTIVITY" with a
 *  mandatory class-level method "generateId" and a mandatory class-level attribute
 *  "resourceTypes", and an optional class-level method "randomDuration" or,
 *  alternatively, an optional class-level attribute "fixedDuration".
 *
 *  A pre-defined event type oes.ActivityStart is used for creating activity start
 *  events with a constructor parameter "resources" defining a resource roles map
 *  assigning resource object references to resource role names. When an activity
 *  start event occurs, a JS object representing the activity is created, the
 *  resource roles map is copied to corresponding property slots of the activity,
 *  and the value of the activityState property of all resource objects is updated
 *  by adding the activity type name (the activityState is a set/map of the names
 *  of those types of activities, in which the object is participating).
 */
oes.Activity = new cLASS({
  Name: "aCTIVITY",
  supertypeName: "eVENT",
  isAbstract: true,
  properties: {
    "id": {range: "Integer"},
    // on activity creation resource roles are copied to corresp. property slots
    "resources": {range: cLASS.Map("oBJECT"), optional:true}
  },
  methods: {}
});
oes.ActivityStart = new cLASS({
  Name: "aCTIVITYsTART",
  supertypeName: "eVENT",
  properties: {
    "activityType": {range: "NonEmptyString"},  //TODO: should allow type names (like IdRefs)
    "resources": {range: cLASS.Map("oBJECT"), optional:true}
  },
  methods: {
    "toLogString": function () {
      var occT = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( this.occTime * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          this.occTime;
      var str1 = cLASS[this.activityType].shortLabel, str2 = "";
      if (!str1) return "";
      str1 += "Start";
      Object.keys( this.resources).forEach( function (resRole) {
        var resObj = this.resources[resRole];
        str2 += (resObj.name || String(resObj.id)) +", ";
      }, this);
      return str1 +"("+ str2.slice(0, -2) +")" + "@" + occT;
    },
    "onEvent": function () {
      var slots={}, acty=null, followupEvents=[];
      var AT = cLASS[this.activityType];
      if (this.duration > 0) slots.duration = this.duration;
      else if (AT.fixedDuration) slots.duration = AT.fixedDuration;
      else if (AT.randomDuration) slots.duration = AT.randomDuration();
      Object.keys( this.resources).forEach( function (resRole) {
        var resObj = this.resources[resRole];
        // copy resource def. slots as ref. prop. slots
        if (!slots[resRole]) slots[resRole] = resObj;
        // set activity state for resource object
        if (!resObj.activityState) resObj.activityState = {};
        resObj.activityState[this.activityType] = true;
      }, this);
      slots.id = sim.idCounter++;  // activities need an ID
      slots.startTime = this.occTime;
      // create new activity
      acty = new AT( slots);
      // assign resources map to new activity
      acty.resources = this.resources;
      // register new activity as an ongoing activity
      sim.ongoingActivities[acty.id] = acty;
      // define initial. slots for ActivityEnd event
      slots = {
        occTime: this.occTime + acty.duration,
        activityType: AT.Name,
        activityIdRef: acty.id
      };
      if (this.actor) slots.actor = this.actor;
      // if there is an onActivityStart procedure, execute it
      if (typeof acty.onActivityStart === "function") {
        followupEvents = acty.onActivityStart();
      }
      // schedule activity end event
      followupEvents.push( new oes.ActivityEnd( slots));
      return followupEvents;
    }
  }
});
oes.ActivityEnd = new cLASS({
  Name: "aCTIVITYeND",
  supertypeName: "eVENT",
  properties: {
    "activityType": {range: "NonEmptyString"},
    "activityIdRef": {range: "Integer"}
  },
  methods: {
    "toLogString": function () {
      var occT = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( this.occTime * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          this.occTime;
      var str1 = cLASS[this.activityType].shortLabel, str2 = "",
          resources = sim.ongoingActivities[this.activityIdRef].resources;
      if (!str1) return "";
      str1 += "End";
      Object.keys( resources).forEach( function (resRole) {
        var resObj = resources[resRole];
        str2 += (resObj.name || String(resObj.id)) +", ";
      }, this);
      return str1 +"("+ str2.slice(0, -2) +")" + "@" + occT;
    },
    "onEvent": function () {
      var followupEvents=[];
      var acty = sim.ongoingActivities[this.activityIdRef];  // retrieve activity
      // if there is an onActivityEnd procedure, execute it
      if (acty.onActivityEnd) followupEvents = acty.onActivityEnd();
      // set occTime and duration if there was no pre-set duration
      if (!acty.duration) {
        acty.occTime = this.occTime;
        acty.duration = acty.occTime - acty.startTime;
      }
      // compute resource utilization per resource role
      Object.keys( acty.resources).forEach( function (resRole) {
        var objIdStr = String(acty[resRole].id),
            resUtilMap = sim.stat.resUtil[this.activityType];
        if (resUtilMap[objIdStr] === undefined) resUtilMap[objIdStr] = 0;
        resUtilMap[objIdStr] += acty.duration;
        // update the activity state of resource objects
        delete acty[resRole].activityState[this.activityType];
      }, this);
      // drop activity from list of ongoing activities
      delete sim.ongoingActivities[String( this.activityIdRef)];
      return followupEvents;
    }
  }
});
/******************************************************************************
 *** Processing Network Package ***********************************************
 ******************************************************************************/
/**
 * Processing nodes are objects that play an resource role in processing
 * activities. The definition of a processing node combines defining both an
 * object (as resource) and an implicit activity type, possibly with
 * duration, resource types and onActivityStart/onActivityEnd event rule methods.
 *
 * A simple processing node has an input queue for processing objects and a
 * successor processing node. Processing objects may be either of a generic
 * type "pROCESSINGoBJECT" or of a model-specific subtype of "pROCESSINGoBJECT"
 * (such as "Customer").
 *
 * A processing node object may be defined with a value for its "fixedDuration"
 * property or with a "randomDuration" function, applying to its processing
 * activities. If neither a fixedDuration nor a randomDuration method are defined,
 * the exponential distribution with an event rate of 1 is used as a default function
 * for sampling processing durations. By default, a processing node processes one
 * processing object at a time, but it may also have its "capacity" attribute set to
 * a value greater than 1.
 *
 * In the general case, a processing node may have several input object types,
 * and an input queue for each of them, and either a successor processing node or
 * else an (automatically generated) output queue for each type of output object.
 * By default, when no explicit transformation of inputs to outputs is modeled by
 * specifying an outputTypes map, there is no transformation and it holds that
 * outputs = inputs.
 *
 * TODO: Add resourceTypes
 */
oes.ProcNodeStatusEL = new eNUMERATION( "ProcNodeStatusEL",
    ["idle", "busy", "down"] );
oes.ProcessingNode = new cLASS({
  Name: "pROCESSINGnODE", label: "Processing node", shortLabel: "PN",
  supertypeName: "oBJECT",
  properties: {
    "inputQueue": {range:"oBJECT", minCard: 0, maxCard: Infinity, isOrdered:true,
        label:"Input Queue", shortLabel:"inpQ"},
    "inputType": {range:"oBJECTtYPE", optional:true},  // default: "pROCESSINGoBJECT"
    "status": {range: "ProcessingNodeStatusEL", shortLabel:"stat",
        initialValue: oes.ProcNodeStatusEL.IDLE},
    "successorNode": {range: "pROCESSINGnODE|eXITnODE", optional:true},
    "fixedDuration": {range: "PositiveInteger", optional:true},
    "capacity": {range: "PositiveInteger", optional:true},
    // Ex: {"lemons": {type:"Lemon", quantity:2}, "ice": {type:"IceCubes", quantity:[0.2,"kg"]},...
    "inputTypes": {range: cLASS.Map( Object), optional:true},
    // Ex: {"lemonade": {type:"Lemonade", quantity:[1,"l"]}, ...
    "outputTypes": {range: cLASS.Map( Object), optional:true},
    // a map with PN object names as keys and conditions as values for (X)OR/AND splitting
    "successorNodes": {range: cLASS.Map( Function), optional:true}
  },
  methods: {}
});
/**
 * Processing Objects are generic objects that arrive at an entry node of a PN
 * and are processed at one or more processing nodes before they leave the
 * PN at an exit node.
 */
oes.ProcessingObject = new cLASS({
  Name: "pROCESSINGoBJECT",
  supertypeName: "oBJECT",
  properties: {
    "arrivalTime": { range: "Number", label: "Arrival time", shortLabel: "arrT"}
  }
});
/**
 * Processing Activities are activities that have inputs and outputs and are
 * performed by a processing node (as their actor). The input types/roles,
 * output types/roles and duration of a processing activity are defined in its
 * underlying processing node, which is associated via its "procNode" property.
 *
 * A processing node object definition may have slots for defining a "fixedDuration"
 * attribute or a "randomDuration" method.
 */
oes.ProcessingActivity = new cLASS({
  Name: "pROCESSINGaCTIVITY",
  label: "Processing Activity",
  shortLabel: "Proc",  // for the log
  supertypeName: "aCTIVITY",
  properties: {
    "procNode": {range: "pROCESSINGnODE"}
  },
  methods: {}
});
// define the exponential distribution as the default inter-arrival time
oes.ProcessingActivity.defaultEventRate = 1;
oes.ProcessingActivity.defaultDuration = function () {
  return rand.exponential( oes.ProcessingActivity.defaultEventRate)
};

oes.ProcessingActivityStart = new cLASS({
  Name: "pROCESSINGaCTIVITYsTART",
  supertypeName: "aCTIVITYsTART",
  properties: {
    "procNode": {range: "pROCESSINGnODE"}
  },
  methods: {
    "onConstructionBeforeAssigningProperties": function () {
      // assign fixed (implied) activity type
      this.activityType = "pROCESSINGaCTIVITY";
    },
    "onConstructionAfterAssigningProperties": function () {
      this.resources = this.resources || {};
      // make sure that processing node is a resource
      this.resources["procNode"] = this.procNode;
    },
    "onEvent": function () {
      var pN = this.procNode, slots = {procNode: pN},
          acty=null, followupEvents=[];
      if (!pN.inputQueue[0]) {
        console.log("ProcessingActivityStart with empty inputQueue at "+ pN.name +
            " at step "+ sim.step);
      }
      // create slots for constructing new ProcessingActivity
      if (this.duration) slots.duration = this.duration;
      else if (pN.fixedDuration) slots.duration = pN.fixedDuration;
      else if (pN.randomDuration) slots.duration = pN.randomDuration();
      else slots.duration = oes.ProcessingActivity.defaultDuration();
      pN.status = oes.ProcNodeStatusEL.BUSY;
      Object.keys( this.resources).forEach( function (resRole) {
        var resObj = this.resources[resRole];
        // copy resource def. slots as ref. prop. slots
        if (!slots[resRole]) slots[resRole] = resObj;
        // set activity state for resource object
        if (!resObj.activityState) resObj.activityState = {};
        resObj.activityState[this.activityType] = true;
      }, this);
      slots.id = sim.idCounter++;  // activities need an ID
      slots.startTime = this.occTime;
      // create new activity
      acty = new oes.ProcessingActivity( slots);
      acty.resources = this.resources;  // assign resources map
      sim.ongoingActivities[acty.id] = acty;
      // create slots for constructing a ProcessingActivityEnd event
      slots = {
        occTime: this.occTime + acty.duration,
        activityIdRef: acty.id,
        procNode: pN
      };
      // if there is an onActivityStart procedure, execute it
      if (typeof pN.onActivityStart === "function") {
        followupEvents = pN.onActivityStart();
      }
      // schedule activity end event
      followupEvents.push( new oes.ProcessingActivityEnd( slots));
      return followupEvents;
    }
  }
});
oes.ProcessingActivityEnd = new cLASS({
  Name: "pROCESSINGaCTIVITYeND",
  supertypeName: "aCTIVITYeND",
  properties: {
    "procNode": {range: "pROCESSINGnODE"}
  },
  methods: {
    "onConstructionBeforeAssigningProperties": function () {
      // assign fixed (implied) activity type
      this.activityType = "pROCESSINGaCTIVITY";
    },
    "onEvent": function () {
      var procObj=null, nextNode=null, followupEvt1=null, followupEvt2=null,
          followupEvents=[], pN = this.procNode;
      // retrieve activity
      var acty = sim.ongoingActivities[this.activityIdRef];
      // if there is an onActivityEnd procedure, execute it
      if (pN.onActivityEnd) followupEvents = pN.onActivityEnd();
      // set occTime and duration if there was no pre-set duration
      if (!acty.duration) {
        acty.occTime = this.occTime;
        acty.duration = acty.occTime - acty.startTime;
      }
      // compute resource utilization per resource role
      Object.keys( acty.resources).forEach( function (resRole) {
        var objIdStr = String(acty[resRole].id),
            resUtilMap = sim.stat.resUtil[this.activityType];
        if (resUtilMap[objIdStr] === undefined) resUtilMap[objIdStr] = 0;
        resUtilMap[objIdStr] += acty.duration;
        // update the activity state of resource objects
        delete acty[resRole].activityState[this.activityType];
      }, this);
      // drop activity from list of ongoing activities
      delete sim.ongoingActivities[String( this.activityIdRef)];
      // the successor node may be dynamically assigned by a.onActivityEnd()
      nextNode = pN.successorNode || acty.successorNode;
      // pop processing object from the input queue
      procObj = pN.inputQueue.shift();
      // push object to the input queue of the next node
      nextNode.inputQueue.push( procObj);
      // is the next node a processing node?
      if (nextNode.constructor.Name === "pROCESSINGnODE") {
        // is the next processing node available?
        if (nextNode.inputQueue.length === 1 &&
            nextNode.status === oes.ProcNodeStatusEL.IDLE) {
          // then start its ProcessingActivity
          nextNode.status = oes.ProcNodeStatusEL.BUSY;
          followupEvt1 = new oes.ProcessingActivityStart({
            occTime: this.occTime + sim.nextMomentDeltaT,
            procNode: nextNode,
            resources: acty.resources || {}
          });
          followupEvents.push( followupEvt1);
        }
      } else {  // the next node is an exit node
        followupEvents.push( new oes.Departure({
          occTime: this.occTime + sim.nextMomentDeltaT,
          exitNode: nextNode
        }));
      }
      // are there more items in the input queue and no BREAK happened?
      if (pN.status === oes.ProcNodeStatusEL.BUSY) {
        if (pN.inputQueue.length > 0) {
          followupEvt2 = new oes.ProcessingActivityStart({
            occTime: this.occTime + sim.nextMomentDeltaT,
            procNode: pN,
            resources: {}
          });
          followupEvents.push( followupEvt2);
        } else pN.status = oes.ProcNodeStatusEL.IDLE;
      }
      return followupEvents;
    }
  }
});
/**
 * Entry nodes are objects that participate in exogenous arrival events
 * leading to the creation of processing objects, which are either routed to a
 * successor node or pushed to an output queue. The definition of an entry
 * node combines defining both a (possibly spatial) object and an associated
 * implicit arrival event type, possibly with an "onArrival" event rule method.
 *
 * Entry node object definitions may include (1) a "successorNode" attribute slot
 * for assigning a successor node to which processing objects are routed; (2) a
 * "maxNmrOfArrivals" attribute slot for defining a maximum number of arrival
 * events after which no more arrival events will be created (and, consequently,
 * the simulation may run out of future events); (3) either an "arrivalRate"
 * attribute slot for defining the event rate parameter of an exponential pdf
 * used for computing the time between two consecutive arrival events, or a per-
 * instance-defined "arrivalRecurrence" method slot for computing the recurrence
 * of arrival events; (4) a per-instance-defined "outputType" slot for defining
 * a custom output type (instead of the default "pROCESSINGoBJECT"). If neither an
 * "arrivalRate" nor an "arrivalRecurrence" method are defined, the exponential
 * distribution with an event rate of 1 is used as a default recurrence.
 *
 * Entry nodes have a built-in (read-only) statistics attribute "nmrOfArrivedObjects"
 * counting the number of objects that have arrived at the given entry node.
 *
 * TODO: If no successor node is defined for an entry node, an output queue is
 * automatically created.
 */
oes.EntryNode = new cLASS({
  Name: "eNTRYnODE", label: "Entry node", shortLabel: "Entry",
  supertypeName: "oBJECT",
  properties: {
    "outputType": {range: "oBJECTtYPE", optional:true},  // default: "pROCESSINGoBJECT"
    "successorNode": {range: "pROCESSINGnODE", optional:true},
    "maxNmrOfArrivals": {range: "PositiveInteger", optional:true},
    "arrivalRate": {range: "Decimal", optional:true},
    "nmrOfArrivedObjects": {range: "NonNegativeInteger", shortLabel: "arrObj", optional:true}
  }
});
/**
 * Exit nodes are objects that participate in departure events leading to the
 * destruction of the departing object. The definition of an exit node combines
 * defining both a (possibly spatial) object and an associated implicit departure
 * event type, possibly with an "onDeparture" event rule method.
 *
 * Exit nodes have two built-in statistics attributes: (1) "nmrOfDepartedObjects"
 * counting the number of objects that have departed at the given exit node, and
 * (2) "cumulativeTimeInSystem" for adding up the times in system of all departed
 * objects.
 */
oes.ExitNode = new cLASS({
  Name: "eXITnODE", label: "Exit node", shortLabel: "Exit",
  supertypeName: "oBJECT",
  properties: {
    "inputQueue": {range:"oBJECT", minCard: 0, maxCard: Infinity, isOrdered:true,
      label:"Input Queue", shortLabel:"inpQ"},
    "nmrOfDepartedObjects": {range: "NonNegativeInteger", shortLabel: "depObj", optional:true},
    "cumulativeTimeInSystem": {range: "NonNegativeDecimal", optional:true}
  }
});
/**
 * Set up PN statistics
 * - for any entry node, define the implicit statistics variable "arrivedObjects"
 * - for any exit node, define the implicit statistics variables "departedObjects"
 *   and "meanTimeInSystem"
 */
oes.setupProcNetStatistics = function () {
  var entryNodes = oes.EntryNode.instances,
      exitNodes = oes.ExitNode.instances;
  var initState = sim.scenario.initialState,
      initialObjDefs = initState.objects;
  if (!sim.model.statistics) sim.model.statistics = {};
  // define default statistics variables for PN entry node statistics
  Object.keys( entryNodes).forEach( function (nodeIdStr) {
    var suppressDefaultEntry=false,
        entryNode = entryNodes[nodeIdStr],
        varName = Object.keys( entryNodes).length === 1 ?
            "arrivedObjects" : entryNode.name +"_arrivedObjects";
    entryNode.nmrOfArrivedObjects = 0;
    if (sim.model.statistics[varName] && !sim.model.statistics[varName].label) {
      // model-defined suppression of default statistics
      suppressDefaultEntry = true;
    }
    if (!suppressDefaultEntry) {
      if (!sim.model.statistics[varName]) sim.model.statistics[varName] = {};
      sim.model.statistics[varName].range = "NonNegativeInteger";
      if (!sim.model.statistics[varName].label) {
        sim.model.statistics[varName].label = "Arrived objects";
      }
      sim.model.statistics[varName].entryNode = entryNode;
      sim.model.statistics[varName].computeOnlyAtEnd = true;
    }
  });
  // define default statistics variables for PN exit node statistics
  Object.keys( exitNodes).forEach( function (nodeIdStr) {
    var suppressDefaultEntry=false,
        exitNode = exitNodes[nodeIdStr],
        varName = Object.keys( exitNodes).length === 1 ?
            "departedObjects" : exitNode.name +"_departedObjects";
    exitNode.nmrOfDepartedObjects = 0;
    if (sim.model.statistics[varName] && !sim.model.statistics[varName].label) {
      // model-defined suppression of default statistics
      suppressDefaultEntry = true;
    }
    if (!suppressDefaultEntry) {
      if (!sim.model.statistics[varName]) sim.model.statistics[varName] = {};
      sim.model.statistics[varName].range = "NonNegativeInteger";
      if (!sim.model.statistics[varName].label) {
        sim.model.statistics[varName].label = "Departed objects";
      }
      sim.model.statistics[varName].exitNode = exitNode;
      sim.model.statistics[varName].computeOnlyAtEnd = true;
    }
    exitNode.cumulativeTimeInSystem = 0;
    varName = Object.keys( exitNodes).length === 1 ?
        "meanTimeInSystem" : exitNode.name +"_meanTimeInSystem";
    if (sim.model.statistics[varName] && !sim.model.statistics[varName].label) {
      // model-defined suppression of default statistics
      suppressDefaultEntry = true;
    }
    if (!suppressDefaultEntry) {
      if (!sim.model.statistics[varName]) sim.model.statistics[varName] = {};
      sim.model.statistics[varName].range = "Decimal";
      if (!sim.model.statistics[varName].label) {
        sim.model.statistics[varName].label = "Mean time in system";
      }
      sim.model.statistics[varName].exitNode = exitNode;
      sim.model.statistics[varName].computeOnlyAtEnd = true;
      sim.model.statistics[varName].expression = function () {
        return exitNode.cumulativeTimeInSystem / exitNode.nmrOfDepartedObjects
      };
    }
  });
};

/**
 * Arrival events are associated with an entry node.
 * They may define a quantity of arrived processing objects, which is 1 by default.
 * Viewing an arrival not as an arrival of processing objects, but as an arrival of
 * a customer order, the quantity attribute would allow to define an order
 * quantity that results in the same quantity of processing objects (or production
 * orders) pushed to the entry node's succeeding processing node.
 */
oes.Arrival = new cLASS({
  Name: "aRRIVAL", label: "Arrival", shortLabel: "Arr",
  supertypeName: "eVENT",
  properties: {
    "entryNode": {range: "eNTRYnODE"},
    "quantity": {range: "PositiveInteger", optional:true}
  },
  methods: {
    "onEvent": function () {
      var occT=0, procObj=null, ProcessingObject=null, followupEvents=[];
      if (this.entryNode.outputType) {
        ProcessingObject = cLASS[this.entryNode.outputType];
      } else {  // default
        ProcessingObject = oes.ProcessingObject;
      }
      // update statistics
      this.entryNode.nmrOfArrivedObjects++;
      // create newly arrived processing object
      procObj = new ProcessingObject({arrivalTime: this.occTime});
      sim.addObject( procObj);
      // invoke onArrival event rule method
      if (this.entryNode.onArrival) followupEvents = this.entryNode.onArrival();
      if (this.entryNode.successorNode) {
        // push newly arrived object to the inputQueue of the next node
        this.entryNode.successorNode.inputQueue.push( procObj);
        // is the follow-up processing node available?
        if (this.entryNode.successorNode.status === oes.ProcNodeStatusEL.IDLE) {
          this.entryNode.successorNode.status = oes.ProcNodeStatusEL.BUSY;
          followupEvents.push( new oes.ProcessingActivityStart({
            occTime: this.occTime + sim.nextMomentDeltaT,
            procNode: this.entryNode.successorNode,
            resources: this.entryNode.resources || {}
          }));
        }
      }
      // implement the recurrence of aRRIVAL events
      if (!this.entryNode.maxNmrOfArrivals ||
          this.entryNode.nmrOfArrivedObjects < this.entryNode.maxNmrOfArrivals) {
        // has an arrival recurrence function been defined for the entry node?
        if (this.entryNode.arrivalRecurrence) {
          occT = this.occTime + this.entryNode.arrivalRecurrence();
        } else {  // use the default recurrence
          occT = this.occTime + oes.Arrival.defaultRecurrence();
        }
        sim.scheduleEvent( new oes.Arrival({
          occTime: occT, entryNode: this.entryNode}));
      }
      return followupEvents;
    }
  }
});
// define the exponential distribution as the default inter-arrival time
oes.Arrival.defaultEventRate = 1;
oes.Arrival.defaultRecurrence = function () {
  return rand.exponential( oes.Arrival.defaultEventRate);
};
/**
 * Departure events have two participants: an exit node and the departing object.
 */
oes.Departure = new cLASS({
  Name: "dEPARTURE", label:"Departure", shortLabel:"Dep",
  supertypeName: "eVENT",
  properties: {
    "exitNode": {range: "eXITnODE"}
  },
  methods: {
    "onEvent": function () {
      var followupEvents = [];
      // pop processing object from the input queue
      var procObj = this.exitNode.inputQueue.shift();
      // update statistics
      this.exitNode.nmrOfDepartedObjects++;
      this.exitNode.cumulativeTimeInSystem += this.occTime - procObj.arrivalTime;
      // invoke onDeparture event rule method
      if (typeof this.exitNode.onDeparture === "function") {
        followupEvents = this.exitNode.onDeparture();
      }
      // remove object from simulation
      sim.removeObject( procObj);
      return followupEvents;
    }
  }
});
/**
 * Check model constraints
 * @method
 * @author Gerd Wagner
 */
oes.checkProcNetConstraints = function (params) {
  var errMsgs=[], msg="", evts=[];
  // PNC1: nmrOfArrObjects = nmrOfObjectsAtProcNodes + nmrOfObjectsAtExitNodes + nmrOfDepObjects
  var nmrOfArrObjects = Object.keys( oes.EntryNode.instances).reduce( function (res, nodeObjIdStr) {
    return res + sim.objects[nodeObjIdStr].nmrOfArrivedObjects
  }, 0);
  var nmrOfObjectsAtProcNodes = Object.keys( oes.ProcessingNode.instances).reduce( function (res, nodeObjIdStr) {
    return res + sim.objects[nodeObjIdStr].inputQueue.length
  }, 0);
  var nmrOfObjectsAtExitNodes = Object.keys( oes.ExitNode.instances).reduce( function (res, nodeObjIdStr) {
    return res + sim.objects[nodeObjIdStr].inputQueue.length
  }, 0);
  var nmrOfDepObjects = Object.keys( oes.ExitNode.instances).reduce( function (res, nodeObjIdStr) {
    return res + sim.objects[nodeObjIdStr].nmrOfDepartedObjects
  }, 0);
  if (nmrOfArrObjects !== nmrOfObjectsAtProcNodes + nmrOfObjectsAtExitNodes + nmrOfDepObjects) {
    msg = "The object preservation constraint is violated at step "+ sim.step +
        (params && params.add ? params.add : "") +
        " (nmrOfArrObjects: "+ nmrOfArrObjects +
        ", nmrOfObjectsInSystem: "+ String(nmrOfObjectsAtProcNodes+nmrOfObjectsAtExitNodes) +
        ", nmrOfDepObjects: "+ nmrOfDepObjects +")";
    if (params && params.log) console.log( msg);
    else errMsgs.push( msg);
  }
  // PNC2: if a proc. node has a proc. end event, its input queue must be non-empty
  evts = sim.FEL.getEventsOfType("pROCESSINGaCTIVITYeND");
  evts.forEach( function (procEndEvt) {
    var pN = procEndEvt.procNode, inpQ = pN.inputQueue;
    if (inpQ.length === 0 || !inpQ[0]) {
      msg = "At step "+ sim.step +" "+ (params && params.add ? params.add : "") +
          ", the proc. node "+ (pN.name||pN.id) +" has an empty input queue.";
      if (params && params.log) console.log( msg);
      else errMsgs.push( msg);
    }
  });
  return errMsgs;
};
/******************************************************************************
 *** Experiment Classes *******************************************************
 ******************************************************************************/
/**
 * A complex datatype for experiment parameter definitions
 * @author Gerd Wagner
 */
oes.ExperimentParamDef = new cLASS({
  Name: "eXPERIMENTpARAMdEF",
  isComplexDatatype: true,  // do not collect instances
  properties: {
    "name": {range: "Identifier", label:"Name"},
    "values": {
      range: cLASS.ArrayList("Number"),
      label:"Values",
      val2str: function (v) {
        return v.toString();  // JSON.stringify( v);
      },
      str2val: function (str) {
        return JSON.parse( str);
      },
    }
  }
});
/**
 * An experiment is defined for a scenario, which is defined for a model.
 */
oes.ExperimentDef = new cLASS({
  Name: "eXPERIMENTdEF",
  properties: {
    "id": {range: "AutoNumber"},
    "model": {range: "NonEmptyString", label:"Model name", optional:true},
    "scenarioNo": {range: "PositiveInteger", label:"Scenario number"},
    "experimentNo": {range: "PositiveInteger", label:"Experiment number",
        hint:"The sequence number relative to the underlying simulation scenario"},
    "experimentTitle": {range: "NonEmptyString", optional:true, label:"Experiment title"},
    "replications": {range:"PositiveInteger", label:"Number of replications"},
    "parameterDefs": {range: "eXPERIMENTpARAMdEF", minCard: 0, maxCard: Infinity,
        isOrdered:true, label:"Parameter definitions"},
    "seeds": {range: Array, optional:true}  // seeds.length = replications
  }
});
oes.ExperimentDef.idCounter = 0;  // retrieve actual value from IDB

oes.ExperimentRun = new cLASS({
  Name: "eXPERIMENTrUN",
  properties: {
    "id": {range: "AutoNumber", label:"ID"},  // possibly a timestamp
    "experimentDef": {range: "eXPERIMENTdEF", label:"Experiment def."},
    "dateTime": {range: "DateTime", label:"Date/time"}
  }
});
oes.ExperimentRun.getAutoId = function () {
  return (new Date()).getTime();
};

oes.ExperimentScenarioRun = new cLASS({
  Name: "eXPERIMENTsCENARIOrUN",
  properties: {
    "id": {range: "AutoNumber"},  // possibly a timestamp
    "experimentRun": {range: "eXPERIMENTrUN"},
    "experimentScenarioNo": {range: "NonNegativeInteger"},
    "parameterValueCombination": {range: Array},
    "outputStatistics": {range: Object,
      label:"Output statistics",
      val2str: function (v) {
        return JSON.stringify( v);
      },
      str2val: function (str) {
        return JSON.parse( str);
      },
    }
  }
});
oes.ExperimentScenarioRun.getAutoId = function () {
  return (new Date()).getTime();
};

/******************************************************************************
 *** Lists of predefined cLASSes as reserved names for constraint checks ******
 ******************************************************************************/
oes.predefinedObjectTypes = ["oBJECT","pROCESSINGoBJECT","pROCESSINGnODE","eNTRYnODE","eXITnODE"];
oes.predefinedEventTypes = ["eVENT","aCTIVITYsTART","aCTIVITYeND","aRRIVAL",
    "pROCESSINGaCTIVITYsTART","pROCESSINGaCTIVITYeND","dEPARTURE"];
oes.predefinedActivityTypes = ["aCTIVITY","pROCESSINGaCTIVITY"];

/******************************************************************************
 *** OES Model Objects scenario/experiment/config/model/statistics/etc. *******
 ******************************************************************************/
sim.scenario = sim.scenario || {};
// Define the schema of the model object "scenario"
sim.scenario.objectName = "scenario";
sim.scenario.properties = {
    // defaults to Number.MAX_SAFE_INTEGER
    "simulationEndTime": {range:"Time", optional: true, label:"Duration:", hint:"Simulation duration"},
    "name": {range:"NonEmptyString", optional: true, label:"Name", hint:"Scenario name"},
    "title": {range:"NonEmptyString", optional: true, label:"Title", hint:"Scenario title"},
    "shortDescription": {range:"String", optional: true, label:"Scenario description",
        hint:"Short description of the simulation scenario"},
    "creator": {range:"String", optional: true, label:"Creator",
        hint:"Creator of simulation model"},
    "created": {range:"String", optional: true, label:"Created on",
        hint:"Creation date"},
    "modified": {range:"String", optional: true, label:"Modified on",
        hint:"Modification date"},
    "idCounter": {range:"NonNegativeInteger", optional: true, label:"ID counter"},
    "randomSeed": {range:"PositiveInteger", optional: true, label:"Random seed"},
    "warmUpTime": {range:"Time", optional: true, label:"Warm-up period:",
        hint:"Statistics collection starts after the warm-up period"}
};

sim.experiment = {
  objectName: "experiment",
  properties: {
    "experimentNo": {range:"AutoNumber", label:"Experiment number",
        hint:"Automatically assigned sequence number for experiment"},
    "experimentTitle": {range:"String", optional: true, label:"Experiment title"},
    "replications": {range:"PositiveInteger", label:"Number of replications",
        hint:"Number of replications/repetitions per experiment scenario"},
    "parameterDefs": {
        range: "eXPERIMENTpARAMdEF", maxCard: Infinity,
        label:"Experiment parameters",
        hint:"Define experiment parameters by name and value set specification"
    },
    "seeds": {range: Array, optional: true},
  },
  replications: 0,
  parameters: [],
  scenarios:[],  // are created by the simulator
  validate: function () {
    var errMsgs=[], exp = sim.experiment;
    if (exp.replications > 0) {
      if (exp.seeds) {
        if (!Array.isArray( exp.seeds)) {
          errMsgs.push("The experiment 'seeds' parameter must have an array value! Illegal value: "+ JSON.stringify(exp.seeds));
        } else if (exp.seeds.length < exp.replications) {
          errMsgs.push("Not enough seeds for number of replications!");
        }
      }
      if (exp.parameterDefs.length > 0) {
        exp.parameterDefs.forEach( function (paramDef) {
          if (!paramDef.values && !(paramDef.startValue && paramDef.endValue)) {
            errMsgs.push("Experiment parameter "+ paramDef.name +" has neither a 'values' " +
                "nor 'startValue'/'endValue' attribute(s)!");
          }
        });
      }
      if (exp.timeSeriesStatisticsVariables) {
        exp.timeSeriesStatisticsVariables.forEach( function (varName) {
          if (!(varName in sim.model.statistics)) {
            errMsgs.push("'timeSeriesStatisticsVariables' contains a name ("+ varName +") that does not " +
                "correspond to a sim.model.statistics variable!");
          }
        });
      }
    }
    return errMsgs;
  }
};

// Define the schema of the export panel
sim.export = {
  objectName: "export",
  properties: {
    "header": { range: "Boolean", optional: false, label: "Fields Header", hint: "Export field headers" },
    "sep": { range: "String", optional: true, label: "Field Field Separator", hint: "Export field separator" },
    "timeSeries": { range: "Boolean", optional: true, label: "Export Time Series" },
    "defFilename": { range: "String", optional: true, label: "Experiment Definition", hint: "Export definition of the experiments" },
    "sumFilename": { range: "String", optional: true, label: "Summary Statistics", hint: "Export summary statistics of the experiments" },
    "tsFilename": { range: "String", optional: true, label: "Time Series Data", hint: "Export time series of the experiments" },
  }
};

// Define the schema of the model object "config"
sim.config = {
  objectName: "config",
  properties: {
    "createLog": {range:"Boolean", optional: true, label:"Log", hint:"Create simulation log? (yes/no)"},
    "visualize": {range:"Boolean", optional: true, initialValue: true, label:"Visualization",
        hint:"Visualize a simulation run? (yes/no)"},
    "stepDuration": {range:"NonNegativeInteger", optional: true, label:"Step duration:",
        hint:"How long is a simulation step to take? [ms]"},
    "userInteractive": {range:"Boolean", optional: true, label:"User-interactive",
      hint:"Enable user interactions? (yes/no)"},
    "runInMainThread": {range:"Boolean", optional: true, label:"Run in main thread",
        hint:"Turn off multithreading? (yes/no)"},
    "stopConditionName": {range: "NonEmptyString", optional: true, label:"Stop condition",
      hint:"A stop condition allows to halt a simulation run in a critical situation " +
      "for observing subsequent simulation steps."}
  },
  validate: function () {
    var errMsgs = [];
    if (!Object.keys(sim.model.stopConditions).includes(sim.config.stopCondition)) {
      errMsgs.push("The name of a stop condition must be from sim.model.stopConditions!");
    }
  }
};

// Define the schema of the model object "sim"
sim.objectName = "sim";
sim.properties = {
  "step": {range:"NonNegativeInteger", label:"Step:", hint:"Simulation step"},
  "time": {range:"Number", label:"Time:", hint:"Simulation time"}
};
sim.stepIncrement = 1;
sim.space = {overlayGrid: {}};

// Define the schema of the observationUI
sim.config.observationUI = {
  objectName: "observationUI",
  canvas: {},
  properties: {
    "spaceView": {range: Object, label: "Space view"},
    "objectViews": {range: Object, label: "Object views"}
  }
};
// define the observationUI.monitor
sim.config.observationUI.monitor = {};
// Define the schema of the observationUI.spaceView
sim.config.observationUI.spaceView = {
  objectName: "spaceView",
  properties: {
    "type": {range: "NonEmptyString", label: "Space view type"},
    "gridCellSize": {range: "PositiveInteger", label: "Grid cell size"}
  }
};
// define the visualization record for non-spatial models
sim.config.observationUI.vis = {SVG:{}};
// define the objectViews definition map
sim.config.observationUI.objectViews = {};
// define the map for runtime objectViews
sim.objectViews = {};

// Define the schema of the model object "model"
sim.model = sim.model || {};
sim.model.v = {};  // definitions of (global) model variables available in sim.v
sim.model.f = {};  // (global) model functions

//TODO: can this be dropped?
oes.defineSimModelSchema = function () {
  sim.model.objectName = "model";
  sim.model.properties = {
    "name": {range:"NonEmptyString", label:"Name"},
    "title": {range:"NonEmptyString", label:"Title", hint:"Model title"},
    "shortDescription": {range:"String", optional: true, label:"Model description",
      hint:"Short description of the simulation model"},
    "systemNarrative": {range:"String", optional: true, label:"System narrative",
        hint:"Narrative of the system under investigation"},
    "license": {range:"String", optional: true, label:"License",
      hint:"Copyright license"},
    "creator": {range:"String", optional: true, label:"Creator",
      hint:"Creator of simulation model"},
    "created": {range:"String", optional: true, label:"Created on",
      hint:"Creation date"},
    "modified": {range:"String", optional: true, label:"Modified on",
      hint:"Modification date"},
    "time": {range:["discrete","continuous"], optional: true,
      label:"Time model", hint:"Either 'discrete' (default) or 'continuous'"},
    "timeUnit": {range:["ms","s","m","h","D","W","M","Y"], optional: true,
        label:"Time unit", hint:"A time unit like 'ms', 's' or 'm'"},
    "timeIncrement": {range:"Decimal", optional: true, label:"Time increment",
        hint:"By default: 1"},
    "objectTypes": {range: Array, label:"Object types"},
    "eventTypes": {range: Array, label:"Event types"},
    "activityTypes": {range: Array, optional: true, label:"Activity types"}
  };
  // Define the schema of the model object "model.space"
  sim.model.space.objectName = "spaceModel";
  sim.model.space.properties = {
      "type": {range:["1D-Grid","IntegerGrid","ObjectGrid","3D-Grid","1D","2D","3D"], label:"Space type"},
      "geometry": {range:["TOROIDAL","EUCLIDEAN"], optional: true, label:"Space geometry",
        hint:"Either 'TOROIDAL' (default) or 'EUCLIDEAN'"},
      "xMax": {range:"NonNegativeInteger", label:"Width", hint:"Maximum x value"},
      "yMax": {range:"NonNegativeInteger", optional: true, label:"Height", hint:"Maximum y value"},
      "zMax": {range:"NonNegativeInteger", optional: true, label:"Depth", hint:"Maximum z value"}
  };
};
sim.model.objectName = "model";
sim.model.properties = {
  "name": {range:"NonEmptyString", label:"Name"},
  "title": {range:"NonEmptyString", label:"Title", hint:"Model title"},
  "shortDescription": {range:"String", optional: true, label:"Model description",
    hint:"Short description of the simulation model"},
  "systemNarrative": {range:"String", optional: true, label:"System narrative",
    hint:"Narrative of the system under investigation"},
  "license": {range:"String", optional: true, label:"License",
    hint:"Copyright license"},
  "creator": {range:"String", optional: true, label:"Creator",
    hint:"Creator of simulation model"},
  "created": {range:"String", optional: true, label:"Created on",
    hint:"Creation date"},
  "modified": {range:"String", optional: true, label:"Modified on",
    hint:"Modification date"},
  "time": {range:["discrete","continuous"], optional: true,
    label:"Time model", hint:"Either 'discrete' (default) or 'continuous'"},
  "timeUnit": {range:["ms","s","m","h","D","W","M","Y"], optional: true,
    label:"Time unit", hint:"A time unit like 'ms', 's' or 'm'"},
  "timeIncrement": {range:"Decimal", optional: true, label:"Time increment",
    hint:"By default: 1"},
  "timeRoundingDecimalPlaces": {range:"NonNegativeInteger", optional: true, label:"Time decimal places",
    hint:"Number of decimal places for rounding the simulation time value"},
  "objectTypes": {range: Array, label:"Object types"},
  "eventTypes": {range: Array, label:"Event types"},
  "activityTypes": {range: Array, optional: true, label:"Activity types"},
  "stopConditions": {range: Object, optional: true, label:"Stop conditions", hint:"Stop conditions " +
    "allow to halt a simulation run in a critical situation for observing subsequent simulation steps."},
};
sim.model.validate = function () {
  var errMsgs = [];
  if (sim.model.timeRoundingDecimalPlaces !== undefined) {
    if (!sim.model.time) {
      sim.model.time = "continuous";
      console.warn("Set sim.model.time = 'continuous' for time rounding!");
    } else if (sim.model.time !== "continuous") {
      errMsgs.push("Time rounding can only be enabled for a model with continuous time!");
    }
  } else if (sim.model.time === "continuous") {
    sim.model.timeRoundingDecimalPlaces = oes.defaults.timeRoundingDecimalPlaces;
  }
};

// Define the schema of the model object "model.space"
sim.model.space = sim.model.space || {};
sim.model.space.objectName = "spaceModel";
sim.model.space.properties = {
  "type": {range:["1D-Grid","IntegerGrid","ObjectGrid","3D-Grid","1D","2D","3D"], label:"Space type"},
  "geometry": {range:["TOROIDAL","EUCLIDEAN"], optional: true, label:"Space geometry",
    hint:"Either 'TOROIDAL' (default) or 'EUCLIDEAN'"},
  "xMax": {range:"NonNegativeInteger", label:"Width", hint:"Maximum x value"},
  "yMax": {range:"NonNegativeInteger", optional: true, label:"Height", hint:"Maximum y value"},
  "zMax": {range:"NonNegativeInteger", optional: true, label:"Depth", hint:"Maximum z value"}
};

// Define the schema of the model object "scenario.initialState"
sim.scenario.initialState = {
  objectName: "initialState",
  properties: {
    // a map, and therefore an instance of Object
    "objects": {range: Object, optional: true, label:"Initial objects"},
    // a map, and therefore an instance of Object
    "events": {range: Object, optional: true, label:"Initial events"}
  },
  validate: function () {
    var errors=[];
    var isProcNetSim = this.objects &&
            Object.keys( this.objects).some( function (objIdStr) {
              return this.objects[objIdStr].typeName === "eNTRYnODE";
            }, this);
    if (!this.events && !isProcNetSim &&
        !(sim.model.timeIncrement || sim.model.OnEachTimeStep)) {
      errors.push("There must be at least one initial event when neither " +
          "a time increment nor an 'OnEachTimeStep' method has been defined.");
    }
    if (!this.objects) return;
    Object.keys( this.objects).forEach( function (objIdStr) {
      var slots={}, Class=null;
      // check object IDs
      if (String( parseInt( objIdStr)) !== objIdStr) {
        errors.push("An object has a non-integer ID: "+ objIdStr);
      }
      slots = this.objects[objIdStr];
      Class = cLASS[slots.typeName];
      Object.keys( slots).forEach( function (p) {
        var decl = Class.properties[p], constrVio=null;
        if (decl) {
          constrVio = cLASS.check( p, decl, slots[p]);
          if (!(constrVio instanceof NoConstraintViolation)) {
            errors.push( slots.typeName +"("+ objIdStr +"): "+ constrVio.message);
          }
        }
      });
    }, this);
    return errors;
  }
};
// Define the schema of the model object "scenario.initialStateUI"
sim.scenario.initialStateUI = {
  objectName: "initialStateUI",
  properties: {
    "editableProperties": {range: Object, label:"Editable properties"}
  },
  validate: function () {
    if (!this.editableProperties) return;
    Object.keys( this.editableProperties).forEach( function (className) {
      // ...
    }, this);
  }
};
sim.scenario.initialStateUI.editableProperties = {};

/**
 * Check correctness of scenario/model definitions
 * @method
 * @author Gerd Wagner
 */
oes.verifySimulation = function () {
  var errMsgs=[];

  function checkModelObject( mo) {  // mo = model object
    var props = mo.properties, errors=[];
    if (!props) {
      errors.push("The model object "+ mo.objectName +" does not have a declaration of 'properties'!");
      return;
    }
    // check property slots
    Object.keys( props).forEach( function (prop) {
      var constrVio = cLASS.check( prop, props[prop], mo[prop]);
      if (!(constrVio instanceof NoConstraintViolation)) {
        errors.push( constrVio.constructor.name +": "+ constrVio.message);
      }
    });
    if (mo.validate) {  // invoke specific check method
      errors.merge( mo.validate());
    }
    if (errors.length > 0) {
      errors.forEach( function (err, i) {
        errors[i] = "["+ mo.objectName +"] " + err;
      });
    }
    return errors;
  }
  // check model definition
  errMsgs.merge( checkModelObject( sim.model));
  // check SPACE model definition
  if (sim.model.space.type) {
    errMsgs.merge( checkModelObject( sim.model.space));
  }
  // check scenario definition
  errMsgs.merge( checkModelObject( sim.scenario));
  // check experiment definition
  if (sim.experiment.replications > 0) errMsgs.merge( checkModelObject( sim.experiment));
  // check initial state definition
  errMsgs.merge( checkModelObject( sim.scenario.initialState));
  // check definitions of STATISTICS variables
  if (sim.model.statistics) {
    Object.keys( sim.model.statistics).forEach( function (varName) {
      var statVar = sim.model.statistics[varName],
          OT = statVar.objectType,
          aggrFunc = statVar.aggregationFunction;
      // statistics variable bound to a model variable
      if (statVar.globalVariable) {
        if (sim.model.v[statVar.globalVariable] === undefined)
          errMsgs.push( "[Statistics] Global model variable <var>"+
              statVar.globalVariable +"</var> has not been defined!");
      }
      if (OT && !sim.model.objectTypes.includes( OT) &&
          !oes.predefinedObjectTypes.includes( OT)) {
        errMsgs.push( "[Statistics] Specified object type <var>"+
            OT +"</var> is not included in sim.model.objectTypes!");
      }
      // variable bound to specific object
      if (statVar.objectIdRef && !sim.objects[statVar.objectIdRef]) {
        errMsgs.push( "[Statistics] Invalid definition of statistics variable <var>"+
            varName +"</var>: There is no object with ID "+ statVar.objectIdRef +"!");
      }
      // aggregation function must be defined
      if (aggrFunc && typeof( oes.stat[aggrFunc]) !== 'function') {
        errMsgs.push( "[Statistics] Invalid definition of statistics variable <var>"+
            varName +"</var>: <code>"+ aggrFunc +
            "</code> is not an admissible aggregation function name!");
      }
      // if variable is bound to a property, objectIdRef or objectType must be provided
      if (statVar.property && !statVar.objectIdRef && !(OT && cLASS[OT])) {
        errMsgs.push( "[Statistics] Invalid definition of statistics variable <var>"+
            varName +"</var>:"+ (!OT ? " object type name missing!" :
                                 !cLASS[OT] ? " object type "+ OT +" not defined!" :
                                 !aggrFunc ? " aggregationFunction missing!":""));
      }
      //TODO: add further checks!
    });
  }
  errMsgs.concat( oes.checkModelConstraints());
  return errMsgs;
};
/**
 * Determine if a simulation is based on a PN model
 */
oes.isProcNetModel = function () {
  var initState = sim.scenario.initialState,
      initialObjDefs = initState.objects,
      initialObj= [], keys=[], key="", i=0;
  if (initialObjDefs) {  // a map of object definitions
    keys = Object.keys( initialObjDefs);
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      initialObj = initialObjDefs[key];
      if (initialObj.typeName === "eNTRYnODE") return true;
    }
  }
  return false;
};
/**
 * Check model constraints
 * @method
 * @author Gerd Wagner
 */
oes.checkModelConstraints = function (params) {
  var errMsgs=[];
  if (sim.model.constraints) {
    Object.keys( sim.model.constraints).forEach( function (constrName) {
      var constraint = sim.model.constraints[constrName], msg="";
      if (!constraint()) {
        msg = "The constraint '"+ constrName +"' is violated at step "+ sim.step;
        if (params && params.log) console.log( msg);
        else errMsgs.push( msg);
      }
    })
  }
  return errMsgs;
};
/**
 * Set up Storage Management
 *
 * @method
 * @author Gerd Wagner
 */
oes.setupStorageManagement = function (dbName) {
  var storageAdapter = {dbName: dbName};
  if (!('indexedDB' in self)) {
    console.log("This browser doesn't support IndexedDB. Falling back to LocalStorage.");
    storageAdapter.name = "LocalStorage";
  } else {
    storageAdapter.name = "IndexedDB";
  }
  sim.storeMan = new sTORAGEmANAGER( storageAdapter);
  //sim.storeMan.createEmptyDb().then( oes.setupFrontEndSimEnv);
  // last step in setupFrontEndSimEnv, then wait for user actions
  sim.storeMan.createEmptyDb([oes.ExperimentRun, oes.ExperimentScenarioRun]).then( function () {
    console.log("Empty IndexedDB created.");
  });
};
/**
 * Set up front-end simulation environment
 *
 * @method
 * @author Gerd Wagner
 */
oes.setupFrontEndSimEnv = function () {
  var errors=[], el=null;
  sim.initializeSimulator();
  // set up initial state
  sim.initializeModelVariables();
  sim.createInitialObjEvt();
  if (Object.keys( oes.EntryNode.instances).length > 0) {
    oes.setupProcNetStatistics();
  }
  // initialize statistics
  if (sim.model.statistics) oes.stat.initialize();
  // check simulation definition constraints
  if (oes.loadManager && oes.loadManager.codeLoadingMode !== "deploy") {
    errors = oes.verifySimulation();
    if (errors.length > 0) {
      el = dom.createElement("div", {id:"errors"});
      el.appendChild( dom.createElement("h1", {content: "Errors"}));
      errors.forEach( function (err) {
        el.appendChild( dom.createElement("p", {content: err}));
      });
      document.body.insertBefore( el, document.body.firstElementChild);
    } else {
      console.log("No errors detected in "+ oes.loadManager.codeLoadingMode + " mode.");
    }
  }
  // set up the UI
  oes.ui.setupUI();
  // visualize initial state (step 0)
  if (sim.config.visualize) oes.ui.visualizeStep();
};

/*******************************************************
 Simulation Log
********************************************************/
sim.logStep = function (stepLog) {
  // create new row and insert as first row in table
  var rowEl = sim.ui.logEl.insertRow(0);
  rowEl.insertCell().textContent = stepLog.simStep;
  rowEl.insertCell().textContent = stepLog.simTime;
  rowEl.insertCell().textContent = stepLog.systemStateInfo;
  rowEl.insertCell().textContent = stepLog.evtInfo;
};
/*******************************************************************************
 * EventList maintains an ordered list of events using Binary Heap
 * 
 * @copyright Copyright 2018 Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Luis Gustavo Nardin
 ******************************************************************************/
var oes = oes || {};
oes.EventList = function EventList ( a ) {
  this.heap = new BinaryHeap( function ( e ) {
    return e.occTime;
  } );
};
oes.EventList.prototype.add = function ( e ) {
  if (sim.model.timeRoundingDecimalPlaces) {
    e.occTime = Math.round( e.occTime * sim.timeRoundingFactor) /
        sim.timeRoundingFactor;
  }
  this.heap.push( e );
};
oes.EventList.prototype.getNextOccurrenceTime = function () {
  if ( !this.heap.isEmpty() ) {
    return this.heap.getFirst().occTime;
  } else {
    return 0;
  }
};
oes.EventList.prototype.getNextEvent = function () {
  if ( !this.heap.isEmpty() ) {
    return this.heap.pop();
  } else {
    return null;
  }
};
oes.EventList.prototype.getAllEvents = function () {
  return this.heap.content;
};
oes.EventList.prototype.isEmpty = function () {
  return this.heap.isEmpty();
};
oes.EventList.prototype.removeNextEvents = function () {
  var nextTime = 0, nextEvents = [];
  if ( this.heap.isEmpty() ) {
    return [];
  }
  nextTime = this.heap.getFirst().occTime;
  while ( !this.heap.isEmpty() &&
      this.heap.getFirst().occTime === nextTime ) {
    nextEvents.push( this.heap.pop() );
  }
  return nextEvents;
};
oes.EventList.prototype.clear = function ( e ) {
  this.heap.clear();
};

oes.EventList.prototype.containsEventOfType = function ( evtType ) {
  return this.heap.getContent().some( function (evt) {
    return evt.constructor.Name === evtType;
  } );
};
oes.EventList.prototype.getEventsOfType = function ( evtType ) {
  return this.heap.getContent().filter( function (evt) {
    return evt.constructor.Name === evtType;
  } );
};
oes.EventList.prototype.toString = function () {
  var str = "";
  if ( !this.heap.isEmpty() ) {
    str = this.heap.getContent().reduce( function ( serialization, e ) {
      return serialization + ", " + e.toLogString();
    }, "" );
    str = str.slice( 1 );
  }
  return str;
};

/**
 * @fileOverview Variables and procedures for (ex-post) statitsics
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
// create namespace oes if not already created by some other "module"
if (typeof oes !== "object") var oes = {};
/**
 * Computation of the simulation statistics.
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @license The MIT License (MIT)
 */
oes.stat = {
  timeSeriesCompressionSteps: 1 // length of array values to be compressed into one value
};
sim.stat = {  // run-time statistics variables
  timeSeries: {}
};
sim.aux = sim.aux || {}; // auxiliary variables
sim.aux.stat = {
  prevValue: {}
};
/**
 * Initialize the ex-post statistics
 */
oes.stat.initialize = function () {
  var aggReturnType = {  // stores the return types of various aggregation functions
    'avg': 'Decimal'
  };
  Object.keys( sim.model.statistics).forEach( function (varName) {
    var statVar = sim.model.statistics[varName],
        initialVal = statVar.initialValue || 0,
        OT="", objIdRefStr="", objectRef=null,
        propDecl="", globVar="";
    statVar.name = varName;
    // is the statistics variable bound to a global variable?
    if (statVar.globalVariable) {
      globVar = statVar.globalVariable;
      if (typeof sim.model.v[globVar] === "object") {
        initialVal = sim.model.v[globVar].initialValue || 0;
      } else initialVal = sim.model.v[globVar];
    } else if (statVar.property && statVar.objectIdRef) {
      // the variable is bound to a property slot of a specific object
      objIdRefStr = String( statVar.objectIdRef);
      if (statVar.objectType) OT = statVar.objectType;
      else OT = sim.objects[objIdRefStr].constructor.Name;
      objectRef = cLASS[OT].instances[objIdRefStr];
      if (objectRef) {
        statVar.objectRef = objectRef;  // store reference to the object
        // the statistics variable default range is the property range
        if (!statVar.range) {
          if (statVar.aggregationFunction &&
              aggReturnType[statVar.aggregationFunction]) {
            statVar.range = aggReturnType[statVar.aggregationFunction];
          } else {
            propDecl = cLASS[objectRef.constructor.Name].properties[statVar.property];
            statVar.range = propDecl.range;
          }
        }
        initialVal = objectRef[statVar.property];
      }
    } else if (statVar.property && statVar.objectType) {
      OT = statVar.objectType;
      if (statVar.aggregationFunction) {
        initialVal = 0;
        if (aggReturnType[statVar.aggregationFunction]) {
          statVar.range = aggReturnType[statVar.aggregationFunction];
        }
      } else { // the variable is bound to a collection of property slots
        /*
        propDecl = cLASS[OT].properties[statVar.property];
        statVar.range = propDecl.range;
        */
        statVar.hasRecordRange = true;
        initialVal = {};
        Object.keys( cLASS[OT].instances).forEach( function (objIdStr) {
          initialVal[objIdStr] = cLASS[OT].instances[objIdStr][statVar.property];
        });
      }
    } else if (statVar.gridCellProperty && sim.space.grid) {
      // statistics variable for grid cell property
      if (!statVar.range) {
        if (statVar.aggregationFunction &&
          aggReturnType[statVar.aggregationFunction]) {
          statVar.range = aggReturnType[statVar.aggregationFunction];
        } else {
          propDecl = sim.space.grid[0][0].constructor.properties[statVar.gridCellProperty];
          if (propDecl)  statVar.range = propDecl.range;
        }
      }
    }
    // is the variable's time series to be created?
    statVar.createTimeSeries = (statVar.showTimeSeries || sim.experiment.timeSeriesStatisticsVariables &&
        sim.experiment.timeSeriesStatisticsVariables.includes( statVar));
    if (statVar.createTimeSeries) {
      if (sim.timeIncrement === undefined){
        sim.stat.timeSeries[varName] = [[],[]];
      } else {
        sim.stat.timeSeries[varName] = [];
      }
    }
    // is variable bound to a time series aggregation?
    statVar.isBoundToTimeSeriesAggregate = (statVar.aggregationFunction &&
        (statVar.objectIdRef && statVar.property || statVar.globalVariable));
    // is variable bound to an aggregate over an ObjectType population?
    statVar.isBoundToPopulationAggregate =
        (!statVar.objectIdRef && statVar.property && OT);
    // determine Integer range
    if (statVar.range) {
      statVar.hasIntegerRange = cLASS.isIntegerType( statVar.range);
    } else if (statVar.globalVariable && typeof sim.model.v[globVar] === "object" &&
             statVar.aggregationFunction && statVar.aggregationFunction !== "avg") {
      statVar.hasIntegerRange = cLASS.isIntegerType( sim.model.v[globVar].range);
    } else {
      statVar.hasIntegerRange = false;
    }
    // initialize runtime statistics variables in sim.stat
    if (statVar.hasIntegerRange) sim.stat[varName] = parseInt( initialVal);
    else sim.stat[varName] = initialVal;
    // store as previous value
    sim.aux.stat.prevValue[varName] = sim.stat[varName];
  });
  // initialize resource utilization statistics
  if (sim.model.activityTypes && sim.model.activityTypes.length > 0) {
    sim.stat.resUtil = {};
    sim.model.activityTypes.forEach( function (aT) {
      sim.stat.resUtil[aT] = {};
    });
  }
  // initialize PN statistics
  if (Object.keys( oes.ProcessingNode.instances).length > 0) {
    sim.stat.resUtil = sim.stat.resUtil || {};
    sim.stat.resUtil["pROCESSINGaCTIVITY"] = {};
  }
};
/**
 * The timeSeries arrays are limited in length for two reasons:
 * - large arrays results in slowing down the simulation
 * - we have limited pixels on the screen to show the statistics graphs
 *
 * Actually, the maximum length is limited to the number of pixels
 * available for the statistics graphs, so one time series value for
 * each one physical pixels. This is achieved by compressing the
 * array, averaging groups of values to one value.
 *
 * @param maxLength
 *    the maximum allowed length of the timeSeries array
 */
oes.stat.prepareTimeSeriesCompression = function (maxLength) {
  maxLength = maxLength || sim.scenario.simulationEndTime; // defaults to "no restriction - all steps"
  oes.stat.timeSeriesCompressionSteps = Math.floor(sim.scenario.simulationEndTime / maxLength);
  if (oes.stat.timeSeriesCompressionSteps < 1) oes.stat.timeSeriesCompressionSteps = 1;
  console.log("Statistics: timeSeriesCompressionSteps="
    + oes.stat.timeSeriesCompressionSteps + " (1 means no compression)");
};
/**
 * Reset the statistics variables. This means that any computed
 * value is reset to the initial value and all the connection with
 * object(s) references are recreated.
 */
oes.stat.reset = function () {
  oes.stat.initialize();
};

/**
 * Update the statistic variables at the end of each simulation step.
 */
oes.stat.updateStatistics = function () {
  var i=0, statVar=null,
      statVarNames = Object.keys( sim.model.statistics),
      n = statVarNames.length;
  for (i=0; i<n; i++) {
    statVar = sim.model.statistics[statVarNames[i]];
    // computeOnlyAtEnd statistic variables are ignored at this point
    if (!statVar.computeOnlyAtEnd) oes.stat.updateStatisticsVariable( statVar);
  }
};

/**
 * Update a statistics variable X and assign the result to sim.stat["X"]
 * @param statVar  the statistics variable declaration
 */
oes.stat.updateStatisticsVariable = function (statVar) {
  var varName = statVar.name, valueAtCurrentStep;
  var cellsOnX = 0, cellsOnY = 0, i = 0, j = 0;
  var grid=null, sum=0, pName="", OT=null;
  // expression/function is used to compute the value
  if (typeof statVar.expression === 'function') {
    valueAtCurrentStep = statVar.expression() || 0;
  } else if (statVar.globalVariable) { // value obtained from a global variable
    valueAtCurrentStep = sim.v[statVar.globalVariable] || 0;
  } else if (statVar.objectRef) { // value obtained from an object's property slot
    valueAtCurrentStep = statVar.objectRef[statVar.property] || 0;
  } else if (statVar.property && statVar.objectType && !statVar.aggregationFunction) {
    // the variable is bound to a collection of property slots
    valueAtCurrentStep = {};
    OT = cLASS[statVar.objectType];
    Object.keys( OT.instances).forEach( function (objIdStr) {
      valueAtCurrentStep[objIdStr] = OT.instances[objIdStr][statVar.property];
    });
  } else if (statVar.entryNode) { // PN statistics
    valueAtCurrentStep = statVar.entryNode.nmrOfArrivedObjects || 0;
  } else if (statVar.exitNode) { // PN statistics
    valueAtCurrentStep = statVar.exitNode.nmrOfDepartedObjects || 0;
  } else if (statVar.gridCellProperty) {
    grid = sim.space.grid;
    cellsOnX = grid.length;
    cellsOnY = grid[0].length;
    pName = statVar.gridCellProperty;
    for (i = 0; i < cellsOnX; i++) {
      for (j = 0; j < cellsOnY; j++) sum += (grid[i][j])[pName];
    }
    valueAtCurrentStep = sum / (cellsOnX * cellsOnY);
    if (statVar.aggregationFunction) {
      valueAtCurrentStep = oes.stat[statVar.aggregationFunction](
        sim.aux.stat.prevValue[varName], valueAtCurrentStep);
    }
  } else {  // value computed manually in the simulation scenario
    valueAtCurrentStep = sim.stat[varName];
  }
  //TODO: support TimeSeriesAggregate of PopulationAggregate
  if (statVar.isBoundToTimeSeriesAggregate) {
    valueAtCurrentStep = oes.stat[statVar.aggregationFunction](
        sim.aux.stat.prevValue[varName], valueAtCurrentStep);
  } else if (statVar.isBoundToPopulationAggregate) {
    valueAtCurrentStep = oes.stat.computePopulationAggregate(statVar);
  }
  // format integer values
  if (statVar.hasIntegerRange) sim.stat[varName] = parseInt( valueAtCurrentStep);
  else sim.stat[varName] = valueAtCurrentStep;
  // check if the variable's time series has to be stored/returned
  if (statVar.createTimeSeries) {
    if (sim.timeIncrement) {
      //sim.stat.timeSeries[varName][sim.step] = sim.stat[varName];
      sim.stat.timeSeries[varName].push( sim.stat[varName]);
      if (oes.stat.timeSeriesCompressionSteps > 1
          && sim.step % oes.stat.timeSeriesCompressionSteps === 0) {
        oes.stat.compressTimeSeries( sim.stat.timeSeries[varName]);
      }
    } else {  // next-event time progression
      sim.stat.timeSeries[varName][0][sim.step] = sim.time;
      // TODO: check how we can average steps for time progression case
      sim.stat.timeSeries[varName][1][sim.step] = sim.stat[varName];
      // TODO: check how we can average statistic values for time progression case
    }
  }
  // assign current value to previous value
  sim.aux.stat.prevValue[varName] = sim.stat[varName];
};

/**
 * Compress time series to keep its length in a specified
 * range, avoiding long arrays that slow down the simulation.
 * @param ts
 *    the time series to compress
 */
oes.stat.compressTimeSeries = function (ts) {
  var avgLen = oes.stat.timeSeriesCompressionSteps;
  var i = 0, n = ts.length, avg = 0;
  // compute average value for the latest set, which will be compressed
  for (i = n - avgLen; i < n; i++) avg += ts[i];
  // remove averaged values and append the compressed (average) value
  ts.splice(n-avgLen-1, avgLen, avg /= avgLen);
};

/**
 * Compute a Population Aggregate
 */
oes.stat.computePopulationAggregate = function (statVar) {
  var OT = statVar.objectType,
      objIDs = Object.keys( cLASS[OT].instances),
      n = objIDs.length,
      aggrF = statVar.aggregationFunction,
      aggr=0, i=0;
  switch (aggrF) {
  case "min":
  case "max":
    for (i=0; i < n; i++) {
      aggr = Math[aggrF]( aggr, cLASS[OT].instances[String(id)][statVar.property]);
    }
    break;
  case "sum":
  case "avg":
    for (i=0; i < n; i++) {
      aggr += cLASS[OT].instances[String(id)][statVar.property];
    }
    if (aggrF === "avg") aggr = aggr/n;
    break;
  }
  return aggr;
};
/**
 * Compute the values of the statistic variables which are only required
 * to be computed at the simulation end. This method has to be called when
 * the simulation ends.
 */
oes.stat.computeOnlyAtEndStatistics = function () {
  Object.keys( sim.model.statistics).forEach( function (varName) {
    var statVar = sim.model.statistics[varName];
    if (statVar.computeOnlyAtEnd) oes.stat.updateStatisticsVariable( statVar);
  });
};

/**
 * Compute the <code>max</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.max = function (oldValue, newValue) {
  return Math.max( oldValue, newValue);
};

/**
 * Compute the <code>min</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.min = function (oldValue, newValue) {
  return Math.min( oldValue, newValue);
};
/**
 * Compute the <code>sum</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.sum = function (oldValue, newValue) {
  return oldValue + newValue;
};
/**
 * Compute the <code>avg</code> (average, arithmetic mean) aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.avg = function (oldValue, newValue) {
  if (sim.step >= 1) return (oldValue + (newValue - oldValue) / (sim.step + 1));
  else return oldValue;
};
/**
 * Summary statistics record
 */
oes.stat.summary = {
  average: {label:"Average", f: math.mean},
  stdDev: {label:"Std.dev.", f: math.stdDev},
  min: {label:"Minimum", f: Array.min},
  max: {label:"Maximum", f: Array.max},
  confIntLowerBound: {label: "Conf.Int.Lower", f: function ( data ) {
    sim.stat.CurrentCI = math.confInt( data ); // {lowerBound: x, upperBound: y}
    return sim.stat.CurrentCI.lowerBound;
  }},
  confIntUpperBound: {label: "Conf.Int.Upper", f: function () {
    return sim.stat.CurrentCI.upperBound;
  }}
};
/**
 * @fileOverview A JavaScript implementation of an Object-Event Simulator defined as
 * a JS object "sim". The simulator is associated with a simulation model (sim.model)
 * and one or more simulation scenarios (sim.scenarios).
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 *
 * Integrity *constraints* that must be satisfied at any simulation step can be defined
 * as Boolean functions in the map "model.constraints" with constraint names being the
 * keys. They are currently checked for the initial state only (in "setupInitialState").
 * In future versions there may be an option that constraints are checked in all
 * simulation steps for catching more model errors.
 */
/*
Improvements/extensions
v1
 -  (1) merge AT.fixedDuration and AT.randomDuration() into AT.duration()
    (2) rename the property "resources" to "resourceRoles"
    (3) rename the property "actor" to "performer" 
    (4) refactor oes.ProcNodeStatusEL to oes.ResourceStatusEL and "idle" to "available"
    (5) introduce processOwner (?) and resourcePools
 - support the definition of a "warm-up period"
 - allow scheduling new events
   (a) without an occTime setting, such that they are scheduled with a delay of nextMomentDeltaT
   (b) without an occTime setting, but with a "delay"
 - refactor createInitialObjEvt into a create and a reset procedure such that already created initial objects
    are not deleted, but reset, when rerunning a simulation
 - make constraint checking on object/event creation conditional depending on
       areConstraintsToBeChecked = sim.isConstraintCheckingTurnedOn ||
          sim.isConstraintCheckingTurnedOn === undefined && oes.loadManager &&
          oes.loadManager.codeLoadingMode !== "deploy";
 - improve the initial state definition UI:
   + support value changes via IndexedDB
   + allow adding/dropping objects in the ClassPopulationWidget
   + support enumeration attributes in the ClassPopulationWidget
 - Add observation UIs for visualizing variables in "monitors"

 - make a sims/basic-tests.html that invokes one or more seeded scenario simulations and checks statistics results
 - Define set/get for scenario.visualize and use the setter for dropping/setting-up the visualization (canvas)

 - Find out what is the meaning of "variable" versus "parameter" in AnyLogic

 - run experiment scenarios in parallel worker threads using the navigator.hardwareConcurrency information
   (see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)

 - improve clock-time measuring and support real-time simulation enabled by realtimeFactor set to 1
 - Refactor the simulation step/loop by parametrizing pre-defined events from an extension library (such as "PN Models")
 - New model constraint checks:
   + prevent the use of pre-defined cLASS names ("aRRIVAL", etc.) and predefined property names (oes.predfinedProperties)

 - Implement support for the "recurrence" attribute of entry nodes
 - Allow setting a waiting timeout for the input queues of processing nodes (corresponding
   to AnyLogic's "Enable exit on timeout")
 - Implement support for the "capacity" attribute of processing nodes (by popping/forwarding
   more than one processing objects)
 - Allow processing nodes to specify a maximum queue length (limited queue capacity)

 *** later ***
 - Add exploration model
 - Support using variants of the same model (sim.models)
 - UI for defining ex-post statistics

v2
 - extend mODELcLASS with object pools
 - use ES6 modules
 - improve add/delete performance by using Maps instead of plain JS objects (consider weak Maps for better Garbage Collection)
 - concurrent event processing with deferred state changes
 - add agents
 - add participation model
 */

/*******************************************************
 Initializations
 ********************************************************/
sim.ui = sim.ui || {}; // runtime UI components
/*******************************************************
 Add object to simulation objects
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param o  the object to be added
 */
sim.addObject = function (o) {
  if (!(o instanceof oes.Object)) {
    console.log( o.toString() +" is not an oBJECT!");
    return;
  }
  if (!o.id) o.id = sim.idCounter++;
  sim.objects[String(o.id)] = o;
  if (o.name) {
    if (typeof o.name !== "string" ) {
      console.log("oBJECT "+ o.toString() +" has a non-string name"+ o.name);
      return;
    } else sim.namedObjects[o.name] = o;
  }
  return o;
};
sim.addObjects = function (objArr) {
  objArr.forEach( function (o) {sim.addObject(o)});
  return objArr;
};
/*******************************************************
 Remove an object from the set of simulation objects
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param o  the object to be removed
 */
sim.removeObject = function (o) {
  var ObjectClass=null;
  if (!(o instanceof oes.Object)) {
    console.log( JSON.stringify(o) +" is not an OES object!");
    return;
  }
  if (!sim.objects[String(o.id)]) {
    console.log( JSON.stringify(o) +"@"+ sim.time +
        " has not been registered as a simulation object!");
    return;
  }
  ObjectClass = o.constructor;
  delete ObjectClass.instances[String(o.id)];
  delete sim.objects[String(o.id)];
};
sim.removeObjectById = function (id) {
  var ObjectClass=null;
  if (typeof id === "string") id = parseInt(id);
  if (!Number.isInteger( id)) {
    console.log( JSON.stringify(id) +" is not an integer!");
    return;
  }
  if (!sim.objects[String(id)]) {
    console.log( JSON.stringify(id) +" is not an ID of a registered simulation object!");
    return;
  }
  ObjectClass = o.constructor;
  delete ObjectClass.instances[id];
  delete sim.objects[id];
};
/*******************************************************
 Schedule an event by adding it to the FEL
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param arg  the argument (e.g., an event to be scheduled)
 */
sim.scheduleEvent = function (arg) {
  if (arg instanceof oes.Event) {
    if (arg.delay) arg.occTime = sim.time + arg.delay;
    else if (!arg.occTime) arg.occTime = sim.time + sim.nextMomentDeltaT;
    sim.FEL.add( arg);
  } else {
    console.log( arg.toString() +" is not an OES event (not an eVENT instance)!");
  }
};
/********************************************************
 * Initialize Model Variables
 ********************************************************/
sim.initializeModelVariables = function (expParamSlots) {
  sim.v = {};  // a map of global variables (accessible by name)
  // set up the map of model variables
  sim.model.v = sim.model.v || {};
  Object.keys( sim.model.v).forEach( function (varName) {
    var mv = sim.model.v[varName];
    if (typeof expParamSlots === "object" && expParamSlots[varName]) {
      // assign experiment parameter value
      sim.v[varName] = expParamSlots[varName];
    } else {
      sim.v[varName] = (mv.value !== undefined) ? mv.value : mv.initialValue;
    }
  });
}
/********************************************************
 * Create Initial Objects and Events
 ********************************************************/
sim.createInitialObjEvt = function () {
  var initState = sim.scenario.initialState,
      initialEvtDefs=null, initialObjDefs=null, entryNodes={};
  // clear initial state data structures
  sim.objects = {};  // a map of all objects (accessible by ID)
  sim.namedObjects = {};  // a map of objects accessible by a unique name
  sim.FEL.clear();
  sim.ongoingActivities = {};  // a map of all ongoing activities accessible by ID
  // clear the cLASS populations of model-specific object types
  sim.model.objectTypes.forEach( function (objTypeName) {
    cLASS[objTypeName].instances = {};
  });
  // clear the cLASS populations of pre-defined object and activity types
  ["eNTRYnODE","pROCESSINGnODE","eXITnODE","pROCESSINGoBJECT","pROCESSINGaCTIVITY"].
      forEach( function (objTypeName) {cLASS[objTypeName].instances = {};});
  // allow parametrized object/event definitions
  if (typeof sim.scenario.setupInitialState === "function") {
    sim.scenario.setupInitialState();
  }
  // register initial objects
  initialObjDefs = initState.objects;
  if (initialObjDefs) {  // a map of object definitions
    Object.keys( initialObjDefs).forEach( function (objIdStr) {
      var objSlots = util.cloneObject( initialObjDefs[objIdStr]),
          objTypeName = objSlots.typeName,
          ObjType = cLASS[objTypeName], obj=null;
      // fatal error: object type class not found
      if (!ObjType) throw "Missing object type class '" + objTypeName + "'!";
      objSlots.id = parseInt( objIdStr);
      delete objSlots.typeName;  // remove typeName slot
      try {obj = new ObjType( objSlots);}
      catch (e) {
        if (typeof e !== "object") console.log( e);
        else console.log( e.constructor.name +": "+ e.message);
        obj = null;
      }
      if (obj) sim.addObject( obj);
    })
  }
  // convert ID references to object references (in a second pass)
  Object.keys( sim.objects).forEach( function (objIdStr) {
    var obj = sim.objects[objIdStr],
        propDefs = cLASS[obj.constructor.Name].properties;
    Object.keys( obj).forEach( function (p) {
      if (!propDefs[p]) {
        if (typeof obj[p] !== "function" && !oes.predfinedProperties.includes(p)) {
          console.log("Undeclared prop: "+ p +" for obj "+ objIdStr);
        }
        return;
      }
      var range = propDefs[p].range, val = obj[p], rangeClasses=[];
      if (typeof range === "string" && typeof val !== "object" &&
          (cLASS[range] || range.includes("|"))) {
        if (range.includes("|")) {
          rangeClasses = range.split("|");
          // check referential integrity: val must be in some range class
          if (!rangeClasses.some( function (rc) {
                return cLASS[rc].instances[String(val)];
              })) {
            throw "Referential integrity violation: "+ val +" does not reference any of "+
                range +"!";
          }
        } else if (!(sim.objects[String(val)] instanceof cLASS[range])) {  // also allows superclasses
            throw "Referential integrity violation: "+ val +" does not reference a "+ range +"!";
        }
        obj[p] = sim.objects[String(val)];
      }
    });
  });
  // schedule initial events
  initialEvtDefs = initState.events;
  if (initialEvtDefs) {  // an array of JS object definitions
    initialEvtDefs.forEach( function (evt) {
      var e = util.cloneObject( evt),  // clone event object definition
          evtTypeName = e.typeName,
          EvtType = cLASS[evtTypeName];
      // fatal error: event type class not found
      if (!EvtType) throw Error("Missing class for event type '" + evtTypeName + "'!");
      delete e.typeName;  // remove type slot
      sim.scheduleEvent( new EvtType( e));
    })
  }
  /**************************************************************
   * Special settings for PN models
   **************************************************************/
  entryNodes = oes.EntryNode.instances;
  // schedule initial arrival events for the entry nodes of a PN
  Object.keys( entryNodes).forEach( function (nodeIdStr) {
    var occT=0, arrEvt=null, entryNode = entryNodes[nodeIdStr];
    // has no arrival recurrence function been defined for this entry node?
    if (!entryNode.arrivalRecurrence) {
      // use the default recurrence
      occT = oes.Arrival.defaultRecurrence();
    } else {
      occT = entryNode.arrivalRecurrence();
    }
    arrEvt = new oes.Arrival({ occTime: occT, entryNode: entryNode});
    sim.scheduleEvent( arrEvt);
  });
};
/*************************************************************
 * Update initial state objects (after modifications via the UI)
 ************************************************************/
sim.updateInitialStateObjects = function () {
  // reset the initial objects map
  sim.scenario.initialState.objects = {};
  // loop over all object types
  sim.model.objectTypes.forEach( function (objTypeName) {
    var objects = cLASS[objTypeName].instances;
    // loop over all instances of this object type
    Object.keys( objects).forEach( function (objIdStr) {
      var obj = objects[objIdStr],
          objRec = util.createRecordFromObject( obj);
      objRec.typeName = objTypeName;
      delete objRec.id;
      sim.scenario.initialState.objects[objIdStr] = objRec;
    });
  });
};
/*************************************************************
 * Initialize the simulator on start up
 * Settings that do not vary across scenarios in an experiment
 ************************************************************/
sim.initializeSimulator = function (dbName) {
  var x=0, i=0;
  sim.FEL = new oes.EventList();  // the Future Events List (FEL)
  // complete model definition by setting objectTypes and eventTypes if not defined
  if (!sim.model.objectTypes) sim.model.objectTypes = [];
  if (!sim.model.eventTypes) sim.model.eventTypes = [];
  // set timeIncrement for fixed-increment time progression
  if (sim.model.timeIncrement) {
    sim.timeIncrement = sim.model.timeIncrement;
  } else {
    if (sim.model.OnEachTimeStep) sim.timeIncrement = 1;
  }
  if (sim.model.timeRoundingDecimalPlaces !== undefined) {
    if (!sim.model.time) {
      sim.model.time = "continuous";
      console.warn("Set sim.model.time = 'continuous' for time rounding!");
    }
  } else if (sim.model.time === "continuous" && !sim.timeIncrement) {
    sim.model.timeRoundingDecimalPlaces = oes.defaults.timeRoundingDecimalPlaces;
  }
  if (sim.model.time === "continuous") {
    if (sim.model.timeRoundingDecimalPlaces) {
      sim.timeRoundingFactor = Math.pow( 10, sim.model.timeRoundingDecimalPlaces);
    } else {
      if (sim.timeIncrement) {  // fixed-increment time progression
        // determine rounding factor
        x = sim.timeIncrement - Math.trunc( sim.timeIncrement);
        if (x === 0) sim.timeRoundingFactor = 1;
        else if (x >= 0.1) sim.timeRoundingFactor = 10;
        else if (x >= 0.01) sim.timeRoundingFactor = 100;
        else sim.timeRoundingFactor = 1000;
      }
    }
    // define the minimal time delay until the next moment
    if (sim.model.nextMomentDeltaT) {
      sim.nextMomentDeltaT = sim.model.nextMomentDeltaT;
    } else if (sim.timeRoundingFactor) {
      sim.nextMomentDeltaT = 1 / sim.timeRoundingFactor;
    } else {  // default
      sim.nextMomentDeltaT = 0.000001;
    }
  } else {  // discrete time
    sim.nextMomentDeltaT = 1;
  }
  // compute derived property EventClass.participantRoles
  sim.model.eventTypes.forEach( function (evT) {
    var EventClass = cLASS[evT];
    EventClass.participantRoles = Object.keys( EventClass.properties).filter( function (prop) {
      // the range of a participant role must be an object type
      return sim.model.objectTypes.includes( EventClass.properties[prop].range);
    });
  });
  // initialize space model
  if (sim.model.space.type) oes.space.initialize();
  // set up a default random variate sampling method
  if (sim.scenario.randomSeed) {  // use the Mersenne Twister RNG
    rand = new Random( sim.scenario.randomSeed);
  } else {  // use the JS built-in RNG
    rand = new Random();
  }
  // initialize experiment(s)
  if (sim.experiment.replications) {  // an experiment has been defined
    if (!sim.experiment.parameterDefs) sim.experiment.parameterDefs = [];
    sim.experiment.parameterDefs.forEach( function (paramDef, i, a) {
      if (paramDef.constructor !== oes.ExperimentParamDef) {
        a[i] = new oes.ExperimentParamDef( paramDef);
      }
    });
    if (sim.experiment.constructor !== oes.ExperimentDef) {
      sim.experiment = new oes.ExperimentDef( sim.experiment);
    }
  }
  if (dbName) oes.setupStorageManagement( dbName);
};
/*******************************************************************
 * Initialize a (standalone or experiment scenario) simulation run *
 *******************************************************************/
sim.initializeSimulationRun = function (expParamSlots, seed) {
  var logInfo={};
  var isExperimentRun = expParamSlots !== undefined || seed;
  sim.step = 0;  // simulation loop step counter
  sim.time = 0;  // simulation time
  // set default endTime
  if (!sim.scenario.endTime) sim.scenario.endTime = Number.MAX_SAFE_INTEGER;
  // set warm-up period for delaying the gathering of statistics
  sim.warmUpTime = sim.scenario.warmUpTime ? sim.scenario.warmUpTime : 0;
  // set stop condition
  if (sim.config.stopConditionName) {
    sim.stopCondition = sim.model.stopConditions[sim.config.stopConditionName];
  } else delete sim.stopCondition;
  // get ID counter from simulation scenario, or set to default value
  sim.idCounter = sim.scenario.idCounter || 1000;
  // set up a default random variate sampling method
  if (!isExperimentRun && sim.scenario.randomSeed) {  // use the Mersenne Twister RNG
    rand = new Random( sim.scenario.randomSeed);
  } else if (seed) {  // experiment-defined replication-specific seed
    rand = new Random( seed);
  } else {  // use the JS built-in RNG
    rand = new Random();
  }
  // set up initial state
  sim.initializeModelVariables( expParamSlots);
  sim.createInitialObjEvt();
  if (Object.keys( oes.EntryNode.instances).length > 0) oes.setupProcNetStatistics();
  if (sim.model.statistics) {
    // initialize statistics
    oes.stat.initialize();
    // create statistics for initial state
    oes.stat.updateStatistics();
  }
  // get stepDuration from simulation config, or set to default value
  sim.stepDuration = sim.config.stepDuration || 0;
  // log initial state (visualized before in oes.setupFrontEndSimEnv)
  if (sim.config.createLog) {
    logInfo = sim.createStepLogInfo();
    if (!sim.useWorker) {  // main thread
      if (typeof sim.logStep === "function") sim.logStep( logInfo);
    } else {  // worker thread
      self.postMessage({  // send log data to main thread
        simStep: sim.step,
        simTime: logInfo.simTime,
        systemStateInfo: logInfo.systemStateInfo,
        evtInfo: logInfo.evtInfo
      });
    }
  }
};
/*******************************************************
 Run a Standalone Scenario
********************************************************/
sim.runScenario = function (useWorker) {
  var msgRec = {},
      simTimeTenth = parseInt( sim.scenario.simulationEndTime / 10),
      nextProgressIncrement = simTimeTenth,
      areConstraintsToBeChecked = sim.isConstraintCheckingTurnedOn ||
          sim.isConstraintCheckingTurnedOn === undefined && oes.loadManager &&
          oes.loadManager.codeLoadingMode !== "deploy";
  if (!useWorker) {  // running in main thread
    sim.useWorker = false;
    sim.initializeSimulationRun();
    sim.runScenarioStep();  // loops by self-invocation via setTimeout
  } else {  // running in worker thread
    sim.useWorker = true;
    sim.initializeSimulationRun();
    while (sim.time < sim.scenario.simulationEndTime) {
      sim.runScenarioStep();
      if (areConstraintsToBeChecked) {
        oes.checkModelConstraints({log:true});
        if (oes.isProcNetModel()) oes.checkProcNetConstraints({log:true});
      }
      // update the progress bar and the simulation step/time
      if (sim.time > nextProgressIncrement) {
        self.postMessage({
            progressIncrement: 10,
            simStep: sim.step,
            simTime: sim.time
        });
        nextProgressIncrement += simTimeTenth;
      }
      // end simulation if no time increment and no more events
      if (!sim.timeIncrement && sim.FEL.isEmpty()) {
        break;
      }
    }
    if (sim.model.statistics) {
      oes.stat.computeOnlyAtEndStatistics();
      msgRec.simStat = sim.stat;
    }
    self.postMessage( msgRec);
  }
};
/*******************************************************
 Standalone Scenario Simulation Step
 (when executed in main thread, it loops by self-invocation via setTimeout)
********************************************************/
sim.runScenarioStep = function (followupEvents) {
  var nextEvents=[], i=0, j=0,
      EventClass=null, nextExoEvt=null, e=null,
      nextEvtTime = sim.FEL.getNextOccurrenceTime(),  // 0 if there is no next event
      stepStartTime = (new Date()).getTime(),
      totalStepTime = 0, stepDiffTimeDelay = 0,
      uia = sim.scenario.userInteractions,  // shortcut
      uiViewModel=null, eventTypeName="", logInfo={};
  function advanceSimulationTime () {
    // increment the step counter
    sim.step += 1;
    // advance simulation time
    if (sim.timeIncrement) {  // fixed-increment time progression
      if (nextEvtTime > sim.time && nextEvtTime < sim.time + sim.timeIncrement) {
        sim.time = nextEvtTime;
      } else {
        sim.time += sim.timeIncrement;
        if (sim.model.OnEachTimeStep) sim.model.OnEachTimeStep();
      }
    } else if (nextEvtTime > 0) {  // next-event time progression
      sim.time = nextEvtTime;
    }
  }
  //-----------------------------------------------------
  if (!sim.useWorker) {
    if (sim.stopRequested) {   // interrupt simulation
      sim.stopRequested = false;
      oes.ui.updateUiOnStop();
      return;
    }
    if (sim.time >= sim.scenario.simulationEndTime)  {  // terminate simulation
      if (sim.model.statistics) oes.stat.computeOnlyAtEndStatistics();
      oes.ui.updateUiOnSimulationEnd();
      return;
    }
  }
  if (followupEvents) {  // runScenarioStep was called from user action event handler
    // schedule follow-up events
    for (j=0; j < followupEvents.length; j++) {
      sim.scheduleEvent( followupEvents[j]);
    }
    // clear followUpEvents list
    followupEvents = [];
  } else {  // normal invocation of runScenarioStep
    followupEvents = [];
    advanceSimulationTime();
    // update the sim-control UI via the fields' data binding to UI output elements
    if (!sim.useWorker) {
      sim.ui["sim"].dataBinding["step"].value = sim.step;
      sim.ui["sim"].dataBinding["time"].value = sim.time;
    }
    // extract and process next events
    if (sim.time === nextEvtTime) {
      nextEvents = sim.FEL.removeNextEvents();
      // store currentt events in global variable for testing stop conditions
      sim.currentStepEvents = nextEvents;
      if (nextEvents.length > 1) nextEvents.sort( oes.Event.rank);  // priority order
      for (i=0; i < nextEvents.length; i++) {
        e = nextEvents[i];
        eventTypeName = e.constructor.Name;
        // retrieve event class
        EventClass = cLASS[eventTypeName];
        // test if EventClass represents an exogenous event type
        if (typeof EventClass.recurrence === "function") {
          // create and schedule next exogenous event
          if (typeof e.createNextEvent === "function") {
            sim.scheduleEvent( e.createNextEvent());
          } else if (EventClass.createNextEvent) {  // old syntax (class-level method)
            sim.scheduleEvent( EventClass.createNextEvent( e));
          } else {
            nextExoEvt = new EventClass();
            nextExoEvt.occTime = e.occTime + EventClass.recurrence();
            // copy event participants
            EventClass.participantRoles.forEach( function (pR) {
              nextExoEvt[pR] = e[pR];
            });
            sim.scheduleEvent( nextExoEvt);
          }
        }
        // check if a user interaction has been triggered
        if (sim.config.userInteractive && uia && uia[eventTypeName]) {
          // check also the triggering event condition, if defined
          if (!uia[eventTypeName].trigEvtCondition || uia[eventTypeName].trigEvtCondition(e)) {
            // make sure that the user interaction triggering event is last in nextEvents list
            if (i === nextEvents.length - 1) {
              sim.currentEvents[eventTypeName] = e;
              uiViewModel = uia[eventTypeName];
              Object.keys( uiViewModel.outputFields).forEach( function (outFldN) {
                var fldEl = uiViewModel.dataBinding[outFldN],
                    val = uiViewModel.outputFields[outFldN].value;
                if (typeof val === "function") fldEl.value = val();
                else fldEl.value = val || "";
              });
              uiViewModel.domElem.style.display = "block";
              return;  // interrupt simulator & transfer control to UI
            } else {
              util.swapArrayElements( nextEvents, i, length-1);
            }
          }
        }
        followupEvents = e.onEvent();
        // render event appearances if defined
        if (sim.config.visualize && sim.ui.animations && sim.ui.animations[eventTypeName]) {
          sim.ui.animations[eventTypeName].play();
        }
        // schedule follow-up events
        for (j=0; j < followupEvents.length; j++) {
          sim.scheduleEvent( followupEvents[j]);
        }
        // clear followUpEvents list
        followupEvents = [];
      }
    }
  }
  // update statistics
  if (sim.model.statistics && sim.time >= sim.warmUpTime) oes.stat.updateStatistics();
  // create simulation log
  if (sim.config.createLog) {
    logInfo = sim.createStepLogInfo();
    logInfo.simStep = sim.step;
    if (!sim.useWorker) {  // main thread
      if (typeof sim.logStep === "function") sim.logStep( logInfo);
    } else {  // worker thread
      self.postMessage( logInfo);
      /*
      self.postMessage({
        simStep: sim.step,
        simTime: logInfo.simTime,
        systemStateInfo: logInfo.systemStateInfo,
        evtInfo: logInfo.evtInfo
      });
      */
    }
  }
  // update state visualization (NOT in worker mode)
  if (sim.config.visualize) oes.ui.visualizeStep();
  // compute the time needed for executing this step
  totalStepTime = (new Date()).getTime() - stepStartTime;
  // check if we need some delay, because of the stepDuration parameter
  if (sim.stepDuration > totalStepTime) {
    stepDiffTimeDelay = sim.stepDuration - totalStepTime
  } else {
    stepDiffTimeDelay = 0;
  }
  if (!sim.useWorker) {  // main thread
    // end simulation if no time increment and no more events
    if (!sim.timeIncrement && sim.FEL.isEmpty()) {
      if (sim.model.statistics) oes.stat.computeOnlyAtEndStatistics();
      oes.ui.updateUiOnSimulationEnd();
    } else if (sim.mode !== "SingleStepSim") {
      if (typeof sim.stopCondition === "function" && sim.stopCondition()) {
        sim.stopRequested = true;
      }
      // continue simulation loop
      // in the browser, use setTimeout to prevent script blocking
      setTimeout( sim.runScenarioStep, stepDiffTimeDelay);
    }
  }
};
/*******************************************************
 Run an Experiment (in a JS worker)
 ********************************************************/
sim.runExperiment = async function () {
  var exp = sim.experiment, cp = [], valueSets = [], i = 0, j = 0, k = 0, M = 0,
    N = exp.parameterDefs.length, increm = 0, x = 0, expPar = {},
    expRunId = ( new Date() ).getTime(),
    valueCombination = [], expParamSlots = {},
    tenthRunLength = 0,  // a tenth of the total run time
    nextProgressIncrementStep = 0;  // thresholds for updating the progress bar
  try {
    await sim.storeMan.add( oes.ExperimentRun, {
      id: expRunId,
      experimentDef: exp.id,
      dateTime: (new Date()).toISOString(),
    });
  } catch (e) {
    console.log( JSON.stringify(e));
  }
  // create preliminary definitions of implicit PN statistics variables
  if (oes.isProcNetModel()) {
    if (!sim.model.statistics["arrivedObjects"]) {
      sim.model.statistics["arrivedObjects"] = {label:"Arrived objects"};
    }
    if (!sim.model.statistics["departedObjects"]) {
      sim.model.statistics["departedObjects"] = {label:"Departed objects"};
    }
    if (!sim.model.statistics["meanTimeInSystem"]) {
      sim.model.statistics["meanTimeInSystem"] = {label:"Mean time in system"};
    }
  }
  if (N === 0) {  // simple experiment (without parameters)
    cp = [[]];  // only 1 empty parameter value combination
    // initialize replication statistics record
    exp.replicStat = {};
    Object.keys( sim.model.statistics).forEach( function (varName) {
      if (sim.model.statistics[varName].label) {  // output statistics
        exp.replicStat[varName] = [];  // an array per statistics variable
      }
    });
  } else {
    for (i=0; i < N; i++) {
      expPar = exp.parameterDefs[i];
      if (!expPar.values) {
        // create value set
        expPar.values = [];
        increm = expPar.stepSize || 1;
        for (x = expPar.startValue; x <= expPar.endValue; x += increm) {
          expPar.values.push( x);
        }
      }
      valueSets.push( expPar.values);
    }
    cp = util.cartesianProduct( valueSets);
  }
  M = cp.length;  // size of cartesian product
  tenthRunLength = (M * exp.replications) / 10;
  nextProgressIncrementStep = tenthRunLength;
  // loop over all combinations of experiment parameter values
  for (i=0; i < M; i++) {
    valueCombination = cp[i];  // a JS array
    // initialize the scenario record
    exp.scenarios[i] = {stat:{}};
    exp.scenarios[i].parameterValues = valueCombination;
    // initialize experiment scenario statistics
    Object.keys( sim.model.statistics).forEach( function (varName) {
      var statVar = sim.model.statistics[varName];
      if (statVar.label) {  // output statistics
        if (statVar.property && statVar.objectType &&
            !statVar.aggregationFunction) {
          exp.scenarios[i].stat[varName] = {};
        } else exp.scenarios[i].stat[varName] = 0;
      }
    });
    // create experiment parameter slots for assigning corresponding model variables
    for (j=0; j < N; j++) {
      expParamSlots[exp.parameterDefs[j].name] = valueCombination[j];
    }
    // run experiment scenario replications
    for (k=0; k < exp.replications; k++) {
      if (exp.seeds) {
        sim.initializeSimulationRun( expParamSlots, exp.seeds[k]);
      } else {
        sim.initializeSimulationRun( expParamSlots);
      }
      while (sim.time < sim.scenario.simulationEndTime) {
        sim.runExperimentScenarioStep();
        if (sim.config.isConstraintCheckingTurnedOn) {
          oes.checkModelConstraints({log:true});
          if (oes.isProcNetModel()) {
            oes.checkProcNetConstraints({log:true, add:" in repl. "+ String(k+1)});
          }
        }
        // end simulation if no time increment and no more events
        if (!sim.timeIncrement && sim.FEL.isEmpty()) break;
      }
      oes.stat.computeOnlyAtEndStatistics();
      if (N > 0) {  // experiment with parameters
        // for the first replication, initialize experiment scenario statistics
        if (k === 0) {
          Object.keys( sim.model.statistics).forEach( function (varName) {
            if (sim.model.statistics[varName].label) {  // output statistics
              exp.scenarios[i].stat[varName] = 0;
            }
          } );
        }
        // aggregate replication statistics from sim.stat to sim.experiment.scenarios[i].stat
        Object.keys( sim.model.statistics).forEach( function (varName) {
          if (sim.model.statistics[varName].label) {  // output statistics
            exp.scenarios[i].stat[varName] += sim.stat[varName];
          }
        });
        if (exp.storeEachExperimentScenarioRun) {
          await sim.storeMan.add( oes.ExperimentScenarioRun, {
            id: expRunId + i * exp.replications + k + 1,
            experimentRun: expRunId,
            experimentScenarioNo: i,
            parameterValueCombination: exp.scenarios[i].parameterValues,
            outputStatistics: Object.assign({}, sim.stat)  // clone
          });
        }
      } else {  // simple experiment
        // store replication statistics
        Object.keys( sim.model.statistics).forEach( function (varName) {
          if (sim.model.statistics[varName].label) {  // output statistics
            exp.replicStat[varName][k] = sim.stat[varName];
          }
        });
        await sim.storeMan.add( oes.ExperimentScenarioRun, {
          id: expRunId + i * exp.replications + k + 1,
          experimentRun: expRunId,
          outputStatistics: Object.assign({}, sim.stat)  // clone
        });
      }
      // update the progress bar
      if (i*k > nextProgressIncrementStep) {
        self.postMessage({progressIncrement: 10});
        nextProgressIncrementStep += tenthRunLength;
      }
    }
    if (N === 0) {  // simple experiment (without parameters)
      // aggregate replication statistics in sim.experiment.scenarios[i].stat
      Object.keys( sim.model.statistics).forEach( function (varName) {
        if (sim.model.statistics[varName].label) {  // output statistics
          if (!sim.model.statistics[varName].hasRecordRange) {
            exp.scenarios[i].stat[varName] = {};
            Object.keys( oes.stat.summary).forEach( function (aggr) {
              var aggrF = oes.stat.summary[aggr].f;
              exp.scenarios[i].stat[varName][aggr] = aggrF( exp.replicStat[varName]);
            });
          } else {
            //TODO: loop over record fields
          }
        }
      });
    }
    if (N > 0) {  // experiment with parameters
      // send statistics to main thread
      self.postMessage({
        expScenNo: i,
        expScenParamValues: exp.scenarios[i].parameterValues,
        expScenStat: exp.scenarios[i].stat
      });
      if (!exp.storeEachExperimentScenarioRun) {
        // store the average statistics aggregated over all exp. scenario runs
        try {
          await sim.storeMan.add( oes.ExperimentScenarioRun, {
            experimentRun: expRunId,
            experimentScenarioNo: i,
            parameterValueCombination: exp.scenarios[i].parameterValues,
            outputStatistics: exp.scenarios[i].stat
          });
        } catch (e) {
          console.log( JSON.stringify(e));
        }
      }
    } else {  // simple experiment (without parameters)
      // send statistics to main thread
      self.postMessage({
        expReplicStat: exp.replicStat,
        expScenStat: exp.scenarios[i].stat
      });
    }
  }
  self.postMessage({endOfExp: true});
};
/*******************************************************
 Experiment Scenario Simulation Step
 ********************************************************/
sim.runExperimentScenarioStep = function () {
  var nextEvents=[], i=0, j=0,
      EventClass=null, nextExoEvt=null, e=null,
      nextEvtTime = sim.FEL.getNextOccurrenceTime(),  // 0 if there is no next event
      eventTypeName="", followupEvents=[];
  function advanceSimulationTime () {
    // increment the step counter
    sim.step += 1;
    // advance simulation time
    if (sim.timeIncrement) {  // fixed-increment time progression
      // fixed-increment time progression simulations may also have events
      if (nextEvtTime > sim.time && nextEvtTime < sim.time + sim.timeIncrement) {
        sim.time = nextEvtTime;  // an event occurring before the next incremented time
      } else {
        sim.time += sim.timeIncrement;
        if (sim.model.OnEachTimeStep) sim.model.OnEachTimeStep();
      }
    } else if (nextEvtTime > 0) {  // next-event time progression
      sim.time = nextEvtTime;
    }
    if (sim.model.time === "continuous" && sim.timeRoundingFactor) {
      sim.time = Math.round( sim.time * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
      nextEvtTime = Math.round( nextEvtTime * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
    }
  }
  //-----------------------------------------------------
  advanceSimulationTime();
  // extract and process next events
  if (sim.time === nextEvtTime) {
    nextEvents = sim.FEL.removeNextEvents();
    if (nextEvents.length > 1) nextEvents.sort( oes.Event.rank);  // priority order
    for (i=0; i < nextEvents.length; i++) {
      e = nextEvents[i];
      eventTypeName = e.constructor.Name;
      // retrieve event class
      EventClass = cLASS[eventTypeName];
      // does EventClass represent an exogenous event type?
      if (EventClass.recurrence) {
        // create and schedule next exogenous event
        if (e.createNextEvent) {  // new syntax
          sim.scheduleEvent( e.createNextEvent());
        } else if (EventClass.createNextEvent) {  // old syntax (class-level method)
          sim.scheduleEvent( EventClass.createNextEvent( e));
        } else {
          nextExoEvt = new EventClass();
          nextExoEvt.occTime = e.occTime + EventClass.recurrence();
          // copy event participants
          EventClass.participantRoles.forEach( function (pR) {
            nextExoEvt[pR] = e[pR];
          });
          sim.scheduleEvent( nextExoEvt);
        }
      }
      followupEvents = e.onEvent();
      // schedule follow-up events
      for (j=0; j < followupEvents.length; j++) {
        sim.scheduleEvent( followupEvents[j]);
      }
      // clear followUpEvents list
      followupEvents = [];
    }
  }
  // update statistics
  if (sim.model.statistics && sim.time >= sim.warmUpTime) oes.stat.updateStatistics();
};
/*******************************************************
 Create step log info
 ********************************************************/
sim.createStepLogInfo = function () {
  var simTime = sim.model.time === "continuous" && sim.timeRoundingFactor ?
      Math.round( sim.time * sim.timeRoundingFactor) / sim.timeRoundingFactor :
      sim.time;
  var systemStateInfo = Object.keys( sim.v).reduce( function (serialization, varName, i) {
    var varDecl = sim.model.v[varName], slotSerialization="";
    if (varDecl.shortLabel) {
      slotSerialization = varDecl.shortLabel +": "+ sim.v[varName];
      return i>0 ? serialization +", "+ slotSerialization : slotSerialization;
    } else return serialization;
  }, "");
  if (systemStateInfo && Object.keys( sim.objects).length > 0) systemStateInfo += ", ";
  systemStateInfo += Object.keys( sim.objects).reduce( function (serialization, objIdStr, i) {
    var o = sim.objects[objIdStr];
    if (o.shortLabel || o.constructor.shortLabel) {
      return i>0 ? serialization +", "+ o.toLogString() : o.toLogString();
    } else return serialization;
  }, "");
  return {simTime: String(simTime), systemStateInfo: systemStateInfo, evtInfo: sim.FEL.toString()}
};
/**
 * @fileOverview User interface variables and procedures
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */

/*
Improvements/extensions
- format percentages with new Intl.NumberFormat('de-DE',{style:"percent",maximumFractionDigits:1}).format( number)

*/

var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.vis = {SVG:{}};  // name space for generic UI procedures/functions
sim.ui = sim.ui || {};  // name space for scenario/model-specific UI settings

// flag used to create UI variations for Client or Server version of the simulation
oes.ui.fullUI = true;

/*******************************************************
 * Create the Model Menu with a "Narrative", "Description" and "Code" button.
 *******************************************************/
oes.ui.createModelMenu = function() {
  var downloadLink=null, closeBtn=null,
      menuEl = document.getElementById("model-menu"),
      el=null,
      simPageUrl = window.location.href,
      pos=0, tail="";
  pos = simPageUrl.indexOf("simulation.html");
  if (pos === -1) {
    pos = simPageUrl.indexOf("index.html");
  }
  if (pos > -1) {
    sim.ui.simFolderPath = simPageUrl.substring( 0, pos);
  } else {
    pos = simPageUrl.lastIndexOf("/");
    if (pos === simPageUrl.length-1) {  // last character is a slash
      sim.ui.simFolderPath = simPageUrl;
    }
    else {
      sim.ui.simFolderPath = simPageUrl.substring( 0, pos+1);
      // accept paths that end with a simulation number
      tail = simPageUrl.substring( pos+1);
      if (/\d*/.test( tail)) sim.ui.simFolderPath += tail + "/";
    }
  }
  sim.ui.showCodeElems = {};  // map of UI elements for showing code
  // create showCode form element
  el = document.createElement("form");
  el.id = "showCodeForm";
  el.style.display = "none";
  el.innerHTML = "<span class='closeButton'>&times;</span><p>" +
      i18n.t("Show code of...") + "</p><select><option>"+ i18n.t("-- choose file --") +
      "</option></select><p id='download'></p></form>";
  menuEl.appendChild( el);
  document.getElementById("download").innerHTML = i18n.t("Or <a>download all</a>");
  downloadLink = document.querySelector("#showCodeForm a");
  downloadLink.href = sim.ui.simFolderPath + "Download.zip";
  downloadLink.title = i18n.t("Download simulation code");
  closeBtn = document.querySelector("#showCodeForm span.closeButton");
  closeBtn.addEventListener("click", function () {
    document.getElementById("showCodeBtn").style.display = "inline";
    document.getElementById("showCodeForm").style.display = "none";
  });
  // create space size def. activation button
  if (sim.model.space.type) {
    if (!document.getElementById("spaceSizeDefBtn")) {
      el = document.createElement("button");
      el.id = "spaceSizeDefBtn";
      el.textContent = i18n.t("Space");
      el.onclick = oes.ui.showSpaceSizeDefUI;
      menuEl.appendChild( el);
    }
  }
};
oes.ui.showNarrative = function() {
  var narrativeEl=null;
  if (!sim.ui.narrativeEl) {
    narrativeEl = document.createElement("div");
    narrativeEl.innerHTML = sim.model.systemNarrative;
    sim.ui.narrativeEl = dom.createModal({
      fromElem: narrativeEl,
      title: i18n.t("System Narrative")
    });
  }
  document.getElementById("overlay").style.display = "block";
  sim.ui.narrativeEl.style.display = "block";
};
oes.ui.showDescription = function() {
  var descrEl=null;
  if (!sim.ui.descriptionEl) {
    descrEl = document.createElement("div");
    descrEl.innerHTML = sim.scenario.shortDescription || sim.model.shortDescription;
    sim.ui.descriptionEl = dom.createModal({
      fromElem: descrEl,
      title: i18n.t("Model Description")
    });
  }
  document.getElementById("overlay").style.display = "block";
  sim.ui.descriptionEl.style.display = "block";
};
oes.ui.showCode = function() {
  var showCodeBtn = document.getElementById("showCodeBtn"),
      showCodeForm = document.getElementById("showCodeForm"),
      codeFileSelEl = document.querySelector("#showCodeForm > select"),
      showCodeEl=null;
  if (!sim.ui.simFolderPath) {
    console.log("Cannot show code since folder path is not available!");
    return;
  }
  showCodeBtn.style.display = "none";
  showCodeForm.style.display = "inline-block";
  if (codeFileSelEl.length === 1) {  // have options not yet been created?
    codeFileSelEl.appendChild(
        dom.createOption({text:"simulation.js", value:"simulation"}));
    if (sim.model.objectTypes) {
      sim.model.objectTypes.forEach( function (objT) {
        codeFileSelEl.appendChild( dom.createOption({text: objT + ".js", value: objT}));
      });
    }
    if (sim.model.eventTypes) {
      sim.model.eventTypes.forEach( function (evtT) {
        codeFileSelEl.appendChild( dom.createOption({text: evtT + ".js", value: evtT}));
      });
    }
    if (sim.model.activityTypes) {
      sim.model.activityTypes.forEach( function (actT) {
        codeFileSelEl.appendChild( dom.createOption({text: actT + ".js", value: actT}));
      });
    }
    codeFileSelEl.addEventListener("change", function () {
      var fileName = codeFileSelEl.value;

      function showCode( txt) {
        var showCodeEl=null;
        if (!sim.ui.showCodeElems[fileName]) {
          showCodeEl = document.createElement("div");
          showCodeEl.innerHTML = "<pre><code class='language-javascript'>"+ txt +"</code></pre>";
          sim.ui.showCodeElems[fileName] = dom.createModal({
            fromElem: showCodeEl,
            title: i18n.t("JavaScript code of ") + fileName +".js",
            width: "50em"});
        }
        if (typeof Prism === "object") Prism.highlightAll();  // run the Prism syntax highligter
        document.getElementById("overlay").style.display = "block";
        sim.ui.showCodeElems[fileName].style.display = "block";
      }

      if (fileName) {  // a choice has been made
        fetch( sim.ui.simFolderPath + fileName + ".js")
            .then( function (response) {
              return response.text().then( showCode);
            })
      }
    });
  }
};
/*******************************************************
 UI for Space Definition
 *******************************************************/
oes.ui.showSpaceSizeDefUI = function () {
  var menuEl = document.getElementById("model-menu"),
      spaceSizeDefBtn = document.getElementById("spaceSizeDefBtn"),
      spaceSizeDefForm = document.getElementById("spaceSizeDefForm"),
      closeBtn=null;
  if (!spaceSizeDefForm) {
    // create space size def. form panel element
    spaceSizeDefForm = document.createElement("form");
    spaceSizeDefForm.id = "spaceSizeDefForm";
    spaceSizeDefForm.innerHTML = "<span class='closeButton'>&times;</span>";
    spaceSizeDefForm.style.display = "none";
    menuEl.appendChild( spaceSizeDefForm);
    closeBtn = document.querySelector("#spaceSizeDefForm span.closeButton");
    closeBtn.addEventListener("click", function () {
      spaceSizeDefBtn.style.display = "inline";
      spaceSizeDefForm.style.display = "none";
    });
    sim.ui["space"] = new oBJECTvIEW({
      modelObject: sim.model.space,
      fields: [["xMax", "yMax", "zMax"].slice(0,
          oes.space.dimensions[sim.model.space.type])],
      suppressNoValueFields: false,
      heading: i18n.t("Space Size"),
      userActions: {
        "applyChanges": function () {
          sim.updateInitialStateObjects();
          oes.ui.resetCanvas();
          // visualize initial state (at start of step 0)
          if (sim.config.visualize) oes.ui.visualizeStep();
        }
      }
    });
    sim.ui["space"].userActions["applyChanges"].label = i18n.t("Apply changes");
    // render view in modalBodyEl and store its data binding
    sim.ui["space"].dataBinding = sim.ui["space"].render( spaceSizeDefForm);
  }
  spaceSizeDefBtn.style.display = "none";
  spaceSizeDefForm.style.display = "inline-block";
};
/*******************************************************
 * Create the UI page footer.
 *******************************************************/
oes.ui.createPageFooter = function() {
  var created = new Date( sim.model.created),
      modified = new Date( sim.model.modified),
      mainEl = document.querySelector("body > main"),
      license = sim.model.license || oes.defaults.license,
      licenseLinks=[], el=null,
      contributions = !sim.model.contributors ? "" :
          ", "+ i18n.t("with contributions by") +" "+ sim.model.contributors,
      artworkCredits = !sim.config.artworkCredits ? "" :
          " | <a href='#' title='"+ sim.config.artworkCredits + "'>" +
          i18n.t("Artwork Credits") + "</a>";
  var dateFmt = new Intl.DateTimeFormat( i18n.accessLang || "en-US");
  licenseLinks["CC BY"] = "https://creativecommons.org/licenses/by/4.0/";
  licenseLinks["CC BY-SA"] = "https://creativecommons.org/licenses/by-sa/4.0/";
  licenseLinks["CC BY-NC"] = "https://creativecommons.org/licenses/by-nc/4.0/";
  if (licenseLinks[license]) {
    license = "<a href='"+ licenseLinks[license] +"'>"+ license +"</a>";
  }
  if (!document.querySelector("body > footer")) {
    el = document.createElement("footer");
    el.innerHTML = "<hr/><p>&copy; "+ sim.model.creator +" ("+ license +"), " +
        i18n.t("created on") +" "+ dateFmt.format( created) +", "+
        i18n.t("last modified on") +" "+ dateFmt.format( modified) + contributions +
        artworkCredits + " | <a href='https://sim4edu.com/credits.html'>" + i18n.t("OESjs Credits") +"</a>";
    // insert footer after body > main
    dom.insertAfter( el, mainEl);
  }
};

/*******************************************************
 Set up the simulation UI
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupUI = function () {
  var el=null, el2=null,
      mainEl = document.querySelector("body > main"),
      statistics = sim.model.statistics,
      createTimeSeriesChart = false;
  oes.ui.timeUnitLabels = {"ms":"milliseconds", "s":"seconds", "m":"minutes", "h":"hours",
      "D":"Days", "W":"Weeks", "M":"Months", "Y":"Years"};
  function setupUiForStepIncrem( formName) {
    var runStepBtn = document.forms[formName].elements["run step"];
    var incrEl = dom.createButton({classValues:"stepIncrement", content: String(sim.stepIncrement)});
    incrEl.contentEditable = true;
    incrEl.title = i18n.t("Click for changing the increment value");
    dom.insertAfter( incrEl, runStepBtn);
    dom.insertAfter( dom.createElement("span",{content:"+"}), runStepBtn);
    incrEl.addEventListener("blur", function () {
      var newIncrVal = parseInt( incrEl.textContent),
          simStepIncrEl = null, hint="";
      var scenarioRunStepBtn = document.forms["scenario"].elements["run step"],
          simRunStepBtn = document.forms["sim"].elements["run step"];
      if (isNaN( newIncrVal)) incrEl.textContent = sim.stepIncrement;
      else if (newIncrVal !== sim.stepIncrement) {
        sim.stepIncrement = newIncrVal;
        simStepIncrEl = document.querySelector("form#sim .stepIncrement");
        if (simStepIncrEl !== incrEl) simStepIncrEl.textContent = newIncrVal;
        hint = i18n.t(
            sim.stepIncrement===1 ? "Execute a single simulation step" : `Execute ${sim.stepIncrement} steps`
        );
        simRunStepBtn.title = scenarioRunStepBtn.title = hint;
      }
    })
  }
  function setupUiForStopCondition() {
    var stopCondSelLabelEl = dom.createLabeledSelect({name:"selectStopCond", labelText:"Stop condition"}),
        stopCondSelectEl = stopCondSelLabelEl.lastElementChild,
        stopCondNames = Object.keys( sim.model.stopConditions);
    document.querySelector("form#scenario div.field-group").appendChild( stopCondSelLabelEl);
    dom.fillSelectWithOptionsFromStringList( stopCondSelectEl, stopCondNames);
    if (sim.config.stopConditionName) stopCondSelectEl.value = sim.config.stopConditionName;
    stopCondSelectEl.addEventListener("change", function () {
      sim.config.stopConditionName = stopCondSelectEl.value;
    })
  }
  /*********************************************************************
   Create title/headings
   **********************************************************************/
  // Set HTML title
  if (!document.title){
    document.title = "OES - " + (sim.scenario.name || sim.model.name);
  }
  //oes.ui.createFrontMatter();
  oes.ui.createModelMenu();  // rendered underneath the model title
  /*********************************************************************
   Set up a start UI based on the objects sim.scenario, sim.model and sim.config
   *********************************************************************/
  try {
    sim.ui["scenario"] = new oBJECTvIEW({
      heading: sim.scenario.title ? sim.scenario.title : i18n.t("Default scenario"),
      modelObjects: {"scenario":sim.scenario, "model":sim.model, "config":sim.config},
      fields: [["scenario.simulationEndTime", "scenario.warmUpTime", "config.stepDuration", "config.createLog",
          "config.visualize"]],
      userActions: {
        "run": function () {
          var statFormEl = document.forms["expost-statistics"],
              expFormEl = document.forms["experiment"],
              locale = i18n.accessLang ? i18n.accessLang : "en-US",
              numFmt = new Intl.NumberFormat( locale),
              statGraphWidth=0, worker=null, msg={}, changedModelVarValues={};
          var progressContainer = dom.createProgressBar(i18n.t("Executing the simulation scenario..."));
          document.body.appendChild( progressContainer);
          // log simulation start time (in the main thread)
          sim.startTime = (new Date()).getTime();
          // drop experiment form
          if (expFormEl) expFormEl.remove();
          // hide simulation parameters and show simulator controls
          document.forms["scenario"].style.display = "none";
          document.forms["sim"].style.display = "block";
          // show simulation log table
          if (sim.config.createLog && oes.ui.fullUI) {
            oes.ui.setupSimLog();
          }
          // disable continue and reset buttons
          document.forms["sim"].elements["continue"].disabled = true;
          document.forms["sim"].elements["restart"].disabled = true;
          // compute statistics compression factor
          if (statistics) {
            // since the width is not reported when display=none, we need to reset display
            statFormEl.style.display = "block";
            statGraphWidth = parseInt( getComputedStyle( statFormEl).width);
            statFormEl.style.display = "none";
            oes.stat.prepareTimeSeriesCompression( statGraphWidth);
          }
          if (!sim.config.runInMainThread && !sim.config.visualize &&
              !sim.config.stopConditionName && window.Worker) {
            // start the scenario simulation worker
            worker = new Worker("simulation-worker.js");
            msg = {runExperiment: false, endTime: sim.scenario.simulationEndTime,
              createLog: sim.config.createLog};
            Object.keys( sim.model.v).forEach( function (varName) {
              if (sim.model.v[varName].value !== undefined) {
                changedModelVarValues[varName] = sim.model.v[varName].value;
              }
            });
            if (Object.keys( changedModelVarValues).length > 0) {
              msg.changedModelVarValues = changedModelVarValues;
            }
            worker.postMessage( msg);
            // on incoming messages from worker
            worker.onmessage = function (e) {
              // update progress bar
              if (e.data.progressIncrement !== undefined) {
                document.querySelector("#progress-container > progress").value += e.data.progressIncrement;
                // update step/time info only when updating the progress bar
                sim.ui["sim"].dataBinding["step"].value = numFmt.format( e.data.simStep);
                sim.ui["sim"].dataBinding["time"].value = numFmt.format( e.data.simTime);
              } else if (e.data.simTime !== undefined) {
                // receive step log message
                sim.logStep( e.data);
              } else if (e.data.simStat !== undefined) {
                // receive ex post statistics at simulation end
                sim.stat = e.data.simStat;
                oes.ui.updateUiOnSimulationEnd();
              }
            };
          } else {  // start main thread simulator
            sim.runScenario();
          }
        },
        "run step": function () {
          var i=0;
          sim.mode = "SingleStepSim";
          // hide simulation parameters and show simulator controls
          document.forms["scenario"].style.display = "none";
          document.forms["sim"].style.display = "block";
          // hide stop button
          document.forms["sim"].elements["stop"].style.display = "none";
          // show simulation log table
          if (sim.config.createLog && oes.ui.fullUI) {
            oes.ui.setupSimLog();
          }
          if (!sim.step) sim.initializeSimulationRun();
          for (i=1; i <= sim.stepIncrement; i++) {
            sim.runScenarioStep();
          }
        },
        "defineExperiment": function () {
          var experimentsUiPanelEl = document.getElementById("experimentsUI"),
              mainContentEl = null;
          if (experimentsUiPanelEl) {
            mainContentEl = experimentsUiPanelEl.lastElementChild;
          } else return;
          experimentsUiPanelEl.style.display = "block";
          // display the panel's main content element
          mainContentEl.style.display = "block";
          // hide +Experiment button
          document.forms["scenario"].defineExperiment.style.display = "none";
          try {
            sim.experiment.experimentNo = 1;
            sim.ui["experiments"] = new oBJECTvIEW({
              modelObject: sim.experiment,
              //fields: [["experimentNo", "title", "replications", "parameters"]],
              fields: [[
                {name: "experimentNo",
                  label: sim.experiment.properties["experimentNo"].label,
                  range: sim.experiment.properties["experimentNo"].range,
                  inputOutputMode: "O"},
                "experimentTitle", "replications", "parameterDefs"]],
              suppressNoValueFields: false,
              userActions: {
                "save": function () {
                  alert("Sorry! Defining new experiments is not yet implemented!");
                }
              }
            });
            /* sim.ui["experiments"].userActions["save"].label = "Save"; */
            // render view and store its data binding
            sim.ui["experiments"].dataBinding = sim.ui["experiments"].render( mainContentEl);
          } catch (e) {
            console.log( e.constructor.name +": "+ e.message);
          }
        }
      }
    });
  } catch (e) {
    console.log( e.constructor.name +": "+ e.message);
  }
  sim.ui["scenario"].userActions["run"].label = "►";
  sim.ui["scenario"].userActions["run"].hint = i18n.t("Run simulation scenario");
  sim.ui["scenario"].userActions["run step"].label = "⏯";  // = \u23EF = "&#9199;"
  sim.ui["scenario"].userActions["run step"].hint = i18n.t("Execute a single simulation step");
  sim.ui["scenario"].userActions["defineExperiment"].label = i18n.t("+Experiment");
  sim.ui["scenario"].userActions["defineExperiment"].hint = i18n.t("Define an experiment");
  sim.ui["scenario"].userActions["defineExperiment"].showCondition = function () {
    return !sim.experiment.replications;
  };
  // render the view and store its databinding
  sim.ui["scenario"].dataBinding = sim.ui["scenario"].render( mainEl);
  // show simulation time unit
  el = document.querySelector("form#scenario input[name*='simulationEndTime']");
  if (sim.model.timeUnit) {
    el2 = document.createElement("span");
    el2.title = oes.ui.timeUnitLabels[sim.model.timeUnit];
    el2.textContent = sim.model.timeUnit;
    dom.insertAfter( el2, el);
  }
  // show step duration time unit (ms)
  el = document.querySelector("form#scenario input[name*='stepDuration']");
  if (el) dom.insertAfter( document.createTextNode(" ms"), el);
  setupUiForStepIncrem("scenario");
  if (typeof sim.model.stopConditions === "object" && Object.keys( sim.model.stopConditions).length > 0) {
      setupUiForStopCondition()
  };
  /*********************************************************************
   Set up UI for showing/modifying model variables within scenario UI
   **********************************************************************/
  if (Object.keys( sim.model.v).length > 0) {
    oes.ui.setupModelVariablesUI( document.forms["scenario"]);
  }
  // possibly re-create initial objects/events
  if (!(sim.scenario.initialState.objects && sim.scenario.initialState.events) &&
      typeof sim.scenario.setupInitialState === "function") {
    sim.scenario.setupInitialState();
  }
  /*********************************************************************
   Set up UI for modifying the initial objects within scenario UI
   **********************************************************************/
  if (Object.keys( sim.objects).length > 0 && !sim.config.suppressInitialStateUI) {
    oes.ui.setupInitialObjectsUI( document.forms["scenario"]);
  }
  /*********************************************************************
   Set up UI for modifying the initial events within scenario UI
  **********************************************************************/
  if (!sim.FEL.isEmpty() && !sim.config.suppressInitialStateUI) {
    oes.ui.setupInitialEventsUI( document.forms["scenario"]);
  }
  /*********************************************************************
   Set up UI for defining/modifying experiments within scenario UI
  **********************************************************************/
  if (sim.experiment.replications && !sim.config.suppressExperimentsUI) {
    oes.ui.setupExperimentsUI( document.forms["scenario"]);
    oes.ui.setupExportStatisticsDefUI( document.forms["scenario"]);
  }

  /*********************************************************************
   Simulator Control UI
   *********************************************************************/
  try {
    sim.ui["sim"] = new oBJECTvIEW({
      modelObject: sim,
      fields: [[
        { name:"step", inputOutputMode:"O"},  // property-based
        { name:"time", inputOutputMode:"O"}   // property-based
      ]],
      suppressNoValueFields: false,  // always render fields (even without a value)
      userActions: {
        "stop": function () {
          sim.stopRequested = true;
        },
        "continue": function () {
          if (sim.mode === "SingleStepSim") sim.mode = "MainThreadSim";
          document.forms["sim"].elements["stop"].disabled = false;
          sim.runScenarioStep();
        },
        "run step": function () {
          var i=0;
          sim.mode = "SingleStepSim";
          for (i=1; i <= sim.stepIncrement; i++) {
            sim.runScenarioStep();
          }
        },
        "restart": function () {
          var scenarioRunStepBtn = document.forms["scenario"].elements["run step"],
              simRunStepBtn = document.forms["sim"].elements["run step"];
          document.getElementById("sim").remove();
          ["scenario","experiment","visCanvas","expost-statistics","simLogTbl"].forEach( function (elemID) {
            if (document.getElementById( elemID)) document.getElementById( elemID).remove();
          });
          //oes.ui.reset();
          document.getElementsByTagName("footer")[0].remove();
          oes.setupFrontEndSimEnv();
          sim.step = 0;
          sim.stepIncrement = 1;  // for single-step(s) mode
          simRunStepBtn.title = scenarioRunStepBtn.title = i18n.t("Execute a single simulation step");
        }
      }
    });
    sim.ui["sim"].userActions["stop"].label = "⏹";  // = "&#9209;"
    sim.ui["sim"].userActions["stop"].hint = i18n.t("Stop simulation");
    sim.ui["sim"].userActions["continue"].label = "►";  // = "&#9654;"
    sim.ui["sim"].userActions["continue"].hint = i18n.t("Continue simulation");
    sim.ui["sim"].userActions["run step"].label = sim.ui["scenario"].userActions["run step"].label;
    sim.ui["sim"].userActions["run step"].hint = sim.ui["scenario"].userActions["run step"].hint;
    sim.ui["sim"].userActions["restart"].label = "⏮";  // = "&#9198;"
    sim.ui["sim"].userActions["restart"].hint = i18n.t("Reset simulation");
    // render view and store its data binding
    sim.ui["sim"].dataBinding = sim.ui["sim"].render( mainEl);
    el = document.querySelector("form#sim output[name*='time']");
    if (sim.model.timeUnit) {
      dom.insertAfter( document.createTextNode(" "+ sim.model.timeUnit), el);
    }
    setupUiForStepIncrem("sim");
    document.forms["sim"].style.display = "none";
  } catch (e) {
    console.log( e.constructor.name +": "+ e.message);
  }
  /*********************************************************************
   Set up UIs for Visualization, Event Appearances and User Interaction
   **********************************************************************/
  if (sim.config.visualize) {
    oes.ui.setupVisualization();
    if (sim.config.observationUI.eventAppearances &&
        Object.keys( sim.config.observationUI.eventAppearances).length > 0) {
      oes.ui.setupEventAppearances();
    }
    if (sim.scenario.userInteractions &&
        Object.keys( sim.scenario.userInteractions).length > 0 &&
        sim.config.userInteractive) {
      oes.ui.setupUserInteraction();
    }
  } else sim.config.userInteractive = false;  // no visual. implies no usr interaction
  //TODO: set up UI for ex-post statistics using oBJECTvIEW
  /*
   try {
   sim.ui["expoststat"] = new oBJECTvIEW({
   modelObject: sim.model.statistics,
   suppressNoValueFields: false,
   userActions: {
   }
   });
   // render view and store its data binding
   sim.ui["expoststat"].dataBinding = sim.ui["expoststat"].render();
   document.forms["expoststat"].style.display = "none";
   } catch (e) {
   console.log( e.constructor.name +": "+ e.message);
   }
   */
  /*********************************************************************
   Set up UI for ex-post statistics
   **********************************************************************/
  if (statistics) {
    el = dom.createElement("form", {id:"expost-statistics"});
    el.style.overflowX = "auto";  // horizontal scrolling
    Object.keys( statistics).forEach( function (statVar) {
      var lbl = statistics[statVar].label, contEl=null;
      if (lbl) {
        // turn it on when there is at least one showTimeSeries variable
        createTimeSeriesChart |= statistics[statVar].showTimeSeries;
        if (!statistics[statVar].showTimeSeries) {
          contEl = dom.createElement("div", {classValues:"I-O-field"});
          contEl.appendChild( dom.createLabeledOutputField({
            name: statVar, labelText: i18n.t( lbl)}));
          el.appendChild( contEl);
        }
      }
    });
    dom.insertAfter( el, document.forms["sim"]);
    document.forms["expost-statistics"].style.display = "none";
    if (createTimeSeriesChart) {
      el = dom.createElement("div", {id:"time-series-chart"});
      document.forms["expost-statistics"].appendChild( el);
    }
  }
  // hide UI components that are not relevant for backend simulations
  if (!oes.ui.fullUI) {
    el.style.display = "none";
    document.forms["sim"].elements["stop"].style.display = "none";
    document.forms["sim"].elements["continue"].style.display = "none";
  }
  oes.ui.createPageFooter();
};
/*********************************************************************
 Set up the simulation/experiment log (create initially empty log table)
 **********************************************************************/
oes.ui.setupSimLog = function (isExperiment) {
  var el = document.getElementById("simLogTbl"),
      mainEl = document.querySelector("body > main"),
      N=0, statVarHeadings="", colHeadingsRow="", M=0;
  if (!el) {
    el = document.createElement("table");
    el.id = "simLogTbl";
    mainEl.appendChild( el);
  }
  if (isExperiment) {
    el.classList.add("expStatistics");
    Object.keys( sim.model.statistics).forEach( function (v) {
      var unit="", label = sim.model.statistics[v].label;
      if (label) {
        unit = sim.model.statistics[v].unit;
        if (unit) unit = " ["+ unit +"]";
        else unit = "";
        N = N+1;
        statVarHeadings += "<th>"+ label+unit +"</th>";
      }
    })
    if (sim.experiment.parameterDefs.length > 0) {
      colHeadingsRow = "<tr><th rowspan='2'>"+ i18n.t("Experiment scenario") +
          "</th><th rowspan='2'>"+ i18n.t("Parameter values") +"</th>" +
          "<th colspan='"+ N +"'>"+ i18n.t("Statistics") +"</th></tr>";
      M = 2;
    } else {
      colHeadingsRow = "<tr><th rowspan='2'>"+ i18n.t("Replication") +"</th>" +
          "<th colspan='"+ N +"'>"+ i18n.t("Statistics") +"</th></tr>";
      M = 1;
    }
    el.innerHTML = "<thead><tr><th colspan='"+ (M+N) + "'>" +
        i18n.t("Experiment Log") +"</th></tr>" +
        colHeadingsRow + "<tr>"+ statVarHeadings +"</tr></thead>";
  } else {
    el.innerHTML = "<thead><tr><th colspan='4'>"+ i18n.t("Simulation Log") +"</th></tr>" +
        "<tr><th colspan='2'>"+ i18n.t("Time") +"</th><th>"+ i18n.t("System State") +
        "</th><th>"+ i18n.t("Future Events") +"</th></tr></thead>";
  }
  sim.ui.logEl = dom.createElement("tbody",{id:"simLog"});
  el.appendChild( sim.ui.logEl);
  el.style.overflowX = "auto";  // horizontal scrolling
}

/*******************************************************
 Reset front-end simulation environment
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.reset = function () {
  // display/hide UI panels
  document.forms["scenario"].style.display = "block";
  document.forms["sim"].style.display = "none";
  if (document.forms["expost-statistics"]) {
    document.forms["expost-statistics"].style.display = "none";
  }
  // enable/disable user action buttons
  document.forms["sim"].elements["stop"].disabled = false;
  document.forms["sim"].elements["continue"].disabled = false;
  // reset simulation log table
  sim.ui.logEl.parentNode.style.display = "none";
  sim.ui.logEl.innerHTML = "";
};
/*******************************************************
 Update Simulation UI on Stop
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.updateUiOnStop = function () {
  // enable/disable user action buttons
  document.forms["sim"].elements["stop"].disabled = true;
  document.forms["sim"].elements["continue"].disabled = false;
  document.forms["sim"].elements["run step"].disabled = false;
  document.forms["sim"].elements["restart"].disabled = false;
};
/*******************************************************
 Update Simulation UI on Simulation End
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.updateUiOnSimulationEnd = function ( isExperiment) {
  if (document.getElementById("progress-container")) {
    document.getElementById("progress-container").remove();
  }
  // log simulation time
  console.log("Execution time: ", ((new Date()).getTime() - sim.startTime) + " ms");
  // enable/disable user action buttons
  document.forms["sim"].elements["stop"].disabled = true;
  document.forms["sim"].elements["continue"].disabled = true;
  document.forms["sim"].elements["run step"].disabled = true;
  document.forms["sim"].elements["restart"].disabled = false;
  if (!isExperiment) {
    if (sim.model.statistics) {
      document.forms["expost-statistics"].style.display = "block";
      oes.ui.showExPostStatistics();
    }
  }
};
/*******************************************************
 Show Ex-Post Statistics
 *******************************************************
 * @method
 * @author Gerd Wagner
 */
oes.ui.showExPostStatistics = function () {
  var statistics = sim.model.statistics,
      chart=null, displayStr="",
      locale = i18n.accessLang ? i18n.accessLang : "en-US",
      numFmt = new Intl.NumberFormat( locale, {maximumFractionDigits:2}),
      showTimeSeries=false,
      height=0, minusX=0, minusY= 0,
      width = sim.scenario.simulationEndTime,
      chartLabels = [];
  var chartSeries = [], dataT = [];
  // determine maximum time series value
  Object.keys( statistics).forEach( function (varName) {
    if (statistics[varName].showTimeSeries) {
      showTimeSeries = true;
      if (sim.timeIncrement !== undefined) {  // fixed-increment time progression
        height = Math.max( height, Array.max( sim.stat.timeSeries[varName]));
      } else {  // next-event time progression
        height = Math.max( height, Array.max( sim.stat.timeSeries[varName][1]));
      }
    }
  });
  height += height * 0.05;
  minusX = -width/20;
  minusY = -height/15;
  Object.keys( statistics).forEach( function (varName) {
    var lbl = statistics[varName].label,
        decPl = 2,  // default
        i=0, n=0,
        legendLabel = '';
    var dataY=[];
    if (lbl) {
      if (statistics[varName].showTimeSeries) {
        legendLabel = i18n.t( lbl) || varName;
        if (statistics[varName].unit)
          legendLabel += " (" + statistics[varName].unit + ")";
        chartLabels.push( legendLabel);
        if (sim.timeIncrement) {  // fixed-increment time progression
          dataY = sim.stat.timeSeries[varName];
          width = dataY.length;
          n = dataY.length;
          dataT = [];
          for (i=0; i < n; i++) {
            dataT.push(i * sim.timeIncrement * oes.stat.timeSeriesCompressionSteps);
          }
        } else {  // next-event time progression
          dataT = sim.stat.timeSeries[varName][0];
          dataY = sim.stat.timeSeries[varName][1];
          n = dataT.length;
          width = dataT[n-1];  // simulation end time
        }
        chartSeries.push({name: legendLabel, data: dataY});
      } else {
        /*
        if (!statistics[varName].hasIntegerRange) {
          if (statistics[varName].decimalPlaces) {
            decPl = statistics[varName].decimalPlaces;
          }
          displayStr = sim.stat[varName].toFixed( decPl);
        } else displayStr = String( sim.stat[varName]);
        */
        if (statistics[varName].decimalPlaces) {
          decPl = statistics[varName].decimalPlaces;
          displayStr = new Intl.NumberFormat( locale, {maximumFractionDigits: decPl}).
              format( sim.stat[varName]);
        } else displayStr = numFmt.format( sim.stat[varName]);
        if (statistics[varName].unit) displayStr += " " + statistics[varName].unit;
        document.forms["expost-statistics"].elements[varName].value = displayStr;
      }
    }
  });
  // show resource utilization statistics
  if (sim.stat.resUtil && Object.keys( sim.stat.resUtil).length > 0) {
    document.forms["expost-statistics"].appendChild(
        dom.createElement("h2", {content: i18n.t("Resource Utilization")})
    );
    Object.keys( sim.stat.resUtil).forEach( function (actT) {
      var activityTypeLabel = cLASS[actT].label || actT;
      document.forms["expost-statistics"].appendChild(
          dom.createElement("h3", {content: i18n.t(activityTypeLabel)})
      );
      Object.keys( sim.stat.resUtil[actT]).forEach( function (objIdStr) {
        //console.log(objIdStr +": "+ sim.stat.resUtil[actT][objIdStr]/sim.time);
        var objName = sim.objects[objIdStr].name || objIdStr,
            contEl = dom.createElement("div", {classValues:"I-O-field"}),
            resUtil = Math.round( sim.stat.resUtil[actT][objIdStr]/sim.scenario.simulationEndTime * 10000) / 100;
        contEl.appendChild( dom.createLabeledOutputField({ name: objIdStr,
            labelText: objName, value: numFmt.format( resUtil) + " %"}));
        document.forms["expost-statistics"].appendChild( contEl);
      });
    });
  }
  if (showTimeSeries) {
    chart = new Chartist.Line('#time-series-chart', {
        labels: dataT,
        series: chartSeries
      }, {
        showPoint: false,
        lineSmooth: true,
        showArea: true,
        axisX: {
          labelInterpolationFnc: function ( value, index ) {
            var interval = parseInt( dataT.length / 10 );
            return index % interval === 0 ? value : null;
          }
        },
        axisY: {
          offset: 60,
          labelInterpolationFnc: function ( value ) {
            return value.toFixed( 2 );
          }
        },
        plugins: [
          Chartist.plugins.legend() // used to display chart legend
        ]}
    );
  }
};

/*******************************************************
 UI for defining the initial state
 *******************************************************
 * Set up UI for model varables
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupModelVariablesUI = function (parentEl) {
  var uiPanelEl = dom.createExpandablePanel({id: "ModelVariablesUI",
      heading: i18n.t("Model Variables"), borderColor:"aqua",
      hint: i18n.accessLang ? i18n.t("ModelVariablesUI hint") :
          "Define/set variables that can be used, for instance, in the initial state " +
          "or as parameters in functions or in an experiment."});
  var mainContentEl = uiPanelEl.lastElementChild;
  var labeledVarDefs={}, vm={};
  sim.config.modelVariablesUI = sim.config.modelVariablesUI || {};
  Object.keys( sim.model.v).forEach( function (varName) {
    if (sim.model.v[varName].label) {
      labeledVarDefs[varName] = sim.model.v[varName];
      labeledVarDefs[varName].label = i18n.t(sim.model.v[varName].label);
    }
  });
  if (Object.keys( labeledVarDefs).length === 0) return;  // nothing to show
  vm = {inputFields: labeledVarDefs};
  // create form element
  mainContentEl.appendChild( oBJECTvIEW.createUiFromViewModel( vm));
  sim.config.modelVariablesUI.userActions = {
    "applyChanges": function () {
      Object.keys( vm.fieldValues).forEach( function (fld) {
        sim.model.v[fld].value = vm.fieldValues[fld];  // this will be used by worker
        sim.v[fld] = vm.fieldValues[fld];
      });
      sim.createInitialObjEvt();
      // redraw visualization of initial state (step 0)
      if (sim.config.visualize) {
        oes.ui.resetCanvas();
        oes.ui.visualizeStep();
      }
    }
  };
  sim.config.modelVariablesUI.userActions["applyChanges"].label = i18n.t("Apply changes");
  // create buttons for userActions
  mainContentEl.appendChild( oBJECTvIEW.createUiElemsForUserActions(
      sim.config.modelVariablesUI.userActions
  ));
  parentEl.appendChild( uiPanelEl);
}
/*******************************************************
 UI for defining the initial state objects
 *******************************************************
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupInitialObjectsUI = function (parentEl) {
  var objTypes = sim.model.objectTypes.concat( oes.predefinedObjectTypes);  // an array
  var uiPanelEl = dom.createExpandablePanel({id:"InitialStateObjectsUI",
      heading: i18n.t("Initial Objects"), borderColor:"aqua",
    // "Delete, create or edit initial objects."
      hint: i18n.accessLang ? i18n.t("InitialStateObjectsUI hint") :
          "Change initial attribute values of objects - as a part of the initial state"
  });
  var contentEl = uiPanelEl.lastElementChild,
      mainEl = dom.createElement("div", {classValues:"xpanel-main"});
  contentEl.appendChild( mainEl);
  sim.scenario.initialStateUI = sim.scenario.initialStateUI || {};
  // create a ClassPopulationWidget for each object type
  objTypes.forEach( function (className) {
    var editProps=[], classPopWidget=null,
        slots = {type: className},
        Class = cLASS[className];
    if (!Class.instances || Object.keys( Class.instances).length === 0) return;
    if (sim.scenario.initialStateUI &&
        sim.scenario.initialStateUI.editableProperties &&
        sim.scenario.initialStateUI.editableProperties[className]) {
      editProps = sim.scenario.initialStateUI.editableProperties[className];
      slots.editProps = editProps;
    }
    classPopWidget = oBJECTvIEW.createRecordTableWidget( slots);
    mainEl.appendChild( classPopWidget);
  });
  sim.scenario.initialStateUI.userActions = {
    "applyChanges": function () {
      alert("Changing the initial state is not yet implemented!"); return;
      sim.updateInitialStateObjects();
      sim.createInitialObjEvt();
      if (sim.config.visualize) {
        oes.ui.resetCanvas();
        oes.ui.visualizeStep();  // visualize initial state
      }
    }
  };
  sim.scenario.initialStateUI.userActions["applyChanges"].label = i18n.t("Apply changes");
  // create buttons for userActions
  contentEl.appendChild( oBJECTvIEW.createUiElemsForUserActions(
      sim.scenario.initialStateUI.userActions
  ));
  parentEl.appendChild( uiPanelEl);
};
/*******************************************************
 UI for defining the initial state events
 *******************************************************
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupInitialEventsUI = function (parentEl) {
  var evtTypes = sim.model.eventTypes.concat( oes.predefinedEventTypes);  // an array
  var uiPanelEl = dom.createExpandablePanel({id:"InitialStateEventsUI",
      heading: i18n.t("Initial Events"), borderColor:"aqua",
      // "Delete, create or edit initial events."
    hint: i18n.accessLang ? i18n.t("InitialStateEventsUI hint") :
        "Change initial attribute values of events - as a part of the initial state"
  });
  var contentEl = uiPanelEl.lastElementChild,
      mainEl = dom.createElement("div", {classValues:"xpanel-main"});
  var initEvts = sim.FEL.getAllEvents();
  contentEl.appendChild( mainEl);
  sim.scenario.initialEventsUI = sim.scenario.initialEventsUI || {};
  // create a ClassPopulationWidget for each event type
  evtTypes.forEach( function (className) {
    var editProps=[], classPopWidget=null,
        Class = cLASS[className],
        slots = {type: className};
    Class.instances = initEvts.filter(
        function (evt) {return evt.constructor.Name === className;});
    if (Object.keys( Class.instances).length === 0) return;
    if (sim.scenario.initialEventsUI.editableProperties &&
        sim.scenario.initialEventsUI.editableProperties[className]) {
      editProps = sim.scenario.initialEventsUI.editableProperties[className];
      slots.editProps = editProps;
    }
    // add inherited property
    Class.properties["occTime"] = {range:"NonNegativeNumber", label:"Occ. time"};
    classPopWidget = oBJECTvIEW.createRecordTableWidget( slots);
    mainEl.appendChild( classPopWidget);
  });
  sim.scenario.initialEventsUI.userActions = {
    "applyChanges": function () {
      sim.updateInitialStateObjects();
      sim.createInitialObjEvt();
      if (sim.config.visualize) {
        oes.ui.resetCanvas();
        oes.ui.visualizeStep();  // visualize initial state
      }
    }
  };
  sim.scenario.initialEventsUI.userActions["applyChanges"].label = i18n.t("Apply changes");
  // create buttons for userActions
  contentEl.appendChild( oBJECTvIEW.createUiElemsForUserActions(
      sim.scenario.initialEventsUI.userActions
  ));
  parentEl.appendChild( uiPanelEl);
};
/*******************************************************
 UI for Experiments
 *******************************************************
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupExperimentsUI = function (parentEl) {
  var uiPanelEl = dom.createExpandablePanel({id:"experimentsUI",
      heading: i18n.t("Experiments"), borderColor:"chartreuse",
      hint: i18n.accessLang ? i18n.t("experimentsUI hint") :
        "An experiment is defined on top of a scenario by defining (1) the number of replications, " +
        "(2) zero or more experiment parameters (bound to model variables), and " +
        "(3) possibly a list of seed values, one for each replication."
  });
  var mainContentEl = uiPanelEl.lastElementChild;
  parentEl.appendChild( uiPanelEl);
  if (sim.experiment.replications) {  // an experiment has been defined
    try {
      sim.ui["experiments"] = new oBJECTvIEW({
        modelObject: sim.experiment,
        heading: i18n.t("Experiment") +" "+ sim.experiment.experimentNo +
            (sim.experiment.title ? ": "+ i18n.t( sim.experiment.title) : ""),
        fields: [["replications", "parameterDefs"]],
        suppressNoValueFields: true,
        userActions: {
          "run": function () {
            var tbodyEl=null, worker=null, msg={}, changedModelVarValues={};
            var progressContainer = dom.createProgressBar(i18n.t("Executing simulation experiment..."));
            function logExpScenarioRun( data) {
              var rowEl = tbodyEl.insertRow();  // create new table row
              var locale = i18n.accessLang ? i18n.accessLang : "en-US",
                  numFmt = new Intl.NumberFormat( locale,
                      {maximumFractionDigits: oes.defaults.expostStatDecimalPlaces});
              rowEl.insertCell().textContent = data.expScenNo;
              rowEl.insertCell().textContent = data.expScenParamValues.toString();
              Object.keys( data.expScenStat).forEach( function (v) {
                var statVal = data.expScenStat[v], displayStr="",
                    decPl = sim.model.statistics[v].decimalPlaces;
                if (decPl) {
                  displayStr = new Intl.NumberFormat( locale,
                      {maximumFractionDigits:decPl}).format( statVal);
                } else displayStr = numFmt.format( statVal);
                rowEl.insertCell().textContent = displayStr;
              });
            }
            function logSimpleExpRun( data) {
              var rowEl=null, i=0;
              var nmrOfReplications = data.expReplicStat[Object.keys( data.expReplicStat)[0]].length;
              for (i=0; i < nmrOfReplications; i++) {
                rowEl = tbodyEl.insertRow();  // create new table row
                rowEl.insertCell().textContent = i+1;  // replication No
                Object.keys( data.expReplicStat).forEach( function (varName    ) {
                  var range = sim.model.statistics[varName].range,
                      val = data.expReplicStat[varName][i];
                  if (cLASS.isIntegerType(range)) val = parseInt( val);
                  else val = val.toFixed( oes.defaults.expostStatDecimalPlaces);
                  rowEl.insertCell().textContent = val;
                });
              }
              // create footer with summary statistics
              Object.keys( oes.stat.summary).forEach( function (aggr) {
                rowEl = tbodyEl.insertRow();  // create new table row
                rowEl.insertCell().textContent = oes.stat.summary[aggr].label;
                Object.keys( data.expScenStat).forEach( function (varName) {
                  var range = sim.model.statistics[varName].range,
                      val = data.expScenStat[varName][aggr];
                  if (cLASS.isIntegerType(range)) val = parseInt(val);
                  else val = val.toFixed( oes.defaults.expostStatDecimalPlaces);
                  rowEl.insertCell().textContent = val;
                });
              });
              /*
              rowEl = tbodyEl.insertRow();  // create new table row
              rowEl.insertCell().textContent = "Average";
              Object.keys( data.expScenStat).forEach( function (varName) {
                var range = sim.model.statistics[varName].range,
                    val = data.expScenStat[varName].average;
                if (cLASS.isIntegerType(range)) val = parseInt( val);
                else val = val.toFixed( oes.defaults.expostStatDecimalPlaces);
                rowEl.insertCell().textContent = val;
              });
              */
            }
            document.body.appendChild( progressContainer);
            // configure experiment log
            oes.ui.setupSimLog( true);
            tbodyEl = sim.ui.logEl;
            // drop scenario form
            document.forms["scenario"].remove();
            // show simulator controls
            document.forms["sim"].style.display = "block";
            // log simulation start time (in the main thread)
            sim.startTime = (new Date()).getTime();
            // start the simulation worker
            if (window.Worker) {
              worker = new Worker("simulation-worker.js");
              // send "experiment mode" message to worker
              msg = {runExperiment: true,
                     endTime: sim.scenario.simulationEndTime,
                     expReplications: sim.experiment.replications,
                     dbName: sim.model.name};
              Object.keys( sim.model.v).forEach( function (varName) {
                if (sim.model.v[varName].value !== undefined) {
                  changedModelVarValues[varName] = sim.model.v[varName].value;
                }
              });
              if (Object.keys( changedModelVarValues).length > 0) {
                msg.changedModelVarValues = changedModelVarValues;
              }
              worker.postMessage( msg);
              // on incoming messages from worker
              worker.onmessage = function (e) {
                if (e.data.expScenNo !== undefined) logExpScenarioRun( e.data);
                if (e.data.expReplicStat !== undefined) logSimpleExpRun( e.data);
                if (e.data.progressIncrement !== undefined) {
                  document.querySelector("#progress-container > progress").value +=
                      e.data.progressIncrement;
                }
                if (e.data.endOfExp) oes.ui.updateUiOnSimulationEnd( true);
              };
            } else {
              alert("Experiment cannot be executed since browser does not support web workers!");
            }
          }
        }
      });
      sim.ui["experiments"].userActions["run"].label = "►";  // i18n.t("Run Experiment")
      sim.ui["experiments"].userActions["run"].hint = i18n.t("Run experiment");
      // render view and store its data binding
      sim.ui["experiments"].dataBinding = sim.ui["experiments"].render( mainContentEl);
    } catch (e) {
      console.log( e.constructor.name +": "+ e.message);
    }
  } else {
    //mainContentEl.innerHTML = "<p>No experiment defined.</p>";
    uiPanelEl.style.display = "none";
  }
};
/*******************************************************
 TODO: UI for Export Statistics
 *******************************************************
 *
 * @method
 * @author Luis Gustavo Nardin
 */
sim.export.header = true;
sim.export.sep = ";";
sim.export.timeSeries = true;
sim.export.defFilename = "definitions.csv";
sim.export.sumFilename = "summary.csv";
sim.export.tsFilename = "timeseries.csv";

oes.ui.setupExportStatisticsDefUI = function (parentEl) {
  var uiPanelEl = dom.createExpandablePanel( {
    id: "exportStatisticsUI",
    heading: "Export", borderColor: "chartreuse",
    hint: "Export simulation statistics stored in the IndexedDB."
  } );
  var mainContentEl = uiPanelEl.lastElementChild;
  parentEl.appendChild( uiPanelEl);
  sim.ui["export"] = new oBJECTvIEW({
    modelObject: sim.export,
    heading: "Export Statistics",
    fields: [["header", "sep", "timeSeries"],
             ["defFilename", "sumFilename", "tsFilename"]],
    suppressNoValueFields: false,
    userActions: {
      "defintion": function () {
        if (!sim.storeMan) {
          oes.setupStorageManagement(sim.model.name);
        }

        sim.storeMan.retrieveAll( oes.ExperimentRun).then( function (runs) {
          if (runs.length > 0) {
            sim.storeMan.retrieveAll( oes.ExperimentScenarioRun).then(
              function (records) {
                var param, output, expScenRun;
                var defHeader, defText, defLine;  // Definitions
                var statVarName, i, j;

                defText = "";

                // Create output records
                for (i = 0; i < records.length; i += 1) {
                  defLine = [];
                  expScenRun = new oes.ExperimentScenarioRun(records[i]);
                  param = expScenRun.parameterValueCombination;
                  output = expScenRun.outputStatistics;

                  // Definition Header
                  if (typeof defHeader === "undefined") {
                    defHeader = [];
                    if (sim.export.header) {
                      for (j = 0; j < sim.experiment.parameterDefs.length;
                        j += 1) {
                        defHeader.push(
                          sim.experiment.parameterDefs[j].name);
                      }
                      defText = ["id",
                        "experimentRun",
                        "experimentScenarioNo"].concat( defHeader).join(
                          sim.export.sep) + "\n";
                    }
                  }
                  // Definition Line
                  defLine.push( expScenRun["id"]);
                  defLine.push( expScenRun["experimentRun"]);
                  defLine.push( expScenRun["experimentScenarioNo"]);
                  param.forEach( function (prop) {
                    defLine.push( prop);
                  });

                  defText += defLine.join( sim.export.sep) + "\n";
                }

                // Export data
                generateTextFile( sim.export.defFilename, defText);
              }).catch( function (err) {
                console.log( err.name + ": " + err.message);
              });
          }
        });
      },
      "summary": function () {
        if (!sim.storeMan) {
          oes.setupStorageManagement(sim.model.name);
        }

        sim.storeMan.retrieveAll( oes.ExperimentRun).then( function (runs) {
          if (runs.length > 0) {
            sim.storeMan.retrieveAll( oes.ExperimentScenarioRun).then(
              function (records) {
                var param, output, expScenRun;
                var defHeader, defText, defLine;  // Definitions
                var sumHeader, sumText, sumLine;  // Summary
                var statVarName, i, j;

                sumText = "";
                defText = "";

                // Create output records
                for (i = 0; i < records.length; i += 1) {
                  defLine = [];
                  sumLine = [];
                  expScenRun = new oes.ExperimentScenarioRun( records[i]);
                  param = expScenRun.parameterValueCombination;
                  output = expScenRun.outputStatistics;

                  //  Definition Header
                  if (typeof defHeader === "undefined") {
                    defHeader = [];
                    if (sim.export.header) {
                      for (j = 0; j < sim.experiment.parameterDefs.length;
                        j += 1) {
                        defHeader.push(
                          sim.experiment.parameterDefs[j].name);
                      }
                      defText = ["id",
                        "experimentRun",
                        "experimentScenarioNo"].concat( defHeader).join(
                          sim.export.sep) + "\n";
                    }
                  }
                  // Definition Line
                  defLine.push( expScenRun["id"]);
                  defLine.push( expScenRun["experimentRun"]);
                  defLine.push( expScenRun["experimentScenarioNo"]);
                  param.forEach( function (prop) {
                    defLine.push( prop);
                  } );

                  // Summary Header
                  if (typeof sumHeader === "undefined") {
                    sumHeader = [];
                    for (statVarName of Object.keys(output)) {
                      if (typeof output[statVarName] !== "object") {
                        sumHeader.push( statVarName);
                      }
                    }
                    if ( sim.export.header) {
                      sumText = ["id"].concat( sumHeader)
                        .join( sim.export.sep) + "\n";
                    }
                  }
                  // Summary Line
                  sumLine.push( expScenRun["id"] );
                  sumHeader.forEach( function (prop) {
                    sumLine.push( output[prop]);
                  });

                  sumText += sumLine.join( sim.export.sep) + "\n";
                }

                // Export data
                generateTextFile( sim.export.sumFilename, sumText);
              }).catch( function (err) {
                console.log( err.name + ": " + err.message);
              });
          }
        });
      },
      "timeseries": function () {
        if (!sim.storeMan) {
          oes.setupStorageManagement( sim.model.name);
        }

        sim.storeMan.retrieveAll( oes.ExperimentRun).then( function (runs) {
          if (runs.length > 0) {
            sim.storeMan.retrieveAll( oes.ExperimentScenarioRun).then(
              function (records) {
                var param, output, expScenRun;
                var tsHeader, tsText, tsLine, tsVarName, ts; // Time Series
                var statVarName, i, j, r, t, v;

                tsText = "";

                // Create output records
                for (i = 0; i < records.length; i += 1) {
                  expScenRun = new oes.ExperimentScenarioRun( records[i]);
                  param = expScenRun.parameterValueCombination;
                  output = expScenRun.outputStatistics;

                  // Time Series
                  if ( sim.export.timeSeries ) {
                    // Time Series Header
                    if (typeof tsHeader === "undefined") {
                      tsHeader = [];
                      for (tsVarName of Object.keys( output.timeSeries)) {
                        tsHeader.push( tsVarName);
                      }
                      if (sim.export.header) {
                        if (typeof sim.model.timeIncrement !== "undefined") {
                          tsText = ["id", "time"].concat( tsHeader)
                            .join( sim.export.sep) + "\n";
                        } else {
                          tsText = ["id", "time", "variable", "value"]
                            .join( sim.export.sep ) +
                            "\n";
                        }
                      }
                    }

                    // Time Series Line
                    if (tsHeader.length > 0) {

                      ts = [];
                      if (typeof sim.model.timeIncrement !== "undefined") {
                        for(v = 0; v < tsHeader.length; v += 1) {
                          if (output.timeSeries[ tsHeader[v]]) {
                            ts[v] = output.timeSeries[tsHeader[v]];
                          }
                        }

                        for(r = 0, t = 0; r < ts[0].length;
                          r += 1, t += sim.model.timeIncrement) {
                          tsLine = [];
                          tsLine.push( expScenRun["id"]);
                          tsLine.push( t);
                          for(v = 0; v < tsHeader.length; v += 1) {
                            tsLine.push( ts[v][r]);
                          }

                          tsText += tsLine.join( sim.export.sep) + "\n";
                        }
                      } else {
                        for(v = 0; v < tsHeader.length; v += 1) {
                          ts = output.timeSeries[tsHeader[v]];

                          for(r = 0; r < ts[0].length; r += 1) {
                            tsLine = [];
                            tsLine.push( expScenRun["id"]);
                            tsLine.push( ts[0][r]);
                            tsLine.push( tsHeader[v]);
                            tsLine.push( ts[1][r]);
                            tsText += tsLine.join( sim.export.sep) + "\n";
                          }
                        }
                      }
                    }
                  }
                }

                if (sim.export.timeSeries) {
                  generateTextFile( sim.export.tsFilename, tsText);
                }
              } ).catch( function (err) {
                console.log( err.name + ": " + err.message);
              } );
          }
        } );
      }
    }
  });
  // render view and store its data binding
  sim.ui["export"].dataBinding = sim.ui["export"].render( mainContentEl);
};
/*******************************************************************************
 * Generate the file from text
 *
 * @param {string} filename - Name of the file
 * @param {string} text - Content of the file
 ******************************************************************************/
var generateTextFile = function (filename, text) {
  var data, file, url;

  data = new Blob( [text], {type: "text/plain"});

  url = window.URL.createObjectURL(data);

  file = document.createElement("a");
  file.setAttribute( "style", "display: none");
  file.setAttribute( "href", url);
  file.setAttribute( "download", filename);
  document.body.appendChild( file);
  file.click();
  window.URL.revokeObjectURL( url);
  file.remove();
};
/*******************************************************
 TODO: UI for Expost Statistics
 *******************************************************
 *
 * @method
 * @author Gerd Wagner
 */
oes.ui.setupExpostStatisticsDefUI = function (parentEl) {
  var uiPanelEl = dom.createExpandablePanel({id:"spaceUI", heading:"Space"});
  var mainContentEl = uiPanelEl.lastElementChild;
  parentEl.appendChild( uiPanelEl);
  sim.ui["space"] = new oBJECTvIEW({
    modelObject: sim.model.space,
    fields: [["xMax", "yMax", "zMax"].slice(0,
        oes.space.dimensions[sim.model.space.type])],
    suppressNoValueFields: false,
    userActions: {
      "applyChanges": function () {
        sim.updateInitialStateObjects();
        oes.ui.resetCanvas();
        // visualize initial state (at start of step 0)
        if (sim.config.visualize) oes.ui.visualizeStep();
      }
    }
  });
  sim.ui["space"].userActions["applyChanges"].label = "Apply changes";
  // render view and store its data binding
  sim.ui["space"].dataBinding = sim.ui["space"].render( mainContentEl);
};
/*******************************************************
 Set up the Visualization
 *******************************************************/
oes.ui.setupVisualization = function () {
  var mainEl = document.querySelector("body > main");
  if (sim.model.space.type) {
    oes.ui.setupSpaceView();
  } else if (sim.config.observationUI.type) {  // visualizing a non-spatial  model
    switch (sim.config.observationUI.type) {
      case "SVG":
        oes.ui.setupCanvas = oes.ui.vis.SVG.setup;
        oes.ui.resetCanvas = oes.ui.vis.SVG.reset;
        oes.ui.visualizeStep = oes.ui.vis.SVG.visualizeStep;
        break;
      default:
        console.log("Invalid visualization type: "+ sim.config.observationUI.visualType);
        sim.config.visualize = false;
    }
  } else sim.config.visualize = false;
  if (sim.config.visualize) oes.ui.setupCanvas( mainEl);

}
/*******************************************************
 Set up the Space Visualization
 *******************************************************/
oes.ui.setupSpaceView = function () {
  if (sim.model.space.type === undefined) throw "No space type defined in *setupSpaceView*";
  switch (sim.model.space.type) {
    // TODO: use (detect?) correct references methods, when other than the DOM
    // visualization "modules" are implemented for IntegerGrid case.
  case "IntegerGrid":
    switch (sim.config.observationUI.spaceView.type) {
    case "threeDim":
      oes.ui.setupCanvas = oes.ui.space.threeDim.Babylon.setup;
      oes.ui.resetCanvas = oes.ui.space.threeDim.Babylon.reset;
      oes.ui.visualizeStep = oes.ui.space.threeDim.Babylon.render;
      break;
    default:
      oes.ui.setupCanvas = oes.ui.space.grid.setup;
      oes.ui.resetCanvas = oes.ui.space.grid.reset;
      oes.ui.visualizeStep = oes.ui.space.grid.i.dom.renderIntegerGrid;
    }
   break;
  // TODO: use (detect?) correct references methods, when other than the DOM
  // visualization "modules" are implemented for ObjectGrid case.
  case "ObjectGrid":
    oes.ui.setupCanvas = oes.ui.space.grid.o.dom.setupObjectGrid;
    oes.ui.resetCanvas = oes.ui.space.grid.reset;
    oes.ui.visualizeStep = oes.ui.space.grid.o.dom.renderObjectGrid;
    break;
  case "1D":
    switch (sim.config.observationUI.spaceView.type) {
    case "oneDimSVG":
      oes.ui.setupCanvas = oes.ui.space.oneDim.SVG.setup;
      oes.ui.resetCanvas = oes.ui.space.oneDim.SVG.reset;
      oes.ui.visualizeStep = oes.ui.space.oneDim.SVG.renderSimState;
      break;
    case "threeDim":
      oes.ui.setupCanvas = oes.ui.space.threeDim.Babylon.setup;
      oes.ui.resetCanvas = oes.ui.space.threeDim.Babylon.reset;
      oes.ui.visualizeStep = oes.ui.space.threeDim.Babylon.render;
      break;
    // defaults to oneDimSVG visualization
    default:
      oes.ui.setupCanvas = oes.ui.space.oneDim.SVG.setup;
      oes.ui.resetCanvas = oes.ui.space.oneDim.SVG.reset;
      oes.ui.visualizeStep = oes.ui.space.oneDim.SVG.renderSimState;
    }
    break;
  case "2D":
    oes.ui.setupCanvas = oes.ui.space.twoDim.Phaser.setup;
    oes.ui.resetCanvas = oes.ui.space.twoDim.Phaser.reset;
    oes.ui.visualizeStep = oes.ui.space.twoDim.Phaser.render;
    break;
  case "3D":
    // TODO: complete when a 3D space is supported.
    break;
  }
};
/*====================================================================================
    S V G
 ==================================================================================== */
oes.ui.vis.SVG.setup = function (containerEl) {
  var obsUI = sim.config.observationUI,
      fixedElems = obsUI.fixedElements,
      objViews = obsUI.objectViews,
      canvasWidth = obsUI.canvas.width || 600,
      canvasHeight = obsUI.canvas.height || 400,
      canvasSvgEl = svg.createSVG({id:"canvasSVG",
          width: canvasWidth, height: canvasHeight});
  var defsEl = svg.createDefs(),
      mainEl = document.querySelector("body > main");
  // define SVG canvas
  sim.visualEl = dom.createElement("div",{id:"visCanvas", classValues:"uiBlock"});
  if (obsUI.canvas.style) sim.visualEl.style = obsUI.canvasStyle;
  sim.visualEl.appendChild( canvasSvgEl);
  canvasSvgEl.appendChild( defsEl);
  mainEl.appendChild( sim.visualEl);
  if (fixedElems) {  // render fixed elements
    Object.keys( fixedElems).forEach( function (id) {
      var el=null;
      el = oes.ui.vis.SVG.createShapeFromDefRec( fixedElems[id]);
      canvasSvgEl.appendChild( el);
    });
  }
  if (objViews) {  // render initial object views
    Object.keys( objViews).forEach( function (viewId) {
      var el=null, shapeGroupEl=null, fp=null,
          obj = sim.namedObjects[viewId],  // when viewId = objName 
          objView = objViews[viewId],   // objViews[obj.constructor.Name]
          objViewItems = Array.isArray( objView) ? objView : [objView];
      shapeGroupEl = svg.createGroup();
      objViewItems.forEach( function (itemDefRec) {
        var txt="";
        if (itemDefRec.shapeName) {
          if (itemDefRec.fillPatternImage) {
            fp = itemDefRec.fillPatternImage;
            if (!fp.file.includes("/")) {
              fp.file = oes.defaults.imgFolder + fp.file;
            }
            el = svg.createImageFillPattern( fp.id, fp.file);
            defsEl.appendChild( el);
            itemDefRec.style = "fill: url(#" + fp.id + ");" + itemDefRec.style;
          }
          el = svg.createShapeFromDefRec( itemDefRec, obj);  // cannot be "image"
          itemDefRec.element = el;
          canvasSvgEl.appendChild( el);
        } else if (itemDefRec.text) {  // objViewItem defines a text element
          if (typeof itemDefRec.text === "function") txt = itemDefRec.text( obj);
          else txt = itemDefRec.text;
          el = svg.createText( itemDefRec.x, itemDefRec.y, txt, itemDefRec.style)
        } else {  // itemDefRec maps enum attribs to lists of visualization items
          Object.keys( itemDefRec).forEach( function (key) {
            var enumIndex = 0, currentEnumViewDefRec = [];
            if (key !== "object" && key !== "element") {  // ommit special view fields
              enumIndex = obj[key];  // key is enum attr name
              currentEnumViewDefRec = itemDefRec[key][enumIndex-1];
              itemDefRec[key].forEach( function (shDefRec) {
                var el = oes.ui.vis.SVG.createShapeFromDefRec( shDefRec, obj);
                el.style.display = "none";
                shDefRec.element = el;
                canvasSvgEl.appendChild( el);
                if (shDefRec.canvasBackgroundColor) {
                  sim.visualEl.style.backgroundColor = shDefRec.canvasBackgroundColor;
                }
              });
              itemDefRec[key].element = currentEnumViewDefRec.element;
              currentEnumViewDefRec.element.style.display = "block";
            }
          });
        }
        shapeGroupEl.appendChild( el);
      });
      canvasSvgEl.appendChild( shapeGroupEl);
    });
  }
};
oes.ui.vis.SVG.reset = function () {
  oes.ui.vis.SVG.visualizeStep();  //TODO: replace with real reset code
};
oes.ui.vis.SVG.visualizeStep = function () {
  var obsUI = sim.config.observationUI,
      objViews = obsUI.objectViews;
  Object.keys( objViews).forEach( function (viewId) {
    var itemDefRec={}, shAttribs=[], el=null, i=0, val,
        obj = sim.namedObjects[viewId],
        objView = objViews[viewId],
        objViewItems = Array.isArray( objView) ? objView : [objView];
    // objViewItems is a list of view item definition records
    for (i=0; i < objViewItems.length; i++) {
      itemDefRec = objViewItems[i];
      el = itemDefRec.element;
      if (itemDefRec.shapeName) {
        shAttribs = itemDefRec.shapeAttributes;
        Object.keys( shAttribs).forEach( function (attrName) {
          if (typeof shAttribs[attrName] === "function") {
            val = shAttribs[attrName]( obj);
            switch (attrName) {
              case "textContent":
                el.textContent = val;
                break;
              case "file":
                if (!val.includes("/")) {
                  val = oes.defaults.imgFolder + val;
                }
                el.setAttributeNS( svg.XLINK_NS, "href", val);
                break;
              default:
                el.setAttribute( attrName, val);
                break;
            }
          }
        });
      } else {  // objView maps enum attribs to lists of vis item def rec
        Object.keys( itemDefRec).forEach( function (key) {
          var enumIndex=0, currentEnumViewDefRec = {};
          // exclude properties that itemDefRec may also contain
          if (key !== "object" && key !== "element") {
            enumIndex = obj[key];
            if (Number.isInteger( enumIndex) && Array.isArray( itemDefRec[key]) &&
                enumIndex >= 1 && enumIndex <= itemDefRec[key].length) {
              currentEnumViewDefRec = itemDefRec[key][enumIndex-1];
              // hide previous enum view
              itemDefRec[key].element.style.display = "none";
              // display current enum view
              currentEnumViewDefRec.element.style.display = "block";
              // store current enum view element
              itemDefRec[key].element = currentEnumViewDefRec.element;
              if (currentEnumViewDefRec.canvasBackgroundColor) {
                sim.visualEl.style.backgroundColor = currentEnumViewDefRec.canvasBackgroundColor;
              }
            }
          }
        });
      }
    }
  });
};
oes.ui.vis.SVG.createShapeFromDefRec = function (shDefRec) {
  var fn = shDefRec.shapeAttributes.file;
  if (fn && !fn.includes("/")) {
    shDefRec.shapeAttributes.file = oes.defaults.imgFolder + fn;
  }
  return svg.createShapeFromDefRec( shDefRec);
};

/***********************************************************************
 Set up the User Interaction (UIA) Elements
 A UIA type is defined in the scenario/config. A UIA is triggered by a
 simulation event (of some type, possibly satisfying some condition)
 leading to the creation of a modal UIA window and an interruption of the
 simulation loop by having the browser wait for user input/actions. The
 UIA window contains output fields and input fields defined by the UIA
 type, and a "continue" button as a default user action element. After
 getting informed about the current situation by reading the output
 field values, the user makes her choices by entering corresponding
 values in the input fields and then performs the "continue" action,
 which triggers an event handler that restarts the simulator by calling
 sim.runScenarioStep( followupEvents) where the followupEvents have been
 obtained from invoking the onEvent method on the UIA triggering event
 with the UIA input field values as parameters.
 **********************************************************************/
oes.ui.setupUserInteraction = function () {
  sim.ui.userInteractions = sim.ui.userInteractions || {};
  sim.currentEvents = {};  // map of current events by type
  Object.keys( sim.scenario.userInteractions).forEach( function (trigEvtTypeName) {
    var uiDefRec = sim.scenario.userInteractions[trigEvtTypeName],
        uiContainerEl=null, followupEvents=[], title="";
    //TODO: check if this reset can be dropped: uiDefRec.fieldValues = {};  // reset
    uiDefRec.userActions = {
      "continue": function () {
        var inpFldValues={};  // initialize onEvent parameter record
        Object.keys( uiDefRec.inputFields).forEach( function (inpFldName) {
          // extract input field values from oBJECTvIEW's fieldValues map
          inpFldValues[inpFldName] = uiDefRec.fieldValues[inpFldName];
        });
        uiDefRec.domElem.style.display = "none";
        followupEvents = sim.currentEvents[trigEvtTypeName].onEvent( inpFldValues);
        sim.runScenarioStep( followupEvents);  // restart simulator
      }
    };
    uiDefRec.userActions["continue"].label = "Continue";
    title = uiDefRec.title;

    delete uiDefRec.title;
    uiContainerEl = oBJECTvIEW.createUiFromViewModel( uiDefRec);  // create form element
    uiContainerEl.querySelectorAll("input")[0].setAttribute("autofocus","true");
    uiDefRec.domElem = dom.createDraggableModal({fromElem: uiContainerEl,
        title:title, classValues:"action-required"});
    uiDefRec.domElem.style.display = "none";
  })
};
/*******************************************************
 Set up the Event Appearances (Sound + Animations)
 TODO: support audio/sound
 *******************************************************/
oes.ui.setupEventAppearances = function () {
  var eventAppearances = sim.config.observationUI.eventAppearances;
  sim.ui.animations = sim.ui.animations || {};
  Object.keys( eventAppearances).forEach( function (trigEvtTypeName) {
    var evtAppearDefRec = eventAppearances[trigEvtTypeName],
        evtView = evtAppearDefRec.view,
        domElem=null, animation=null, timingDefRec={};
    if (evtView.imageFile) {
      domElem = document.createElement("img");
      if (!evtView.imageFile.includes("/")) {
        domElem.src = oes.defaults.imgFolder + evtView.imageFile;
      } else {
        domElem.src = evtView.imageFile;
      }
      if (evtView.style) domElem.style = evtView.style;
      sim.visualEl.appendChild( domElem);
	  /*
    } else if (evtView.shapeName === "text") {
      domElem = svg.createText( );  
      canvasSvgEl.appendChild( el);
	  */
    } else {
      domElem = evtView.domElem();
    }
    timingDefRec.duration = evtView.duration || 1000;
    if (evtView.iterations) timingDefRec.iterations = evtView.iterations;
    if (evtView.fill) timingDefRec.fill = evtView.fill;
    animation = domElem.animate( evtView.keyframes, timingDefRec);
    animation.pause();  // do not yet start the animation
    sim.ui.animations[trigEvtTypeName] = animation;  // store the animation handle
  });
};

/*******************************************************
 Templates map
 *******************************************************/
oes.ui.i18n.translations = oes.ui.i18n.translations || {};
oes.ui.i18n.translations["templExec$N$Steps"] = `Execute ${sim.stepIncrement} steps`;
