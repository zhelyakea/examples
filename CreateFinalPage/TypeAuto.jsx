import React from "react";
import PropTypes from "prop-types";
import { pure } from "recompose";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

import Type1 from "../SelectTypeAuto/typeauto/11_n.svg";
import Type2 from "../SelectTypeAuto/typeauto/12_n.svg";
import Type3 from "../SelectTypeAuto/typeauto/13_n.svg";
import Type4 from "../SelectTypeAuto/typeauto/14_n.svg";

const typeAutoSvg = { 1: Type1, 2: Type2, 3: Type3, 4: Type4 };

export function TypeAuto({ typeAuto, changePlace }) {
  const TypeAuto = typeAuto ? typeAutoSvg[typeAuto] : null;
  return !typeAuto ? (
    <button
      onClick={() => changePlace("/selecttypeauto")}
      className={b("button", { toservices: true, green: true })()}
    >
      Выбрать тип авто
    </button>
  ) : (
    <TypeAuto
      onClick={() => changePlace("/selecttypeauto")}
      className={b("button", { typeauto: true, selected: true })()}
    />
  );
}
TypeAuto.propTypes = {
  typeAuto: PropTypes.number,
  changePlace: PropTypes.func.isRequired
};
export default pure(TypeAuto);
