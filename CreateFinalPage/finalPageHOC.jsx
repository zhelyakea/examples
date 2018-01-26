import React from "react";
import { connect } from "react-redux";
import history from "services/history";
import { compose, lifecycle, withState, withHandlers } from "recompose";
import { changePlace, getEditOrder } from "actions";
import { setPayCart } from "reducers/payed";
import { getSelectedServices, getSelectedPayType } from "reducers";

const mapState = ({
  boxes: { selected: selectedBox },
  washers: { selected, list },
  services,
  prices: { summ, sale },
  typeAuto,
  selected_order,
  selectedAction,
  numAuto,
  pay_types,
  phoneNum,
  clientType,
  payed
}) => ({
  selectedBox,
  selectedWasher: list[selected],
  selectedServices: getSelectedServices(services),
  summ,
  sale,
  typeAuto,
  selected_order,
  selectedAction,
  numAuto,
  payType: getSelectedPayType(pay_types),
  clientType,
  phoneNum,
  payed
});
const mapDispatch = {
  changePlace,
  getEditOrder,
  setPayCart
};

const finalPageHOC = FinalPage =>
  compose(
    connect(mapState, mapDispatch),
    withState("orderType", "setOrderType", null),
    withHandlers({
      changeOrderType: ({ orderType, setOrderType }) => type => {
        setOrderType(orderType => type);
      }
    }),
    lifecycle({
      componentWillMount() {
        const {
          numAuto,
          selected_order,
          selectedAction,
          getEditOrder,
          changeOrderType
        } = this.props;

        if (selectedAction !== "3" && !numAuto.length) history.push("/");
        else if (selectedAction === "3") {
          getEditOrder(`getorderedit=${selected_order}&`);
          changeOrderType("edit");
        }
      }
    })
  )(props => <FinalPage {...props} />);

export default finalPageHOC;
