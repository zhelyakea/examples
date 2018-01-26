import React from "react";
import PropTypes from "prop-types";
import { pure } from "recompose";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

export function OrderElement({
  type,
  to,
  emptyText,
  text,
  classname,
  changePlace
}) {
  return (
    <button
      onClick={() => changePlace(to)}
      className={b("button", {
        [classname]: !!type,
        toservices: !type,
        green: !type,
        selected: !!type
      })()}
    >
      {!type ? emptyText : text}
    </button>
  );
}
OrderElement.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  emptyText: PropTypes.string,
  text: PropTypes.string,
  classname: PropTypes.string,
  changePlace: PropTypes.func.isRequired
};
export default pure(OrderElement);
