"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const fullText = "I AM MERN-STACK DEVELOPER";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!reverse) {
        // typing forward
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setReverse(true);
        }
      } else {
        // deleting backward
        if (index > 0) {
          setDisplayedText(fullText.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setReverse(false);
        }
      }
    }, 150); // typing speed
    return () => clearInterval(interval);
  }, [index, reverse]);

  return (
    <div
      id="home"
      className="first-page"
      style={{
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "white",
      }}
    >
      {/* Profile Image */}
      <Image
        src="/assets/myimg.jpg"
        alt="My Photo"
        width={200}
        height={200}
        style={{
          borderRadius: "200px",
          border: "4px solid white",
        }}
      />

      {/* Name */}
      <h1 style={{ marginTop: "15px", fontSize: "28px", color: "#fff" }}>
        AHMAD RAZA
      </h1>

      {/* Profession with typing animation */}
      <h1
        style={{
          fontSize: "22px",
          marginTop: "10px",
          color: "#00d4ff",
          display: "inline-block",
        }}
      >
        {displayedText}
        <span
          style={{
            borderRight: "2px solid #00d4ff",
            marginLeft: "2px",
            animation: "blink 0.7s steps(1) infinite",
          }}
        ></span>

        <style jsx>{`
          @keyframes blink {
            0%, 50%, 100% { border-color: #00d4ff; }
            25%, 75% { border-color: transparent; }
          }
        `}</style>
      </h1>

      {/* Buttons */}
      <div
        className="buttons"
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <a
          href="#contact"
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005bb5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0070f3")}
        >
          Contact Me
        </a>

        {/* Download Resume Button */}
        <a
          href="/Ahmed-MERN.pdf" // <-- Make sure your PDF is in public folder
          download
          style={{
            backgroundColor: "#111",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#111")}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
