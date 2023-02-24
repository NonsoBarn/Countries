import { UilSearch } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";

import { useEffect, useState } from "react";
const SearchBar = ({ data, setFilterData }) => {
  const [hideFilter, setHideFilter] = useState(true);
  const [activeRegion, setActiveRegion] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [country, setCountry] = useState("");

  // Region Filter
  useEffect(() => {
    if (activeRegion === "All") {
      setFilterData(data);
    }

    const filtered = data.filter((countries) =>
      countries.region.includes(activeRegion)
    );
    setFilterData(filtered);
  }, [activeRegion]);

  // Country Search
  useEffect(() => {
    const searched = data.filter((countries) =>
      countries.name.common.includes(country)
    );
    setFilterData(searched);
  }, [country]);

  const onEnterKeyPress = () => {
    setCountry(searchInput);
  };

  const handleCloseFilter = () => {
    setHideFilter((current) => !current);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      {/* Search bar */}
      <div>
        <form>
          <div className=" py-8 px-12 ">
            <div className="relative ">
              <button className=" absolute top-2.5 left-3 p-0 text-sm font-medium text-gray-900  hover:text-gray-800 dark:text-white  ">
                <UilSearch size={20} />
              </button>
              <input
                value={searchInput}
                type="text"
                className=" py-2.5 px-14 w-full z-20 text-sm text-gray-900 bg-white rounded-lg   dark:bg-gray-800  dark:text-white focus:outline-gray-200 dark:focus:outline-gray-900 shadow-md  "
                placeholder="Search for any country..."
                onChange={(e) =>
                  setSearchInput(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
                onKeyDown={onEnterKeyPress}
              />
            </div>
          </div>
        </form>
      </div>

      {/* filter bar */}
      <div>
        <div className=" px-12 md:py-8 ">
          <div>
            <div className="relative">
              <button
                onClick={handleCloseFilter}
                className="dark:bg-gray-800 dark:text-gray-200 flex items-center   px-6  py-2 text-sm   leading-normal text-black bg-white  shadow rounded-lg  w-48"
                type="button"
              >
                Filter by Region
                <span className="ml-7 w-2">
                  <UilAngleDown
                    className={
                      hideFilter === false
                        ? "mt-0.5 animate-rotate rotate-180"
                        : "mt-0.5 animate-rotatereverse"
                    }
                  />
                </span>
              </button>

              <div className="pt-2">
                <div
                  className={
                    hideFilter === false
                      ? "dark:bg-gray-800 dark:text-gray-200 absolute z-[1000] float-left m-0  w-48 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-md  py-2.5"
                      : "hidden"
                  }
                >
                  {/* All */}
                  <div
                    onClick={handleCloseFilter}
                    className="cursor-pointer block w-full whitespace-nowrap bg-transparent py-0.5 px-4 text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  >
                    {" "}
                    <span onClick={() => setFilterData(data)}>All</span>{" "}
                  </div>

                  {/* Africa */}
                  <div
                    onClick={handleCloseFilter}
                    className="cursor-pointer block w-full whitespace-nowrap bg-transparent py-0.5 px-4 text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  >
                    {" "}
                    <span onClick={() => setActiveRegion("Africa")}>
                      Africa
                    </span>{" "}
                  </div>

                  {/* Americas */}
                  <div
                    onClick={handleCloseFilter}
                    className="cursor-pointer block w-full whitespace-nowrap bg-transparent py-0.5 px-4 text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  >
                    {" "}
                    <span onClick={() => setActiveRegion("Americas")}>
                      Americas
                    </span>{" "}
                  </div>

                  {/* Asia */}
                  <div
                    onClick={handleCloseFilter}
                    className="cursor-pointer block w-full whitespace-nowrap bg-transparent py-0.5 px-4 text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  >
                    {" "}
                    <span onClick={() => setActiveRegion("Asia")}>
                      Asia
                    </span>{" "}
                  </div>
                  {/* Europe */}
                  <div
                    onClick={handleCloseFilter}
                    className="cursor-pointer block w-full whitespace-nowrap bg-transparent py-0.5 px-4 text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  >
                    {" "}
                    <span onClick={() => setActiveRegion("Europe")}>
                      Europe
                    </span>{" "}
                  </div>
                  {/* Oceania */}
                  <div
                    onClick={handleCloseFilter}
                    className="cursor-pointer block w-full whitespace-nowrap bg-transparent py-0.5 px-4 text-md font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  >
                    {" "}
                    <span onClick={() => setActiveRegion("Oceania")}>
                      Oceania
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
