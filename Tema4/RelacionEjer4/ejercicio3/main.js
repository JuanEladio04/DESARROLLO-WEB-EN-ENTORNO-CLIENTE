function erasePattern(textChain, wordToErase) {
    return textChain.replace(new RegExp(wordToErase, "g"), "");
}

