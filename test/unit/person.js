import { expect } from 'chai';
import { Person } from '../../src/sub/species';

describe('Person', () => {
  context('living life', () => {
    const jill = Person.init({ name: 'Jill', age: 26 });

    it('should have a name and age', () => {
      expect(jill).to.be.instanceof(Person);
    });

    it('should show info', () => {
      expect(jill.info()).to.equal('Jill 26');
    });
  });
});
