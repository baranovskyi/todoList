var user;
refreshList();
createPersonForm.addEventListener('submit',function(){  
	if (user != undefined){
		window.rightPanel.className = window.rightPanel.className.replace('d-none','');
		window.curUser.innerHTML = ', '+ user.name + ' ' + user.surname + '!';
		switch (user.role){
		case 'User':
			window['nav-hometask-tab'].disabled = true;
			window['nav-hometask-tab'].className += ' disabled';
			window['nav-projecttask-tab'].disabled = true;
			window['nav-projecttask-tab'].className += ' disabled';
			break;
		case 'Student':
			window['nav-hometask-tab'].disabled = false;
			window['nav-hometask-tab'].className = window['nav-hometask-tab'].className.replace(' disabled','');
			window['nav-projecttask-tab'].disabled = true;
			window['nav-projecttask-tab'].className += ' disabled';
			break;
		case 'Developer':
			window['nav-hometask-tab'].disabled = false;
			window['nav-hometask-tab'].className = window['nav-hometask-tab'].className.replace(' disabled','');
			window['nav-projecttask-tab'].disabled = false;
			window['nav-projecttask-tab'].className = window['nav-projecttask-tab'].className.replace(' disabled','');
			break;
		}
	}
});

createPersonForm.role.addEventListener('change',function(){
	switch (createPersonForm.role.value){
		case 'user': 
			createPersonForm.specialization.required = false; 
			createPersonForm.jobtitle.required = false;
			break;
		case 'student': 
			createPersonForm.specialization.required = true; 
			createPersonForm.jobtitle.required = false;
			break;
		case 'developer': 
			createPersonForm.specialization.required = true; 
			createPersonForm.jobtitle.required = true;
			break;
	}
});

function createPerson(){ 
	switch (createPersonForm.role.value){
		case 'user': user = new User(createPersonForm.name.value,createPersonForm.surname.value); break;
		case 'student': user = new Student(createPersonForm.name.value,createPersonForm.surname.value,createPersonForm.specialization.value); break;
		case 'developer': user = new Developer(createPersonForm.name.value,createPersonForm.surname.value,createPersonForm.specialization.value,createPersonForm.jobtitle.value); break;
	}
	console.log(user);
}

function createTask(form){  
	switch (form.id){
		case ('simpletaskform'):
			user.createSimpleTask(form.title.value,form.status.value);
			break;
		case ('hometaskform'): 
			user.createHomeTask(form.title.value,form.status.value,form.description.value);
			break;
		case ('projecttaskform'): 
			user.createProjectTask(form.title.value,form.status.value,form.description.value,form.deadlinedate.value);
			break;
	}
}