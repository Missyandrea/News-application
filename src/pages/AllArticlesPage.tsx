import { QuerySection, ArticleCard } from "../Articles/components";
import { getAllArticles } from "../Articles/articleSplice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";

export const AllArticlesPage = () => {
  const { status } = useAppSelector((state) => state.articlesState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  //make a loading page if I have time
  return (
    <div className="p-6 flex flex-col space-y-11 capitalize">
      <h1 className="font-bold font-serif text-4xl">All Articles</h1>
      <QuerySection visible />
      {status === "loading" ? (
        <div>
          
          Loading...
        </div>
      ) : (
        <ArticleCard />
      )}
    </div>
  );
};
