// Write code here to communicate with Github

// Write code here to communicate with Github

let ulOfRepos = document.querySelector("#repos-list");

let getReposFunction = async function getRepos() {
  const responseAPI = await fetch(
    "https://api.github.com/users/DARKATOV/repos"
  );
  const data = await responseAPI.json();
  const listOfNames = data.map(repo => repo.name);
  const numberOfRepos = listOfNames.length;
  console.log(numberOfRepos);
  const reposCount = document.getElementById("repos-count");
  reposCount.textContent = numberOfRepos;
  return listOfNames;
};

const resultOfGetRepos = getReposFunction();
console.log(resultOfGetRepos);

let renderRepos = resultOfGetRepos.then(reposList => {
  // why .then here ?
  reposList.forEach(repo => {
    let repoInListElement = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", `https://github.com/DARKATOV/${repo}`);
    var linkRepo = document.createTextNode(repo);
    a.appendChild(linkRepo);
    repoInListElement.appendChild(a);
    ulOfRepos.appendChild(repoInListElement);
  });
});

// var a = document.createElement('a');
//     a.setAttribute("href", link);
//     var linkText = document.createTextNode(link);
//     a.appendChild(linkText);
//     td_link.appendChild(a);
