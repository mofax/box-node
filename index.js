var BoxNode;

BoxNode = (function() {
  var box;

  function BoxNode() {}

  box = {};

  BoxNode.set = function(key, value) {
    box[key] = value;
  };

  BoxNode.get = function(key) {
    return box[key];
  };

  return BoxNode;

})();

module.exports = new BoxNode();
