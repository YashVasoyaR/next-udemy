"use client";

import Loading from "@/app/loading";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MovieDetails = async ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const movieId = params.id;
  console.log('params :>> ', Number(movieId));
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${Number(movieId)}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e589b9a00mshedca1d49bc6f99dp135491jsn31797cad3cb2",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}`, options);
      const jsonData = await response.json();
      console.log('jsonData :>> ', jsonData);
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
  console.log('data :>> ', data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen grid place-items-center font-mono bg-gray-900">
          <div className="bg-white rounded-md bg-gray-800 shadow-lg">
            <div className="md:flex px-4 leading-none max-w-4xl">
              <div className="flex-none ">
                <Image
                  src={data && data.length > 0 && data[0].details.backgroundImage.url}
                  alt="pic"
                  height={200}
                  width={200}
                  className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                />
              </div>
              <div className="flex-col text-gray-300">
                <p className="pt-4 text-2xl font-bold">{`${data && data.length > 0 && data[0].details.title} (${data && data.length > 0 && data[0].details.releaseYear})`}</p>
                <hr className="hr-text" data-content />
                <div className="text-md flex justify-between px-4 my-2">
                  <span className="font-bold">
                    {`2h 2min | ${data && data.length > 0 && data[0].details.tags.length > 0 && data[0].details.tags[0].name}`}
                  </span>
                  <span className="font-bold" />
                </div>
                <p className="hidden md:block px-4 my-4 text-sm text-left">
                  {data && data.length > 0 && data[0].details.synopsis}
                </p>
                <p className="flex text-md px-4 my-2">
                  Rating: 9.0/10
                  <span className="font-bold px-2">|</span>
                  Mood: Dark
                </p>
                <div className="text-xs">
                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    TRAILER
                  </button>
                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    IMDB
                  </button>
                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    AMAZON
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

// "use client"

// import Loading from "@/app/loading";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const MovieDetails = async ({ params }) => {
//   const movieId = params.id;
//   const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${movieId}&lang=en`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "2e589b9a00mshedca1d49bc6f99dp135491jsn31797cad3cb2",
//       "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
//     },
//   };

//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${url}`, options);
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
// console.log('data :>> ', data);
//   const { title, releaseYear, tags, synopsis, backgroundImage } =
//   data&&data.length > 0 && data[0].details;
//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <div className="min-h-screen grid place-items-center font-mono bg-gray-900">
//           <div className="bg-white rounded-md bg-gray-800 shadow-lg">
//             <div className="md:flex px-4 leading-none max-w-4xl">
//               <div className="flex-none ">
//                 <Image
//                   src={backgroundImage.url}
//                   alt="pic"
//                   height={200}
//                   width={200}
//                   className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//                 />
//               </div>
//               <div className="flex-col text-gray-300">
//                 <p className="pt-4 text-2xl font-bold">{`${title} (${releaseYear})`}</p>
//                 <hr className="hr-text" data-content />
//                 <div className="text-md flex justify-between px-4 my-2">
//                   <span className="font-bold">
//                     {`2h 2min | ${tags.length > 0 && tags[0].name}`}
//                   </span>
//                   <span className="font-bold" />
//                 </div>
//                 <p className="hidden md:block px-4 my-4 text-sm text-left">
//                   {synopsis}
//                 </p>
//                 <p className="flex text-md px-4 my-2">
//                   Rating: 9.0/10
//                   <span className="font-bold px-2">|</span>
//                   Mood: Dark
//                 </p>
//                 <div className="text-xs">
//                   <button
//                     type="button"
//                     className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
//                   >
//                     TRAILER
//                   </button>
//                   <button
//                     type="button"
//                     className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
//                   >
//                     IMDB
//                   </button>
//                   <button
//                     type="button"
//                     className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
//                   >
//                     AMAZON
//                   </button>
//                 </div>
//                 {/*             <p>ICON BTNS</p> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MovieDetails;
