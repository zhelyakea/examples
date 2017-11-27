export const obj = {
  numAuto: num_auto => ({
    type: num_auto,
    to: "/neworder",
    emptyText: "Номер авто",
    text: num_auto,
    classname: "num"
  }),
  phoneNum: phoneNum => ({
    type: phoneNum,
    to: "/phonenumber",
    emptyText: "Телефон",
    text: phoneNum,
    classname: "num"
  }),
  payType: payType => ({
    type: payType,
    to: "/selecttypepay",
    emptyText: "Тип оплаты",
    text: payType.name,
    classname: "num"
  }),
  box: selectedBox => ({
    type: selectedBox,
    to: "/selectboxes",
    emptyText: "Выбрать бокс",
    text: `Бокс ${selectedBox}`,
    classname: "num"
  }),
  washer: selectedWasher => ({
    type: selectedWasher,
    to: "/selectwashers",
    emptyText: "Выбрать мойщика",
    text: selectedWasher,
    classname: "washer"
  })
};
