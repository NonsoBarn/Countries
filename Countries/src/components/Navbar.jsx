import { UilMoonset } from "@iconscout/react-unicons";
import { UilSunset } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("");
  //  Theme Dark x Light
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="shadow-md bg-white border-gray-200 px-12 py-2.5 dark:bg-gray-800 dark:text-gray-200">
      <div className="container flex  items-center justify-between mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <span className="self-center text-lg md:text-xl font-semibold whitespace-nowrap dark:text-white">
              Where in the word ?
            </span>
          </a>
        </div>

        <div className=" block w-auto dark:text-white">
          {theme === "dark" ? (
            <button onClick={handleThemeSwitch}>
              <UilMoonset />
            </button>
          ) : (
            <button onClick={handleThemeSwitch}>
              <UilSunset />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
