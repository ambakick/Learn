var fake = require("faker");

for(var i=0;i<10;i++)
{
    var firstName=fake.name.findName();
    var email = fake.internet.email();
    console.log("Person "+i+1+": "+firstName+" email: "+email);
}