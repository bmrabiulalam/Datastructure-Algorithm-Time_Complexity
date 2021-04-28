class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        // this.previous = null; // for doubly linked list
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const linkedlist = new LinkedList(head);
linkedlist.add(27);
linkedlist.add(13);
linkedlist.add(59);
linkedlist.add(48);
linkedlist.add(63);

console.log(linkedlist);
console.log(JSON.stringify(linkedlist));