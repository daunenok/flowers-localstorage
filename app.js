var thisForm = document.querySelector("form");
var elemUl = document.querySelector("ul");
var items = JSON.parse(localStorage.getItem("items")) || [];
populate();

thisForm.addEventListener("submit", submitForm);
elemUl.addEventListener("click", checkItem);

function submitForm(event) {
	event.preventDefault();
	var item = document.querySelector("#newItem").value;
	this.reset();
	items.push({text: item, done: false});
	populate();
	localStorage.setItem("items", JSON.stringify(items));
}

function populate() {
	var str = "";
	for (var i = 0; i < items.length; i++) {
		str += "<li>";
		str += "<input type='checkbox' data-index='" + i + "'";
		if (items[i].done) 
			str += " checked";
		str += ">";
		str += items[i].text;
		str += "</li>";
	}
	elemUl.innerHTML = str;
}

function checkItem(event) {
	var ind = parseInt(event.target.dataset.index);
	items[ind].done = !items[ind].done;
	localStorage.setItem("items", JSON.stringify(items));
}