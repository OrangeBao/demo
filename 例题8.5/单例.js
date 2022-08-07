let mySingleton = (function () {
  let instance;
  function mySingleton(params) {
    instance =
      instance ||
      (this instanceof mySingleton ? this : new mySingleton(params));
    instance.init(params);
    return instance;
  }
  mySingleton.prototype.init = function (params) {
    this.params = params;
  };
  return mySingleton;
})();
