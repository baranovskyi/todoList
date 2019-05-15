class SimpleTask{
	constructor(title, status){
	  this.type = this.__proto__.constructor.name.replace('Task','');
	  this.time = +new Date();
	  this.owner = user;
	  this.title = title;
	  this.status = status;
	  window.localStorage.setItem(this.time,JSON.stringify(this));
	  console.log(this);
	  refreshList(this);
		}
  }

class HomeTask extends SimpleTask{
	  constructor(title, status, description){
		super(title, status);
		this.description = description;
		window.localStorage.setItem(this.time,JSON.stringify(this));
		refreshList(this);
	  }
  }	

class ProjectTask extends HomeTask{
	  constructor(title, status, description, deadLineDate){
		super(title, status, description);
		this.deadLineDate = deadLineDate;
		window.localStorage.setItem(this.time,JSON.stringify(this));
		refreshList(this);
	  }
}

	function refreshList(){
		while (window.tasklist.firstChild) {
				window.tasklist.removeChild(window.tasklist.firstChild);
		}
		for ( var i = 0; i < localStorage.length; i++ ) {
			var item = localStorage.getItem(localStorage.key(i));
				item = JSON.parse(item);
			
			var taskItem = document.createElement("li");
				taskItem.className = "list-group-item bg-light";
				taskItem.innerHTML= `<button type="button" class="close" aria-label="Close" onclick="deleteListItem(` + item.time + `);">
										<span aria-hidden="true">&times;</span>
									</button>`;
				taskItem.innerHTML += `<span class="font-weight-bold">` + (i+1) +  `</span>` + `<b> - </b>`;
									+ `</span>`;
									switch (item.type){
										case 'Simple': taskItem.innerHTML += ' <span>' + item.type + ';' + '</span>'; break;
										case 'Home': taskItem.innerHTML += ' <span>' + item.type + ';' + '</span>'; break;
										case 'Project': taskItem.innerHTML += ' <span>' + item.type + ';' + '</span>'; break;
									}
									taskItem.innerHTML += '<b> Title: </b>' + item.title + ';' ;
									taskItem.innerHTML += '<b> Status: </b>'+ item.status + ';' ;
									if(item.description){
										taskItem.innerHTML += '<b> Description: </b>' + item.description + ';';
									}
									
									if(item.deadLineDate){
										taskItem.innerHTML += '<b> Deadline: </b>' + item.deadLineDate + ';';
									} 
									window.tasklist.appendChild(taskItem);
		}
	}
	
function deleteListItem(key){
		localStorage.removeItem(key);
		refreshList();
}