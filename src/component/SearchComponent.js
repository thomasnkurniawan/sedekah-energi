"use client";

import { getKBCategories } from "@/services/knowledgeBase";
import { useBootstrap } from "@/utils/useBootstrap";
import { useEffect, useState } from "react";

const SearchComponent = ({ handleSearch, setSort, setCategory }) => {
  useBootstrap();
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  // Callback pencarian
  const doSearch = (query) => {
    handleSearch(query);
  };

  const sortList = [
    { name: "Terbaru", value: "latest" },
    { name: "Terlama", value: "oldest" },
    { name: "A - Z", value: "az" },
  ];

  //   // Debounce supaya nggak spam
  //   const debouncedSearch = useCallback(
  //     debounce((value) => {
  //       doSearch(value);
  //     }, 300),
  //     []
  //   );

  //   // Trigger pencarian otomatis ketika search berubah
  //   useEffect(() => {
  //     if (search.trim()) {
  //       debouncedSearch(search);
  //     } else {
  //       debouncedSearch.cancel();
  //     }
  //   }, [search, debouncedSearch]);

  // key enter to handleSearch
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      doSearch(search);
    }
  };

  const onClickSort = (sort) => {
    setSort(sort?.value);
    setSelectedSort(sort);
  };

  const onClickCategory = (category) => {
    setCategory(category ? category.Slug : null);
    setSelectedCategory(category);
  };

  const handleClear = () => {
    setSearch("");
    doSearch("");
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await getKBCategories();
    console.log(res);
    setCategories(res);
  };

  return (
    <div className="search-container container mx-auto position-relative w-100">
      <div
        className="row align-items-center position-absolute w-100"
        style={{ top: "-50%" }}
      >
        <div className="col-lg-12 col-12">
          <div className="card search-area">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input
                id="search-input"
                type="text"
                class="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {search && (
                <span
                  class="input-group-text"
                  id="basic-addon1"
                  onClick={handleClear}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM11.9422 11.0578C12.0003 11.1159 12.0463 11.1848 12.0777 11.2607C12.1092 11.3366 12.1254 11.4179 12.1254 11.5C12.1254 11.5821 12.1092 11.6634 12.0777 11.7393C12.0463 11.8152 12.0003 11.8841 11.9422 11.9422C11.8841 12.0003 11.8152 12.0463 11.7393 12.0777C11.6634 12.1092 11.5821 12.1253 11.5 12.1253C11.4179 12.1253 11.3366 12.1092 11.2607 12.0777C11.1848 12.0463 11.1159 12.0003 11.0578 11.9422L9 9.88359L6.94219 11.9422C6.88412 12.0003 6.81518 12.0463 6.73931 12.0777C6.66344 12.1092 6.58213 12.1253 6.5 12.1253C6.41788 12.1253 6.33656 12.1092 6.26069 12.0777C6.18482 12.0463 6.11588 12.0003 6.05782 11.9422C5.99975 11.8841 5.95368 11.8152 5.92226 11.7393C5.89083 11.6634 5.87466 11.5821 5.87466 11.5C5.87466 11.4179 5.89083 11.3366 5.92226 11.2607C5.95368 11.1848 5.99975 11.1159 6.05782 11.0578L8.11641 9L6.05782 6.94219C5.94054 6.82491 5.87466 6.66585 5.87466 6.5C5.87466 6.33415 5.94054 6.17509 6.05782 6.05781C6.17509 5.94054 6.33415 5.87465 6.5 5.87465C6.66586 5.87465 6.82492 5.94054 6.94219 6.05781L9 8.11641L11.0578 6.05781C11.1159 5.99974 11.1848 5.95368 11.2607 5.92225C11.3366 5.89083 11.4179 5.87465 11.5 5.87465C11.5821 5.87465 11.6634 5.89083 11.7393 5.92225C11.8152 5.95368 11.8841 5.99974 11.9422 6.05781C12.0003 6.11588 12.0463 6.18482 12.0777 6.26069C12.1092 6.33656 12.1254 6.41788 12.1254 6.5C12.1254 6.58212 12.1092 6.66344 12.0777 6.73931C12.0463 6.81518 12.0003 6.88412 11.9422 6.94219L9.8836 9L11.9422 11.0578Z"
                      fill="#9DA6BB"
                    />
                  </svg>
                </span>
              )}
              <button
                className="btn btn-success rounded-5 btn-search"
                type="button"
                id="button-addon2"
                onClick={() => doSearch(search)}
              >
                Cari
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-12 filter-area my-4">
          <div className="d-flex flex-wrap gap-2 align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-filter dropdown-toggle d-flex gap-3 align-items-center justify-content-between"
                type="button"
                data-bs-toggle="dropdown"
                id="dropdownMenuButtonCategory"
                aria-expanded="false"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12ZM21.75 6.75H2.25C2.05109 6.75 1.86032 6.82902 1.71967 6.96967C1.57902 7.11032 1.5 7.30109 1.5 7.5C1.5 7.69891 1.57902 7.88968 1.71967 8.03033C1.86032 8.17098 2.05109 8.25 2.25 8.25H21.75C21.9489 8.25 22.1397 8.17098 22.2803 8.03033C22.421 7.88968 22.5 7.69891 22.5 7.5C22.5 7.30109 22.421 7.11032 22.2803 6.96967C22.1397 6.82902 21.9489 6.75 21.75 6.75ZM14.25 15.75H9.75C9.55109 15.75 9.36032 15.829 9.21967 15.9697C9.07902 16.1103 9 16.3011 9 16.5C9 16.6989 9.07902 16.8897 9.21967 17.0303C9.36032 17.171 9.55109 17.25 9.75 17.25H14.25C14.4489 17.25 14.6397 17.171 14.7803 17.0303C14.921 16.8897 15 16.6989 15 16.5C15 16.3011 14.921 16.1103 14.7803 15.9697C14.6397 15.829 14.4489 15.75 14.25 15.75Z"
                    fill="#191F38"
                  />
                </svg>
                {selectedCategory
                  ? selectedCategory.Category
                  : "Semua Kategori"}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButtonCategory"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => onClickCategory(null)}
                  >
                    Semua Kategori
                  </button>
                </li>
                {categories?.map((item, index) => {
                  return (
                    <li key={`${item.Slug}-${index}`}>
                      <button
                        className="dropdown-item"
                        onClick={() => onClickCategory(item)}
                      >
                        {item.Category}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-filter dropdown-toggle d-flex gap-3 align-items-center justify-content-between"
                type="button"
                data-bs-toggle="dropdown"
                id="dropdownMenuButtonSort"
                aria-expanded="false"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10C10 10.1658 9.93415 10.3247 9.81694 10.4419C9.69973 10.5592 9.54076 10.625 9.375 10.625H3.75C3.58424 10.625 3.42527 10.5592 3.30806 10.4419C3.19085 10.3247 3.125 10.1658 3.125 10C3.125 9.83424 3.19085 9.67527 3.30806 9.55806C3.42527 9.44085 3.58424 9.375 3.75 9.375H9.375C9.54076 9.375 9.69973 9.44085 9.81694 9.55806C9.93415 9.67527 10 9.83424 10 10ZM3.75 5.625H14.375C14.5408 5.625 14.6997 5.55915 14.8169 5.44194C14.9342 5.32473 15 5.16576 15 5C15 4.83424 14.9342 4.67527 14.8169 4.55806C14.6997 4.44085 14.5408 4.375 14.375 4.375H3.75C3.58424 4.375 3.42527 4.44085 3.30806 4.55806C3.19085 4.67527 3.125 4.83424 3.125 5C3.125 5.16576 3.19085 5.32473 3.30806 5.44194C3.42527 5.55915 3.58424 5.625 3.75 5.625ZM8.125 14.375H3.75C3.58424 14.375 3.42527 14.4408 3.30806 14.5581C3.19085 14.6753 3.125 14.8342 3.125 15C3.125 15.1658 3.19085 15.3247 3.30806 15.4419C3.42527 15.5592 3.58424 15.625 3.75 15.625H8.125C8.29076 15.625 8.44973 15.5592 8.56694 15.4419C8.68415 15.3247 8.75 15.1658 8.75 15C8.75 14.8342 8.68415 14.6753 8.56694 14.5581C8.44973 14.4408 8.29076 14.375 8.125 14.375ZM17.9422 12.6828C17.8841 12.6247 17.8152 12.5786 17.7393 12.5472C17.6635 12.5157 17.5821 12.4995 17.5 12.4995C17.4179 12.4995 17.3365 12.5157 17.2607 12.5472C17.1848 12.5786 17.1159 12.6247 17.0578 12.6828L15 14.7414V8.75C15 8.58424 14.9342 8.42527 14.8169 8.30806C14.6997 8.19085 14.5408 8.125 14.375 8.125C14.2092 8.125 14.0503 8.19085 13.9331 8.30806C13.8158 8.42527 13.75 8.58424 13.75 8.75V14.7414L11.6922 12.6828C11.5749 12.5655 11.4159 12.4997 11.25 12.4997C11.0841 12.4997 10.9251 12.5655 10.8078 12.6828C10.6905 12.8001 10.6247 12.9591 10.6247 13.125C10.6247 13.2909 10.6905 13.4499 10.8078 13.5672L13.9328 16.6922C13.9909 16.7503 14.0598 16.7964 14.1357 16.8279C14.2115 16.8593 14.2929 16.8755 14.375 16.8755C14.4571 16.8755 14.5385 16.8593 14.6143 16.8279C14.6902 16.7964 14.7591 16.7503 14.8172 16.6922L17.9422 13.5672C18.0003 13.5091 18.0464 13.4402 18.0779 13.3643C18.1093 13.2885 18.1255 13.2071 18.1255 13.125C18.1255 13.0429 18.1093 12.9615 18.0779 12.8857C18.0464 12.8098 18.0003 12.7409 17.9422 12.6828Z"
                    fill="#1F2644"
                  />
                </svg>
                {selectedSort ? selectedSort?.name : "Terbaru"}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButtonSort"
              >
                {sortList.map((item, index) => {
                  return (
                    <li key={`${item.name}-${index}`}>
                      <button
                        className="dropdown-item"
                        onClick={() => onClickSort(item)}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
