export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">
          Ebenezer A.A Sam <span className="footer__handle">@ebenezersam</span>
        </p>
        <p className="footer__studio">
          Founder of{" "}
          <a
            href="https://sainttechsolutions.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", fontWeight: 600 }}
          >
            Saint Tech Solutions ↗
          </a>
        </p>
        <ul className="footer__socials" aria-label="Social links">
          <li>
            <a
              href="https://github.com/Buggybigsam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sam-ebenezer-6115b540b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/buggy_bigsam?stkn=MTB5bmwwd2JwZ3poMg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://snapchat.com/t/O2P7Amd8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat"
            >
              <i className="bx bxl-snapchat"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/233244203222"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="mailto:buggybigsam@gmail.com" aria-label="Email">
              <i className="bx bx-envelope"></i>
            </a>
          </li>
          <li>
            <a href="tel:0244203222" aria-label="Call 0244203222">
              <i className="bx bx-phone"></i>
            </a>
          </li>
        </ul>
        <p className="footer__copy">
          © {currentYear} Ebenezer A.A Sam. Built with empathy and precision.
        </p>
      </div>
    </footer>
  );
}
