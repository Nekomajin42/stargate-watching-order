"use strict";

window.addEventListener("DOMContentLoaded", function()
{
	// create and destroy tooltips from footnotes
	const marks = document.querySelectorAll("sup a");
	for (let i=0; i<marks.length; i++)
	{
		marks[i].addEventListener("mouseenter", function(e)
		{
			e.stopPropagation();
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
	
	// jump to target cells from the nav box
	const jumps = document.querySelectorAll("nav ul li a");
	for (let i=0; i<jumps.length; i++)
	{
		jumps[i].addEventListener("click", function(e)
		{
			e.preventDefault();
			let target = document.querySelector(this.href.substring(this.href.indexOf("#")));
			let down = document.querySelector("table").offsetTop + target.offsetTop - 40;
			window.scrollTo(window.pageXOffset, down);
		});
	}
	
	// show jump to top button only after scroll
	window.addEventListener("scroll", function()
	{
		let button = document.querySelector("#scroll-top");
		let table = document.querySelector("table");
		if (window.pageYOffset > table.offsetTop)
		{
			button.classList.add("visible");
		}
		else
		{
			button.classList.remove("visible");
		}
	});
	
	// jump to the top of the page
	document.querySelector("#scroll-top").addEventListener("click", function()
	{
		location.hash = "";
		window.scrollTo(window.pageXOffset, 0);
	});
});