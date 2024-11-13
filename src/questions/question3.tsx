import { FC } from "react";
import "./question3.css";

const Question3: FC = () => {
  return (
    <div className="app-container">
      <p>
        3) Write the necessary React code for generating the below figure (using
        flex).
      </p>
      <main>
        <header>Header</header>
        <div className="container">
          <aside>
            <section className="hero">Hero</section>
            <section className="sidebar">Sidebar</section>
          </aside>
          <div className="content">
            <section className="main-content">Main Content</section>
            <section className="extra-content">Extra Content</section>
          </div>
        </div>
        <div className="related">
          <section className="related-images">Related Images</section>
          <section className="related-posts">Realated Posts</section>
        </div>
        <footer>Footer</footer>
      </main>
    </div>
  );
};

export default Question3;
