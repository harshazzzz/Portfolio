"use client";

import { type FormEvent, useState } from "react";
import styles from "./page.module.css";

type ContactFormState = {
  message: string;
  status: "idle" | "success" | "error";
};

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        body.append(key, value);
      }
    });

    setPending(true);
    setState(initialState);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setState({
        status: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch {
      setState({
        status: "error",
        message: "Message could not be sent. Please try again.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className={styles.contactForm}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className={styles.formGrid}>
        <label className={styles.formField}>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>

        <label className={styles.formField}>
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </label>
      </div>

      <label className={styles.formField}>
        <span>Subject</span>
        <input
          name="subject"
          type="text"
          placeholder="Project, internship, or collaboration"
          required
        />
      </label>

      <label className={styles.formField}>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me what you would like to build or discuss"
          required
        />
      </label>

      <div className={styles.formFooter}>
        <button type="submit" disabled={pending} className={styles.submitButton}>
          {pending ? "Sending..." : "Send Message"}
        </button>

        {state.message ? (
          <p
            className={
              state.status === "success"
                ? styles.successMessage
                : styles.errorMessage
            }
            aria-live="polite"
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
