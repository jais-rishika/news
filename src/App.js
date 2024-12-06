import React from 'react';
import articles from './Api/data';
import Card from './Componennt/Card';
export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      console.log("hello1")
      touchStartX = e.touches[0].clientX; // Get the X position of the first finger
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2){
      console.log("hello2")
      touchEndX = e.touches[0].clientX;
    }

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
  return (
    <div 
      className='bg-black flex flex-row py-4 px-4 md:flex-row w-screen h-screen overflow-x-hidden px-50 '
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
        {/* {articles.map((item,idx) => {
          return ( */}
            <Card 
              key={currentIndex} 
              title={articles[currentIndex].title} 
              date={articles[currentIndex].publishedAt.slice(0,10)} 
              time={articles[currentIndex].publishedAt.slice(12,16)}
              url={articles[currentIndex].url} 
              image={articles[currentIndex].urlToImage} 
              description={articles[currentIndex].description}
              content={articles[currentIndex].content}
              source={articles[currentIndex].source.name}
              author={articles[currentIndex].author}
            />
        {/* )})} */}
    </div>
       
  )
}