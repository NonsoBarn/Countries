import useFetch from "./useFetch";
import { Link, useParams } from "react-router-dom";
import { UilArrowLeft } from "@iconscout/react-unicons";

const CountryDetails = () => {
  const { name } = useParams();

  const {
    nativeName,
    countryName,
    capital,
    population,
    currencies,
    region,
    subRegion,
    languages,
    tld,
    borders,
    flag,
    error,
  } = useFetch(`https://restcountries.com/v3.1/name/${name}`);

  return (
    <div className="grid md:grid-cols-2 px-14 py-10 md:px-0 md:gap-x-0 max-w-fit dark:text-gray-200 h-full">
      <div className="lg:pl-14">
        <div className=" pt-4 pb-5 md:pb-16">
          <Link
            to="/"
            className="inline-block bg-gray-200 rounded-sm px-4 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200 mr-2 mb-2   shadow"
          >
            <div className="flex pr-3">
              <UilArrowLeft />
              <p className="pt-0.5 pl-1">Back</p>
            </div>
          </Link>
        </div>
        <img className="h-64 w-80" src={flag} alt="Country Flag" />
      </div>

      <div className="pt-10 md:pt-36 pb-12 md:pb-0">
        <h2 className="font-bold text-xl">{countryName}</h2>
        <div className="grid md:grid-cols-2 md:gap-x-0 md:gap-y-0 gap-y-5 ">
          <div className="pt-5">
            <ul className="text-sm">
              <li className="font-semibold pb-0.5">
                Native Name: <span className="font-normal">{nativeName}</span>
              </li>
              <li className="font-semibold pb-0.5">
                Population: <span className="font-normal">{population}</span>
              </li>
              <li className="font-semibold pb-0.5">
                Region: <span className="font-normal">{region}</span>
              </li>
              <li className="font-semibold pb-0.5">
                Sub Region: <span className="font-normal">{subRegion}</span>
              </li>
              <li className="font-semibold pb-0.5">
                Capital: <span className="font-normal">{capital}</span>
              </li>
            </ul>
          </div>
          <div className="pt-5 lg:pl-20">
            <ul className="text-sm">
              <li className="font-semibold pb-0.5">
                Top Level Domain: <span className="font-normal">{tld}</span>
              </li>
              <li className="font-semibold pb-0.5">
                Currencies:{" "}
                {Object.values(currencies).map((curr, index) => (
                  <span key={index} className="font-normal">
                    {curr.name}
                  </span>
                ))}
              </li>
              <li className="font-semibold pb-0.5">
                Languages:{" "}
                {Object.values(languages).map((lang, index) => (
                  <span key={index} className="font-normal">
                    {lang}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <p className="font-semibold text-sm pb-0.5 pt-5">
          Border Countries: <span className="font-normal p-2 b">{borders}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
