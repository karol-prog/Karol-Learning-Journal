export function yearToFooter() {
  const footerYearEl = document.getElementById("footer-year");
  const date = new Date();
  const year = date.getFullYear();

  footerYearEl.innerText = year;
}
