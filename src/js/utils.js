export const run = (...fns) => fns.reduce((acc, cur) => (...args) => acc(cur(...args)))

export const createElement = (el) => document.createElement(el)

class MyEvent {
  static eventTypes = {}
  constructor(type, config = {}) {
    this.type = type
    this.config = Object.assign()
  }
  
  createEvent(type, config) {
    const defaultCon = {
      bubbles: false,
      cancelable: false,
      composed: false,
      detail: {}
    }
    return new CustomEvent(type, Object.assign(defaultCon, config))
  }
}
