export class MethodNotImplementedError extends Error {
    constructor(public message: string,) {
      super(`${message} method not implemented`)
    }
  }