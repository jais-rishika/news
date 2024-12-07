import React from 'react';

export default function Displap() {
  const[isMobile,setIsMobile]= React.useState(3);
  const sizes=window.innerWidth;
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
  
  return (
    <div>Displap</div>
  )
}
