// import React from 'react'
// export default function Card({...data}) {
//   return (
//     // ${data.isCenter ? 'scale-110' : ''}
//     <div key={data.key} className={`flex flex-col bg-gradient-to-b from-slate-300 to-slate-200 h-3/4 md:min-w-fit mr-10 px-5 rounded-md p-4 shadow-lg shadow-gray-500`}>
//         <h1 className='text-2xl text-center font-bold'>{data.title}</h1>
//         <div className='flex flex-row mt-11'>
//           <div>
//             <img src={data.image} className='rounded-md border-2 border-blue-50 mx-2 my-4 p-0 h-80 max-w-96 shadow-lg' alt={data.title}/>
//           </div>
//           <div className='flex flex-col justify-between'>
//             <p className='rounded-md border-2 border-blue-50 py-2 px-2 mt-4'>{data.description}</p>
//             <button className='rounded-lg bg-blue-500 px-2 py-1 mt-2 w-36 hover:scale-105'><a href={data.url}>Read More</a></button>
//             <div className='w-full flex flex-col items-end'>
//               <span>{data.source}</span>
//               <span>{data.author}</span>
//               <span >{data.date}</span>
//               <span >{data.time}</span>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// import React from 'react'
// export default function Card({...data}) {
//   return (
//     // ${data.isCenter ? 'scale-110' : ''}
//     <div key={data.key} className={`flex flex-col items-center max-w-96 h-fit md:h-128 bg-gradient-to-b from-slate-300 to-slate-200 mr-14 mb-10 rounded-md p-4 shadow-lg shadow-gray-500 md:hover:scale-110`}>
//         <h1 className='text-2xl text-center font-bold'>{data.title}</h1>
//         <img src={data.image} className='rounded-md border-2 border-blue-50 mx-2 my-4 p-0 h-36 w-60 object-cover shadow-lg' alt={data.title}/>
//         <p className='rounded-md border-2 border-blue-50 p-1 px-2 line-clamp-4 '>{data.content}</p>
//         <button className='rounded-lg bg-blue-500 px-2 py-1 mt-2 transition-transform transform hover:scale-105'><a href={data.url }>Read More</a></button>
//         <div className='flex flex-row'>
//           <div className='w-full flex flex-col items-start'>
//                 <span>{data.source}</span>
//                 <span>{data.author}</span>
//           </div>
//           <div className='w-full flex flex-col items-end'>
//                 <span >{data.date}</span>
//                 <span >{data.time}</span>
//           </div>
//         </div>
//     </div>
//   )
// }

import React from 'react';

export default function Card({ ...data }) {
  return (
    <div
      key={data.key}
      className={'flex flex-col items-center max-w-96 h-128 md:h-128 bg-gradient-to-b bg-base2 mx-2 my-3 rounded-md p-3 shadow-lg shadow-gray-500 md:hover:scale-110'}
    >
      <h1 className="text-l text-center font-bold line-clamp-2 text-text1">{data.title}</h1>
      <img
        src={data.image}
        className="rounded-md border-2 border-base mx-2 my-4 p-1 h-36 w-60 object-cover shadow-lg text-text1"
        alt={data.title}
      />
      <p className="rounded-md border-2 border-base p-1 px-2 line-clamp-4 text-text1">
        {data.content}
      </p>
      <button className="rounded-lg bg-base px-2 py-1 mt-2 transition-transform transform hover:scale-105">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
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