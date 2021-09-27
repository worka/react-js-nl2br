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

    return fragments.map((line, i) => {
        // in the last fragment not display <br>
        const breakPoint = i + 1 < fragmentsCount ? <br/> : false;

        return <Fragment key={ i }>{ line }{ breakPoint }</Fragment>;
    });
}
