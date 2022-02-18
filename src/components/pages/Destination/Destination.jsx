import React, { useEffect, useState } from "react";

//components
import { Container } from "../../global/StyleGlobal";

//custom style
import { ComponentDestination } from "./DestinationStyle";

//datas
import DestinationData from "./DestinationData";

const Destination = () => {
  const [filter, setFilter] = useState("Moon");
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setCategory(DestinationData);
  }, []);

  useEffect(() => {
    setCategory([]);
    const filtered = DestinationData.map((item) => ({
      ...item,
      filtered: item.name.includes(filter),
    }));
    setCategory(filtered);
  }, [filter]);

  const handleFunctions = (crew, index) => {
    setFilter(crew);
    setActive(index);
  };

  return (
    <ComponentDestination className="destination">
      <Container className="destination__container">
        <h1 className="destination__title">
          <span>01 </span>Pick your destination
        </h1>

        {category.map(
          (item) =>
            item.filtered === true && (
              <div className="destination__contents" key={item.name}>
                <img src={item.images} alt={item.name} />

                <div className="destination__description">
                  <ul className="destination__menu">
                    <li
                      className={active === 0 ? "activeDest" : ""}
                      active={`${filter === "Moon"}`}
                      onClick={() => handleFunctions("Moon", 0)}
                    >
                      Moon
                    </li>
                    <li
                      className={active === 1 ? "activeDest" : ""}
                      active={`${filter === "Mars"}`}
                      onClick={() => handleFunctions("Mars", 1)}
                    >
                      Mars
                    </li>
                    <li
                      className={active === 2 ? "activeDest" : ""}
                      active={`${filter === "Europa"}`}
                      onClick={() => handleFunctions("Europa", 2)}
                    >
                      Europa
                    </li>
                    <li
                      className={active === 3 ? "activeDest" : ""}
                      active={`${filter === "Titan"}`}
                      onClick={() => handleFunctions("Titan", 3)}
                    >
                      Titan
                    </li>
                  </ul>
                  <div className="description__about">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>

                  <div className="description__line"></div>

                  <div className="destination__information">
                    <div className="description__distance">
                      <span>AVG. DISTANCE</span>
                      <p>{item.distance}</p>
                    </div>

                    <div className="description__travel">
                      <span>Est. travel time</span>
                      <p>{item.travel}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </Container>
    </ComponentDestination>
  );
};

export default Destination;
