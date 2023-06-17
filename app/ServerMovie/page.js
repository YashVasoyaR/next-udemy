import Image from "next/image";
import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";

const ServerMovie = async () => {
  const url = process.env.NEXT_PUBLIC_RPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e589b9a00mshedca1d49bc6f99dp135491jsn31797cad3cb2",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(`${url}`, options);
  const data = await res.json();
  return (
    <>
      <h1>Movie List</h1>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.titles.map((list, i) => (
            <MovieCard {...list} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServerMovie;
