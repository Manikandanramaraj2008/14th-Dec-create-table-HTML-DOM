var table = document.createElement('table');
table.setAttribute('class','table');

var thead =document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr =document.createElement('tr');
var th1 =document.createElement('th','First');
var th2 =document.createElement('th','Last');
var th3 =document.createElement('th','Handle');
tr.append(th1,th2,th3);
thead.append(tr);

var tbody =document.createElement('tbody');
var tr1 =document.createElement('tr');
var td1 =document.createElement('td','Mark');
var td2 =document.createElement('td','Otto');
 var td3 =document.createElement('td','@mdo');
tr1.append(td1,td2,td3);
tbody.append(tr1);

// var tbody =document.createElement('tbody');
var tr2 =document.createElement('tr');
var td1 =document.createElement('td','Jacob');
var td2 =document.createElement('td','Thomton');
 var td3 =document.createElement('td','@@fat');
 tr2.append(td1,td2,td3);

 var tr3 =document.createElement('tr');
var td1 =document.createElement('td','Larry');
var td2 =document.createElement('td','The Bird');
 var td3 =document.createElement('td','@@@Twitter');
 tr3.append(td1,td2,td3);
tbody.append(tr1,tr2,tr3);
table.append(thead,tbody)


document.body.append(table);



 function createelement(elename,value){
    var element =document.createElement(elename);
    element.innerHTML =value;
    return element;
 }

// ===============================================
// let parent =document.createElement('div')
// parent.innerHTML ="This is a parent"

// var child =document.createElement('div')
// child.innerHTML ="This is a child1"


// var child1 =document.createElement('div')
// child.innerHTML ="This is a child2"

// let res = parent.appentChild(child1,child)
// console.log(res)

// let a = document.querySelectorAll('main1');

// console.log(a);






