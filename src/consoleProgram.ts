import BaseClass from "./baseClass";
import { getData, clearData } from "../helper/helper";

class ConsoleProgram extends BaseClass {
  private dataList: any[] = [];

  createCanvas() {
    // setup dataList
    for (let y = 0; y < this.height + 2; y++) {
      const yList = [];

      // first row and last row
      if (y === 0 || y === this.height + 2 - 1) {
        for (let x = 0; x < this.width + 2; x++) {
          const data = {
            x: x + 1,
            y: y + 1,
            value: "-",
          };
          yList.push(data);
        }
      }
      // other rows
      else {
        for (let x = 0; x < this.width + 2; x++) {
          // first item and last item
          if (x === 0 || x === this.width + 2 - 1) {
            const data = {
              x: x + 1,
              y: y + 1,
              value: "|",
            };
            yList.push(data);
          }
          // other items
          else {
            const data = {
              x: x + 1,
              y: y + 1,
              value: " ",
            };
            yList.push(data);
          }
        }
      }

      this.dataList.push(yList);
    }

    // store dataList
    this.storeDataList(this.dataList);

    // retrieve dataList
    this.retrieveDataList();
  }

  drawLine(x1: number, y1: number, x2: number, y2: number) {
    // retrieve previous dataList
    const dataListStr = getData("dataList");
    if (dataListStr) {
      const dataList = JSON.parse(dataListStr);

      if (dataList) {
        // setup dataList
        const newDataList = dataList.map((data: any, i: number) => {
          let rows = [];

          if (i === y1 || i === y2) {
            rows = data.map((data: any) => {
              if (
                (data.x === x1 + 1 && data.y === y1 + 1) ||
                (data.x === x2 + 1 && data.y === y2 + 1) ||
                (data.x > x1 + 1 && data.x < x2 + 1) ||
                (data.y > y1 + 1 && data.y < y2 + 1)
              ) {
                data.value = "x";
              } else if (
                (data.x > 1 && data.x <= x1 + 1) ||
                (data.x > 1 && data.x <= x2 + 1)
              ) {
                data.cannotFill = true;
              }
              return data;
            });
          } else {
            rows = data.map((data: any) => {
              return data;
            });
          }

          const result = rows;
          return result;
        });
        // console.log("newDataList = ", newDataList);

        // store dataList
        this.storeDataList(newDataList);

        // retrieve dataList
        this.retrieveDataList();
      }
    }
  }

  drawRectangle(x1: number, y1: number, x2: number, y2: number) {
    // retrieve previous dataList
    const dataListStr = getData("dataList");
    if (dataListStr) {
      const dataList = JSON.parse(dataListStr);

      if (dataList) {
        // setup dataList
        const newDataList = dataList.map((data: any, i: number) => {
          let rows = [];

          if (i >= y1 && i <= y2) {
            if (i != y2 - y1) {
              rows = data.map((data: any) => {
                if (data.x >= x1 + 1 && data.x <= x2 + 1) {
                  data.value = "x";
                }
                return data;
              });
            } else {
              rows = data.map((data: any) => {
                if (data.x === x1 + 1 || data.x === x2 + 1) {
                  data.value = "x";
                } else if (data.x > x1 + 1 && data.x < x2 + 1) {
                  data.cannotFill = true;
                }
                return data;
              });
            }
          } else {
            rows = data.map((data: any) => {
              return data;
            });
          }

          const result = rows;
          return result;
        });
        // console.log("newDataList = ", newDataList);

        // store dataList
        this.storeDataList(newDataList);

        // retrieve dataList
        this.retrieveDataList();
      }
    }
  }

  fill(x: number, y: number, c: string) {
    // retrieve previous dataList
    const dataListStr = getData("dataList");
    if (dataListStr) {
      const dataList = JSON.parse(dataListStr);

      if (dataList) {
        // setup dataList
        const newDataList = dataList.map((data: any, i: number) => {
          let rows = [];

          if (i > 0 && i <= y + 1) {
            rows = data.map((data: any) => {
              if (
                (data.x > 1 && data.x <= x + 1) ||
                (data.x > x + 1 && data.x <= this.width + 1)
              ) {
                if (data.value === " " && !data.cannotFill) {
                  data.value = c;
                }
              }
              return data;
            });
          } else {
            rows = data.map((data: any) => {
              return data;
            });
          }

          const result = rows;
          return result;
        });
        // console.log("newDataList = ", newDataList);

        // store dataList
        this.storeDataList(newDataList);

        // retrieve dataList
        this.retrieveDataList();
      }
    }
  }

  quit() {
    console.log("quitting...");

    clearData();
    process.exit();
  }
}

export default ConsoleProgram;
