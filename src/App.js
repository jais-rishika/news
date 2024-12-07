import React from 'react';
import articles from './Api/data';
import Card from './Componennt/Card';
import next3 from './images/next3.png';
import prev3 from './images/prev3.png';

export default function App() {
  const[isMobile,setIsMobile]= React.useState(3)
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const sizes=window.innerWidth;
  let touchStartX = 0;
  let touchEndX = 0;
  let n=articles.length;
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
      const sizes=window.innerWidth;
      if(sizes>1380){
        setIsMobile(3)
      }
      else if(sizes>960){
        setIsMobile(2)
      }
      else{
        setIsMobile(1)
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const leftHandle = () => {
    setCurrentIndex((currentIndex - 1 + n) % n);    
  };

  const rightHandle = () => {
    setCurrentIndex((currentIndex + 1) % n);  
  };
  
  return (
    
    <div className='bg-base h-screen'>
    <h1 className="text-4xl text-center font-bold line-clamp-2 text-base2 py-5"><u/>NewsForAll<u/></h1>
    <div 
      className='bg-base items-center flex flex-row flex-wrap py-4 px-4  overflow-x-hidden justify-center'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
    {currentIndex>0 && (<button className="text-white " onClick={leftHandle} > <img src={prev3}/> </button>)}
    {articles.slice(currentIndex,currentIndex+isMobile).map((item,idx) => {
          return (
              <div className='min-w-max h-128' key={idx}>
                <Card 
                  title={item.title} 
                  date={item.publishedAt.slice(0,10)} 
                  time={item.publishedAt.slice(12,16)}
                  url={item.url} 
                  image={item.urlToImage} 
                  content={item.content}
                  source={item.source.name}
                  author={item.author}
                />
              </div>
        )})
    }
    {currentIndex + isMobile<n && (<button className="text-white" onClick={rightHandle} > <img src={next3}/> </button>)}
    </div>
    </div>  
  )
}
             {/* isMobile>1?(
        articles.slice(currentIndex,currentIndex+isMobile).map((item,idx) => {
          return (
              <div className='min-w-max h-128' key={idx}>
                <Card 
                  title={item.title} 
                  date={item.publishedAt.slice(0,10)} 
                  time={item.publishedAt.slice(12,16)}
                  url={item.url} 
                  image={item.urlToImage} 
                  content={item.content}
                  source={item.source.name}
                  author={item.author}
                />
              </div>
        )})
        ):(
          <div>
            <Card key={currentIndex} 
                title={articles[currentIndex].title} 
                date={articles[currentIndex].publishedAt.slice(0,10)} 
                time={articles[currentIndex].publishedAt.slice(12,16)}
                url={articles[currentIndex].url} 
                image={articles[currentIndex].urlToImage} 
                content={articles[currentIndex].content}
                source={articles[currentIndex].source.name}
                author={articles[currentIndex].author}
            />
          </div>
          ) */}