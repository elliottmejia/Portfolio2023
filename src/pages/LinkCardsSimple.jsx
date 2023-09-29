import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'material-symbols';
/* const routeObject = [
    { name: 'Homepage', link: '/', symbol: 'home' },
    { name: 'Customers', link: '/customers', symbol: 'sentiment_satisfied' },
    { name: 'Team', link: '/employees', symbol: 'atr' },
    { name: 'Dictionary', link: '/dictionary', symbol: 'dictionary' },
  ]; */

export default function LinkCards(props) {
  let routeConfig = props.routeConfig;
  const routeLength = routeConfig.length;
  const navigate = useNavigate();
  const handleBoxClick = (link) => {
    navigate(link);
  };
  //offset

  return (
    <div
      className='grid grid-cols-auto lg:grid-cols-4 sm:grid-cols-2 smd:grid-cols-3
                mx-auto
                place-items-center smd:place-items-start lg:place-items-center
                w-screen max-w-[95vw] sm:max-w-[80vw]
                gap-y-
                relative left'
    >
      {/* sm to 800, make cols-2
          ADD smd:800 to your tailwind.config.js file.
      */}
      {routeConfig &&
        routeConfig.map((box, index) => {
          const uniqueKey = uuidv4();

          let containerClasses = `
            route-box
            relative
            sm:h-48 h-80 aspect-[4/3]
            rounded-md
            my-2 sm:m-0
            p-3
            user-select-none
            smd:hover:-translate-x-8 transition ease-in-out duration-500
            bg-gradient-to-r  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] to-cyan-500 from-blue-600
          `;
          if (routeLength > 3 && index === routeLength - 1) {
            // All routeLengths pre
            containerClasses += ' ';
            // Specific routeLength
            switch (routeLength % 4) {
              case 0:
                console.log('INDEX', index);
                if (index < 7) {
                  containerClasses +=
                    'modulo-0 col-span-full sm:col-span-1 smd:col-span-full md:w-[78.6%] lg:col-span-1 lg:w-auto smd:hover:translate-x-8 lg:hover:-translate-x-8';
                } else {
                  containerClasses += `
                    end-case col-span-1 w-auto smd:col-span-2 md:w-[78.6%] lg:w-auto lg:col-span-1
                  `;
                }
                break;
              case 1:
                containerClasses +=
                  'modulo-1 col-span-1 sm:col-span-2 sm:w-[78.6%] lg:hover:translate-x-12 lg:col-span-full';
                break;
              case 2:
                containerClasses += 'modulo-2 col-span-1';
                break;
              case 3:
                containerClasses += `modulo-3 col-span-1 sm:col-span-full sm:w-[78.6%] sm:place-self-center sm:hover: smd:w-[78.6%]
                   smd:hover:translate-x-12 lg:hover:-translate-x-12 lg:col-span-1 lg:w-auto
                  `;
            }
            // All routeLengths post
            containerClasses += ' smd:place-self-start lg:place-self-center';
          }
          return (
            <div key={uniqueKey} className={containerClasses}>
              <div
                className='
              absolute
              flex flex-col justify-center items-center
            text-white'
              >
                <h2>{box.name}</h2>
                <div className='place-self-start'>
                  <span className='material-symbols-outlined text-xl'>
                    {box.symbol && box.symbol}
                  </span>
                </div>
              </div>
              <div className='absolute inset-0 pointer-events-none'></div>
              <div
                className='absolute inset-0 cursor-pointer'
                onClick={() => handleBoxClick(box.link)}
              ></div>
            </div>
          );
        })}
    </div>
  );
}
