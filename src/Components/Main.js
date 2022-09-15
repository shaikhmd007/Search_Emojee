import emojiList from "../emojiList";
import { useState, useEffect } from "react";
import EmojiContainer from "./EmmojiContainer";

const Main = () => {
  const [list, setlist] = useState(emojiList);
  const [keyword, setkeyWord] = useState("");

  const typed = (e) => {
    const value = e.target.value.toLowerCase();
    setkeyWord(value);
  };

  useEffect(
    (_) => {
      const filterList = emojiList.filter((singleEmojee) => {
        if (singleEmojee.emoji === keyword) {
          return true;
        }
        if (singleEmojee.description.startsWith(keyword)) {
          return true;
        }
        if (singleEmojee.category.startsWith(keyword)) {
          return true;
        }
        if (singleEmojee.aliases.some((e) => e.startsWith(keyword))) {
          return true;
        }
        return false;
      });

      setlist(filterList);
    },
    [keyword]
  );
  return (
    <main>
      <div>
        <input
          type="text"
          className="search"
          placeholder="🔍 Search Emojees..."
          onKeyUp={typed}
        />
        {keyword === "" ? false : <p className="found"> Results -{keyword}</p>}
      </div>
      <hr />
      {list.length === 0 ? (
        <span className="not_found"> ☹️No Emojees Found!!</span>
      ) : (
        <EmojiContainer list={list} />
      )}
    </main>
  );
};
export default Main;
