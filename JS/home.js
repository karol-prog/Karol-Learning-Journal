import { projects } from "./data.js";
import { yearToFooter } from "/JS/footer.js";
import { projectsToHtml, firstProjectsToSee } from "/JS/projects.js";

const viewMoreBtn = document.getElementById("viewmore-btn");

// navigation links
const barIcon = document.querySelector(".bar-icon");
const navLinks = document.querySelector(".links");

barIcon.addEventListener("click", () => {
  //hide the navlins
  navLinks.classList.toggle("hiden");
});

//view more btn
viewMoreBtn.addEventListener("click", () => {
  //call the function to display all projects
  projectsToHtml(projects);
  //hide the viewmore btn
  viewMoreBtn.style.display = "none";
});

// call the imported functions
firstProjectsToSee(projects);
yearToFooter();
