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
      <h1>Server Side Movie List</h1>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.titles.map((list, i) => (
            <div
              key={list.jawSummary.id}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <article className="overflow-hidden rounded-lg shadow-lg">
                <Link href={`/ServerMovie/${list.jawSummary.id}`} prefetch={false}>
                  <Image
                    src={list.jawSummary.backgroundImage.url}
                    alt="Placeholder"
                    className="block h-auto w-full"
                    height={200}
                    width={200}
                  />
                </Link>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <Link
                      className="no-underline cursor-pointer hover:underline text-black"
                      href={`/ServerMovie/${list.jawSummary.id}`}
                      prefetch={false}
                    >
                      {list.jawSummary.title}
                    </Link>
                  </h1>
                  <p className="text-grey-darker text-lg mb-5">{list.jawSummary.releaseYear}</p>
                </header>
                <p className="text-grey-darker text-sm">{list.jawSummary.synopsis}</p>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <Link
                    className="flex items-center no-underline hover:underline text-black"
                    href={`/ServerMovie/${list.jawSummary.id}`}
                    prefetch={false}
                  >
                    <Image
                      alt="Placeholder"
                      className="block rounded-full"
                      src={list.jawSummary.logoImage.url}
                      height={50}
                      width={50}
                    />
                    <p className="ml-2 text-sm">
                      {list.jawSummary.creators.length > 0 && list.jawSummary.creators[0].name}
                    </p>
                  </Link>
                  <Link
                    className="no-underline cursor-pointer text-grey-darker hover:text-red-dark"
                    href={`/ServerMovie/${list.jawSummary.id}`}
                    prefetch={false}
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart" />
                  </Link>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServerMovie;
