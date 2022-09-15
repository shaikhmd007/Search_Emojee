import SingleEmoji from "./SingleEmoji";

const EmojiContainer = ({ list }) => {
  return (
    <div className="container">
      {list.map((singleEmojee, idx) => {
        // console.log(singleEmojee);
        return <SingleEmoji key={idx} singleEmojee={singleEmojee} />;
      })}
    </div>
  );
};

export default EmojiContainer;
