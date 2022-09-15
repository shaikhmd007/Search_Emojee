import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const SingleEmoji = ({ singleEmojee }) => {
  const [isCopied, setCopy] = useState(false);

  useEffect(
    (_) => {
      if (isCopied) {
        setTimeout((_) => {
          setCopy(false);
        }, 1000);
      }
    },
    [isCopied]
  );

  return (
    <CopyToClipboard text={singleEmojee.emoji} onCopy={(_) => setCopy(true)}>
      <div
        title="Click To Copy"
        className={`item ${isCopied ? "emojee_copied" : ""}`}
      >
        <p title="Click To Copy" className="emoji">
          {isCopied ? "✅" : singleEmojee.emoji}
        </p>
        <p title="Click To Copy">{singleEmojee.description}</p>
      </div>
    </CopyToClipboard>
  );
};

export default SingleEmoji;
