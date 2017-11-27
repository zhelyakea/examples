import React from "react";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

export default function RenderService({ item, change_place, typeAuto }) {
  const quantity = !!item.quantity ? ` x${item.quantity}` : "";
  const cost = item.quantity * item.price[typeAuto - 1];
  return (
    <div
      key={item.id}
      id={item.id}
      className={b("button", { service: true, selected: true })}
      onClick={() => change_place("/selectservices")}
    >
      <span>{item.name}</span>
      {item.multiple ? (
        <span className={b("service-cost")}>
          x{item.quantity} {cost} р.
        </span>
      ) : (
        <span className={b("service-cost")}>{cost} р.</span>
      )}
    </div>
  );
}
