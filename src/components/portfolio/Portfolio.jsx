import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Eye-Spy",
    img: "./eyespy-project.png",
    desc: "Our project empowers the visually impaired by utilizing ML models to analyze real-time environmental data from a camera attached to their attire. Simultaneously, caregivers can remotely monitor the live feed on a website.",
    link: "https://sajal072004.github.io/eyesspy/",
  },

  {
    id: 2,
    title: "Weather App",
    img: "./weather.png",
    desc: "This website offers a comprehensive weather forecast for various cities, featuring a 5-day outlook. By leveraging the geolocation API, users can effortlessly access real-time weather updates tailored to their current location.",
    link: "https://sajal072004.github.io/eyesspy/",
  },

  {
    id: 3,
    title: "Eye-Spy",
    img: "./eyespy-project.png",
    desc: "Our project empowers the visually impaired by utilizing ML models to analyze real-time environmental data from a camera attached to their attire. Simultaneously, caregivers can remotely monitor the live feed on a website.",
    link: "https://sajal072004.github.io/eyesspy/",
  },

  {
    id: 4,
    title: "Eye-Spy",
    img: "./eyespy-project.png",
    desc: "Our project empowers the visually impaired by utilizing ML models to analyze real-time environmental data from a camera attached to their attire. Simultaneously, caregivers can remotely monitor the live feed on a website.",
    link: "https://sajal072004.github.io/eyesspy/",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-190, 190]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;