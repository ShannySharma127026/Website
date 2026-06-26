import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyPortfolio</h2>

      <div style={styles.links}>
        <span
          onClick={() => scrollToSection("home")}
          style={active === "home" ? styles.active : styles.link}
        >
          Home
        </span>

        <span
          onClick={() => scrollToSection("about")}
          style={active === "about" ? styles.active : styles.link}
        >
          About
        </span>

        <span
          onClick={() => scrollToSection("skills")}
          style={active === "skills" ? styles.active : styles.link}
        >
          Skills
        </span>

        <span
          onClick={() => scrollToSection("projects")}
          style={active === "projects" ? styles.active : styles.link}
        >
          Projects
        </span>

        <span
          onClick={() => scrollToSection("contact")}
          style={active === "contact" ? styles.active : styles.link}
        >
          Contact
        </span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#111827",
    color: "white",
    zIndex: 1000,
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    cursor: "pointer",
    color: "#ccc",
  },
  active: {
    cursor: "pointer",
    color: "orange",
    fontWeight: "bold",
  },
};