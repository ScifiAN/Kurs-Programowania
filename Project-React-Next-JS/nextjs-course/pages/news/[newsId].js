import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsIs = router.query.newsId;

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
