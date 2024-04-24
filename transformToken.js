const StyleDictionary = require('style-dictionary');

// StyleDictionary.registerFormat({
//   name: 'scss/variables', // 참조할 공간 ( config에 있는 format )
//   formatter: ({dictionary, platform, options, file}) => {
//     console.log("dictionary" , dictionary);
//     console.log("platform" , platform);
//     console.log("options" , options);
//     console.log("file" , file);
//     return JSON.stringify(dictionary.tokens, null, 2);
//   }
// });

const styleDictionaryConfig = {
  source: ['./tokens.json'], // 참조할 token 공간
  platforms: {
    scss: {
      transformGroup: 'scss', // 어떤 css를 만들건지
      buildPath: 'build/', // 만들어지는 공간
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables' // registerFormat에 들어갈 name 속성
      }]
    }
  }
};

const StyleDictionaryExtended = StyleDictionary.extend(styleDictionaryConfig);

StyleDictionaryExtended.buildAllPlatforms();
