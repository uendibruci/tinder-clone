import React, { useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import "./TinderCards.css";
import axios from "axios";

const url =
  "https://api.airtable.com/v0/app7UbHpjGfzCblIL/Table%201?api_key=keySRHOI6xf7M04NJ";

function TinderCards() {
  const [people, setPeople] = useState([
    // {
    //   name: "uendi",
    //   url: "https://i.pinimg.com/474x/d9/e6/80/d9e680f131148fa2cff5f802fc2b01d4.jpg ",
    // },
    // {
    //   name: "miki",
    //   url: "https://i.pinimg.com/474x/f5/cb/57/f5cb5719b4fad10964d944918a55575e.jpg ",
    // },
  ]);

  useEffect(() => {
    axios
      .get(url)
      .then((r) => setPeople(r.data.records))
      .catch((error) => console.log(error));
  }, [people]);

  //setPeople([...people, 'uendi', 'bora'])
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.fields.url})` }}
              className="card"
            >
              <h3>{person.fields.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
