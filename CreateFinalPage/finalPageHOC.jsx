import React, { Component } from "react";
import { connect } from "react-redux";
import { hashHistory } from "react-router";

import { change_place } from "actions/DataAction";
import { getEditOrder } from "actions/create/EditOrder";
import { setPayCart } from "actions/create/PayCart";

import { getSelectedServices, getSelectedPayType } from "reducers";

const mapStateToProps = ({
  boxes: { selected: selectedBox },
  washers: { selected, list },
  services,
  prices,
  typeAuto,
  selected_order,
  select_action,
  num_auto,
  pay_types,
  phoneNum,
  client_type,
  payed
}) => ({
  selectedBox,
  selectedWasher: list[selected],
  selectedServices: getSelectedServices(services),
  prices,
  typeAuto,
  selected_order,
  select_action,
  num_auto,
  payType: getSelectedPayType(pay_types),
  client_type,
  phoneNum,
  payed
});
const mapDispatchToProps = {
  change_place,
  getEditOrder,
  setPayCart
};
const finalPageHOC = WrapedComponent => {
  class AsyncComponent extends Component {
    state = {
      orderType: null
    };
    componentWillMount() {
      const {
        num_auto,
        selected_order,
        select_action,
        getEditOrder
      } = this.props;

      if (select_action !== "3" && !num_auto.length) hashHistory.push("/");
      else if (select_action === "3") {
        getEditOrder(`getorderedit=${selected_order}&`);
        this.setState({
          orderType: "edit"
        });
      }
    }
    render() {
      const { orderType } = this.state;
      const newProps = { orderType };
      return <WrapedComponent {...this.props} {...newProps} />;
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(AsyncComponent);
};
export default finalPageHOC;
