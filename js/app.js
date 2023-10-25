
const { createApp } = Vue 

createApp({
    data(){
        return{
            newTask:'',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]

        }
    },
    methods: {
       removeTask(task) {
         this.todos.splice(task,1)
       },

       addTask() {
        const newTodo = {
            text : this.newTask,
            done : false
        }
        this.todos.splice(0,0,newTodo)
       }

    },
    mounted(){
        console.log('VUE OK')
    },

}).mount('#app')
