import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../models";
import axios from "axios";

//to include in the header
const API_KEY = "&apiKey=848f3fd8b5134094a8f901be7971da9e";

const URL_ALL_ARTICLES = `https://newsapi.org/v2/everything`;
const URL_TOPHEADLINES = `https://newsapi.org/v2/top-headlines`;

export type TState = {
  status: string;
  totalResults: number;
  articles: Article[];
  // code?: string;
  // message?: string;
};

export type TQuery = {
  keyword?: string;
  oldestDate?: string;
  newestDate?: string;
  language?: string;
  // source: string
  sortBy?: string;
  country?:string,
  category?:string
};

const initialState: TState = {
  status: "idle",
  totalResults: 0,
  articles: [],
};

export const getAllArticles = createAsyncThunk(
  "articlesState/getAllArticles",
  async () => {
    try {
      const response = await axios(
        `${URL_ALL_ARTICLES}?q=technology${API_KEY}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//query by keywords, categories, most recent, sources
//params are q, from, to, sortyby language
export const queryAllArticles = createAsyncThunk(
  "articlesState/queryAllArticles",
  async ({ keyword, oldestDate, newestDate, sortBy, language }: TQuery) => {
    const queryParams = new URLSearchParams();

    keyword === ""
      ? queryParams.append("q", "technology")
      : queryParams.append("q", `${keyword}`);
    oldestDate === "" || queryParams.append("from", `${oldestDate}`);
    newestDate === "" || queryParams.append("to", `${newestDate}`);
    sortBy === "" || queryParams.append("sortBy", `${sortBy}`);
    language === "" || queryParams.append("language", `${language}`);

    try {
      const response = await axios(
        `${URL_ALL_ARTICLES}?${queryParams.toString()}${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getTopHeadingArticles = createAsyncThunk(
  "articlesState/getTopHeadingArticles",
  async () => {
    try {
      const response = await axios(`${URL_TOPHEADLINES}?country=us${API_KEY}`);
      return response.data;
    } catch (error) {}
  }
);

export const queryTopArticles = createAsyncThunk(
  "articlesState/queryTopArticles",
  async ({ keyword, country, category}: TQuery) => {
    const queryParams = new URLSearchParams();

    keyword === ""
      ? queryParams.append("q", "technology")
      : queryParams.append("q", `${keyword}`);
    country === "" || queryParams.append("country", `${country}`);
    category === "" || queryParams.append("category", `${category}`);

    try {
      const response = await axios(
        `${URL_TOPHEADLINES}?${queryParams.toString()}${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);



const articleSplice = createSlice({
  name: "articleSplice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAllArticles.fulfilled,
        (state, action: PayloadAction<TState>) => {
          state = action.payload;
          return state;
        }
      );

    builder
      .addCase(getTopHeadingArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getTopHeadingArticles.fulfilled,
        (state, action: PayloadAction<TState>) => {
          state = action.payload;
          return state;
        }
      );

    builder
      .addCase(queryAllArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        queryAllArticles.fulfilled,
        (state, action: PayloadAction<TState>) => {
          state = action.payload;
          return state;
        }
      );
      
    builder
      .addCase(queryTopArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        queryTopArticles.fulfilled,
        (state, action: PayloadAction<TState>) => {
          state = action.payload;
          return state;
        }
      );
  },
});

export default articleSplice.reducer;
