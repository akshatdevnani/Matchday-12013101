import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "./Home.css";
import axios from "axios";
import Data from "../Data.json";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios(
      `https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}`,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((res) => {
        console.log(res);
        setData(res);
        setFilteredData(res);
      })
      .catch((err) => {
        setData(Data);
        setFilteredData(Data);
        console.log(Data);
      });
  }, []);

  const search = (val) => {
    if (!val) return setFilteredData(data);
    const filteredDataProcessed = data?.fixtures.filter((fixture) => {
      if (
        new RegExp(val.toLowerCase()).test(
          fixture.tournament[0].name.toLowerCase()
        )
      )
        return fixture;
      else if (
        new RegExp(val.toLowerCase()).test(fixture.team1[0].name.toLowerCase())
      )
        return fixture;
      else if (
        new RegExp(val.toLowerCase()).test(fixture.team2[0].name.toLowerCase())
      )
        return fixture;
    });
    setFilteredData({ ...filteredData, fixtures: filteredDataProcessed });
  };

  return (
    <div>
      <header>
        <h1>International Matches</h1>
        <div className="input-form">
          <input
            type="text"
            placeholder="search"
            className="search-box"
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </header>
      <div className="match-cards">
        {filteredData?.fixtures?.map((fixture, index) => {
          return (
            <Link to="/video">
              <Card key={fixture.fixtureId} data={fixture} />
              </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
