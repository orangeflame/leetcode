import { isValid } from '../src/ValidParentheses';
import expect from 'expect.js';


expect(isValid('(')).to.be(false);
expect(isValid('((')).to.be(false);
expect(isValid('()')).to.be(true);
expect(isValid('([)]')).to.be(false);
expect(isValid('([])')).to.be(true);
   

