var linqmodule = (function() {
  projection = function(members) {
    var membersArray = members.replace(/s/g, "").split(",");
    var projectedObj = {};

    for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < membersArray.length; j++) {
        var key = membersArray[j];
        if (j === 0) {
          projectedObj[i] = {};
        }
        projectedObj[i][key] = this[i][key];
      }
    }

    return projectedObj;
  };
  Array.prototype.select = projection;

  dumpmethod = function(arrayobj) {
    var result = "";
    result += "[";

    for (var i = 0; i < Object.keys(arrayobj).length; i++) {
      var membersArray = Object.keys(arrayobj[i]);
      for (var j = 0; j < membersArray.length; j++) {
        if (j === 0) {
          result += "{";
        }
        var key = membersArray[j];
        result +=
          "key: " +
          key +
          " , value: " +
          arrayobj[i][key] +
          (j < membersArray.length - 1 ? " , " : "");
        if (j === membersArray.length - 1) {
          result +=
            "}" + (i < Object.keys(arrayobj).length - 1 ? "," : "") + "\n";
        }
      }
    }
    result += "]";

    return result;
  };

  return {
    dump: dumpmethod
  };
})();
