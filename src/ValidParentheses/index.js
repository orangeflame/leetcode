/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not. */
/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function(s) {
    const chars = s.split('');
    const signal = [];
    if (s.length % 2 !== 0) {
        return false;
    }
    let result = true;    
    for (let i = 0; i < chars.length; i++) {
        switch(chars[i]){
            case('('):
                signal.push('small');
                break;
            case(')'):
                if (signal[signal.length - 1] === 'small') {
                    signal.pop();
                } else {
                    result = false;
                }
                break;
            case('['):
                signal.push('middle');
                break;
            case(']'):
                if (signal[signal.length - 1] === 'middle') {
                    signal.pop();
                } else {
                    result = false;
                }
                break;    
            case('{'):
                signal.push('big');
                break;
            case('}'):
                if (signal[signal.length - 1] === 'big') {
                    signal.pop();
                } else {
                    result = false;
                }
                break;  
        }
    }
    return result && signal.length === 0;
}

