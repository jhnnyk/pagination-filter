var pageContainer = document.querySelector(".page");
var studentList = document.querySelectorAll(".student-item");
var pageCount = 0;

//asign page numbers
for (var i = 0; i < studentList.length; i++) {
	pageCount = Math.floor(i / 10) + 1;
	studentList[i].classList.add("page" + pageCount.toString());
}


//only show students from the current page
var updateList = function() {
	var pageNumber = "page";
	pageNumber += this.innerText;

	for (let student of studentList) {
		student.classList.add("hide");

		if (student.classList.contains(pageNumber)) {
			student.classList.remove("hide");
		}
	}

	//update button status
	var lastPage = document.querySelector(".pagination .active");
	lastPage.classList.remove("active");
	this.classList.add("active");
}


//add pagination links
var pagination = document.createElement("div");
pagination.classList.add("pagination");
var ul = document.createElement("ul");
for (var i = 1; i <= pageCount; i++) {
	var li = document.createElement("li");
	var anchor = document.createElement("a");
	anchor.innerText = i;
	anchor.href = "#";
	if (i === 1) {
		anchor.classList.add("active");
	}
	li.append(anchor);
	ul.append(li);
}
pagination.append(ul);
pageContainer.append(pagination);


//bind pagination links to function
var paginationLinks = pagination.getElementsByTagName("a");
for (var i = 0; i < paginationLinks.length; i++) {
	paginationLinks[i].addEventListener("click", updateList);
}


//show only the first page onload
window.onload = paginationLinks[0].click();




