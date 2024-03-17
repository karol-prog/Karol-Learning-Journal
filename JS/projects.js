//target the div container where all projects will be display
const container = document.querySelector(".container");

// Function to generate HTML for a single project
function generateProjectHTML({ title, image, date, link, description }) {
  return `
    <section class="article-posts">
      <img class="article-image" src="${image}" alt="post image" />
      <p class="post-info-article">${date}</p>
      <h1 class="post-title-article"><a href="${link}" target="_blank">${title}</a></h1>
      <p class="article-post">${description}</p>
    </section>
  `;
}

//for how many projects are displayed
let projectsDisplayed = 0;

// Display only the first 3 projects
export function firstProjectsToSee(projectsData) {
  //take first three objects from array
  const firstThreeProjects = projectsData.slice(0, 3);
  //iterate over them and write in to inner HTML of container with function above nad increment the variable projectsDisplayed
  firstThreeProjects.forEach((item) => {
    container.innerHTML += generateProjectHTML(item);
    //3 projects are displayed
    projectsDisplayed++;
  });
}

// Display all projects
export function projectsToHtml(projectsData) {
  // another projects in array,
  const nextProjects = projectsData.slice(
    projectsDisplayed,
    projectsData.length
  );
  //iterate over this projects and write them into HTML container with function above and increment projectDisplayed
  nextProjects.forEach((item) => {
    container.innerHTML += generateProjectHTML(item);
    //another 3 projects added
    projectsDisplayed++;
  });
}
