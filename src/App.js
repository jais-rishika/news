import React from 'react';
import articles from './Api/data';
import Card from './Componennt/Card';
export default function App() {
  const[isMobile,setIsMobile]= React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
      console.log("hello1")
      touchStartX = e.touches[0].clientX; // Get the X position of the first finger
  };

  const handleTouchMove = (e) => {
      console.log("hello2")
      touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {

    if (touchStartX - touchEndX > 50) {
      // Swipe Left
      if (currentIndex < articles.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    if (touchStartX - touchEndX < -50) {
      // Swipe Right
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const leftHandle = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const rightHandle = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div 
      className='bg-black items-center flex flex-row flex-wrap py-4 px-4 h-screen overflow-x-hidden justify-center'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="leftBtn text-white mr-10" onClick={leftHandle} > prev </button>
      
    {
      isMobile===false?(
        articles.slice(currentIndex,currentIndex+3).map((item,idx) => {
          return (
          <div className='inline-block min-w-max h-128'>
            <Card 
              key={idx}  
              title={item.title} 
              date={item.publishedAt.slice(0,10)} 
              time={articles[currentIndex].publishedAt.slice(12,16)}
              url={item.url} 
              image={item.urlToImage} 
              content={item.content}
              source={articles[currentIndex].source.name}
              author={articles[currentIndex].author}

              />
          </div>
        )})
        ):(
          <Card key={currentIndex} 
               title={articles[currentIndex].title} 
               date={articles[currentIndex].publishedAt.slice(0,10)} 
               time={articles[currentIndex].publishedAt.slice(12,16)}
               url={articles[currentIndex].url} 
               image={articles[currentIndex].urlToImage} 
               content={articles[currentIndex].content}
               source={articles[currentIndex].source.name}
               author={articles[currentIndex].author}/>
          )
    }
    <button className="rightBtn text-white" onClick={rightHandle} > next </button>
    </div>
       
  )
}
             