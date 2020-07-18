//chapter 58-69
// assignment 58-69
 
// task # 1

// i. Get element of id “main-content” and assign them in a variable.

// var main_contant = document.getElementById('main-content');

//  // ii. Display all child elements of “main-content” element.

// console.log(main_contant.childNodes)

// //iii. Get all elements of class “render” and show their innerHTML in browser.

// var classs = document.getElementsByClassName('render');// here we target through  className
// document.write("</br></br>All elements of class render and  their innerHTML through javascript </br></br>");
// document.write(classs[0].childNodes[0].nodeValue+"</br></br>"+classs[1].childNodes[0].nodeValue+"</br></br>");
// document.write(classs[2].childNodes[0].nodeValue+"</br></br>"+classs[3].childNodes[0].nodeValue+"</br></br>");
// document.write(classs[4].childNodes[0].nodeValue+"</br></br>");

// // iv. Fill input value whose element id first-name using javascript.

// var first_name = document.getElementById('first-name');
// var p_first_name= document.createElement('p');
// var text_first_name= document.createTextNode(first_name.value);
// p_first_name.appendChild(text_first_name);

// //v. Repeat part iv for id ”last-name” and “email”.

// var last_name = document.getElementById('last-name');
// var p_last_name= document.createElement('p');
// var text_last_name= document.createTextNode(last_name.value);
// p_last_name.appendChild(text_last_name);

// var Email = document.getElementById('email');
// var p_Email= document.createElement('p');
// var text_Email= document.createTextNode(Email.value);
// p_Email.appendChild(text_Email);

// // task # 2

//  // 2. use HTML code of question 1 and show the result on browser.

// // i. What is node type of element having id “form-content”.

// var From_content =  document.getElementById('form-content');
// var node_type=From_content.nodeType;
// if(node_type == 1){
//     document.write("</br></br> node type of element having id 'form-content' is 1 its mean Element");
// }else{
//     document.write("</br></br> node type of element having id 'form-content' is 3 its mean Junk");
// }

 //ii. Show node type of element having id “lastName” and its child node.

// var last_Name =  document.getElementById('lastName');
// var node_type=last_Name.nodeType;
// if(node_type == 1){
//     document.write("</br></br> node type of element having id 'lastName' is 1 its mean Element");
// }else{
//     document.write("</br></br> node type of element having id 'lastName' is 3 its mean Junk");
// }
// var child_last_Name = last_Name.childNodes[0];
// document.write("</br>child nodes of element having id 'lastName'</br> is"+child_last_Name.childNodes[0]+"</br> mean #text"); 

//  // iii. Update child node of element having id “lastName”.

// var lastName= document.getElementById('lastName');
//  lastName.childNodes[0].nodeValue = 'Last Name : Zender';// updating value of child
 
//  var main_contant = document.getElementById('main-content');// here we checjed value update or not
// console.log(main_contant.childNodes);

//  var text = main_contant.childNodes[0];
//  var text1 = main_contant.childNodes[1];
//  var text2 = main_contant.childNodes[2];
//  var text3 = main_contant.childNodes[3];
//  var text4 = main_contant.childNodes[4];

// document.write("All elements of class render and  their innerHTML through javascript </br></br>"+text.childNodes[0].nodeValue+"</br>");
// document.write("</br>"+text1.childNodes[0].nodeValue+"</br>");
// document.write("</br>"+text2.childNodes[0].nodeValue+"</br>");
// document.write("</br>"+text3.childNodes[0].nodeValue+"</br>");
// document.write("</br>"+text4.childNodes[0].nodeValue+"</br>");

// // iv. Get First and last child of id .

// var main_contant = document.getElementById('main-content');
// var first_child = main_contant.firstChild;
// var last_child = main_contant.lastChild;

// document.write("Tag of first child of id “main-content” : "+first_child.nodeName+"</br> value of first child : "+first_child.childNodes[0].nodeValue+"</br></br>");
// document.write("Tag of last child of id “main-content” : "+last_child.nodeName+"</br> value of first child : "+last_child.childNodes[0].nodeValue);

//  // v. Get next and previous siblings of id “lastName”.

// var LastName = document.getElementById('lastName');
// var previous_sibling = LastName.previousSibling;
// var Next_sibling= LastName.nextSibling;

// document.write("Tag of previous sibling of id “lastName” : "+previous_sibling.nodeName+"</br> value of previous sibling : "+previous_sibling.childNodes[0].nodeValue+"</br></br>");
// document.write("Tag of next sibling of id “lastname” : "+Next_sibling.nodeName+"</br> value of next sibling : "+Next_sibling.childNodes[0].nodeValue);

//  // vi. Get parent node and node type of element having id “email”

// var Email = document.getElementById('email');
// document.write("Tag of parent node of element having id “email”  is "+Email.parentNode.nodeName+" </br> node type of element having id “email” is "+Email.nodeType+" mean element");

