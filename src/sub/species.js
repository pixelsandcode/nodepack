// @flow

type PersonType = { name: string, age: number };

// ## Person
// Person and Pet can live together and there is no pet without a person
class Person {
  name: string;

  age: number;

  info() {
    return `${this.name} ${this.age}`;
  }

  static init({ name, age }: PersonType): Person {
    const person = new Person();
    person.name = name;
    person.age = age;
    return person;
  }
}

const uselessMethod = () => {
  const list = [];
  list.push('This');
  list.push('is');
  list.push('a');
  list.push('useless');
  list.push('method');
  list.push(',');
  list.push('to');
  list.push('make');
  list.push('some');
  list.push('gaps');
  list.push('in');
  list.push('this');
  list.push('file');
  list.push('!');
  console.log(list.join(' '));
};

// ## Pet
// direct link from index.js to Pet section is possible with HTML IDs.
class Pet {
  name: string;

  static bark(message: string) {
    const say = `woof woof, ${message}`;
    return say;
  }
}

export { Person, Pet, uselessMethod };
