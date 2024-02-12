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
import image from "../images/portfolio.jpg";

const imageAltText = "laptop on table";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "RISC-V Vector Extension (Vaquita) 🎉",
    description:
      "RISC-V Vector Extension is a CHISEL based project that enables the execution of all Vector instructions and adds support for Vector processing",
    url: "https://github.com/Hafsa-shoaib989/vaquita",
  },
  {
    title: "Cyber Cafe",
    description:
      "Cyber cafe is a python based project that has converted all the manual work into an automated system, implementing CRUD functionality using SQL for managing and automating the cafe's operations and services.",
    url: "https://github.com/Hafsa-shoaib989/Cyber-Cafe",
  },
  {
    title: "Hotel Management System",
    description:
      "Hotel Management System is a project focused on establishing an interconnected and efficient network infrastructure using Cisco Packet Tracer. Spanning three floors, each dedicated to specific departments, the system ensures seamless communication and collaboration.",
  },
  {
    title: "Pasban Five Stage Pipelined Core",
    description:
      "Five Stage Pipelined Processor Core based on RISC-V ISA, supporting Integer(i) extension, implemented on CHISEL HCL. ",
    url: "https://github.com/Hafsa-shoaib989/5-Stage-Pipeline",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
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
