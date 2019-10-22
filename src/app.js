import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			activities: [
				{activity: "Clean Car", priority: false},
				{activity: "Do Homework", priority: true},
			],
      setPriority: "",
      newActivity: ""
		},
		methods: {
			saveNewActivity: function(){
				this.activities.push({
					activity: this.newActivity,
					priority: this.setPriority
				});
				this.newActivity = "";
        this.setPriority = "";
			},
			changePriorityHigh: function(index){
				this.activities[index].priority = true;
			},
			changePriorityLow: function(index){
				this.activities[index].priority = false;
			}
		}
	});
});
