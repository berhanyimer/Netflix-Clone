const ErrorHandler = (error) => {
  // Handle network/request errors like Axios or Fetch
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  // Handle syntax errors and general JavaScript errors
  else if (error instanceof SyntaxError) {
    return `Syntax Error: ${error.message}`;
  }
  // Handle promise rejection errors
  else if (error instanceof PromiseRejectionEvent) {
    return `Promise Rejection: ${error.reason}`;
  }
  // Handle other errors with message
  else if (error.message) {
    return error.message;
  }
  // Handle stack traces or fallback
  else if (error.stack) {
    return `Stack Trace: ${error.stack}`;
  }
  // Generic fallback for unhandled error types
  else {
    return "An unexpected error occurred";
  }
};

export default ErrorHandler;
