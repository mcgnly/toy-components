export
default class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        legs = 4;
        tail = true;
    }
    says: function() {
        return "meow";
    }
}