
var current_view = "all";
var VIEW_ORDER = ["all", "farm", "greenhouse", "ginger"];

function next_view() {
  var idx = VIEW_ORDER.indexOf(current_view);
  current_view = VIEW_ORDER[(idx + 1) % VIEW_ORDER.length];
  update_view_button();
  redraw_calendar();
}

function update_view_button() {
  var btn = document.getElementById("menu");
  if (!btn) return;

  if (current_view === "ginger") {
    btn.innerHTML = '<img src="images/ginger_island.png" title="Ginger Island" style="height:18px; vertical-align:middle;">';
  } else if (current_view === "greenhouse") {
    btn.innerText = "Greenhouse";
  } else if (current_view === "farm") {
    btn.innerText = "Main Farm";
  } else {
    btn.innerText = "All Farms";
  }
}
