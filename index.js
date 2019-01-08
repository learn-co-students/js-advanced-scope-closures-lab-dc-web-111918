function produceDrivingRange(range){
	return function(startRange, endRange){
		const startVal = parseInt(startRange.substr(0,2), 10);
		const endVal = parseInt(endRange.substr(0,2), 10);

		const difference = Math.abs(startVal - endVal);
		if (difference > range) {
			return `${difference - range} blocks out of range`;
		} else {
			return `within range by ${difference}`;
		}
	}
}

function produceTipCalculator(tip){
	return function(tipFare){
		return tipFare * tip;
	}
}

function createDriver(){
	let DriverId = 0;

	return class {
		constructor(name){
			this.name = name;
			this.id = ++DriverId;
		}
	}
}





