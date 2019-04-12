module.exports = function(api) {
  api.cache.never();
  return {
    "presets": [
      "@babel/preset-react",
      "@babel/preset-env"
    ],
    "env": {
    	"test": {
        "presets": ["@babel/preset-env", "@babel/preset-react", "babel-plugin-styled-components"]
      }
   }
  };
}



