/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hoobank",
    description:
      "Designed and developed a modern, responsive website with a focus on clean, intuitive UI/UX.",
    url: "https://bank-ui-modern.netlify.app/",
  },
  {
    title: "Real-time AQI",
    description:
      "Integrated third-party APIs to fetch and visualize AQI data for various locations, enhancing user awareness.",
    url: "https://breeze-care.netlify.app/",
  },
  {
    title: "Pokedex",
    description:
      "Created a fully functional Pokédex website featuring detailed information on over 600 Pokémon.",
    url: "https://faizuddinq.github.io/vanilla-pokedex/",
  },
  {
    title: "Pokedex 2.0",
    description:
      "Implemented search functionality and dynamic data rendering, including sorting options for better navigation.",
    url: "https://faizuddinq.github.io/vanilla-pokedex/",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://img.freepik.com/free-photo/office-desktop-with-notebook_23-2148174119.jpg?t=st=1720010244~exp=1720013844~hmac=601363d33ab20daef5358497485e0fd7f5b96447453616df1751ad8e68317484&w=900"
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
