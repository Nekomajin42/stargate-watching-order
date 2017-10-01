"use strict";

window.addEventListener("DOMContentLoaded", function()
{
	const marks = document.querySelectorAll("sup a");
	const popup = document.querySelector("#popup");
	for (let i=0; i<marks.length; i++)
	{
		marks[i].addEventListener("mouseenter", function(e)
		{
			let id = e.target.id.substring(e.target.id.indexOf("-")+1);
			popup.innerHTML = document.querySelector("#note-" + id).innerHTML;
			popup.style.top = e.pageY + 10 + "px";
			popup.style.left = e.pageX + 10 + "px";
			popup.classList.add("visible");
		});
		marks[i].addEventListener("mouseleave", function()
		{
			popup.classList.remove("visible");
		});
	}
});