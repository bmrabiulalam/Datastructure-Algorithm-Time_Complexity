class Queue {
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const guest = new Queue();

guest.enqueue('Abul');
guest.enqueue('Babul');
guest.enqueue('Kabul');
guest.enqueue('Jabul');
console.log(guest.queue);

const speaker = guest.dequeue();
console.log(guest.queue);
console.log(speaker);