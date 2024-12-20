import React from 'react';

export default function Card({ ...data }) {
  return (
    <div
      key={data.key}
      className={'flex flex-col items-center max-w-96 h-128 md:h-128 bg-base2 mx-2 my-3 rounded-md p-3 shadow-lg shadow-gray-500 md:transition-transform md:transform md:hover:scale-110'}
    >
      <h1 className="text-l text-center font-bold line-clamp-2 text-text1">{data.title}</h1>
      <img
        src={data.image}
        className="rounded-md border-2 border-base mx-2 my-4 p-1 h-36 w-60 object-cover shadow-lg text-text1"
        alt={data.title}
      />
      <p className="rounded-md border-2 border-base p-2 px-2 h-28 w-80 line-clamp-4 overflow-hidden text-text1">
        {data.content?data.content:data.title}
      </p>
      <button className="rounded-lg bg-base px-2 py-1 mt-2 transition-transform transform hover:scale-105">
        <a href={data.url} target="_blank">
          Read More
        </a>
      </button>
      <div className="flex flex-col sm:flex-row justify-between w-full mt-4">
        <div className="w-1/2 flex flex-col items-start">
          <span className="text-sm text-text1 sm:line-clamp-1">{data.source}</span>
          <span className="text-sm text-text1 sm:line-clamp-1">{data.author}</span>
        </div>
        <div className="w-1/2 flex flex-col sm:items-end">
          <span className="text-sm text-text1">{data.date}</span>
          <span className="text-sm text-text1">{data.time}</span>
        </div>
      </div>
    </div>
  );
}