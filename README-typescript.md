# TypeScript

## tsconfig

### no-strict config

```json
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false,
    "strictNullChecks": false,                                 Enable strict null checks.
    "strictFunctionTypes": false,                              Enable strict checking of function types.
    "strictBindCallApply": false,                              Enable strict 'bind', 'call', and 'apply' methods on functions.
    "strictPropertyInitialization": false,                     Enable strict checking of property initialization in classes.
    "noImplicitThis": false,                                   Raise error on 'this' expressions with an implied 'any' type.
    "alwaysStrict": false,                                     Parse in strict mode and emit "use strict" for each source file.
    "noUnusedLocals": false,                                   Report errors on unused locals.
    "noUnusedParameters": false,                               Report errors on unused parameters.
    "noImplicitReturns": false,                                Report error when not all code paths in function return a value.
    "noFallthroughCasesInSwitch": false,                       Report errors for fallthrough cases in switch statement.
  }
}
```
