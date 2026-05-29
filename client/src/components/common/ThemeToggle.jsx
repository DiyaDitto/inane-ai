import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="bg-purple-600 px-4 py-2 rounded-lg"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;