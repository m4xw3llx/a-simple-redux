const errorHandleMiddleware = store => next => action => {
  try {
    console.log("😀 Success");
    next(action);
  } catch (err) {
    console.error("😟Error is ", err);
  }
};

exports.errorHandleMiddleWare = errorHandleMiddleware;
