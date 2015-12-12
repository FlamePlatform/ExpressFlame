export function ExpressFlame(func) {
  return function(func) {
    return function express_middleware(req, res) {
      return new Promise(function(resolve, reject) {
        //acting function
        func.call(null, req, res, function(err) {
          if (err) return reject(err);
          resolve();
        });
      })
    }
  }(func);
}
