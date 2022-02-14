import React, { useEffect, useState } from "react";

//components
import { Container } from "../../global/StyleGlobal";

//custom style
import { ComponentDestination } from "./DestinationStyle";

import { getDatas } from "../../../services/getDatas";

const Destination = () => {
  const [filter, setFilter] = useState("Moon");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getDatas("destinations").then((result) => {
      setCategory(result);
    });
  }, []);

  return (
    <ComponentDestination className="destination">
      <Container className="destination__container">
        <h1 className="destination__title">
          <span>01 </span>Pick your destination
        </h1>

        {category.map((item) =>
          item.name === filter ? (
            <div className="destination__contents" key={item.name}>
              <img src={item.images} alt={item.name} />

              <div className="destination__description">
                <ul className="destination__menu">
                  <li
                    active={`${filter === "Moon"}`}
                    onClick={(e) => setFilter("Moon")}
                    className="activeDest"
                  >
                    Moon
                  </li>
                  <li
                    active={`${filter === "Mars"}`}
                    onClick={() => setFilter("Mars")}
                    className="activeDest"
                  >
                    Mars
                  </li>
                  <li
                    active={`${filter === "Europa"}`}
                    onClick={() => setFilter("Europa")}
                    className="activeDest"
                  >
                    Europa
                  </li>
                  <li
                    active={`${filter === "Titan"}`}
                    onClick={() => setFilter("Titan")}
                    className="activeDest"
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
          ) : (
            ""
          )
        )}
      </Container>
    </ComponentDestination>
  );
};

export default Destination;
