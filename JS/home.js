import { projects } from "./data.js";
import { yearToFooter } from "/JS/footer.js";
import { projectsToHtml } from "/JS/projects.js";

// navigation links
const barIcon = document.querySelector(".bar-icon");
const navLinks = document.querySelector(".links");

barIcon.addEventListener("click", () => {
  navLinks.classList.toggle("hiden");
});

// call the imported functions
yearToFooter();
projectsToHtml(projects);
