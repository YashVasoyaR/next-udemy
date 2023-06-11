import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = (list) => {
    const {id,backgroundImage,releaseYear,title,synopsis,logoImage,creators}=list.jawSummary;
  return (
    <>
      <div
        key={id}
        className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <article className="overflow-hidden rounded-lg shadow-lg">
          <Link href={`/movies/${id}`} prefetch={false}>
            <Image
              src={backgroundImage.url}
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
                href={`/movies/${id}`}
                prefetch={false}
              >
                {title}
              </Link>
            </h1>
            <p className="text-grey-darker text-lg mb-5">
              {releaseYear}
            </p>
          </header>
          <p className="text-grey-darker text-sm">{synopsis}</p>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <Link
              className="flex items-center no-underline hover:underline text-black"
              href={`/movies/${id}`}
              prefetch={false}
            >
              <Image
                alt="Placeholder"
                className="block rounded-full"
                src={logoImage.url}
                height={50}
                width={50}
              />
              <p className="ml-2 text-sm">
                {creators.length > 0 &&
                  creators[0].name}
              </p>
            </Link>
            <Link
              className="no-underline cursor-pointer text-grey-darker hover:text-red-dark"
              href={`/movies/${id}`}
              prefetch={false}
            >
              <span className="hidden">Like</span>
              <i className="fa fa-heart" />
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
};

export default MovieCard;
