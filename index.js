module.exports = Phrase;

// Reverses a string.
function reverse(string) {
  return string.split("").reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  
  this.letters = function letters() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }

  // Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  };
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase(); // js inheritance