import Image from "next/image";
import { ContactForm } from "./contact-form";
import { DownloadCvButton } from "./download-cv-button";
import styles from "./page.module.css";
import {
  introductions,
  navigationLinks,
  projects,
  services,
  skills,
  stats,
} from "./portfolio-data";

export default function Home() {
  return (
    <main className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.navbarInner}>
          <a href="#home" className={styles.logo}>
            Harshana Karunarathna.
          </a>

          <div className={styles.navLinks}>
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.badge}>Software Engineering Student</p>

          <h1 className={styles.heroTitle}>
            Building clean, responsive websites with a passion for learning and growth.
          </h1>

          <p className={styles.heroText}>
            I&apos;m Harshana Karunarathna, a developer focused on responsive
            interfaces, practical databases, API testing, and real-world
            software workflows.
          </p>

          <div className={styles.heroActions}>
            <a href="#contact" className={styles.primaryButton}>
              Contact Me
            </a>

            <DownloadCvButton className={styles.secondaryButton} />
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.profileWrap}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageBox}>
              <Image
                src="/profile.jpg"
                alt="Harshana Karunarathna"
                width={972}
                height={1280}
                priority
                className={styles.profileImage}
              />
            </div>

            <div className={styles.profileNote}>
              <span>Currently looking for</span>
              <strong>Software engineering internship opportunities</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.whiteSection}>
        <div className={styles.splitSection}>
          <div>
            <p className={styles.sectionEyebrow}>About Me</p>
            <h2 className={styles.sectionTitle}>
              A practical developer with a clean UI mindset.
            </h2>
          </div>

          <div className={styles.introList}>
            {introductions.map((intro) => (
              <p key={intro}>{intro}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>What I Do</p>
            <h2 className={styles.sectionTitle}>
              From interface design to working data flows.
            </h2>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <article key={service.title} className={styles.serviceCard}>
                <span className={styles.serviceNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={styles.whiteSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Skills</p>
            <h2 className={styles.sectionTitle}>
              Technologies I use to build and test applications.
            </h2>
          </div>

          <div className={styles.skillsList}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillPill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Projects</p>
            <h2 className={styles.sectionTitle}>Selected work and concepts.</h2>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={900}
                    height={600}
                    className={styles.projectPreviewImage}
                  />
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.techList}>
                  {project.tech.map((item) => (
                    <span key={item} className={styles.techPill}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whiteSection}>
        <div className={styles.narrowContainer}>
          <p className={styles.sectionEyebrow}>Career Goal</p>

          <div className={styles.experienceCard}>
            <div>
              <h2 className={styles.experienceTitle}>
                Seeking a Software Engineering Internship
              </h2>
              <p className={styles.experienceText}>
                I am currently looking for an internship where I can improve my
                real-world development skills, contribute to practical projects,
                and learn from experienced software engineering teams.
              </p>
            </div>
            <span className={styles.experienceBadge}>Open to internship</span>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactLayout}>
          <div>
            <p className={styles.sectionEyebrow}>Contact Me</p>
            <h2 className={styles.contactTitle}>
              Send a message directly.
            </h2>
            <p className={styles.contactText}>
              Use the form for internship opportunities, project collaboration,
              or developer learning opportunities. Your message is saved
              locally in the portfolio database file.
            </p>

            <div className={styles.contactDetails}>
              <a href="tel:+94715442353" className={styles.contactActionButton}>
                Call Me
              </a>
              <a
                href="mailto:harshanakarunarathna2@gmail.com"
                className={styles.contactActionButton}
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/harshana-karunarathna-2a93163b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className={styles.contactActionButton}
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
