import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React' },
  { id: 'q2', author: 'Adam', text: 'To learn you need coffe' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return (
      <p>No quote found!</p>
    )
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  )
};

export default QuoteDetail;