/***
 * Excerpted from "Practical Microservices",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/egmicro for more book information.
***/
function IdempotenceError (message) {
  Error.captureStackTrace(this, this.constructor)
  this.message = message
  this.name = 'IdempotenceError'
}

IdempotenceError.prototype = Object.create(Error.prototype)
IdempotenceError.prototype.constructor = IdempotenceError

module.exports = IdempotenceError
