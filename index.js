function produceDrivingRange(blockRangeTarget){
  return function(block1, block2){
    block2 = block2.replace('th','');
    block1 = block1.replace('th','');
    let blockRangeActual = Math.abs(block2 - block1);
    if (blockRangeActual > blockRangeTarget) {
      return `${blockRangeActual - blockRangeTarget} blocks out of range`;
    } else {
      return `within range by ${blockRangeTarget-blockRangeActual}`;
    };
  };
};

function produceTipCalculator(percentTip){
  return function(amount){
      return percentTip*amount;
  };
};

function createDriver(name){
  let id = 1;
  return class Driver { constructor(name){
    this.name = name;
    this.id = id++;
  };
};
};


// createDriver is a function that returns a Driver class.
// The class has reference to a driverId that is incremented
// each time a new driver is created. The rest of the code base
// does not have access to driverId.
