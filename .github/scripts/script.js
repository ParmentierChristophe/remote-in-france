const fs = require("fs");

var global_data = fs.readFileSync("./README.md", "utf-8")

const extractTableFromMarkdown = (md) => {
  const lines = md.split("\n");
  const table = lines.filter((line) => line.startsWith("|"));
  return table;
};

const filterEmptyKeys = (table) => {
  return table.map((obj) =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      if (key !== "") {
        acc[key] = value;
      }
      return acc;
    }, {})
  );
};

function parseMarkdownTable(md) {
  const table = extractTableFromMarkdown(md);
  const headers = table[0].split("|").map((s) => s.trim());
  let id = 1;

  const rows = table.slice(2).map((row) => {
    const cells = row.split("|").map((s) => s.trim());
    const obj = cells.reduce((acc, cell, index) => {
      acc[headers[index]] = cell;
      return acc;
    }, {});
    obj.id = id++;
    if (obj.isRemote === undefined) {
      obj.isRemote = false;
    } else {
      obj.isRemote = obj.isRemote.toLowerCase() === 'true';
    }
    if (obj.isEnglish === undefined) {
      obj.isEnglish = false;
    } else {
      obj.isEnglish = obj.isEnglish.toLowerCase() === 'true';
    }
    if (obj.isHybrid === undefined) {
      obj.isHybrid = false;
    } else {
      obj.isHybrid = obj.isHybrid.toLowerCase() === 'true';
    }
    if (obj.isHiring === undefined) {
      obj.isHiring = false;
    } else {
      obj.isHiring = obj.isHiring.toLowerCase() === 'true';
    }
         return obj;
  });
  const res = filterEmptyKeys(rows);

  return res;
}

const res = parseMarkdownTable(global_data);


fs.writeFile("./src/core/infra/data/data.json", JSON.stringify(res, null, 2), (err) => {
	if (err) throw err;
	console.log("The data has been written to data.json");
  });