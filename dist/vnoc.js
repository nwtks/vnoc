'use strict';

var h = function (name, attrs) {
  var args = [], len = arguments.length - 2;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

  var children = flatten([], args);
  if (typeof name === 'function') {
    return name(attrs || {}, children);
  }
  return {
    name: name || 'div',
    attrs: attrs || {},
    children: children.filter(function (e) { return e != null; })
  };
};

var flatten = function (dst, e) {
  if (Array.isArray(e)) {
    e.forEach(function (v) {
      flatten(dst, v);
    });
  } else {
    dst.push(e);
  }
  return dst;
};

module.exports = h;
