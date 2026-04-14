"use client";

import { useEffect } from "react";

const WHATSAPP_NUMBER = "919422554886";

const buildWhatsAppUrl = (message) => {
  const numberPath = WHATSAPP_NUMBER.trim();
  return `https://wa.me/${numberPath}?text=${encodeURIComponent(message)}`;
};

export default function WhatsAppActions() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const nav = document.querySelector(".site-nav");
    const navToggle = document.querySelector(".nav-toggle");
    const leadForm = document.querySelector("#lead-form");
    const whatsappLinks = document.querySelectorAll(".js-whatsapp");

    const syncHeaderState = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    const setMenuOpen = (isOpen) => {
      nav?.classList.toggle("is-open", isOpen);
      header?.classList.toggle("is-open", isOpen);
      navToggle?.setAttribute("aria-expanded", String(isOpen));
    };

    const handleNavToggle = () => {
      setMenuOpen(!nav?.classList.contains("is-open"));
    };

    const handleNavClick = (event) => {
      if (event.target instanceof Element && event.target.matches("a")) {
        setMenuOpen(false);
      }
    };

    const handleWhatsAppClick = (event) => {
      const message = event.currentTarget.dataset.whatsappMessage;

      if (!message) {
        return;
      }

      event.preventDefault();
      window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    };

    const handleLeadSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const whatsappMessage = [
        "Hi PulseFit, I want to start fitness coaching.",
        `Name: ${formData.get("name")}`,
        `Goal: ${formData.get("goal")}`,
        `Message: ${formData.get("message")}`,
      ].join("\n");

      window.open(buildWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState);
    navToggle?.addEventListener("click", handleNavToggle);
    nav?.addEventListener("click", handleNavClick);
    leadForm?.addEventListener("submit", handleLeadSubmit);
    whatsappLinks.forEach((link) => link.addEventListener("click", handleWhatsAppClick));

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      navToggle?.removeEventListener("click", handleNavToggle);
      nav?.removeEventListener("click", handleNavClick);
      leadForm?.removeEventListener("submit", handleLeadSubmit);
      whatsappLinks.forEach((link) =>
        link.removeEventListener("click", handleWhatsAppClick),
      );
    };
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="PulseFit home">
        <span className="brand__mark">PF</span>
        <span>PulseFit</span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="site-nav"
      >
        <span className="sr-only">Open menu</span>
        <span />
        <span />
        <span />
      </button>

      <nav className="site-nav" id="site-nav" aria-label="Main navigation">
        <a href="#programs">Programs</a>
        <a href="#results">Results</a>
        <a href="#plans">Plans</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
