import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
const CountryList = ({ error, loading, data, filterData, setFilterData }) => {
  return (
    <section>
      <SearchBar data={data} setFilterData={setFilterData} />

      {/* COUNTRY LIST */}
      <div className="min-h-screen px-12 md:px-0">
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-y-16 md:gap-x-0 py-6 md:py-3 lg:px-5 lg:grid-cols-3 lg:gap-y-16 lg:gap-x-0 lg:py-3 xl:grid-cols-4 place-items-center max-w-fit gap-16  ">
          {filterData.map((country, index) => (
            <Link
              key={index}
              to={`/${country.name.common}`}
              className="text-black dark:bg-gray-800 dark:text-gray-200 w-3/4  lg:w-4/5 rounded-md overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <img
                className="h-48 w-full"
                src={country.flags.svg}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-6">
                <h2 className="font-bold text-sm mb-2">
                  {country.name.common}
                </h2>
                <ul>
                  <li className="font-semibold text-xs fo">
                    Population:{" "}
                    <span className="font-normal">{country.population}</span>
                  </li>
                  <li className="font-semibold text-xs fo">
                    Region:{" "}
                    <span className="font-normal">{country.region}</span>
                  </li>
                  <li className="font-semibold text-xs fo">
                    Capital:{" "}
                    <span className="font-normal">{country.capital}</span>
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryList;
