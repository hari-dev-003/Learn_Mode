

function Card({title,description}){ 
  return (
     <>
      <div className="text-center max-w-md bg-gray-200 text-black p-4 m-4 rounded-lg shadow-lg">
        <h2 className="text-xl m-4 mt-2 mb-2">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </>
  );
}

export default Card;
