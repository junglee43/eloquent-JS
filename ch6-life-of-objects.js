// You can use Object.create to create an object with a specific prototype.let protoRabbit = {

speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

// To create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a constructor function does.
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

// If you put the keyword new in front of a function call, the function is treated as a constructor.
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

/* Class Notation */
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

/* Iterator Interface */
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// -> { value: 'O', done: false }
console.log(okIterator.next());
// -> { value: 'K', done: false }

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {x: this.x,
                     y: this.y,
                     value: this.matrix.get(this.x, this.y)};
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}

// Getters, setters, and statics
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

/* Excercises */
// Vector Type
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    minus(aVector) {
        return {x: this.x - aVector.x, y: this.y - aVector.y};
    }
    plus(aVector) {
        return {x: this.x + aVector.x, y: this.y + aVector.y};
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

// Groups
class Group {
    constructor() {
        this.group = [];
    }
    add(member) {
        if (!this.group.includes(member)) {
            return this.group.push(member);
        } else {
            return console.log(`${member} is already a member of ${this.group}`);
        }
    }
    delete(member) {
        if (this.group.includes(member)) {
            return this.group.splice(this.group.indexOf(member), 1);
        } else {
            return console.log(`${member} is not a member of ${this.group}`);
        }
    }
    has(member) {
        return this.group.includes(member);
    }
    static from(object) {
        let group = new Group;
        for (let element of object) {
            group.add(element);
        }
        return group;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

// Iterable Groups
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.currentPosition = 0;
        // this.currentItem = group[currentPosition];
    }

    next() {
        if (this.currentPostiion >= this.group.length) {
            return {done: true};
        } else {
            let result = {member: this.group[this.currentPosition], done: false};
            // this.currentPosition++;
            console.log(this.group[this.currentPosition]);
            return result;
        }
    }
}

for (let element of Group.from(["a", "b", "c"])) {
    console.log(element);
}

// Not sure why my version is not working. It's almost identical to the 'solution' except that the 'this.group' does not call an additonal method 'this.group.members' but that shouldn't be necessary and I've no idea where that method is defined or what it represents.
// Solution
class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {done: true};
        } else {
            let result = {value: this.group.members[this.position],
                          done: false};
            this.position++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c

// Borrowing a method
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
