"use strict";

window.addEventListener("DOMContentLoaded", function()
{
	const marks = document.querySelectorAll("sup a");
	const popup = document.querySelector("#popup");
	for (let i=0; i<marks.length; i++)
	{
		marks[i].addEventListener("mouseover", function(e)
		{
			let id = e.target.id.substring(e.target.id.indexOf("-") + 1);
			popup.innerHTML = document.querySelector("#note-" + id).innerHTML;
			popup.style.left = (window.scrollX + window.innerWidth - e.pageX < 430) ? e.pageX - 410 + "px" : e.pageX + 10 + "px";
			popup.style.top = (window.scrollY + window.innerHeight - e.pageY < 130) ? e.pageY - 110 + "px" : e.pageY + 10 + "px";
			popup.classList.add("visible");
		});
		
		marks[i].addEventListener("mouseleave", function()
		{
			popup.classList.remove("visible");
		});
		
		marks[i].addEventListener("click", function(e)
		{
			e.preventDefault();
		});
	}
});