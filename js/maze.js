const withTag = function(tag, content) {
  return ["<", tag, ">", content, "</", tag, ">"].join("");
};

const createTableBody = function(size) {
  let tableRow = [];
  let td = "";
  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    for (let columnIndex = 0; columnIndex < size; columnIndex++) {
      td += "<td id='{row:" + rowIndex + ", column:" + columnIndex + "}'></td>";
    }
    tableRow.push(withTag("tr", td));
    td = "";
  }
  return tableRow.join("");
};

const insertTableBody = function(document) {
  let tbody = createTableBody(5);
  document.getElementById("maze").innerHTML = withTag("tbody", tbody);
};

const actualPath = function() {
  let path = [
    "{row:1, column:0}",
    "{row:1, column:1}",
    "{row:2, column:1}",
    "{row:3, column:1}",
    "{row:3, column:2}",
    "{row:3, column:3}",
    "{row:2, column:3}",
    "{row:1, column:3}",
    "{row:1, column:4}"
  ];
  return path;
};

const highLightPath = function(document, path) {
  path.map(
    x => (document.getElementById(x).style.backgroundColor = "rgb(211,211,211)")
  );
};

const start = function() {
  let path = actualPath();
  insertTableBody(document);
  highLightPath(document, path);
};
