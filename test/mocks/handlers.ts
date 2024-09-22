import { http, HttpResponse } from "msw";
import { Article } from "../../src/models";

type GetArticleParams = {};
type GetArticleResponseBody = {
  status: string;
  totalResults: number;
  articles: Article[];
};
type GetArticleRequestBody = {
  keyword?: string;
  oldestDate?: string;
  newestDate?: string;
  language?: string;
  sortBy?: string;
  apiKey: string;
};

export const handlers = [
  http.get<GetArticleParams, GetArticleRequestBody, GetArticleResponseBody>(
    `https://newsapi.org/v2/everything`,
    ({ request }) => {
      const url = new URL(request.url);

      if (url.searchParams.get("q") === "technology") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "text article tech",
              content: "lorem ipsum bofyu bdygc",
              description: "this is a test",
              publishedAt: "2024-09-16",
              source: { id: "test-test", name: "test author" },
              author: "test writter",
              url: "",
              urlToImage: "",
            },
            {
              title: "test tech article",
              content: "lorem ipsum bofyu",
              description: "this is a test !!!",
              publishedAt: "2024-09-16",
              source: { id: "test-test-test", name: "test author3" },
              author: "test writter3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      } else if (url.searchParams.get("from") === "2024-09-16") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "text article 2024-09-16",
              content: "lorem ipsum bofyu bdygc",
              description: "this is a test",
              publishedAt: "2024-09-16",
              source: { id: "test-test", name: "test author" },
              author: "test writter",
              url: "",
              urlToImage: "",
            },
            {
              title: "test article 2024-09-16",
              content: "lorem ipsum bofyu",
              description: "this is a test !!!",
              publishedAt: "2024-09-16",
              source: { id: "test-test-test", name: "test author3" },
              author: "test writter3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      } else if (url.searchParams.get("to") === "2024-09-18") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "text article 2024-09-18",
              content: "lorem ipsum bofyu bdygc",
              description: "this is a test",
              publishedAt: "2024-09-18",
              source: { id: "test-test", name: "test author" },
              author: "test writter",
              url: "",
              urlToImage: "",
            },
            {
              title: "test article 2024-09-18",
              content: "lorem ipsum bofyu",
              description: "this is a test !!!",
              publishedAt: "2024-09-18",
              source: { id: "test-test-test", name: "test author3" },
              author: "test writter3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      } else if (url.searchParams.get("language") === "es") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "noticia",
              content: "lorem ipsum bofyu bdygc",
              description: "esto es una prueba",
              publishedAt: "2024-09-17",
              source: { id: "test-test", name: "test author" },
              author: "noticia ",
              url: "",
              urlToImage: "",
            },
            {
              title: "noticias",
              content: "lorem ipsum bofyu",
              description: "esto es una prueba !!!",
              publishedAt: "2024-09-18",
              source: { id: "test-test-test", name: "test author3" },
              author: "noticias 3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      }
    }
  ),
  http.get<GetArticleParams, GetArticleRequestBody, GetArticleResponseBody>(
    `https://newsapi.org/v2/top-headlines`,
    ({ request }) => {
      const url = new URL(request.url);

      if (url.searchParams.get("q") === "technology") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "text article tech",
              content: "lorem ipsum bofyu bdygc",
              description: "this is a test",
              publishedAt: "2024-09-16",
              source: { id: "test-test", name: "test author" },
              author: "test writter",
              url: "",
              urlToImage: "",
            },
            {
              title: "test tech article",
              content: "lorem ipsum bofyu",
              description: "this is a test !!!",
              publishedAt: "2024-09-16",
              source: { id: "test-test-test", name: "test author3" },
              author: "test writter3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      } else if (url.searchParams.get("category") === "sports") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "text article 2024-09-16",
              content: "lorem ipsum bofyu bdygc",
              description: "this is a test",
              publishedAt: "2024-09-16",
              source: { id: "test-test", name: "test author" },
              author: "test writter",
              url: "",
              urlToImage: "",
            },
            {
              title: "test article 2024-09-16",
              content: "lorem ipsum bofyu",
              description: "this is a test !!!",
              publishedAt: "2024-09-16",
              source: { id: "test-test-test", name: "test author3" },
              author: "test writter3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      } else if (url.searchParams.get("to") === "2024-09-18") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "text article 2024-09-18",
              content: "lorem ipsum bofyu bdygc",
              description: "this is a test",
              publishedAt: "2024-09-18",
              source: { id: "test-test", name: "test author" },
              author: "test writter",
              url: "",
              urlToImage: "",
            },
            {
              title: "test article 2024-09-18",
              content: "lorem ipsum bofyu",
              description: "this is a test !!!",
              publishedAt: "2024-09-18",
              source: { id: "test-test-test", name: "test author3" },
              author: "test writter3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      } else if (url.searchParams.get("from") === "2024-09-17") {
        return HttpResponse.json({
          status: "ok",
          articles: [
            {
              title: "noticia",
              content: "lorem ipsum bofyu bdygc",
              description: "esto es una prueba",
              publishedAt: "2024-09-17",
              source: { id: "test-test", name: "test author" },
              author: "noticia ",
              url: "",
              urlToImage: "",
            },
            {
              title: "noticias",
              content: "lorem ipsum bofyu",
              description: "esto es una prueba !!!",
              publishedAt: "2024-09-18",
              source: { id: "test-test-test", name: "test author3" },
              author: "noticias 3",
              url: "",
              urlToImage: "",
            },
          ],
          totalResults: 2,
        });
      }
    }
  ),
];
