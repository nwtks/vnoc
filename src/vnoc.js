const h = (name, attrs, ...args) => {
  const children = flatten([], args)
  if (typeof name === 'function') {
    return name(attrs || {}, children)
  }
  return {
    name: name || 'div',
    attrs: attrs || {},
    children: children.filter(e => e != null)
  }
}

const flatten = (dst, e) => {
  if (Array.isArray(e)) {
    e.forEach(v => flatten(dst, v))
  } else {
    dst.push(e)
  }
  return dst
}

export default h
