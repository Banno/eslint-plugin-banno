/**
 * @fileoverview Disallow `const` in `for-in` and `for-of` declarations
 * @author Jordan Running
 */
'use strict';

// -----------------------------------------------------------------------------
//  Rule Definition
// -----------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Disallow `const` in `for-in` and `for-of` declarations",
      category: "Variables",
      recommended: false,
    },
    fixable: "code",
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    // ---------------------------------------------------------------------
    //  Helpers
    // ---------------------------------------------------------------------
    function checkDeclarationType(name) {
      return function(node) {
        const {kind} = node.left;

        if (kind === 'const') {
          context.report({
            node,
            message: `\`const\` not allowed in ${name} declaration; use \`let\` instead`,
            fix: fixer => fixer.replaceTextRange([node.left.start, node.left.start + 'const'.length], 'let'),
          });
        }
      };
    }

    // ---------------------------------------------------------------------
    //  Public
    // ---------------------------------------------------------------------
    return {
      ForInStatement: checkDeclarationType('for-in'),
      ForOfStatement: checkDeclarationType('for-of'),
    };
  }
};
