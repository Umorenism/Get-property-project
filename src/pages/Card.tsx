import img from "../assets/house.png";

const Card = () => {
  const cards = [
    {
      img: img,
      title: "Beautiful Family House",
      text: "A beautiful house located in the suburbs with all the amenities you need.",
    },
  ];

  return (
    <div className="max-w-md m-2 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      {cards.map((item, index) => (
        <div key={index}>
          <div className="relative h-[200px]">
            <img
              src={item.img}
              alt="House"
              className="h-full p-2 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-between p-4">
              <button className="text-white px-3 py-1 rounded bg-black">
                Featured
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Button
              </button>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-lg font-bold text-black">{item.title}</h1>
            <p className="text-black">{item.text}</p>
          </div>
          <hr />
          <div className="flex p-2 gap-16">
            <div className="flex items-center gap-1">
              <p className="h-5 w-5 flex items-center justify-center rounded-full bg-slate-400">
                1
              </p>
              <h5>5</h5>
            </div>
            <div className="flex items-center gap-1">
              <p className="h-5 w-5 flex items-center justify-center rounded-full bg-slate-400">
                1
              </p>
              <h5>5</h5>
            </div>
            <div className="flex items-center gap-1">
              <p className="h-5 w-5 flex items-center justify-center rounded-full bg-slate-400">
                1
              </p>
              <h5>5</h5>
            </div>
          </div>
          <hr />
          <div className="p-2 flex justify-between items-center py-2">
            <h1>Sold</h1>
            <p>N500,000,000</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
