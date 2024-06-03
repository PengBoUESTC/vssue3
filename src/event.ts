import mitt from 'mitt'

const emitter = mitt()

export default emitter

export const eimt = (event, data) => {
  emitter.emit(event, data)
}

export const on = (event, callback) => {
  emitter.on(event, callback)
}

export const off = (event, callback?) => {
  emitter.off(event, callback)
}