# tslint-mango v0.1.11

TSLint preset

The recommended `.prettierrc` is included, but must be installed manually.

This preset extends the following presets (in order):

- [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
- [`alexjoverm/tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier)
- [`Glavin001/tslint-clean-code`](https://github.com/Glavin001/tslint-clean-code)
- [`palantir/tslint-react`](https://github.com/palantir/tslint-react)
- [`kaiza/tslint-jasmine-rules`](https://github.com/kaiza/tslint-jasmine-rules)
- [`jwbay/tslint-misc-rules`](https://github.com/jwbay/tslint-misc-rules)
- custom rules / tweaks

## Rules

Here are the rules I use from each of the presets.

Unlisted presets have all of their rules used.

### tslint-clean-code

- `"no-commented-out-code": true`

### tslint-react

These rules are described [here](https://github.com/palantir/tslint-react#rules).

- `"jsx-boolean-value": true`
- `"jsx-curly-spacing": [true, "never"]`
- `"jsx-equals-spacing": [true, "never"]`
- `"jsx-self-close": true`
- `"jsx-space-before-trailing-slash": true`
- `"jsx-wrap-multiline": true`

### tslint-jasmine-rules

These rules are only warnings:

- `"no-focused-tests": true`
- `"no-disabled-tests": true`

### tslint-misc-rules

- [`"class-method-newlines": true`](https://github.com/jwbay/tslint-misc-rules#3)
- [`"jsx-no-braces-for-string-attributes": true`](https://github.com/jwbay/tslint-misc-rules#7)
- [`"react-lifecycle-order": true`](https://github.com/jwbay/tslint-misc-rules#8)

## Custom rules

### interface-member-separator

Enforce which character separates interface members.

**Usage:**

```sh
[true, ";"] # semicolon
[true, ","] # comma
[true, ""]  # none
```

**Has fixer?** Yes
