/* objects part 2 task 1 */

Object.defineProperty(Object.prototype, 'mergeDeepRight', {
  value: function(obj) {
    let properties = Object.getOwnPropertyNames(obj);
    for (let property of properties) {
      if (Array.isArray(this[property]) && Array.isArray(obj[property])){
          this[property] = [...this[property], ...obj[property]];
      } else if (typeof obj[property] === 'object') {
        this[property].mergeDeepRight(obj[property]);
      } else {
        this[property] = obj[property];
      }
    }
  },
  enumerable: false,
})

/* OOP task 1 */

function CoffeeMachine(power) {
	this.waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var self = this;
  let timerId;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffee is ready');
	}
	
    this.run = function() {
		timerId = setTimeout(onReady, getBoilTime());
	};

  this.stop = function() {
    clearTimeout(timerId);
  }
}

/* OOP task 2 */

function CoffeeMachine(power, capacity) {

  let pow = power;

  Object.defineProperty(this, "power", {
    get: function() {
      return pow;
    }
  })



	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
	};
}

/* OOP task 3 */

function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
    function onReady() {
		console.log('Coffee is ready');
    }
    
	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};

  this.addWater = function(amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        } else if (waterAmount + amount > capacity) {
            throw new Error(`You can't put more water, than ${capacity - waterAmount}`);
        } else {
          waterAmount += amount;
        }
    };
}

/*  OOP task 4 */

function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
    let onReady = function onReady() {
		console.log('Coffee is ready');
    }

    this.setOnReady = function (func) {
      onReady = func;
    }
    
	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};
}


/* OOP task 5 */

function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
  let boiling = false;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
    let onReady = function onReady() {
    boiling =  false;
		console.log('Coffee is ready');
    }
    
	this.run = function() {
    boiling = true;
		setTimeout(onReady, getTimeToBoil());
	};

  this.isRunning = function() {
    return boiling;
  }

  this.setOnReady = function (func) {
      onReady = func;
    }
}
