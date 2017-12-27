import R from 'Ramda';

export const isValid = function(s) {
    const splitIntoSignals = () => s.split('');
    const getSummary = (signals) => R.reduce((summary, currentChar) => {
        let { pairs, isStopped } = summary;  
        if (! isStopped) {
            switch(currentChar){
                case('('):
                pairs.push('small');
                    break;
                case(')'):
                    if (pairs[pairs.length - 1] === 'small') {
                        pairs.pop();
                    } else {
                        isStopped = true;
                    }
                    break;
                case('['):
                    pairs.push('middle');
                    break;
                case(']'):
                    if (pairs[pairs.length - 1] === 'middle') {
                        pairs.pop();
                    } else {
                        isStopped = true;
                    }
                    break;    
                case('{'):
                    pairs.push('big');
                    break;
                case('}'):
                    if (pairs[pairs.length - 1] === 'big') {
                        pairs.pop();
                    } else {
                        isStopped = true;
                    }
                    break;
            }
        }    
        return { pairs, isStopped };
    }, { pairs: [] , isStopped: false}, signals);
    const isEven = (signals) => signals.length % 2 === 0;
    const isEmpty = (summary) => summary.pairs.length === 0 && ! summary.isStopped;
    const p1 = R.pipe(splitIntoSignals, isEven);
    const p2 = R.pipe(splitIntoSignals, getSummary, isEmpty);
    return R.allPass([p1, p2])(s);
}