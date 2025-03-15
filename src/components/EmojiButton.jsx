import { decodeEntity } from "html-entities";
import React from "react";

export const EmojiButton = ({ emoji, handleClick, selectedCardEntry, matchedCardEntry, index }) => {
  const btnContent = selectedCardEntry || matchedCardEntry ? decodeEntity(emoji.htmlCode[0]) : "?";
  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
    ? "btn--emoji__back--selected"
    : "btn--emoji__front";
    const btnArea = matchedCardEntry
    ? `${emoji.name}. Matched`
    : selectedCardEntry
    ? `${emoji.name}. Not matched yet`
    : "Card upside down";

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? null : handleClick}
      disabled={matchedCardEntry}
      aria-label={`Position: ${index + 1}. ${btnArea}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
};
