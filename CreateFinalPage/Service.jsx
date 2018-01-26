import React from "react";
import PropTypes from "prop-types";
import { pure } from "recompose";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

export function Service({
  name,
  quantity,
  multiple,
  price,
  changePlace,
  typeAuto
}) {
  const cost = quantity * price[typeAuto - 1];
  return (
    <div
      className={b("button", { service: true, selected: true })()}
      onClick={() => changePlace("/selectservices")}
    >
      <span>{name}</span>
      {multiple ? (
        <span className={b("service-cost")()}>
          x{quantity} {cost} р.
        </span>
      ) : (
        <span className={b("service-cost")()}>{cost} р.</span>
      )}
    </div>
  );
}
Service.propTypes = {
  multiple: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.array,
  quantity: PropTypes.number,
  typeAuto: PropTypes.number,
  changePlace: PropTypes.func.isRequired
};
export default pure(Service);
