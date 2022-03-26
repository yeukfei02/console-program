import { setData, getData } from "./../helper/helper";

class BaseClass {
  width = 0;
  height = 0;

  constructor(width?: number, height?: number) {
    this.width = width ? width : 20;
    this.height = height ? height : 4;
  }

  storeDataList(dataList: any[]) {
    if (dataList) {
      setData("dataList", JSON.stringify(dataList));
    }
  }

  retrieveDataList() {
    const dataListStr = getData("dataList");
    if (dataListStr) {
      const dataList = JSON.parse(dataListStr);
      // console.log("dataList = ", dataList);

      if (dataList) {
        const valueList = dataList.map((data: any) => {
          const rows = data.map((data: any) => {
            return data.value;
          });
          const result = rows.join("");
          return result;
        });

        if (valueList) {
          for (let index = 0; index < valueList.length; index++) {
            const item = valueList[index];
            console.log(item);
          }
        }
      }
    }
  }
}

export default BaseClass;
