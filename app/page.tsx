import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Sleep Outside",
    description:
      "A team-built outdoor gear shopping experience created for a web development course. Update this description to match the features you personally contributed.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/brunocelada/wdd330-sleepoutside",
    linkLabel: "View GitHub repository",
  },
  {
    title: "CineScope — Movie & TV Discovery",
    description:
      "A movie and television discovery project concept focused on helping viewers find titles, explore details, and keep a watchlist. Replace this entry or link with your actual completed project before submitting.",
    technologies: ["JavaScript", "API integration", "Responsive CSS"],
    link: "",
    linkLabel: "https://cinescope-onsa.onrender.com",
  },
];

export default function Home() {
  return (
    <main className="container">
      <section className="hero" aria-labelledby="home-title">
        <p className="eyebrow">Web Development Portfolio</p>
        <h1 id="home-title">My Portfolio</h1>
        <p>
          Welcome to my portfolio. Here you can explore selected projects,
          the technologies behind them, and what I am learning as a web
          developer.
        </p>
      </section>

      <section aria-labelledby="projects-title">
        <h2 id="projects-title" className="section-heading">
          Featured Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
