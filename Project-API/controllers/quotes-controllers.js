const Quote = require('../models/quote');

function getRandomQuote(req, res, next){
  
  let randomQuote
  try{
    randomQuote = await Quote.getRandomQuote();
  } catch (error){
    return next(error);
  }
  
  res.json({
    quotes: randomQuote
  });
}

module.exports = {
  getRandomQuote: getRandomQuote,
}