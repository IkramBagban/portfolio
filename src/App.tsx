import React from "react";
import LightPortfolio from "./LightPortfolio";
import DarkPortfolio from "./DarkPortfolio";

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };
  React.useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      setIsDarkMode(JSON.parse(darkMode));
    }
  }, []);

  return (
    <>
      {isDarkMode ? (
        <DarkPortfolio isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      ) : (
        <LightPortfolio isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      )}
    </>
  );
};

export default App;
