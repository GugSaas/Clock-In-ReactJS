import React, {useEffect, useState } from 'react';

export default function Clock() {
  const [hora, setHora] = useState(17);
  const [minuto, setMinuto] = useState(59);
  const [segundo, setSegundo] = useState(50);

  useEffect(() => {
    const interval = setInterval(()=>{
      setSegundo(segundo + 1)
      if(segundo == 59){
        setMinuto(minuto + 1)
        setSegundo(0)
      }else if(minuto == 60){
        setMinuto(0);
        setHora(hora+1);
        if(hora == 23){
          setHora(0);
          setMinuto(0);
          setSegundo(0);
        }
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