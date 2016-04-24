		
		function Model() {
            this.contacts = [];
		}
		
		function Controller(model) {
            this.createContact = function (first_name, last_name, email) {
                this.first_name = first_name;
                this.last_name = last_name;
                this.email = email;
                model.contacts.push(first_name, last_name, email);
                
            }
                this.getAllContacts = function() {
                return model.contacts;
            }
                view.showAllContacts();
		}
		//this is the end of the controller
		function View(controller) { //this just updates the view
            this.showAllContacts = function() {
                for (var i = 0; i < controller.getAllPets().length; i++) {
                    this.showContact(i);
                }
            }
            this.showContact = function(index) {
                var list = document.getElementById("list");
                var contact = controller.getAllContacts()[index];
                var p = document.createElement("div");
                p.className = "contact";
                p.innerHTML = contact.first_name + " -- " + contact.last_name + " -- " + contact.email;
                list.appendChild(p);
            }
		}


		
		var m = new Model();
		var c = new Controller(m);
		var v = new View(c);
		
		document.getElementById("contacts-op-save").onclick = function() {
            console.log("Clicky");
			v.createContact();
		}
        
        
        Contacts.addEventListener("submit", function(event) {
					var entry = {
						id: parseInt(this.id_entry.value),
						first_name: this.first_name.value,
						last_name: this.last_name.value,
						email: this.email.value
					};
            
            
            
            
            
		v.showAllContacts();
