// this.innerHTML += ' = ' + (Number(this.innerHTML.split('+')[0]) + Number(this.innerHTML.split('+')[1]))

//.this is being replaced by document.getElementById because it's being linked/defining the path to the arguments.

calculate = () => {
    let thss = document.getElementById("para3");
    thss.innerHTML += ' = ' + (Number(thss.innerHTML.split('+')[0]) + Number(thss.innerHTML.split('+')[1]))
}

    // document.getElementById("para3").innerHTML += ' = ' + (Number(document.getElementById("para3").innerHTML.split('+')[0]) + Number(document.getElementById("para3").innerHTML.split('+')[1]))
     




// <!-- <p id="para3" onclick=" this.innerHTML += ' = ' + (Number(this.innerHTML.split('+')[0]) + Number(this.innerHTML.split('+')[1]))  ">3+3</p> -->


let body = document.body
let div = body.children[0]

let pTags = div.children

let firstP = div.children[0]
let lastP = div.children[pTags.length - 1]

let secondP = firstP.nextElementSibling


/*
             BODY    DIV       1ST P TAG    
    document.body.children[0].children[0].innerText
*/


// pTags.para1 - can select element in an HTML Collection based off the id name
// firstP.nextElementSibling - to find next sibling in the tree, so +1 to the HTML Collection index
// lastP.previousElementSibling


for (let i = 0; i < pTags.length; i++) {
    pTags[i].innerText = "hello"
}