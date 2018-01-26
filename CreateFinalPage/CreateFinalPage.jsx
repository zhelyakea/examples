import React from "react";
import PropTypes from "prop-types";

import Navigate from "../Navigate";
import Prices from "../Prices";
import Header from "../Header";
import Container from "../Container";
import finalPageHOC from "./finalPageHOC";

import Service from "./Service";
import TypeAuto from "./TypeAuto";
import OrderElement from "./OrderElement";

import StretchContainer from "../StretchContainer";

import { obj } from "./obj";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

export function CreateFinalPage({
  selectedBox,
  selectedWasher,
  selectedServices,
  changePlace,
  summ,
  sale,
  typeAuto,
  numAuto,
  selectedAction,
  clientType,
  payType = "fiz",
  phoneNum,
  setPayCart,
  payed,
  orderType
}) {
  return (
    <Container>
      <Header
        text={
          orderType === "edit"
            ? `Редактирование заказа ${numAuto}.`
            : "Пожтверждение заказа."
        }
      />
      <div className={b("services-wrapper")()}>
        <OrderElement {...obj.numAuto(numAuto)} {...{ changePlace }} />
        <OrderElement {...obj.phoneNum(phoneNum)} {...{ changePlace }} />
        {clientType === "org" ? (
          <OrderElement {...obj.payType(payType)} {...{ changePlace }} />
        ) : null}
        <TypeAuto {...{ typeAuto, changePlace }} />
        <OrderElement {...obj.box(selectedBox)} {...{ changePlace }} />
        <OrderElement {...obj.washer(selectedWasher)} {...{ changePlace }} />
      </div>
      <StretchContainer>
        <div className={b("services-wrapper")()}>
          {!selectedServices.length ? (
            <button
              onClick={() => changePlace("/selectservices")}
              className={b("button", { toservices: true, green: true })()}
            >
              Выбрать услуги
            </button>
          ) : (
            selectedServices.map(item => (
              <Service key={item.id} {...item} {...{ changePlace, typeAuto }} />
            ))
          )}
        </div>
      </StretchContainer>
      {payType.id === "fiz" && (
        <button
          onClick={() => setPayCart(!payed)}
          className={b("button", {
            pay: true,
            green: !payed,
            selected: payed
          })()}
        >
          Оплата безнал
        </button>
      )}
      <Navigate>
        <Prices {...{ summ, sale }} />
      </Navigate>
    </Container>
  );
}
CreateFinalPage.propTypes = {
  numAuto: PropTypes.string,
  selectedAction: PropTypes.string,
  clientType: PropTypes.string,
  phoneNum: PropTypes.string,
  payed: PropTypes.string,
  orderType: PropTypes.string,
  selectedWasher: PropTypes.string,

  typeAuto: PropTypes.number,
  selectedBox: PropTypes.number,
  summ: PropTypes.number,
  sale: PropTypes.number,

  payType: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.bool
  }),
  selectedServices: PropTypes.arrayOf(
    PropTypes.shape({
      groupPercent: PropTypes.number,
      id: PropTypes.number,
      max: PropTypes.number,
      multiple: PropTypes.bool,
      name: PropTypes.string,
      orgPrice: PropTypes.array,
      percent: PropTypes.number,
      price: PropTypes.array,
      quantity: PropTypes.number
    })
  ),

  setPayCart: PropTypes.func.isRequired,
  changePlace: PropTypes.func.isRequired
};
export default finalPageHOC(CreateFinalPage);
