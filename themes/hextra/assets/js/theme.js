// Light / Dark theme toggle
(() => {
  // Theme functions
  window.setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
    document.querySelectorAll(".theme-toggle").forEach(el => {
      el.dataset.theme = "dark";
      el.setAttribute("aria-label", "Switch to light theme");
    });
  };

  window.setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
    document.querySelectorAll(".theme-toggle").forEach(el => {
      el.dataset.theme = "light";
      el.setAttribute("aria-label", "Switch to dark theme");
    });
  };

  // Set initial theme immediately
  const defaultTheme = window.defaultTheme || 'system';
  if ("color-theme" in localStorage) {
    localStorage.getItem("color-theme") === "dark" ? window.setDarkTheme() : window.setLightTheme();
  } else {
    defaultTheme === "dark" ? window.setDarkTheme() : window.setLightTheme();
    if (defaultTheme === "system") {
      window.matchMedia("(prefers-color-scheme: dark)").matches ? window.setDarkTheme() : window.setLightTheme();
    }
  }

  // Handle theme toggle clicks
  const handleThemeToggle = (e) => {
    e.preventDefault();
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      window.setLightTheme();
      localStorage.setItem("color-theme", "light");
    } else {
      window.setDarkTheme();
      localStorage.setItem("color-theme", "dark");
    }
  };

  // Add click event handler to the buttons when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".theme-toggle").forEach(el => {
        el.addEventListener("click", handleThemeToggle);
      });
    });
  } else {
    document.querySelectorAll(".theme-toggle").forEach(el => {
      el.addEventListener("click", handleThemeToggle);
    });
  }

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (defaultTheme === "system" && !("color-theme" in localStorage)) {
      e.matches ? window.setDarkTheme() : window.setLightTheme();
    }
  });
})();
