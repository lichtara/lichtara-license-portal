export function toggleTheme() {
  const root = document.documentElement;

  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    localStorage.setItem("lichtara-theme", "light");
  } else {
    root.classList.add("dark");
    localStorage.setItem("lichtara-theme", "dark");
  }
}

// inicialização automática
export function initTheme() {
  const saved = localStorage.getItem("lichtara-theme");
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  }
}
