const userText = document.querySelector('.userText');
const typeText = document.querySelector('.typeText');
const sidebarNav = document.querySelector('nav.navbars')

let requestURL = '../data/response.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  const response = request.response;
  populateUserData(response);
  populateSidebar(response);
};

function populateUserData(jsonObj) {
  if (userText) {
    userText.textContent = jsonObj.user;
  }
}

function populateSidebar(jsonObj) {
  const { navmap } = jsonObj
  for (let i = 0; i < navmap.length; i++) {
    const navCard = navmap[i]
    const list = document.createElement("ul")
    list.setAttribute('id', 'nav' + (i + 1))
    list.classList.add("shadowNavBox")

    const listChild = document.createElement("li")

    const listChildCaret = document.createElement("span")
    listChildCaret.classList.add("caret")
    if (navCard.active) (listChildCaret.classList.add("caret-down"))
    listChildCaret.textContent = navCard.title
    listChild.appendChild(listChildCaret)


    const listChildNests = document.createElement("ul")
    listChildNests.classList.add("nested")
    if (navCard.active) (listChildNests.classList.add((navCard.active) ? "active" : ""))


    for (let i = 0; i < navCard.lists.length; i++) {
      if (navCard.lists.length > 0) {
        const { listname, link } = navCard.lists[i]
        const listChildCaret = document.createElement("li")

        const listChildCaretLink = document.createElement("a")
        listChildCaretLink.setAttribute("href", link)
        listChildCaretLink.textContent = listname


        listChildCaret.appendChild(listChildCaretLink)
        listChildNests.appendChild(listChildCaret)
      }

    }

    listChild.appendChild(listChildNests)



    list.appendChild(listChild)
    sidebarNav.appendChild(list)
  }


  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }
}

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  console.log("click")
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

// function showHeroes(jsonObj) {
//   const heroes = jsonObj['members'];

//   for (let i = 0; i < heroes.length; i++) {
//     const myArticle = document.createElement('article');
//     const myH2 = document.createElement('h2');
//     const myPara1 = document.createElement('p');
//     const myPara2 = document.createElement('p');
//     const myPara3 = document.createElement('p');
//     const myList = document.createElement('ul');

//     myH2.textContent = heroes[i].name;
//     myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//     myPara2.textContent = 'Age: ' + heroes[i].age;
//     myPara3.textContent = 'Superpowers:';

//     const superPowers = heroes[i].powers;
//     for (let j = 0; j < superPowers.length; j++) {
//       const listItem = document.createElement('li');
//       listItem.textContent = superPowers[j];
//       myList.appendChild(listItem);
//     }

//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//     myArticle.appendChild(myList);

//     section.appendChild(myArticle);
//   }
// }

// //Input to length script -->
// function testee() { document.getElementById("output").innerHTML = document.getElementById("entrada").value.length }
