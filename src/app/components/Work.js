import React from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Work = () => {
  const projects = [
    {
      img: "/assets/Admin.jpg",
      link: "https://example-admin.com",
    },
    {
      img: "/assets/calculator.webp",
      link: "https://example-calculator.com",
    },
    {
      img: "/assets/to do.jfif",
      link: "https://example-todo.com",
    },
    {
      img: "/assets/crude.png",
      link: "https://example-crude.com",
    },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px", padding: "0 10%" }}>
      <h4 style={{ marginBottom: "8px", fontSize: "1.25rem", fontFamily: "Ovo" }}>
        My Portfolio
      </h4>
      <h2 style={{ marginBottom: "16px", fontSize: "1.5rem", fontFamily: "Ovo" }}>
        My Latest Work
      </h2>
      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 30px",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        Welcome to my web development portfolio. Explore a collection of
        projects showcasing my experience in web development.
      </p>

      {/* Portfolio Grid */}
      <div
      id="work"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "220px",
              height: "160px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              cursor: "pointer",
            }}
          >
            <Image
              src={project.img}
              alt="Project Image"
              fill
              style={{ objectFit: "cover" }}
            />

            {/* Hover Overlay */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "0.3s ease",
                textDecoration: "none",
              }}
              className="overlay"
            >
              <FaArrowUpRightFromSquare
                style={{ color: "#fff", fontSize: "26px" }}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Inline hover fix */}
      <style jsx>{`
        div:hover > a {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Work;
