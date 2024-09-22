import { it, expect, describe, beforeAll, afterEach, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { ArticleCard } from "../../src/Articles/components";
import { Provider } from "react-redux";
import { store } from "../../src/app/store";
import React from "react";
import {
  getAllArticles,
  queryAllArticles,
  getTopHeadingArticles,
} from "../../src/Articles/articleSplice";

describe("ArticleCard", () => {

  it("should display articles", async () => {
    await store.dispatch(getAllArticles());
    render(
      <Provider store={store}>
        <ArticleCard />
      </Provider>
    );
    const { articles } = store.getState().articlesState;

    articles.forEach((article) => {
      expect(screen.getByText(`${article.title}`)).toBeInTheDocument();
      expect(screen.getByText(`${article.description}`)).toBeInTheDocument();
    });
  });

  it("should display filtered articles by language", async () => {
    await store.dispatch(
      queryAllArticles({
        language: "es",
      })
    );
    render(
      <Provider store={store}>
        <ArticleCard />
      </Provider>
    );
    const { articles } = store.getState().articlesState;

    articles.forEach((article) => {
      expect(screen.getByText(`${article.title}`)).toBeInTheDocument();
      expect(screen.getByText(`${article.description}`)).toBeInTheDocument();
    });
  });

  it("should display filtered articles by keyword", async () => {
    await store.dispatch(
      queryAllArticles({
        keyword: "technology",
      })
    );
    render(
      <Provider store={store}>
        <ArticleCard />
      </Provider>
    );
    const { articles } = store.getState().articlesState;

    articles.forEach((article) => {
      expect(screen.getByText(`${article.title}`)).toBeInTheDocument();
      expect(screen.getByText(`${article.description}`)).toBeInTheDocument();
    });
  });

  it("should display filtered articles by newest date", async () => {
    await store.dispatch(
      queryAllArticles({
        newestDate: "2024-09-18",
      })
    );
    render(
      <Provider store={store}>
        <ArticleCard />
      </Provider>
    );
    const { articles } = store.getState().articlesState;

    articles.forEach((article) => {
      expect(screen.getByText(`${article.title}`)).toBeInTheDocument();
      expect(screen.getByText(`${article.description}`)).toBeInTheDocument();
    });
  });

  it("should display filtered articles by oldest date", async () => {
    await store.dispatch(
      queryAllArticles({
        oldestDate: "2024-09-16",
      })
    );
    render(
      <Provider store={store}>
        <ArticleCard />
      </Provider>
    );
    const { articles } = store.getState().articlesState;

    articles.forEach((article) => {
      expect(screen.getByText(`${article.title}`)).toBeInTheDocument();
      expect(screen.getByText(`${article.description}`)).toBeInTheDocument();
    });
  });
});
