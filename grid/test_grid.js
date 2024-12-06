window.addEventListener("load", start);

import Grid from "./Grid.js";

function start() {
  let myGrid = new Grid(3, 10);

  //   myGrid.set({ row: 1, col: 1 }, 4);
  console.log(myGrid.grid);
  console.log("");

  console.log("get:", myGrid.get({ row: 1, col: 1 }));

  console.log("indexFor: ", myGrid.indexFor({ row: 1, col: 1 }));

  console.log("rowColFor:", myGrid.rowColFor(23));

  console.log("");
  console.log("rows:", myGrid.rows());
  console.log("cols:", myGrid.cols());
  console.log("Grid size:", myGrid.size());
  console.log("");
  //   console.log("value to fill grid with:", myGrid.fill(5));
  let fillNum = 5;
  //   console.log("value to fill grid with:", fillNum);
  //   myGrid.fill(fillNum);
  console.log(myGrid.grid);
  console.log("");

  let aRow = 1;
  let aCol = 4;
  console.log("******* EAST ********");
  console.log("find east for:", { row: aRow, col: aCol }, " value:", myGrid.indexFor({ row: aRow, col: aCol }));
  console.log("east:", myGrid.east({ row: aRow, col: aCol }));
  console.log("nextInRow:", myGrid.nextInRow({ row: aRow, col: aCol }));
  

  console.log("******* WEST ********");
  console.log("find west for:", { row: aRow, col: aCol }, " value:", myGrid.indexFor({ row: aRow, col: aCol }));
  console.log("west:", myGrid.west({ row: aRow, col: aCol }));

  console.log("******* NORTH ********");
  console.log("find north for:", { row: aRow, col: aCol }, " value:", myGrid.indexFor({ row: aRow, col: aCol }));
  console.log("north:", myGrid.north({ row: aRow, col: aCol }));

  console.log("******* SOUTH ********");
  console.log("find south for:", { row: aRow, col: aCol }, " value:", myGrid.indexFor({ row: aRow, col: aCol }));
  console.log("south:", myGrid.south({ row: aRow, col: aCol }));
  console.log("nextInCol:", myGrid.nextInCol({ row: aRow, col: aCol }));

  console.log("");
  console.log("Neighbour cells:",myGrid.neighbours({ row: aRow, col: aCol }));
  console.log("Neighbour cells values:",myGrid.neighbourValues({ row: aRow, col: aCol }));
  
  
}
