import * as React from "react";
import ContactForm from "../../components/contact-form";

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <ContactForm />
      <div className="mt-6 flex gap-4">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
} 