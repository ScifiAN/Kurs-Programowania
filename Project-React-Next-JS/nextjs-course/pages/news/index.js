import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJs</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
