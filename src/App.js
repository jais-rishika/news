import React from 'react';
import Card from './Componennt/Card';
import useApiWork from './Componennt/useApiWork';
import DoubleRing from './images/DoubleRing.gif';
import error123 from './images/error123.png';
import next3 from './images/next3.png';
import prev3 from './images/prev3.png';
export default function App() {
  const {articles, loading,error}=useApiWork();
  const[isMobile,setIsMobile]= React.useState(3)
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  let touchStartX = 0;
  let touchEndX = 0;
  let n=articles?articles.length:0;
  
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX; // Get the X position of the first finger
  };
  
  const handleTouchMove = (e) => {
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
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  if (loading) {
    return <div className='flex items-center w-screen h-screen justify-center'><img src={DoubleRing}/></div>;
  }

  if (error || n===0) {
    return <div className='flex justify-center bg-base'> <img className="h-screen w-128 p-2" src={error123}/> </div>;
  }
  const leftHandle = () => {
    setCurrentIndex((currentIndex - 1 + n)%n);    
  };
  
  const rightHandle = () => {
    setCurrentIndex((currentIndex + 1)%n);  
  };
  
  articles.filter((item => item.content))
  
  return (
    <div className='bg-base h-screen'>
    <h1 className="text-4xl text-center font-bold line-clamp-2 text-base2 py-5"><u/>NewsForAll<u/></h1>
    <div 
      className='bg-base items-center flex flex-row flex-wrap py-4 px-4  overflow-x-hidden justify-center'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
    {currentIndex>0 && (<button className="text-white " onClick={leftHandle} > <img className="w-8 h-8 sm:w-16 sm:h-16" src={prev3}/> </button>)}
    {articles.slice(currentIndex,currentIndex+isMobile).map((item,idx) => {
          return (
            <div className='min-w-max h-128' key={idx}>
            {console.log(item)}
              <Card 
                title={item.title} 
                date={item.publishedAt.slice(0,10)} 
                time={item.publishedAt.slice(12,16)}
                url={item.url} 
                image={item.urlToImage} 
                description={item.description}
                content={item.content}
                source={item.source.name}
                author={item.author}
              />
            </div>
        )})
    }
    {currentIndex + isMobile<n && (<button className="text-white" onClick={rightHandle} > <img className="w-8 h-8 sm:w-16 sm:h-16" src={next3}/> </button>)}
    </div>
    </div>  
  )
}