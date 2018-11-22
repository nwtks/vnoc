function h(name, attrs) {
  const children = []
  const arg = arguments
  for (let i = 2; i < arg.length; i += 1) {
    flatten(children, arg[i])
  }
  if (typeof name === 'function') {
    return name(attrs || {}, children)
  }
  return {
    name: name || 'div',
    attrs: attrs || {},
    children: children.filter(e => e != null)
  }
}

function flatten(dst, e) {
  if (Array.isArray(e)) {
    e.forEach(v => flatten(dst, v))
  } else {
    dst.push(e)
  }
}

export default h
