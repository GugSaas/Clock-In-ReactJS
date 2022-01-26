import React, {useEffect } from 'react';

export default function Clock() {
  const [hora, setHora] = setState(5);
  const [minuto, setMinuto] = setState(10);

  useEffect(() => {
    const interval = setInterval(()=>{
      setMinuto(minuto + 1)
      if(minuto == 60){
        setMinuto(0);
        setHora(hora+1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1>{hora}:{minuto}</h1>
      <hr></hr>
    </div>
  );
}