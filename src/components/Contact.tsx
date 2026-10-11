"use client";

import { useState } from "react";

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error";
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast("Please fill in your name, email, and message.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "365e4de5-76d5-4f56-abc1-cc455634cb9b",
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || "Not provided",
          subject: formData.subject.trim()
            ? `[Portfolio] ${formData.subject.trim()}`
            : `[Portfolio Inquiry] from ${formData.name.trim()}`,
          message: formData.message.trim(),
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast("Message sent! I'll get back to you shortly. 🎉", "success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        showToast(result.message || "Something went wrong. Please try again.", "error");
      }
    } catch {
      showToast("Network error. Please check your connection and try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="panel contact">
        <div className="section__header">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Let&apos;s craft what&apos;s next.</h2>
        </div>
        <div className="contact__grid">
          <article className="contact__card">
            <h3>Invite me to collaborate</h3>
            <form id="contact-form" className="contact__form" onSubmit={handleSubmit} noValidate>
              {/* Honeypot spam protection */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <div className="form__group">
                <label htmlFor="cf-name">
                  Your name <span style={{ color: "#3B7EFF" }}>*</span>
                </label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Jane Doe"
                />
              </div>

              <div className="form__group">
                <label htmlFor="cf-email">
                  Your email <span style={{ color: "#3B7EFF" }}>*</span>
                </label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="form__group">
                <label htmlFor="cf-phone">Phone number</label>
                <input
                  type="tel"
                  id="cf-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+233 XXX XXX XXX"
                />
              </div>

              <div className="form__group">
                <label htmlFor="cf-subject">Subject (optional)</label>
                <input
                  type="text"
                  id="cf-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry"
                />
              </div>

              <div className="form__group">
                <label htmlFor="cf-message">
                  Message <span style={{ color: "#3B7EFF" }}>*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell me about your project or idea…"
                ></textarea>
              </div>

              <div className="form__actions">
                <button
                  type="submit"
                  className="button button--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </div>
              <p className="form__note">
                Your message goes directly to my inbox. No email client needed.
              </p>
            </form>

            <div className="contact__socials-section">
              <span className="contact__socials-heading">Direct Socials &amp; Messaging</span>
              <div className="contact__socials-list">
                <a
                  href="https://snapchat.com/t/O2P7Amd8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link contact__social-link--snapchat"
                  aria-label="Snapchat"
                >
                  <i className="bx bxl-snapchat"></i>
                  <span>Snapchat</span>
                </a>
                <a
                  href="https://www.instagram.com/buggy_bigsam?stkn=MTB5bmwwd2JwZ3poMg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link contact__social-link--instagram"
                  aria-label="Instagram"
                >
                  <i className="bx bxl-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/233244203222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link contact__social-link--whatsapp"
                  aria-label="WhatsApp"
                >
                  <i className="bx bxl-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sam-ebenezer-6115b540b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Buggybigsam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="GitHub"
                >
                  <i className="bx bxl-github"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Toast Notification */}
      {toast.show && (
        <div className="toast-root">
          <div className={`toast toast--${toast.type}`}>{toast.message}</div>
        </div>
      )}
    </>
  );
}
