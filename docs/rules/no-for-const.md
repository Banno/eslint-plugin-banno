# Disallow `const` in a `for-in` and `for-of` declarations (no-for-const)

Prior to Firefox 51, using `const` in the declaration of a `for-of` loop raises
a SyntaxError. Likewise, an error is raised in all versions for `for-in` loops.
This rule disallows `const` in `for-of` and `for-in` loop declarations and
recommends `let` instead.

## Rule Details

The following patterns are considered errors:

```js
for (const foo in bar) { }
for (const [a,b] in bar) { }

for (const foo of bar) { }
for (const [a,b] of bar) { }
```

The following patterns are not warnings:

```js
for (let foo in bar) { }
for (let [a,b] in bar) { }

for (let foo of bar) { }
for (let [a,b] of bar) { }
```

## Further Reading

See [Firefox bug #1101653](https://bugzilla.mozilla.org/show_bug.cgi?id=1101653).
