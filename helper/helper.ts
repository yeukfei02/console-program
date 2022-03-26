import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./data");

export const getFormattedArgs = (args: string[], action: string) => {
  let formattedArgs = [];

  if (args && action.toUpperCase() != "B") {
    formattedArgs = args.map((arg: any, i) => {
      if (arg && i > 0) {
        arg = parseInt(arg, 10);
      }
      return arg;
    });
  } else {
    formattedArgs = args.map((arg: any, i) => {
      if (arg && i >= 1 && i <= 2) {
        arg = parseInt(arg, 10);
      }
      return arg;
    });
  }

  return formattedArgs;
};

export const setData = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getData = (key: string) => {
  const data = localStorage.getItem(key);
  return data;
};

export const clearData = () => {
  localStorage.clear();
};
