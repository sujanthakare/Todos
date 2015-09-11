(function() {
	var app = angular.module("demo",[]);	

	app.controller('ToDoController',function(){
		this.model ={};
		this.todos = [];
		this.addTask = function(){
			if (this.model.Name != undefined ) {
				this.model.isChecked =false;
				this.todos.push(this.model);
				this.model = {};
			};
		};
		this.deleteCompleted = function()
		{
			for(i=0;i<this.todos.length;i++)
			{
				if (this.todos[i].isChecked === true) {
					this.todos.splice(i,1);
					i = i-1;
				};
			}
				
		}
	});
})();

