const errorHandleMiddleware = store => next => action => {
  try {
    next(action);
  } catch (err) {
    console.error("😟Error is ", err);
  }
};

exports.errorHandleMiddleWare = errorHandleMiddleware;
