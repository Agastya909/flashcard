const Card = (props) => {
  const { notetitle, notedata, notecolor } = props;
  return (
    <div className="w-96 border-solid border-2 rounded-md  text-white bg-gray-700 text-justify">
      <h1 className="font-bold font-heading text-2xl bg-teal-500 p-1">
        {notetitle}
      </h1>
      <div className="p-2 font-noteFont">{notedata}</div>
    </div>
  );
};

export default Card;
