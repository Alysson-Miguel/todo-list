import React from 'react';
import { useQuery } from 'react-query';
const ChuckNorrisJokes = () => {
  const { data, isLoading, isError, refetch,  } = useQuery('chuck-norris-joke', async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) {
      throw new Error('Erro ao carregar a piada do Chuck Norris!');
    }
    const data = await response.json();
    return data;
  });

  const refetchData = () => {
    refetch();
  };

  
// Chama a função de refetch a cada 5 segundos
React.useEffect(() => {
  const intervalId = setInterval(refetchData, 5000);
  return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
      
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Ocorreu um erro!</div>;

  return (
    <div>
      <p style={{fontWeight:300 }}>"{data.value}"</p>
      <div>By Chuck Norris</div>
    </div>
  );
};

export default ChuckNorrisJokes;
