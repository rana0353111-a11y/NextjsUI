// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinkStyle = {
//     textDecoration: "none",
//     color: "#555",
//     fontWeight: "500",
//     transition: "color 0.3s",
//   };

//   return (
//     <nav
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         width: "100%",
//         padding: "15px 50px",
//         backgroundColor: "white",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//       }}
//     >
//       {/* Logo */}
//       <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <Image src="/assets/logo.webp" alt="Logo" width={50} height={50} />
//         <h1 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>ITS SOLUTIONS</h1>
//       </Link>

//       {/* Desktop Menu */}
//       <ul className="desktop-menu" style={{ display: "flex", gap: "25px", listStyle: "none" }}>
//         <li><Link href="#home" style={navLinkStyle}>Home</Link></li>
//         <li><Link href="#about" style={navLinkStyle}>About</Link></li>
//         <li><Link href="#services" style={navLinkStyle}>Services</Link></li>
//         <li><Link href="#work" style={navLinkStyle}>My Work</Link></li>
//         <li><Link href="#contact" style={navLinkStyle}>Contact</Link></li>
//       </ul>

//       {/* Hamburger Icon */}
//       <button
//         className="mobile-menu-icon"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle Menu"
//         style={{ background: "none", border: "none", cursor: "pointer" }}
//       >
//         {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//       </button>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <ul
//           style={{
//             position: "absolute",
//             top: "70px",
//             right: "20px",
//             backgroundColor: "white",
//             listStyle: "none",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//           }}
//         >
//           <li><Link href="#home" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link href="#about" style={navLinkStyle} onClick={() => setMenuOpen(false)}>About</Link></li>
//           <li><Link href="#services" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Services</Link></li>
//           <li><Link href="#work" style={navLinkStyle} onClick={() => setMenuOpen(false)}>My Work</Link></li>
//           <li><Link href="#contact" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Contact</Link></li>
//         </ul>
//       )}

//       {/* Responsive CSS */}
//       <style jsx>{`
//         .mobile-menu-icon {
//           display: none;
//         }

//         @media (max-width: 768px) {
//           .desktop-menu {
//             display: none;
//           }
//           .mobile-menu-icon {
//             display: block;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// }
// "use client";"use client";"use client";  // Must be the very first line

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">IT-SOLUTIONS</h1>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/Services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/Work" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className={`hamburger ${menuOpen ? "toggle" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
