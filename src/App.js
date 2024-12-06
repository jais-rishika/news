import React from 'react';
import articles from './Api/data';
import Card from './Componennt/Card';
export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.targetTouches[0].clientX;
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
      className='bg-black items-center flex flex-col py-4 px-4 md:flex-row  h-screen md:overflow-x-auto scrollbar-hidden scrollbar-hidden-vertical'
      
    >
        {articles.map((item,idx) => {
          return (
          <div className='inline-block min-w-max '>
            <Card key={idx}  title={item.title} date={item.publishedAt.slice(0,10)} url={item.url} image={item.urlToImage} content={item.content}/>
          </div>
        )})}
        {/* <Card/>
        <Card/> */}
    </div>
       
  )
}