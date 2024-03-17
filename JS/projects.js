//target the div container where all projects will be display
const container = document.querySelector(".container");

//get only 3 projects to display on the site
export function firstProjectsToSee(projectsData) {
  //i dont know why slice dont work as I want so i start on oposite end of array and end on 3 index
  const projectSlice = projectsData.splice(-projectsData.length, 3);
  //iterate over slice arr
  projectSlice.forEach((item) => {
    let firstProjectFeed = "";
    //destructing the array of objects
    const { title, image, date, link, description } = item;
    //assign the variable to boiler plate
    firstProjectFeed = `
    <section class="article-posts">
    <img
      class="article-image"
      src="${image}"
      alt="post image"
    />
    <p class="post-info-article">${date}</p>
    <h1 class="post-title-article"><a href="${link}" target="_blank">${title}</a></h1>
    <p class="article-post">
      ${description}"
    </p>
  </section>
    `;
    //write it to container div
    container.innerHTML += firstProjectFeed;
  });
}

// all projects to dispaly after clicking on view more
export function projectsToHtml(projectsData) {
  projectsData.forEach((item) => {
    let projectFeed = "";
    //destructing the array of objects
    const { title, image, date, link, description } = item;
    //assign the variable to boiler plate
    projectFeed = `
    <section class="article-posts">
    <img
      class="article-image"
      src="${image}"
      alt="post image"
    />
    <p class="post-info-article">${date}</p>
    <h1 class="post-title-article"><a href="${link}" target="_blank">${title}</a></h1>
    <p class="article-post">
      ${description}"
    </p>
  </section>
    `;
    //write it to container div
    container.innerHTML += projectFeed;
  });
}

//I am repeating my self in this two function but i try to only make the firstProjectsToSee that only returns the slice variable and call it in the home.js, where i define that function to variable and try to pass it like argument to projectsToHtml but it returning undefined. :(
