/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a BTech (IT) student, I am skilled in programming, data structures, and algorithms.I have built user-friendly interfaces with React.js and improved performance using complex algorithms. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "UI/UX",
  "Responsive design",
  "API integration",
  "Reactjs",
  "HTML",
  "CSS",
  "JS",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I aim to work on innovative projects in the tech industry and continuously learn new technologies.I am open to internships and collaboration opportunities. Connect with me on LinkedIn to discuss further.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src="https://img.freepik.com/free-vector/hand-painted-watercolor-floral-wallpaper_52683-67104.jpg?t=st=1720009800~exp=1720013400~hmac=0e42efaf8f41402c97d6157ab10b18830f2479c718590476085e2f56001b7d6d&w=900" alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
