class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong !!",
    error = [],
    stack = ""
  ){
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = error;

    // If stack is provided, use it, otherwise capture the stack
    if(stack){
      this.stack = stack;
    }
    else{
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };