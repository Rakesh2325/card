var container = document.getElementById("container");

var profilelist = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9cXKhSnGle8P450as15Rgza9wprO3B_IQA&usqp=CAU" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9Xa3Q3zyiZSe9xgdX_W-STdxoN0NvjQ27w&usqp=CAU"];
for (var i = 0; i < profilelist.length; i++){
    var card = document.createElement("div");
    var img = document.createElement("img");
    var body = document.createElement("div");
    container.appendChild(card);
    card.appendChild(img);
    card.appendChild(body);
    card.setAttribute("class" , "card")
    img.setAttribute("src" , profilelist[i]);
    img.setAttribute("alt" , "John");
    img.setAttribute("style","height:120px")


var userName = document.createElement("h1");
body.appendChild(userName);
userName.innerHTML=("John Doe")
var subHeading = document.createElement("p");
body.appendChild(subHeading);
subHeading.innerHTML = "CEO & Founder, Example <br><br>43 Raymouth Rd. Baltemoer,London 3910";
var button = document.createElement("button");
p.appendChild(button);
subHeading.innerHTML=("Fellow");
}
