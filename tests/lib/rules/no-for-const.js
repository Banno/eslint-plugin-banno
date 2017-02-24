/**
 * @fileoverview Disallow `const` in `for-in` and `for-of` declarations
 * @author Jordan Running
 */
'use strict';

// -----------------------------------------------------------------------------
//  Requirements
// -----------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-for-const');
const {RuleTester} = require('eslint');

// -----------------------------------------------------------------------------
//  Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-for-const', rule, {
  /* eslint-disable object-curly-spacing */
  valid: [
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (let foo in bar) { }',
    },
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (let [a,b] in bar) { }',
    },
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (let foo of bar) { }',
    },
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (let [a,b] of bar) { }',
    },
  ],

  invalid: [
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (const foo in bar) { }',
      output: 'for (let foo in bar) { }',
      errors: [{
        message: '`const` not allowed in for-in declaration; use `let` instead',
        type: 'ForInStatement',
      }]
    },
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (const [a,b] in bar) { }',
      output: 'for (let [a,b] in bar) { }',
      errors: [{
        message: '`const` not allowed in for-in declaration; use `let` instead',
        type: 'ForInStatement',
      }]
    },
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (const foo of bar) { }',
      output: 'for (let foo of bar) { }',
      errors: [{
        message: '`const` not allowed in for-of declaration; use `let` instead',
        type: 'ForOfStatement',
      }]
    },
    { parserOptions: { ecmaVersion: 6 },
      code: 'for (const [a,b] of bar) { }',
      output: 'for (let [a,b] of bar) { }',
      errors: [{
        message: '`const` not allowed in for-of declaration; use `let` instead',
        type: 'ForOfStatement',
      }]
    },
  ]
});
