"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../loading";

const Movie = async () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = process.env.NEXT_PUBLIC_RPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e589b9a00mshedca1d49bc6f99dp135491jsn31797cad3cb2",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${url}`, options);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {data &&
              data.titles.length > 0 &&
              data.titles.map((list, i) => <MovieCard  {...list} />)}
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
