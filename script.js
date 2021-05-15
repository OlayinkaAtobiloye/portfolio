let filters = document.querySelectorAll("section.Projects>div.Categories>p");
let active = document.querySelector(
  "section.Projects>div.Categories>p:first-of-type"
);
console.log(active);
filters.forEach((item) =>
  item.addEventListener("click", function () {
    active_id = active.getAttribute("id");
    query = "Section.Projects div." + active_id;
    document.querySelector(query).style.display = "none";
    active.className = "";
    item.setAttribute("class", "Color");
    item_id = item.getAttribute("id");
    query = "Section.Projects div." + item_id;
    document.querySelector(query).style.display = "flex";
    active = item;
  })
);
