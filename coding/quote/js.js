function generate() {
    const quotes = [
        {   
            quote: "\"Life is either a daring adventure, or it is nothing at all\"",
            author: "Helen Keller"
        },
        {
            quote: "\"To know what you like is the beginning of wisdom, and of old age\"",
            author: "Robert Lewis Stephenson"
        },
        {
            quote: "\"La vie n’est pas un restaurant mais un buffet. Levez-vous pour vous servir\"",
            author: "Dominique Glocheux"
        },
        {
            quote: "\"L’important dans la vie, ce n’est point le triomphe, mais le combat. L’essentiel n’est pas d’avoir vaincu, mais de s’être bien battu\"",
            author: "Pierre de Coubertin"
        },
        {
            quote: "\"Comparison is the thief of joy\"",
            author: "Theodore Roosevelt" 
        },
        {
            quote: "\"Challenge is the core and main spring of all human action\"",
            author: "Richard Branson"
        },
        {
            quote: "\"If you’re not doing what you love you\’re wasting your time\"",
            author: "Unknown"
        },
        {
            quote: "\"Be yourself; everyone else is already taken\"",
            author: "Oscar Wilde"
        },
        {
            quote: "\"You only live once, but if you do it right, once is enough\"",
            author: "Mae West"
        }
    ];

    var random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.getElementById("author").textContent = quotes[random].author;
}
