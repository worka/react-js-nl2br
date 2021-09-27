import React, { Fragment } from 'react';

export function nl2br(string) {
    // if it is not a string
    if (typeof string !== 'string') {
        return string;
    }

    // if is no newline char in the string
    if (!string.match('\n')) {
        return string;
    }

    const fragments = string.split('\n');
    const fragmentsCount = fragments.length;

    return fragments.reduce((res, line, i) => {
        if (line !== '') {
            res.push(<Fragment key={ i }>{ line }</Fragment>);
        }

        // in the last fragment not display <br>
        if (i + 1 !== fragmentsCount) {
            res.push(<br key={ `${ i }br` }/>);
        }

        return res;
    }, []);
}
