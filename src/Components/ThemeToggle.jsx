// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };

//   return (
//     <label className="flex items-center gap-2 cursor-pointer">
//       <input
//         onChange={(e) => handleTheme(e.target.checked)}
//         type="checkbox"
//         checked={theme === "dark"}
//         className="toggle"
//       />
//     </label>
//   );
// };

// export default ThemeToggle;

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Inject custom theme styles
    injectThemeStyles(theme);
  }, [theme]);

  const injectThemeStyles = (currentTheme) => {
    // Remove existing style element if it exists
    const existingStyle = document.getElementById("custom-theme-styles");
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement("style");
    style.id = "custom-theme-styles";

    if (currentTheme === "dark") {
      style.textContent = `
        .bg-greenColor, .text-greenColor { color: #2f5349 !important; }
        .bg-yellowColor, .text-yellowColor { color: #ffd640 !important; }
        .bg-greenColor { background-color: #2f5349 !important; }
        .bg-yellowColor { background-color: #ffd640 !important; }

        /* Dark theme background overrides */
        .bg-white { background-color: #1f2937 !important; }
        .bg-gray-50 { background-color: #374151 !important; }
        body { background-color: #111827 !important; color: #f9fafb !important; }
      `;
    } else {
      style.textContent = `
        .bg-greenColor, .text-greenColor { color: #2f5349 !important; }
        .bg-yellowColor, .text-yellowColor { color: #ffd640 !important; }
        .bg-greenColor { background-color: #2f5349 !important; }
        .bg-yellowColor { background-color: #ffd640 !important; }
      `;
    }

    document.head.appendChild(style);
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        onChange={(e) => handleTheme(e.target.checked)}
        type="checkbox"
        checked={theme === "dark"}
        className="toggle"
      />
    </label>
  );
};

export default ThemeToggle;

// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("theme") || "light";
//   });

//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };

//   return (
//     <label className="flex items-center gap-2 cursor-pointer">
//       <input
//         onChange={(e) => handleTheme(e.target.checked)}
//         type="checkbox"
//         checked={theme === "dark"}
//         className="toggle"
//       />
//     </label>
//   );
// };

// export default ThemeToggle;
