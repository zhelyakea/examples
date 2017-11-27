import React from "react";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

import Type1 from "../SelectTypeAuto/typeauto/11_n.svg";
import Type2 from "../SelectTypeAuto/typeauto/12_n.svg";
import Type3 from "../SelectTypeAuto/typeauto/13_n.svg";
import Type4 from "../SelectTypeAuto/typeauto/14_n.svg";

const typeAutoSvg = { 1: Type1, 2: Type2, 3: Type3, 4: Type4 };

export default function RenderTypeAuto({ typeAuto, change_place }) {
  const TypeAuto = typeAuto ? typeAutoSvg[typeAuto] : null;
  return !typeAuto ? (
    <button
      onClick={() => change_place("/selecttypeauto")}
      className={b("button", { toservices: true, green: true })}
    >
      Выбрать тип авто
    </button>
  ) : (
    <TypeAuto
      onClick={() => change_place("/selecttypeauto")}
      className={b("button", { typeauto: true, selected: true })}
    />
  );
}
