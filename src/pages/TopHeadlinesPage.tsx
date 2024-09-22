import { useEffect } from "react";
import { getTopHeadingArticles } from "../Articles/articleSplice";
import { ArticleCard, QuerySection } from "../Articles/components";
import { useAppSelector, useAppDispatch } from "../hooks";

export const TopHeadlinesPage = () => {
  const { status } = useAppSelector((state) => state.articlesState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopHeadingArticles());
  }, []);

  return (
    <div className="p-6 flex flex-col space-y-11 capitalize">
      <h1 className="font-bold font-serif text-4xl">Top Headlines</h1>
      <QuerySection />
      {status === "loading" ? <div>Loading...</div> : <ArticleCard />}
    </div>
  );

};
