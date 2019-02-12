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
}

// Iterable Groups
