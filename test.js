import { nl2br } from './index';
import React from 'react';
import assert from 'assert';

// I borrowed tests from here: https://github.com/yosuke-furukawa/react-nl2br

describe('nl2br', function () {
    it('should return string #1', function () {
        const result = nl2br('string');
        const expected = 'string';

        assert.deepEqual(expected, result);
    });

    it('should return string #2', function () {
        const result = nl2br('test\nstring');

        const expected = [
            React.createElement(React.Fragment, { key: 0, children: 'test' }),
            React.createElement('br', { key: '0br', }),
            React.createElement(React.Fragment, { key: 1, children: 'string' })
        ];

        assert.deepEqual(expected, result);
    });

    it('should return string #3', function () {
        const result = nl2br('\ntest\n\nstring\n');

        const expected = [
            React.createElement('br', { key: '0br', }),
            React.createElement(React.Fragment, { key: 1, children: 'test' }),
            React.createElement('br', { key: '1br', }),
            React.createElement('br', { key: '2br', }),
            React.createElement(React.Fragment, { key: 3, children: 'string' }),
            React.createElement('br', { key: '3br', }),
        ];

        assert.deepEqual(expected, result);
    });

    it('should return string #4', function () {
        const result = nl2br('\n\n');

        const expected = [
            React.createElement('br', { key: '0br' }),
            React.createElement('br', { key: '1br' })
        ];

        assert.deepEqual(expected, result);
    });

    it('should return number', function () {
        const result = nl2br(13);
        const expected = 13;

        assert.deepEqual(expected, result);
    });

    it('should return undefined', function () {
        const result = nl2br(undefined);
        const expected = undefined;

        assert.deepEqual(expected, result);
    });

    it('should return null', function () {
        const result = nl2br(null);
        const expected = null;

        assert.deepEqual(expected, result);
    });

    it('should return array', function () {
        const result = nl2br([]);
        const expected = [];

        assert.deepEqual(expected, result);
    });

    it('should return object', function () {
        const result = nl2br({});
        const expected = {};

        assert.deepEqual(expected, result);
    });

    it('should return the given React component', function () {
        const component = React.createElement('p', {}, 'Lorem ipsum');
        const result = nl2br(component);
        assert.strictEqual(component, result);
    });
});
