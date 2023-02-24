import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  const [countryName, setCountryName] = useState("");
  const [population, setPopulation] = useState("");
  const [nativeName, setNativeName] = useState("");
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [currencies, setcurrencies] = useState([]);
  const [languages, setLanguages] = useState("");
  const [tld, setTld] = useState("");
  const [borders, setBorders] = useState([]);
  const [flag, setFlag] = useState("");
  const [capital, setCapital] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios
        .get(url)
        .then((response) => {
          setLoading(false);

          const getAllData = response.data;
          const getCountryData = response.data[0];
          const getPopulation = getCountryData.population;
          const getCountryName = getCountryData.name.common;
          const getNativeName = getCountryData.name.official;
          const getRegion = getCountryData.region;
          const getSubRegion = getCountryData.subregion;
          const getCurrency = getCountryData.currencies;
          const getLanguages = getCountryData.languages;
          const getTld = getCountryData.tld[0];
          const getBorders = getCountryData.borders;
          const getFlag = getCountryData.flags.svg;
          const getCapital = getCountryData.capital[0];

          setCountryData(getCountryData);
          setData(getAllData);
          setFilterData(getAllData);

          setCountryName(getCountryName);
          setPopulation(getPopulation);
          setNativeName(getNativeName);
          setcurrencies(getCurrency);
          setRegion(getRegion);
          setSubRegion(getSubRegion);
          setLanguages(getLanguages);
          setTld(getTld);
          setBorders(getBorders.join(", "));
          setFlag(getFlag);
          setCapital(getCapital);

          setError(false);
        })
        .catch((error) => {
          setError(true);
        });
    };
    fetchData();
  }, [url]);

  console.log(error);
  console.log(data);
  console.log(filterData);
  // console.log(nativeName);
  // console.log(countryName);
  // console.log(population);
  // console.log(currencies);
  // console.log(region);
  // console.log(subRegion);
  // console.log(languages);
  // console.log(tld);
  // console.log(borders);
  // console.log(flag);
  // console.log(capital);

  return {
    data,
    filterData,
    setFilterData,
    countryData,
    nativeName,
    countryName,
    population,
    currencies,
    region,
    subRegion,
    languages,
    tld,
    borders,
    flag,
    capital,
    error,
    loading,
  };
};

export default useFetch;
