/////  Ex 1  /////////

const min = function (a,b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
};

//////////   Ex 2   //////////////////

const isEven = function(a) {
	if (a < 0) {
		prompt('need pos whole number');
	} else {
		if (a % 2) {
			return true;
		}
		else {
			return false;
		}
	}
};

/////////////// Ex 3 //////////////////////

const countBs = function(word) {
	
};



let journal = [];
function addEntry(events, squirrel) {
journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);

//dont need events: events, it is implied if no value afterwards.

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

let todoList = [];
function remember(task) {
todoList.push(task);
}
function getTask() {
return todoList.shift();
}
function rememberUrgently(task) {
todoList.unshift(task);
}

//////////////////// Ex 4 /////////////

const array1 = [1,2,3,4];

const sum = array1.slice(n).reduce((a,b) => a + b);  // N is the number to be left out of array, 
// sums up array besides n

const sum = array1.reduce((a,b) => a + b); // sums whole array

const newArr = oldArr.filter(function(value, index, Arr) {
	return index % 3 == 0; 
})   // will set newArr to every third value in oldArr

var array1 = [1,2,3];
var newArr = [];
function change (array1) {
	for (let i = array1.length; i < 0; i--) {
		newArr.push(array1[i]);
	}
};

