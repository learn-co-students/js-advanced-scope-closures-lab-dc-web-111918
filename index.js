
function produceDrivingRange( blockRange ) {
  return function(blockA,blockB){

    let startingBlock = parseInt(blockA);
    let endingBlock = parseInt( blockB);
    let blocks = Math.abs(startingBlock - endingBlock);
    let difference = blockRange - blocks;

    if ( blockRange > blocks ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip;
  }
}

function createDriver(){
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId
    }

  };
}
