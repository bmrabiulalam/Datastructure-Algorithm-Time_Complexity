// dictionary is advanced version of key,value pair version
// dictionary is simple version of hash table

class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phonebook = new Dictionary();

phonebook.add('Abul', '01313348673');
phonebook.add('Babul', '0131336674');
phonebook.add('Kabul', '01313568673');
phonebook.add('Jabul', '01313348234');
console.log(phonebook.dictionary);

const speaker = phonebook.get('Kabul');
console.log(speaker);