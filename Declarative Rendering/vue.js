"use:strict";
// The order matters

// Create a list of students with id, name, gpa, phone number, and email address
var students = new Vue({
    el: '#students',
     data: {
        allowEdit: false,
        studentList: [
            {id: 0,name: "a", gpa: 3.5, phoneNumber: 626, email: "gmail"},
            {id: 1,name: "b", gpa: 3.6, phoneNumber: 627, email: "outlook"},
            {id: 2, name: "c", gpa: 3.7, phoneNumber: 628, email: "gmail"},
            {id: 3, name: "d", gpa: 3.8, phoneNumber: 629, email: "outlook"},
            {id: 4, name: "e", gpa: 3.9, phoneNumber: 630, email: "gmail"},
            {id: 5, name: "f", gpa: 4.0, phoneNumber: 631, email: "outlook"}
        ]
    },
    methods: {
        Edit() {
            
        }
    }

})


 