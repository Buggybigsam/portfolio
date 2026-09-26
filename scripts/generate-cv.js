const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "..", "public", "Ebenezer_AA_Sam_CV.pdf");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
  info: {
    Title: "Ebenezer A.A Sam - Curriculum Vitae",
    Author: "Ebenezer A.A Sam",
    Subject: "IT Specialist & Full-Stack Software Developer",
  },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const PRIMARY_COLOR = "#0B0C10";
const ACCENT_COLOR = "#3B7EFF";
const SECONDARY_COLOR = "#465063";
const MUTED_COLOR = "#64748B";

// Header
doc
  .fillColor(PRIMARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(22)
  .text("EBENEZER A.A SAM", { characterSpacing: 1 });

doc
  .fillColor(ACCENT_COLOR)
  .font("Helvetica-Bold")
  .fontSize(11)
  .text("IT Specialist & Full-Stack Software Developer", { characterSpacing: 0.5 });

doc.moveDown(0.3);

doc
  .fillColor(SECONDARY_COLOR)
  .font("Helvetica")
  .fontSize(9)
  .text(
    "Accra, Ghana  •  buggybigsam@gmail.com  •  (+233) 0244203222  •  github.com/Buggybigsam  •  Founder, Saint Tech"
  );

doc.moveDown(0.5);

// Divider line
doc
  .strokeColor("#E2E8F0")
  .lineWidth(1)
  .moveTo(45, doc.y)
  .lineTo(550, doc.y)
  .stroke();

doc.moveDown(0.7);

function addSectionHeader(title) {
  doc.moveDown(0.4);
  doc
    .fillColor(ACCENT_COLOR)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(title.toUpperCase(), { characterSpacing: 0.8 });

  doc
    .strokeColor("#CBD5E1")
    .lineWidth(0.75)
    .moveTo(45, doc.y + 2)
    .lineTo(550, doc.y + 2)
    .stroke();

  doc.moveDown(0.5);
}

// Summary
addSectionHeader("Professional Summary");
doc
  .fillColor(SECONDARY_COLOR)
  .font("Helvetica")
  .fontSize(9.5)
  .lineGap(3)
  .text(
    "Passionate software developer and Information Technology specialist focused on creating modern, scalable, and user-friendly digital solutions. Experienced in full-stack web engineering, resilient system architecture, database modeling, and practical AI integrations. Known for dependable project delivery, proactive communication, and crafting intuitive experiences that bridge human connection with technical precision."
  );

// Education
addSectionHeader("Education");
doc
  .fillColor(PRIMARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(10)
  .text("Bachelor of Science in Information Technology", { continued: true })
  .font("Helvetica-Bold")
  .fillColor(ACCENT_COLOR)
  .text("  |  2023 — 2026", { align: "right" });

doc
  .fillColor(SECONDARY_COLOR)
  .font("Helvetica")
  .fontSize(9)
  .text("Ghana Communication Technology University (GCTU) — Accra, Ghana");

doc
  .fillColor(MUTED_COLOR)
  .font("Helvetica-Oblique")
  .fontSize(8.5)
  .text(
    "Key Areas: Software Engineering, Web & Cloud Systems, Database Management, Computer Networks, and UI/UX Design."
  );

// Leadership & Experience
addSectionHeader("Professional Experience & Leadership");
doc
  .fillColor(PRIMARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(10)
  .text("Founder & Lead Developer", { continued: true })
  .fillColor(ACCENT_COLOR)
  .text("  |  2024 — Present", { align: "right" });

doc
  .fillColor(SECONDARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(9)
  .text("Saint Tech — Software Development & Digital Infrastructure");

doc.moveDown(0.2);
doc
  .fillColor(SECONDARY_COLOR)
  .font("Helvetica")
  .fontSize(9)
  .lineGap(2.5)
  .text("• Architect and engineer custom full-stack web platforms and client management applications.")
  .text("• Design responsive Next.js and TypeScript frontends paired with robust database backends.")
  .text("• Manage client relationships, requirement gathering, deployment pipelines, and post-launch stability.");

// Projects
addSectionHeader("Featured Projects");

function addProject(title, tech, desc) {
  doc
    .fillColor(PRIMARY_COLOR)
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .text(title, { continued: true })
    .font("Helvetica")
    .fillColor(ACCENT_COLOR)
    .text(`  [${tech}]`);

  doc
    .fillColor(SECONDARY_COLOR)
    .font("Helvetica")
    .fontSize(8.8)
    .lineGap(2)
    .text(desc);

  doc.moveDown(0.3);
}

addProject(
  "CraftConnect — Smart Booking for Local Artisans",
  "TypeScript, Next.js, PostgreSQL, Tailwind CSS",
  "A specialized platform connecting local Ghanaian trade artisans with verified clients. Implemented conflict-free appointment scheduling, portfolio showcases, and real-time status notifications."
);

addProject(
  "Apartment Booking Platform",
  "TypeScript, React, Node.js, REST API",
  "Full-stack property rental and accommodation reservation system with interactive calendars, date validation, tenant inquiry management, and automated booking receipts."
);

addProject(
  "Nova Stitch Studio",
  "TypeScript, Next.js, PostgreSQL, UI/UX",
  "Bespoke digital atelier management system designed for tailoring and fashion creators. Features custom garment order tracking, client body measurement logs, and responsive lookbooks."
);

addProject(
  "Face Recognition Attendance System",
  "Python, OpenCV, Computer Vision",
  "Automated biometric attendance logger utilizing facial embeddings for real-time identification, liveness validation, and instant database check-in exports."
);

// Technical Skills
addSectionHeader("Technical Skills");
doc
  .fillColor(PRIMARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(9)
  .text("Languages: ", { continued: true })
  .font("Helvetica")
  .fillColor(SECONDARY_COLOR)
  .text("TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3, C++, Java");

doc
  .fillColor(PRIMARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(9)
  .text("Frameworks & Tools: ", { continued: true })
  .font("Helvetica")
  .fillColor(SECONDARY_COLOR)
  .text("Next.js, React, Node.js, Express, Flask, FastAPI, Tailwind CSS, Git, Docker");

doc
  .fillColor(PRIMARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(9)
  .text("Databases & Architecture: ", { continued: true })
  .font("Helvetica")
  .fillColor(SECONDARY_COLOR)
  .text("PostgreSQL, MySQL, MongoDB, SQLite, RESTful APIs, Database Schema Design");

doc
  .fillColor(PRIMARY_COLOR)
  .font("Helvetica-Bold")
  .fontSize(9)
  .text("Specializations: ", { continued: true })
  .font("Helvetica")
  .fillColor(SECONDARY_COLOR)
  .text("Full-Stack Web Development, UI/UX Design, System Architecture, Computer Vision");

doc.end();

stream.on("finish", () => {
  console.log("CV PDF successfully generated at: " + outputPath);
});
