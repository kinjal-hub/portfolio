const RandomNumberComponent = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; 
  
  return (
    <div>
      <h3>Random Number:</h3>
      <p>{randomNumber}</p>
    </div>
  );
};

export default RandomNumberComponent;