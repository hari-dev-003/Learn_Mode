

function Card({title,description}){ 
  //TODO: Add functionality to the card component 
  //TODO: Review the design and layout of the card component


  return (
     <>
      <div className="text-center max-w-md bg-gray-200 text-black p-4 m-4 rounded-lg shadow-lg">
        <h2 className="text-xl m-4 mt-2 mb-2">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"> 
           Learn More
        </button>
      </div>
    </>
  );

}

export default Card;
