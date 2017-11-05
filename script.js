"use strict";

window.addEventListener("DOMContentLoaded", function()
{
	const marks = document.querySelectorAll("sup a");
	for (let i=0; i<marks.length; i++)
	{
		marks[i].addEventListener("mouseenter", function(e)
		{
			let id = e.target.id.substring(e.target.id.indexOf("-") + 1);
			let popup = document.createElement("div");
			popup.classList.add("popup");
			popup.innerHTML = document.querySelector("#note-" + id).innerHTML;
			document.body.appendChild(popup);	
			popup.style.left = (window.scrollX + window.innerWidth - e.pageX < popup.clientWidth) ? 
				e.pageX - popup.clientWidth - 10 + "px" : 
				e.pageX + 10 + "px";
			popup.style.top = (window.scrollY + window.innerHeight - e.pageY < popup.clientHeight) ? 
				e.pageY - popup.clientHeight - 10 + "px" : 
				e.pageY + 10 + "px";
			popup.classList.add("visible");
		});
		
		marks[i].addEventListener("mouseleave", function()
		{
			let popups = document.querySelectorAll(".popup");
			for (let i=0; i<popups.length; i++)
			{
				popups[i].classList.remove("visible");
				window.setTimeout(function()
				{
					try
					{
						document.body.removeChild(popups[i]);
					}
					catch (e)
					{
						return;
					}
				}, 300);
			}
		});
		
		marks[i].addEventListener("click", function(e)
		{
			e.preventDefault();
		});
	}
});