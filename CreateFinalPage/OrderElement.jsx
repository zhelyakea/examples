import React from "react";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

export default function OrderElement({ obj, change_place }) {
  const { type, to, emptyText, text, classname } = obj;
  return (
    <button
      onClick={() => change_place(to)}
      className={b("button", {
        [classname]: !!type,
        toservices: !type,
        green: !type,
        selected: !!type
      })}
    >
      {!type ? emptyText : text}
    </button>
  );
}
