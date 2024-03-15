const container = document.querySelector(".container");

export function projectsToHtml(projectsData) {
  projectsData.map((item) => {
    let projectFeed = "";

    const { id, title, image, date, link, description } = item;

    projectFeed = `
    <section class="article-posts">
    <img
      class="article-image"
      src="${image}"
      alt="post image"
    />
    <p class="post-info-article">${date}</p>
    <h1 class="post-title-article"><a href="${link}">${title}</a></h1>
    <p class="article-post">
      ${description}"
    </p>
  </section>
    `;

    container.innerHTML += projectFeed;
  });
}
