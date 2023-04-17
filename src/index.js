const CONST = require('./constants');

class PseudoLoc {
  constructor({
    lengther = 2,
    enabled = true,
    enableCJK = true,
    sourceLocale = 'en',
    repeatedLetters = CONST.vowelChars,
    pseudoCharObject = CONST.pseudoChars
  }) {
    this.name = 'pseudoloc';
    this.type = 'postProcessor';
    this.options = {
      enabled,
      lengther,
      enableCJK,
      sourceLocale,
      repeatedLetters,
      characters: pseudoCharObject
    };
  }

  setOptions(options) {
    this.options = { ...this.options, ...options };
  }

  process(value, key, options, translator) {
    if (translator.language && this.options.sourceLocale 
      !== translator.language || !this.options.enabled) {
      return value;
    }
    let bracketCount = 0;
    const processedValue = value.split('').map((letter) => {
      if (letter === '}') {
        bracketCount = 0;
        return letter;
      }
      if (letter === '{') {
        bracketCount++;
        return letter;
      }
      if (bracketCount === 2) return letter;

      if(this.options.repeatedLetters.indexOf(letter) !== -1) {
        return this.options.characters[letter].repeat(this.options.lengther);
      } else {
        if(letter === '.'){
          return '。'; // japanese period(full stop)
        } else if(letter === '?') {
          return '¿'; // spanish inverted mark of interrogation
        } else if(letter === '“') {
          return '„'; // german opening quotation
        } else {
          return this.options.characters[letter] || letter;
        }
      }
    }).join('');
    return CONST.stringMarker({ 
      string: processedValue, 
      enableCJK: this.options.enableCJK 
    });
  }
}

export default PseudoLoc;
