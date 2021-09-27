import React, { Fragment } from 'react';

/**
 * @param {string} string
 * @param {JSX.Element} [divider = <br/>]
 * @returns {string|unknown[]|*}
 */
export function nl2br(string, divider = <br/>) {
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
        const breakPoint = i + 1 < fragmentsCount ? divider : false;

        return <Fragment key={ i }>{ line }{ breakPoint }</Fragment>;
    });
}
