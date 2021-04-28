class Stack {
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();

guest.add('Abul');
guest.add('Babul');
guest.add('Kabul');
guest.add('Jabul');
console.log(guest.stack);

const speaker = guest.remove();
console.log(guest.stack);
console.log(speaker);