class Grid {
  #rows;
  #cols;
  #grid = [];

  constructor(rows, cols) {
    this.#rows = rows;
    this.#cols = cols;
    this.initGrid();
  }

  initGrid() {
    for (let row = 0; row < this.#rows; row++) {
      for (let col = 0; col < this.#cols; col++) {
        this.#grid[row][col] = 0;
      }
    }
  }

  // call everytime a method gets row and col as args. 
  _convertToRowCol(rowOrObj, col, value) {
    if (typeof rowOrObj === 'object') {
        return {row: rowOrObj.row, col: rowOrObj.col, value: value}
    }
    return {row: rowOrObj, col: col, value: value}
    
  }

  //   - `set( row, col, value )` - sætter `value` på den angivne plads.
  set(row, col, value) {
    let { row, col } = this._convertToRowCol(rowOrObj, col, value);
    let index = this.indexFor(row, column);
    if (index !== undefined) {
      this.#grid[index] = value;
    }
  }

  // - `get( row, col )` - returnerer `value` på den angivne plads
  get(row, col) {}

  // - `indexFor( row, col )` - returnerer index (nummeret) på cellen i denne række+kolonne
  indexFor(row, col) {

  }

  // - `rowColFor( index )` - returnerer et `{row, col}` objekt for cellen med dette index (nummer)
  rowColFor(index) {}

  // - `neighbours( row, col )` - returnerer en liste over alle naboceller til denne (i form af `{row, col}` objekter
  neighbours(row, col) {}

  // - `neighbourValues( row, col )` - returnerer en liste over alle nabocellers values.
  neighbourValues(row, col) {}

  // Når der skal returneres en celle, kan du give et objekt med `{row, col, value}`

  // - `nextInRow( row, col )` - returnerer cellen til højre efter denne, eller undefined hvis der ikke er flere i den **row**
  nextInRow(row, col) {}

  // - `nextInCol( row, col )` - returnerer cellen under denne, eller undefined hvis der ikke er flere i den **col**
  nextInCol(row, col) {}

  // - `north( row, col )` - returnerer cellen over denne, eller undefined, hvis der ikke er nogen
  north(row, col) {}

  // - `south( row, col )` - returnerer cellen under denne, eller undefined, hvis der ikke er nogen
  south(row, col) {}

  // - `west( row, col )` - returnerer cellen til venstre for denne, eller undefined, hvis der ikke er nogen
  west(row, col) {}

  // - `east( row, col )` - returnerer cellen til højre for denne, eller undefined, hvis der ikke er nogen
  east(row, col) {}

  // Der skal være et par metoder til at fortælle noget om strukturen

  // - `rows()` - returnerer antallet af rækker
  rows() {}

  // - `cols()` - returnerer antallet af kolonner
  cols() {}

  // - `size()` - returnerer det samlede antal celler
  size() {}

  // - `fill( value )` - skriver den angivne value ind i alle celler
  fill(value) {}
}
