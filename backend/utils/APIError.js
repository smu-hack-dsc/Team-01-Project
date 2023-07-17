class APIError extends Error {
  constructor({
    message,
    stack,
    errors = [],
    status = 500,
    isPublic = false,
  }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.stack = stack;
  }
}

module.exports = APIError;
