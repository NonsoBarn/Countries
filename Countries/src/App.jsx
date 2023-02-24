import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import CountryDetails from "./pages/CountryDetails";
import CountryList from "./pages/CountryList";
import useFetch from "./pages/useFetch";
// import { useState } from "react";

function App() {
  // const [country, setCountry] = useState("belgium");

  const {
    data,
    filterData,
    setFilterData,
    activeRegion,
    setActiveRegion,
    error,
    loading,
  } = useFetch(`https://restcountries.com/v3.1/all`);

  return (
    <Router>
      <div className="App bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route
            exact
            path="*"
            element={
              <CountryList
                data={data}
                error={error}
                loading={loading}
                filterData={filterData}
                setFilterData={setFilterData}
                activeRegion={activeRegion}
                setActiveRegion={setActiveRegion}
              />
            }
          />
          <Route
            path=":name"
            element={<CountryDetails error={error} loading={loading} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
