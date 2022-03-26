import ConsoleProgram from "./src/consoleProgram";
import { getFormattedArgs } from "./helper/helper";
const prompt = require("prompt-sync")({
  history: require("prompt-sync-history")(),
});

let loopStatus = true;
while (loopStatus) {
  const input = prompt("enter command: ");
  // console.log("input = ", input);

  if (input) {
    prompt.history.save();

    const args = input.split(" ");
    // console.log("args = ", args);

    const action = args[0];
    if (action && action.toUpperCase() != "Q") {
      performActions(args, action);
    } else {
      loopStatus = false;

      const consoleProgram = new ConsoleProgram();
      consoleProgram.quit();
    }
  }
}

function performActions(args: string[], action: string) {
  if (args && action) {
    // createCanvas
    if (action.toUpperCase() === "C") {
      const formattedArgs = getFormattedArgs(args, action);
      // console.log("formattedArgs = ", formattedArgs);

      const width = formattedArgs[1];
      const height = formattedArgs[2];

      const consoleProgram = new ConsoleProgram(width, height);
      consoleProgram.createCanvas();
    }
    // drawLine (horizontal, vertical)
    else if (action.toUpperCase() === "L") {
      const formattedArgs = getFormattedArgs(args, action);
      // console.log("formattedArgs = ", formattedArgs);

      const x1 = formattedArgs[1];
      const y1 = formattedArgs[2];
      const x2 = formattedArgs[3];
      const y2 = formattedArgs[4];

      const consoleProgram = new ConsoleProgram();
      consoleProgram.drawLine(x1, y1, x2, y2);
    }
    // drawRectangle
    else if (action.toUpperCase() === "R") {
      const formattedArgs = getFormattedArgs(args, action);
      // console.log("formattedArgs = ", formattedArgs);

      const x1 = formattedArgs[1];
      const y1 = formattedArgs[2];
      const x2 = formattedArgs[3];
      const y2 = formattedArgs[4];

      const consoleProgram = new ConsoleProgram();
      consoleProgram.drawRectangle(x1, y1, x2, y2);
    }
    // fill
    else if (action.toUpperCase() === "B") {
      const formattedArgs = getFormattedArgs(args, action);
      // console.log("formattedArgs = ", formattedArgs);

      const x = formattedArgs[1];
      const y = formattedArgs[2];
      const c = formattedArgs[3];

      const consoleProgram = new ConsoleProgram();
      consoleProgram.fill(x, y, c);
    }
  }
}
