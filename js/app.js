const { createApp } = Vue;

createApp({
	data() {
		return {
			newTask: "",
			todos: [
				{
					text: "Fare i compiti",
					done: false,
				},
				{
					text: "Fare la spesa",
					done: true,
				},
				{
					text: "Fare il bucato",
					done: false,
				},
			],
			error: false,
		};
	},
	methods: {
		removeTask(task) {
			this.todos.splice(task, 1);
		},

		addTask() {
			if (this.newTask.length >= 5) {
				this.error = false;
                const newTodo = {
					text: this.newTask,
					done: false,
				};
				this.todos.splice(0, 0, newTodo);
				this.newTask = "";
				
			} else {
				this.error = true;
			}
		},
		taskCheck(taskIndex) {
			if (this.todos[taskIndex].done === false) {
				this.todos[taskIndex].done = true;
			} else if (this.todos[taskIndex].done === true) {
				this.todos[taskIndex].done = false;
			}
		},
	},
	mounted() {
		console.log("VUE OK");
	},
}).mount("#app");
