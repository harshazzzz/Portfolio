"use server";

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type ContactFormState = {
  message: string;
  status: "idle" | "success" | "error";
};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

const databaseDirectory = path.join(process.cwd(), "data");
const databaseFile = path.join(databaseDirectory, "contact-messages.json");

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function readMessages() {
  try {
    const file = await readFile(databaseFile, "utf8");
    return JSON.parse(file) as ContactMessage[];
  } catch {
    return [];
  }
}

export async function saveContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const subject = readField(formData, "subject");
  const message = readField(formData, "message");

  if (!name || !email || !subject || !message) {
    return {
      status: "error",
      message: "Please fill every field before sending your message.",
    };
  }

  if (!email.includes("@") || !email.includes(".")) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const contactMessage: ContactMessage = {
    id: crypto.randomUUID(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
  };

  await mkdir(databaseDirectory, { recursive: true });
  const messages = await readMessages();
  messages.unshift(contactMessage);
  await writeFile(databaseFile, JSON.stringify(messages, null, 2));

  return {
    status: "success",
    message: "Message saved successfully. I will get back to you soon.",
  };
}
