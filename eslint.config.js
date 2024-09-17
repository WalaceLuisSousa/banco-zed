import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    
    rules: {
      "no-unused-vars": "warn",
            "no-undef": "warn",
            "semi": ["error", "always"]
    },
    languageOptions: { 
    globals: globals.browser 
  }
},
  pluginJs.configs.recommended,
];