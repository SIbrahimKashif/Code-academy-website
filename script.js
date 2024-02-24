//choose a random quote from the list

const codingQuotes = [
    "Coding is today's language of creativity. All our dreams can come true if we have the courage to code.",
    "Learning to code is like gaining a superpower. You can create something out of nothing.",
    "Coding is a universal language that transcends borders and connects people worldwide.",
    "Coding is the key to unlocking a world of endless possibilities. Start coding, and you'll be amazed at what you can achieve.",
];

const displayRandomQuote = () => {
    document.getElementById("quote").textContent = codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
};

displayRandomQuote();
