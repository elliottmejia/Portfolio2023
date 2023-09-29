import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'material-symbols';
/* const routeObject = [
    { name: 'Homepage', link: '/', symbol: 'home' },
    { name: 'Customers', link: '/customers', symbol: 'sentiment_satisfied' },
    { name: 'Team', link: '/employees', symbol: 'atr' },
    { name: 'Dictionary', link: '/dictionary', symbol: 'dictionary' },
  ]; */

export default function LinkCards(props) {
  //-------
  // nav
  //-------
  const routeConfig = props.routeConfig;
  const routeLength = routeConfig.length;

  //-------
  // Window sizing
  //-------
  const mediaColSizes = {
    // sizes based on actual media sizing rather than tailwind's mobile first sizing
    sm: 1,
    md: 3,
    lg: 4,
  };
  const colCrossovers = {
    md: 640,
    lg: 1024,
  };

  const [columnCount, setColumnCount] = useState(4);

  // when window resized, this useEffect is called
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < colCrossovers.md) {
        setColumnCount(mediaColSizes.sm);
      } else if (windowWidth < colCrossovers.lg) {
        setColumnCount(mediaColSizes.md);
      } else {
        setColumnCount(mediaColSizes.lg);
      }
      console.log(columnCount, windowWidth);
      const colRemainder = routeLength % columnCount != 0;
      if (colRemainder) {
        if (colRemainder === 1) {
        }
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //-------
  // navigation
  //-------
  const navigate = useNavigate();
  const handleBoxClick = (link) => {
    navigate(link);
  };

  //-------
  // render
  //-------
  let containerClasses = `
    mx-auto place-items-center
    max-w-[95vw] sm:max-w-[80vw]
    grid w-screen grid-cols-auto  gap-y-0
    card-gtarea
  `;
  //grid-cols-${columnCount}
  //md:grid-cols-4 sm:grid-cols-3
  return (
    <div className={containerClasses}>
      {routeConfig &&
        routeConfig.map((box, index) => {
          const uniqueKey = uuidv4();
          const boxContainerClasses = `
            route-box
            relative
            sm:h-48 h-80 rounded-md
            my-2 sm:m-0
            p-3 aspect-[4/3]
            user-select-none
            sm:hover:-translate-x-8 transition ease-in-out duration-500
            bg-gradient-to-r  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] to-cyan-500 from-blue-600
          `;
          const setId = `#link-box-${index}`;
          return (
            <div key={uniqueKey} id={setId} className={boxContainerClasses}>
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
