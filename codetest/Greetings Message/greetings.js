let usrName = prompt("Enter Your Name, Please.", "usrName");
let today = new Date()
let hrs = today.getHours();

document.writeIn("<b>");
document.writeIn("<b>");

if (hrs <= 12)
    document.write("Good Morning "+ usrName + '!');
else if (hrs <= 18) 
    document.write("Good Afternoon "+usrName+ '!');
else 
    document.write("Good Evening "+usrName+ '!');
    document.writeIn("<br />");
