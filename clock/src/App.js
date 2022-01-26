import React, {useEffect, useState } from 'react';

export default function Clock() {
  const [hora, setHora] = useState(5);
  const [minuto, setMinuto] = useState(10);
  const [segundo, setSegundo] = useState(0);

  useEffect(() => {
    const interval = setInterval(()=>{
      setSegundo(segundo + 1)
      if(segundo == 59){
        setMinuto(minuto + 1)
        setSegundo(0)
      }else if(minuto == 59){
        setMinuto(0);
        setHora(hora+1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className='Clockk'>
      <h1>{hora}:{minuto}:{segundo}</h1>
    </div>
  );
}