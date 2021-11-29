Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal: function() {
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app')