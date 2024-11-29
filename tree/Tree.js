class Tree {
  root;

  constructor(root) {
    this.root = root;
  }

  // - der udskriver hele træet i consollen.
  dump() {}

  // - der opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
  addValue(value) {}

  // - der leder efter den givne value i træet, og returnerer den (første) Node der har den
  findValue(value) {}

  // - der finder og fjerner Noden med den givne value fra træet
  removeValue(value) {}
}

class Node {
  parent;
  childNodes = [];
  value;
  constructor(parent, childNodes, value) {
    this.parent = parent;
    this.childNodes = childNodes;
    this.value = value;
  }

  // - der returnerer den første i listen af childNodes
  firstChild() {}

  // - der returnerer den sidste i listen af childNodes
  lastChild() {}

  // - der fortæller hvorvidt den har childNodes eller ej
  hasChildNodes() {}

  // - der tilføjer child til listen af children
  appendChild(child) {}

  // - der fjerner child fra listen af children
  removeChild(child) {}

  // - der fjerner oldChild fra listen, og tilføjer newChild på dens plads
  replaceChild(newChild, oldChild) {}
}
