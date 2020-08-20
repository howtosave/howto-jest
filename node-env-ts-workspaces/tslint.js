
const rules_for_commonjs = {
  "no-var-requires": false,
};


module.exports = {
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    ...rules_for_commonjs,
    "no-console": false
  },
  "rulesDirectory": []
}
