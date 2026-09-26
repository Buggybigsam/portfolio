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
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      showToast("Please provide your name and a message.", "error");
      return;
    }

    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(
      formData.subject.trim()
        ? `[Portfolio Contact] ${formData.subject.trim()} - from ${formData.name.trim()}`
        : `[Portfolio Inquiry] Message from ${formData.name.trim()}`
    );

    const emailBody = encodeURIComponent(
      `Hello Ebenezer,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim() || "Not provided"}\nPhone: ${formData.phone.trim() || "Not provided"}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent from your portfolio website`
    );

    const mailtoUrl = `mailto:buggybigsam@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Email draft opened! You can now send your message directly to buggybigsam@gmail.com.", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 600);
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
              <div className="form__group">
                <label htmlFor="cf-name">Your name</label>
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
                <label htmlFor="cf-email">Your email</label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                <label htmlFor="cf-message">Message</label>
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              <p className="form__note">Your message will be sent directly to me.</p>
            </form>
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
