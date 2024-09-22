import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { queryAllArticles, queryTopArticles } from "../articleSplice";
import { categoryOptions, countryOptions, languages } from "./utils";

type TProps = {
  visible?: boolean;
};
export const QuerySection = ({ visible }: TProps) => {
  const dispatch = useAppDispatch();

  const [oldDate, setOldDate] = useState("");
  const [newDate, setNewDate] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  // const [source, setSource]=useState("")
  // console.log(source)
  const [keyword, setKeyword] = useState("");
  const [sortby, setSortBy] = useState("");
  const [language, setLanguage] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleQuery();
    }
  };
  const handleQuery = () => {
    if (visible) {
      dispatch(
        queryAllArticles({
          keyword: keyword,
          language: language,
          newestDate: newDate,
          oldestDate: oldDate,
          sortBy: sortby,
        })
      );
    } else {
      dispatch(
        queryTopArticles({
          country: country,
          category: category,
        })
      );
    }
  };
  return (
    <>
      <div className="text-sm">
        <h1 className="font-bold text-lg">Filters</h1>
        <div className="flex w-full justify-between items-center font-sans">
          {visible ? (
            <>
              <div className="flex flex-col space-y-2">
                <label htmlFor="keyword">By keyword</label>
                <input
                  className="h-10 w-36 rounded-2xl bg-orange-100 p-3 outline-none"
                  type="text"
                  placeholder="keyword"
                  id="keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="" htmlFor="sortBy">
                  By
                </label>
                <select
                  className="h-10 w-28 rounded-2xl bg-orange-100 p-2 outline-none"
                  name=""
                  id="sortBy"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevancy">relevancy</option>
                  <option value="popularity">popularity</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="language">By language</label>

                <select
                  className="h-10 w-28 rounded-2xl bg-orange-100 p-2 outline-none"
                  name=""
                  id="language"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  {languages.map((language) => (
                    <option key={language.name} value={language.value}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="old_date">from</label>
                <input
                  className="h-10 w-36 rounded-2xl bg-orange-100 p-3 outline-none"
                  type="date"
                  name=""
                  id="old_date"
                  onChange={(e) => setOldDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="new_date">to</label>
                <input
                  className="h-10 w-36 rounded-2xl bg-orange-100 p-3 outline-none"
                  type="date"
                  name=""
                  id="new_date"
                  onChange={(e) => setNewDate(e.target.value)}
                />
              </div>

              <button
                className="hover:shadow-lg  bg-orange-300 text-center hover:shadow-orange-200 font-semibold h-10 w-24 animate-bounce
        text-white rounded-md p-2 border-2 border-slate-100 text-xlfocus:outline-none focus:ring focus:ring-orange-400"
                onClick={handleQuery}
              >
                Filter
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col space-y-2">
                <label htmlFor="category">By Category</label>
                <select
                  className="h-10 w-36 rounded-2xl bg-orange-100 p-2 outline-none"
                  name=""
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="category">By Country</label>
                <select
                  className="h-10 w-36 rounded-2xl bg-orange-100 p-2 outline-none"
                  name=""
                  id="category"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countryOptions.map((country) => (
                    <option key={country.name} value={country.value}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="keyword">By keyword</label>
                <input
                  className="h-10 w-36 rounded-2xl bg-orange-100 p-3 outline-none"
                  type="text"
                  placeholder="keyword"
                  id="keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <button
                className="hover:shadow-lg  bg-orange-300 text-center hover:shadow-orange-200 font-semibold h-10 w-24 animate-bounce
        text-white rounded-md p-2 border-2 border-slate-100 text-xl"
                onClick={handleQuery}
              >
                Filter
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
