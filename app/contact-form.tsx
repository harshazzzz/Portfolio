"use client";

import { useActionState } from "react";
import { saveContactMessage, type ContactFormState } from "./actions";
import styles from "./page.module.css";

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    saveContactMessage,
    initialState,
  );

  return (
    <form action={formAction} className={styles.contactForm}>
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
          {pending ? "Saving..." : "Send Message"}
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
