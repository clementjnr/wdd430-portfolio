import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="container page-section">
      <p className="eyebrow">A little about me</p>
      <h1>About Me</h1>
      <p>
        I am developing my skills in modern web development, including
        accessible interfaces, reusable components, responsive design, and
        full-stack application fundamentals. This portfolio is part of my
        WDD 430 learning experience.
      </p>

      <section aria-labelledby="learning-title">
        <h2 id="learning-title" className="section-heading">
          What I am learning
        </h2>
        <div className="info-grid">
          <SkillCard
            title="Frontend development"
            description="Building responsive pages with React, Next.js, TypeScript, and Tailwind CSS."
            skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          />
          <SkillCard
            title="Problem solving"
            description="Practicing how to break features into manageable tasks, test changes, and use Git and GitHub."
            skills={["Debugging", "Git", "Accessibility"]}
          />
        </div>
      </section>
    </main>
  );
}
