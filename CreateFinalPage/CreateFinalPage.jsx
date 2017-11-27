import React from "react";

import Navigate from "../Navigate";
import Prices from "../Prices";
import Header from "../Header";
import Container from "../Container";
import finalPageHOC from "./finalPageHOC";

import RenderService from "./RenderService";
import RenderTypeAuto from "./RenderTypeAuto";
import OrderElement from "./OrderElement";

import StretchContainer from "../StretchContainer";

import { boxesFetch, selectBox } from "actions/create/Boxes";
import { obj } from "./obj";

import block from "bem-cn";
const b = block("create-final-page");
import "./CreateFinalPage.scss";

export function CreateFinalPage({
  selectedBox,
  selectedWasher,
  selectedServices,
  deleteService,
  change_place,
  prices,
  typeAuto,
  num_auto,
  select_action,
  client_type,
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
            ? `Редактирование заказа ${num_auto}.`
            : "Пожтверждение заказа."
        }
      />
      <div className={b("services-wrapper")}>
        <OrderElement {...{ obj: obj.numAuto(num_auto), change_place }} />
        <OrderElement {...{ obj: obj.phoneNum(phoneNum), change_place }} />
        {client_type === "org" ? (
          <OrderElement {...{ obj: obj.payType(payType), change_place }} />
        ) : null}
        <RenderTypeAuto {...{ typeAuto, change_place }} />
        <OrderElement {...{ obj: obj.box(selectedBox), change_place }} />
        <OrderElement {...{ obj: obj.washer(selectedWasher), change_place }} />
      </div>
      <StretchContainer>
        <div className={b("services-wrapper")}>
          {!selectedServices.length ? (
            <button
              onClick={() => change_place("/selectservices")}
              className={b("button", { toservices: true, green: true })}
            >
              Выбрать услуги
            </button>
          ) : (
            selectedServices.map(item => (
              <RenderService
                key={item.id}
                {...{ item, change_place, typeAuto }}
              />
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
          })}
        >
          Оплата безнал
        </button>
      )}
      <Navigate>
        <Prices prices={prices} />
      </Navigate>
    </Container>
  );
}
export default finalPageHOC(CreateFinalPage);
