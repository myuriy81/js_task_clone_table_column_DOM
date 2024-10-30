"use strict";
// write your code here
const trs = document.querySelectorAll("table tr");
for (const tr of trs){
    const p = tr.cells[1].cloneNode(true);
    tr.append(p, tr.cells[tr.cells.length - 1]);
}

//# sourceMappingURL=index.f75de5e1.js.map
