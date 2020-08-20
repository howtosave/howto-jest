
const rules_for_commonjs = {
  "no-var-requires": false,
};

const rules_being_redundant = {
    "no-console": false,
};

module.exports = {
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    ...rules_for_commonjs,
    ...rules_being_redundant,
  },
  "rulesDirectory": []
}
