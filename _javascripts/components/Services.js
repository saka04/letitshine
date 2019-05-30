/*
window.onload = function (){
	function openService(evt, service) {
		var i, tabcontent, tablinks;

		tabcontent = document.getElementsByClassName("tabcontent");

		// hides everything
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByClassName("tablinks");
		
		// removes active from all
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		// breakup class names into parts
		document.getElementById(service).style.display = "block";
		var tab = evt.currentTarget.className;
		tab = tab.split(" ");

		// find the active class, hide it and give it the original class name
		if (tab[2] == "active"){
			document.getElementById(service).style.display = "none";
			evt.currentTarget.className = tab[0] + " " + tab[1];
			evt.currentTarget.blur();

		// activate the selected button
			} else if (tab[2] != "active"){

		// removes active from class
				servicelinks = document.getElementsByClassName("services");
				for (i = 0; i < servicelinks.length; i++) {
					servicelinks[i].className = "services text-bold";
					//servicelinks[i].blur();
				}
			evt.currentTarget.className += " active";
			}
	}
}
*/