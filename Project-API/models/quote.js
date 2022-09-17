const db = require("../data/database");

class Quote{
  static async getRandomQuote(){
    const qoutes = await db.getDb().collection('quotes').find().toArray();
    const randomQuoteIndex = Math.floor(Math.random() * qoutes.length);

    const randomQuote = qoutes[randomQuoteIndex];

    return randomQuote.text;
  }
}

module.exports = Quote;