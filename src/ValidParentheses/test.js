import { isValid } from './';
import expect from 'expect.js';

describe('isValid', function() {
    it('works', function() {
        expect(isValid('(')).to.be(false);
        expect(isValid('((')).to.be(false);
        expect(isValid('()')).to.be(true);
        expect(isValid('([)]')).to.be(false);
        expect(isValid('([])')).to.be(true);
    });
});

