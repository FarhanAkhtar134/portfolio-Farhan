import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.jpg";
import IMG2 from "../../assests/portfolio2.jpg";
import IMG3 from "../../assests/portfolio3.jpg";
import IMG4 from "../../assests/restaurant.jpg";
import IMG5 from "../../assests/monopoly.jpg";
import IMG6 from "../../assests/blogging.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Online Shop",
    github: "https://github.com/FarhanAkhtar134/Online-Shop_Full-Stack",
    demo: "https://youtu.be/XsZ6PrRnoCc",
  },
  {
    id: 2,
    image: IMG2,
    title: "Stock Execution System",
    github: "https://github.com/FarhanAkhtar134/SG_StockExecutionSystem",
    demo: "https://youtu.be/wBelltoBPOk",
  },
  {
    id: 3,
    image: IMG3,
    title: "React Expense Tracker",
    github: "https://github.com/FarhanAkhtar134/expense-tracker",
    demo: "https://youtu.be/16ntp4MkTCw",
  },
  {
    id: 4,
    image: IMG4,
    title: "Restaurant App",
    github: "https://github.com/FarhanAkhtar134/Restaurant-App",
    demo: "https://youtu.be/YDBZzHELmdQ",
  },
  {
    id: 5,
    image: IMG5,
    title: "Monopoly Game",
    github: "https://github.com/FarhanAkhtar134/Monopoly-Game",
    demo: "https://youtu.be/dNVHJVhkAKA",
  },
  {
    id: 6,
    image: IMG6,
    title: "Blogging App",
    github: "https://github.com/FarhanAkhtar134/Blog-post-App",
    demo: "https://youtu.be/RqS01VNjc2M",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((dataItems) => {
          return (
            <article key={dataItems.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={dataItems.image} alt="" />
              </div>
              <h3>{dataItems.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={dataItems.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={dataItems.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
