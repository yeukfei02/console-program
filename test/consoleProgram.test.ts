import ConsoleProgram from "../src/consoleProgram";
import { getData, clearData } from "../helper/helper";

describe("ConsoleProgram test", () => {
  let consoleProgram: ConsoleProgram;

  beforeEach(() => {
    consoleProgram = new ConsoleProgram(20, 4);
  });

  afterAll(() => {
    clearData();
  });

  describe("when create consoleProgram", () => {
    it("should create an instance", () => {
      expect(consoleProgram).toBeTruthy();
    });
  });

  describe("when create canvas", () => {
    beforeEach(() => {
      consoleProgram.createCanvas();
    });

    it("should create a canvas", () => {
      const dataListStr = getData("dataList");
      if (dataListStr) {
        const dataList = JSON.parse(dataListStr);
        // console.log("dataList = ", dataList);

        const firstRow = dataList[0].map((data: any) => {
          return data.value;
        });
        const secondRow = dataList[1].map((data: any) => {
          return data.value;
        });
        const thirdRow = dataList[2].map((data: any) => {
          return data.value;
        });
        const fourthRow = dataList[3].map((data: any) => {
          return data.value;
        });
        const fifthRow = dataList[4].map((data: any) => {
          return data.value;
        });
        const lastRow = dataList[dataList.length - 1].map((data: any) => {
          return data.value;
        });
        expect(firstRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
        expect(secondRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(thirdRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(fourthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(fifthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(lastRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
      }
    });
  });

  describe("when draw a horizontal line", () => {
    beforeEach(() => {
      consoleProgram.drawLine(1, 2, 6, 2);
    });

    it("should draw a horizontal line", () => {
      const dataListStr = getData("dataList");
      if (dataListStr) {
        const dataList = JSON.parse(dataListStr);
        // console.log("dataList = ", dataList);

        const firstRow = dataList[0].map((data: any) => {
          return data.value;
        });
        const secondRow = dataList[1].map((data: any) => {
          return data.value;
        });
        const thirdRow = dataList[2].map((data: any) => {
          return data.value;
        });
        const fourthRow = dataList[3].map((data: any) => {
          return data.value;
        });
        const fifthRow = dataList[4].map((data: any) => {
          return data.value;
        });
        const lastRow = dataList[dataList.length - 1].map((data: any) => {
          return data.value;
        });
        expect(firstRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
        expect(secondRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(thirdRow).toEqual(
          expect.arrayContaining([
            "|",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(fourthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(fifthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(lastRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
      }
    });
  });

  describe("when draw a vertical line", () => {
    beforeEach(() => {
      consoleProgram.drawLine(6, 3, 6, 4);
    });

    it("should draw a vertical line", () => {
      const dataListStr = getData("dataList");
      if (dataListStr) {
        const dataList = JSON.parse(dataListStr);
        // console.log("dataList = ", dataList);

        const firstRow = dataList[0].map((data: any) => {
          return data.value;
        });
        const secondRow = dataList[1].map((data: any) => {
          return data.value;
        });
        const thirdRow = dataList[2].map((data: any) => {
          return data.value;
        });
        const fourthRow = dataList[3].map((data: any) => {
          return data.value;
        });
        const fifthRow = dataList[4].map((data: any) => {
          return data.value;
        });
        const lastRow = dataList[dataList.length - 1].map((data: any) => {
          return data.value;
        });
        expect(firstRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
        expect(secondRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(thirdRow).toEqual(
          expect.arrayContaining([
            "|",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(fourthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(fifthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(lastRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
      }
    });
  });

  describe("when draw a rectangle", () => {
    beforeEach(() => {
      consoleProgram.drawRectangle(14, 1, 18, 3);
    });

    it("should draw a rectangle", () => {
      const dataListStr = getData("dataList");
      if (dataListStr) {
        const dataList = JSON.parse(dataListStr);
        // console.log("dataList = ", dataList);

        const firstRow = dataList[0].map((data: any) => {
          return data.value;
        });
        const secondRow = dataList[1].map((data: any) => {
          return data.value;
        });
        const thirdRow = dataList[2].map((data: any) => {
          return data.value;
        });
        const fourthRow = dataList[3].map((data: any) => {
          return data.value;
        });
        const fifthRow = dataList[4].map((data: any) => {
          return data.value;
        });
        const lastRow = dataList[dataList.length - 1].map((data: any) => {
          return data.value;
        });
        expect(firstRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
        expect(secondRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            "x",
            "x",
            "x",
            "x",
            " ",
            " ",
            "|",
          ])
        );
        expect(thirdRow).toEqual(
          expect.arrayContaining([
            "|",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            " ",
            " ",
            " ",
            "x",
            " ",
            " ",
            "|",
          ])
        );
        expect(fourthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            "x",
            "x",
            "x",
            "x",
            " ",
            " ",
            "|",
          ])
        );
        expect(fifthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "|",
          ])
        );
        expect(lastRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
      }
    });
  });

  describe("when draw a fill", () => {
    beforeEach(() => {
      consoleProgram.fill(10, 3, "o");
    });

    it("should fill", () => {
      const dataListStr = getData("dataList");
      if (dataListStr) {
        const dataList = JSON.parse(dataListStr);
        // console.log("dataList = ", dataList);

        const firstRow = dataList[0].map((data: any) => {
          return data.value;
        });
        const secondRow = dataList[1].map((data: any) => {
          return data.value;
        });
        const thirdRow = dataList[2].map((data: any) => {
          return data.value;
        });
        const fourthRow = dataList[3].map((data: any) => {
          return data.value;
        });
        const fifthRow = dataList[4].map((data: any) => {
          return data.value;
        });
        const lastRow = dataList[dataList.length - 1].map((data: any) => {
          return data.value;
        });
        expect(firstRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
        expect(secondRow).toEqual(
          expect.arrayContaining([
            "|",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "x",
            "x",
            "x",
            "x",
            "x",
            "o",
            "o",
            "|",
          ])
        );
        expect(thirdRow).toEqual(
          expect.arrayContaining([
            "|",
            "x",
            "x",
            "x",
            "x",
            "x",
            "x",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "x",
            " ",
            " ",
            " ",
            "x",
            "o",
            "o",
            "|",
          ])
        );
        expect(fourthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "x",
            "x",
            "x",
            "x",
            "x",
            "o",
            "o",
            "|",
          ])
        );
        expect(fifthRow).toEqual(
          expect.arrayContaining([
            "|",
            " ",
            " ",
            " ",
            " ",
            " ",
            "x",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "o",
            "|",
          ])
        );
        expect(lastRow).toEqual(
          expect.arrayContaining([
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
          ])
        );
      }
    });
  });
});
