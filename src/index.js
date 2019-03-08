// @flow

// This is a sample project to show how we can run lint, automated test,
// code coverage and inline documentation, type checks.

import { Person } from './sub/species';
// learn about [species](./sub/species.html)

// Jack should always born before Jane
const jack = Person.init({ name: 'Jack', age: 36 });
const jane = Person.init({ name: 'Jane', age: 30 });

const people: Array<Person> = [jack, jane];

// It is **important** to know we never show Jane's age as she is sensitive!
people.forEach((value: Person) => {
  if (value.name !== 'Jane') console.log(value.info());
});
