import { useAppSelector } from "../../hooks";
import { NoArticle } from "../../pages";

export const ArticleCard = () => {
  const { articles } = useAppSelector((state) => state.articlesState);

  return (
    <div className="">
      {articles.length === 0 && <NoArticle />}
      <div className="grid grid-cols-3 gap-6">
        {articles
          .filter(
            (article) =>
              article.title !== "[Removed]" &&
              article.description !== "[Removed]"
          )
          .map((article) => (
            <div
              key={Math.random()}
              className="space-y-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300"
            >
              <img
              className="rounded-md object-cover"
              src={article.urlToImage}
              alt="article related Image"
            />
              {/* <img src={image} alt="" /> */}
              <div className="flex justify-between items-center">
                <p className="capitalize bg-orange-100 rounded-md p-2 font-bold">
                  From {article.source.name}
                </p>
                <p className="font-bold">{article.publishedAt.slice(0, 10)}</p>
              </div>
              <h1 className="font-semibold font-serif uppercase mb-3">
                {article.title}
              </h1>
              <p>{article.description}</p>
              <p className="italic">
                by {article.author === "" ? "unknown" : article.author}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
