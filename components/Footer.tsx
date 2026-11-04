export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Copyright © {new Date().getFullYear()} | My Portfolio | All rights reserved.</p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
