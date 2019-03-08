// @flow

type PersonType = { name: string, age: number };

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

class Pet {
  name: string;

  static bark(message: string) {
    const say = `woof woof, ${message}`;
    return say;
  }
}

export { Person, Pet };
