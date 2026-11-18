import { contact, site } from "@/lib/content";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <h2 className="cmd">
          <span className="ps">$</span>./contact --send
        </h2>
        <h3 className="md-h">{contact.title}</h3>
        <div className="contact-grid">
          <div>
            <p className="muted">{contact.body}</p>
            <ul className="links">
              <li>
                <a href={`mailto:${site.email}`}>
                  {site.email} <span>↗</span>
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub <span>↗</span>
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
