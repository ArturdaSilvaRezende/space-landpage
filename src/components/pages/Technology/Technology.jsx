import React, { useEffect, useState } from "react";

//components
import { Container } from "../../global/StyleGlobal";

//custom style
import { ComponentTechnology } from "./TechnologyStyle";

//data
import TechnologyData from "./TechnologyData";

const Technology = (props) => {
  const [filter, setFilter] = useState("Vehicle");
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setCategory(TechnologyData);
  }, []);

  useEffect(() => {
    setCategory([]);
    const filtered = TechnologyData.map((item) => ({
      ...item,
      filtered: item.id.includes(filter),
    }));
    setCategory(filtered);
  }, [filter]);

  const handleFunctions = (crew, index) => {
    setFilter(crew);
    setActive(index);
  };

  return (
    <ComponentTechnology className="technology">
      <Container className="technology__container">
        <h1 className="technology__title">
          <span>03 </span>Space Launch 101
        </h1>

        {category.map(
          (item) =>
            item.filtered === true && (
              <div className="technology__contents" key={item.id}>
                <figure className="technology__image">
                  <img
                    className="tecknology__img-mobile"
                    src={item.images.landscape}
                    alt={item.name}
                  />
                  <img
                    className="tecknology__img-desktop"
                    src={item.images.portrait}
                    alt={item.name}
                  />
                </figure>
                <div className="technology__description">
                  <ul className="technology__navigation">
                    <li
                      className={active === 0 ? "technology__active" : ""}
                      active={`${filter === "Vehicle"}`}
                      onClick={() => handleFunctions("Vehicle", 0)}
                    >
                      1
                    </li>
                    <li
                      className={active === 1 ? "technology__active" : ""}
                      active={`${filter === "Spaceport"}`}
                      onClick={() => handleFunctions("Spaceport", 1)}
                    >
                      2
                    </li>
                    <li
                      className={active === 2 ? "technology__active" : ""}
                      active={`${filter === "Capsule"}`}
                      onClick={() => handleFunctions("Capsule", 2)}
                    >
                      3
                    </li>
                  </ul>
                  <div className="technology__text">
                    <hgroup>
                      <h3>THE TERMINOLOGY…</h3>
                      <h2>{item.name}</h2>
                    </hgroup>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </Container>
    </ComponentTechnology>
  );
};

export default Technology;
