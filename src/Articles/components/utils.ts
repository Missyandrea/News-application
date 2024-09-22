import { Article } from "../../models";

export const languages = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "French",
    value: "fr",
  },
  {
    name: "Spanish",
    value: "es",
  },
  {
    name: "Italian",
    value: "it",
  },
  {
    name: "Russian",
    value: "ru",
  },
];
export const categoryOptions: string[] = [
  "technology",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
];
export const countryOptions = [
  {
    name: "United states",
    value: "us",
  },
  {
    name: "United Kingdom",
    value: "gb",
  },
  {
    name: "Germany",
    value: "de",
  },
  {
    name: "France",
    value: "fr",
  },
  {
    name: "Belgium",
    value: "be",
  },
];

export const articles: Article[] = [
    {
      title: "text article tech",
      content: "lorem ipsum bofyu bdygc",
      description: "this is a test",
      publishedAt: "2024-09-16",
      source: { id: "test-test", name: "test author" },
      author: "",
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
      title: "[removed]",
      content: "lorem ipsum bofyu",
      description: "[removed]",
      publishedAt: "2024-09-16",
      source: { id: "test-test-test", name: "test author3" },
      author: "test writter3",
      url: "",
      urlToImage: "",
    },
  ];
