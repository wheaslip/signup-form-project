const nodeList = document.querySelectorAll('input');

console.log(nodeList);

nodeList.forEach(function (node) {
    // Add event listener or perform other operations for each node
    node.addEventListener('blur', function () {
        // Your code to handle the event for each node goes here
        checkIfPasswordsMatch (node);
        // Perform any desired actions or function calls for each node
    });
});

const password1 = document.getElementById('password');
const password2 = document.getElementById('repeat_password');
const pass_warning = document.getElementById('password_warning');

function checkIfPasswordsMatch (node) {
    if (password1.value !== password2.value) {
        password1.style = "border: red 2px solid;";
        password2.style = "border: red 2px solid;";
        pass_warning.style = "visibility: visible;";
    }
    else if (password1.value === password2.value && password1.value !== "") {
        password1.style = "border: green 2px solid;";
        password2.style = "border: green 2px solid;";
        pass_warning.style ="visibility: hidden";
    }
}