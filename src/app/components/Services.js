import React from "react";
import { FaLaptopCode, FaPalette, FaWordpress, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    flex: "1 1 250px", // responsive flex
    minWidth: "250px",
    margin: "10px",
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#2563eb",
    marginBottom: "12px",
  };

  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
  };

  const cardOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
  };

  return (
    <div
      id="services"
      style={{
        width: "100%",
        padding: "40px 12%",
        textAlign: "center",
        scrollMarginTop: "5rem",
        backgroundColor: "#f3f4f6",
      }}
    >
      <h4 style={{ marginBottom: "8px", fontSize: "1.25rem", fontFamily: "Ovo" }}>
        What I Offer
      </h4>
      <h2 style={{ marginBottom: "16px", fontSize: "1.5rem", fontFamily: "Ovo" }}>
        My Services
      </h2>
      <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.7", color: "#333" }}>
        I am a MERN stack developer from Heytec Web Solution with 1 year of experience.
      </p>

      {/* Cards */}
      <div style={cardsContainer}>
        {/* Card 1 */}
        <div style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardOut}>
          <FaLaptopCode style={iconStyle} />
          <h3 style={{ marginBottom: "8px" }}>WEB Design</h3>
          <p>Custom & coding-based responsive websites</p>
          <span style={{ display: "inline-block", marginTop: "10px", color: "#2563eb", fontWeight: "600" }}>
            Read More →
          </span>
        </div>

        {/* Card 2 */}
        <div style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardOut}>
          <FaPalette style={iconStyle} />
          <h3 style={{ marginBottom: "8px" }}>UI/UX</h3>
          <p>Custom & coding-based responsive websites</p>
          <span style={{ display: "inline-block", marginTop: "10px", color: "#2563eb", fontWeight: "600" }}>
            Read More →
          </span>
        </div>

        {/* Card 3 */}
        <div style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardOut}>
          <FaWordpress style={iconStyle} />
          <h3 style={{ marginBottom: "8px" }}>WORDPRESS / SEO</h3>
          <p>Custom & coding-based responsive websites</p>
          <span style={{ display: "inline-block", marginTop: "10px", color: "#2563eb", fontWeight: "600" }}>
            Read More →
          </span>
        </div>

        {/* Card 4 */}
        <div style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardOut}>
          <FaPaintBrush style={iconStyle} />
          <h3 style={{ marginBottom: "8px" }}>GRAPHIC DESIGN</h3>
          <p>Custom & coding-based responsive websites</p>
          <span style={{ display: "inline-block", marginTop: "10px", color: "#2563eb", fontWeight: "600" }}>
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
