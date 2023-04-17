import { controlData } from "./types";

export const allControls: controlData[] = [
  { label: "Share", value: 1200, iconName: "share", onPress: () => null },
  { label: "Love", value: 12000, iconName: "heart", onPress: () => null },
  { label: "Comments", value: 3000, iconName: "message-square", onPress: () => null },
  { label: "Menu", value: "Menu", iconName: "menu", onPress: () => null },
]

export function renderValue(val: string | number) {
  if (typeof val === "string")
  {
    return val;
  }


  const decimalPoints = 1;
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return val >= item.value;
  });
  return item ? (val / item.value).toFixed(decimalPoints).replace(rx, "$1") + item.symbol : "0";
}
