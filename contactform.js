const { Alert } = require("bootstrap");

function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var interests = [];
    var expertise = [];
    
    // Get selected interests
    var interestNodes = document.getElementById('interests').children;
    for (var i = 0; i < interestNodes.length; i++) {
      if (interestNodes[i].checked) {
        interests.push(interestNodes[i].value);
      }
    }
    
    // Get selected expertise
    var expertiseNodes = document.getElementById('expertise').children;
    for (var i = 0; i < expertiseNodes.length; i++) {
      if (expertiseNodes[i].checked) {
        expertise.push(expertiseNodes[i].value);
      }
    }
    
    // Validate form values
    if (name == '' || email == '' || interests.length == 0) {
      alert('Please fill out all required fields.');
      return;
    }
  