import React, { useEffect, useState } from "react";

//components
import { Container } from "../../global/StyleGlobal";

//Custom style
import { ComponentCrew } from "./CrewStyle";

//services
import { getDatas } from "../../../services/getDatas";

const Crew = (props) => {
  const [filter, setFilter] = useState("Douglas");
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    getDatas("crew").then((result) => {
      setCategory(result);
    });
  }, []);

  const handleFunctions = (crew, index) => {
    setFilter(crew);
    setActive(index);
  };

  return (
    <ComponentCrew className="crew">
      <Container className="crew__container">
        <h1 className="crew__title">
          <span>02 </span>Meet your crew
        </h1>

        {category.map(
          (item) =>
            item.id === filter && (
              <div className="crew__contents" key={item.name}>
                <figure className="crew__employee">
                  <img src={item.images} alt={item.name} />
                  <span className="crew__employee-line"></span>
                </figure>

                <div className="crew__contents-container">
                  <div className="crew__dots">
                    <span
                      className={active === 0 ? "active__crew" : ""}
                      active={`${filter === "Douglas"}`}
                      onClick={() => handleFunctions("Douglas", 0)}
                    ></span>

                    <span
                      className={active === 1 ? "active__crew" : ""}
                      active={`${filter === "Mark"}`}
                      onClick={() => handleFunctions("Mark", 1)}
                    ></span>

                    <span
                      className={active === 2 ? "active__crew" : ""}
                      active={`${filter === "Victor"}`}
                      onClick={() => handleFunctions("Victor", 2)}
                    ></span>
                    <span
                      className={active === 3 ? "active__crew" : ""}
                      active={`${filter === "Anousheh"}`}
                      onClick={() => handleFunctions("Anousheh", 3)}
                    ></span>
                  </div>

                  <div className="crew__description">
                    <hgroup>
                      <h3>{item.role}</h3>
                      <h2>{item.name}</h2>
                    </hgroup>

                    <p>{item.bio}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </Container>
    </ComponentCrew>
  );
};

export default Crew;
