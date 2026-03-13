




import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGraduationCap, FaProjectDiagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section style={{ padding: "40px 20px", marginTop: "10px", backgroundColor: "#f3f4f6" }}>
      
      {/* Image + Text Row */}
      <div
      id="about"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap", // responsive
        }}
      >
        {/* Image Section */}
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/assets/mern-stack.jpg"
            alt="My Photo"
            width={280}
            height={280}
            style={{
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* About Text */}
        <div
          style={{
            maxWidth: "600px",
            textAlign: "left",
            fontFamily: "sans-serif",
          }}
        >
          {/* Introduction */}
          <p
            style={{
              fontSize: "18px",
              color: "#111827", // dark text for light background
              lineHeight: "1.7",
            }}
          >
            Hi! I’m{" "}
            <span style={{ fontWeight: "600", color: "#111827" }}>
              Ahmad Raza
            </span>
            , a passionate full-stack web developer who loves creating interactive and
            dynamic user experiences. I specialize in{" "}
            <span style={{ fontWeight: "600", color: "#2563eb" }}>
              React
            </span>{" "}
            and{" "}
            <span style={{ fontWeight: "600", color: "#4f46e5" }}>
              Next.js
            </span>
            , focusing on building responsive, performant, and visually
            appealing web applications.
          </p>

          {/* Skills, Education, Projects */}
          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#111827", // dark text for readability
              lineHeight: "1.8",
            }}
          >
            <strong style={{ display: "block", marginBottom: "6px" }}>Languages:</strong>
            <FaHtml5 style={{ color: "#e34f26", marginRight: "6px" }} />
            <FaCss3Alt style={{ color: "#1572B6", marginRight: "6px" }} />
            <FaJsSquare style={{ color: "#F7DF1E", marginRight: "6px" }} />
            <FaReact style={{ color: "#61DBFB", marginRight: "6px" }} />
            Next.js
            <br />
            <FaGraduationCap style={{ marginRight: "6px", marginTop: "10px" }} />
            <strong>Education:</strong> Bachelors in Software Engineering, Islamia University BWP
            <br />
            <FaProjectDiagram style={{ marginRight: "6px", marginTop: "10px" }} />
            <strong>Projects:</strong> Built more than 5 projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
