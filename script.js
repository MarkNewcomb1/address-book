// constructor for  a Person
function Person(firstName, lastName, email) {
    this.first = firstName;
    this.last = lastName;
    this.email_address = email;
}


/*model
 * empty array of objects 
 */
function Model() {
    this.people = [];
    this.book = [];

};


//controller takes in input from view
//uses constructor function to create persons
//adds it to the model array
function Controller(model) {
    this.getBook = function() {
        return model.book;
    }
    //function to add to array of objects
    //function to add new Person object to array people and book
    this.createPerson = function (firstName, lastName, email) {
        var person = new Person(firstName, lastName, email);
        model.people.push(person);
        console.log(model.people);
        model.book.push(person);
    };


}
//view function
//takes in user input
//sends to controller

function View(controller) {
    /* takes in input from html
     * accepts value 
     * passes value to controller
     * then passes to constructor
     */
    this.createPerson = function () {
        var firstName = document.getElementById('fName').value;
        var lastName = document.getElementById('lName').value;
        var email = document.getElementById('email').value;
        controller.createPerson(firstName, lastName, email);

    };

    /*
     *somehow make it so when a person is added
     *the display updates to show the person added to the address book
     */
    this.updateDisplay = function () {
        var book = controller.getBook();
        for (i = 0; i < book.length; i++) {
            var para = document.createElement('P');
            var div = document.createElement('div');
            div.appendChild(para);
            para.innerHTML = book[i].first;
            para.innerHTML += " " + book[i].last;
 document.getElementById('listDisplay').appendChild(div);

        }

    };

}


var model = new Model();
var controller = new Controller(model);
var view = new View(controller);

document.getElementById('contacts-op-save').onclick = function () {
    view.createPerson();
    view.updateDisplay(model);
};