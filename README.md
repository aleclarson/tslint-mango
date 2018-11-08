# tslint-mango v0.1.3

TSLint preset

The recommended `.prettierrc` is included, but must be installed manually.

This preset extends the following presets (in order):

- [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
- [`alexjoverm/tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier)
- [`Glavin001/tslint-clean-code`](https://github.com/Glavin001/tslint-clean-code)
- [`palantir/tslint-react`](https://github.com/palantir/tslint-react)
- [`jwbay/tslint-misc-rules`](https://github.com/jwbay/tslint-misc-rules)
- custom rules / tweaks

## Rules

Here are the rules I use from each of the presets.

Unlisted presets have all of their rules used.

### tslint-clean-code

- `"no-commented-out-code": true`

### tslint-react

- `(insert default rules here)`
- `"jsx-curly-spacing": [true, "never"]`
- `"jsx-equals-spacing": [true, "never"]`
- `"jsx-no-lambda": false`
- `"jsx-self-close": true`
- `"jsx-space-before-trailing-slash": true`

### tslint-misc-rules

- [`"class-method-newlines": true`](https://github.com/jwbay/tslint-misc-rules#3)
- [`"jsx-no-closing-bracket-newline": true`](https://github.com/jwbay/tslint-misc-rules#6)
- [`"jsx-no-braces-for-string-attributes": true`](https://github.com/jwbay/tslint-misc-rules#7)
- [`"react-lifecycle-order": true`](https://github.com/jwbay/tslint-misc-rules#8)

## Custom rules

### interface-member-separator

Enforce which character separates interface members.

**Usage:**
```js
[true, ";"] // semicolons only
[true, ","] // commas only
[true, ""]  // none
```

**Has fixer?** `true`
