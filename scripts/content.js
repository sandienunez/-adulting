/// EXAMPLES NOT FUNCTIONAL FOR OUR CODE BASE YET!!!!!!



// Toggle Text or Tile View of Web Component Object Selction in componentList 
function hideBank(){document.getElementById("txtBank").style.display = "none";}
function showBank(){document.getElementById("txtBank").style.display = "block";}
function hideTile(){document.getElementById("imgGrid").style.display = "none";}
function showTile(){document.getElementById("imgGrid").style.display = "block";}

// Checks initial Hash Tag value to set conponentList Viewer List styling
function defaultView(){
	if (window.location.hash.substring(0, 5).localeCompare("#tile") == 0) 
		{ hideBank();	showTile(); }
	else{ showBank();	hideTile(); }
	
}(defaultView()) // onLoad: Auto Magically Run Function


// Populates Component List Field and Image Grid
function populateComponentList(listOf){

	for (index = 0; index < listOf.obj.length; index++) {

		var li = document.createElement("li");
		li.setAttribute("class", "wctbLink");

		li.innerHTML = listOf.obj[index].title;

		var col = document.createElement("div");
		col.setAttribute("class", "column igI");

		var img = document.createElement("img");
		img.src = listOf.obj[index].image;

		col.appendChild(img);

		document.getElementById("txtBank").appendChild(li);
		document.getElementById("imgGrid").appendChild(col);

	}

}(populateComponentList(exampleWBCP)) // onLoad: Populate Component List Field