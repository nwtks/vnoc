'use strict';

function h(name, attrs) {
  var children = [];
  var arg = arguments;
  for (var i = 2; i < arg.length; i += 1) {
    flatten(children, arg[i]);
  }
  if (typeof name === 'function') {
    return name(attrs || {}, children)
  }
  return {
    name: name || 'div',
    attrs: attrs || {},
    children: children.filter(function (e) { return e != null; })
  }
}

function flatten(dst, e) {
  if (Array.isArray(e)) {
    e.forEach(function (v) { return flatten(dst, v); });
  } else {
    dst.push(e);
  }
}

module.exports = h;
