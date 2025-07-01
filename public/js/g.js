console.log('loaded g.js');

//dark theme logic
console.log("script loaded successfully!")
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleCheckbox = document.querySelector("#theme-toggle input");

  if (!toggleCheckbox) return;

  // Apply the saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
      body.classList.add("dark-theme");
      toggleCheckbox.checked = true;
  } else {
      body.classList.remove("dark-theme");
      toggleCheckbox.checked = false;
  }

  // Toggle theme on checkbox change
  toggleCheckbox.addEventListener("change", () => {
      body.classList.toggle("dark-theme");
      localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
  });
});


let branch = localStorage.getItem("selectedBranch") || "";



function goandselectbranchaids(selectedbranch){
  branch = selectedbranch ;
  localStorage.setItem("selectedBranch", selectedbranch);
    window.location.href = "/aids";
}
function goandselectbranchaiml(selectedbranch){
  branch = selectedbranch ;
  localStorage.setItem("selectedBranch", selectedbranch);
    window.location.href = "/aiml";
}
function goandselectbranchcse(selectedbranch){
  branch = selectedbranch ;
  localStorage.setItem("selectedBranch", selectedbranch);
    window.location.href = "/cse";
}
function goandselectbranchiot(selectedbranch){
  branch = selectedbranch ;
  localStorage.setItem("selectedBranch", selectedbranch);
    window.location.href = "/iot";
}
const objforyears = {
    1 : firstYearContent,
    2 : secondYearContent,
    3 : thirdYearContent,
    4 : fourthYearContent
}

function sidebar_selected_year_first(){

 let furstcontent = document.getElementById("ass") ;
 yearContent = objforyears[1];
 
let x = generateas(yearContent, branch);
furstcontent.innerHTML = x
console.log(x);
}
function sidebar_selected_year_second(){

 let secondcontent = document.getElementById("ass") ;
 yearContent = objforyears[2];
 
let y = generateas(yearContent, branch);
secondcontent.innerHTML = y

}

function sidebar_selected_year_third(){

 let thirdcontent = document.getElementById("ass") ;
 yearContent = objforyears[3];
 
let d = generateas(yearContent, branch);
thirdcontent.innerHTML = d
console.log(d);
}


function sidebar_selected_year_fourth(){

 let fourthcontent = document.getElementById("ass") ;
 yearContent = objforyears[4];
 
let f = generateas(yearContent, branch);
fourthcontent.innerHTML = f

}


function generateas(yearContent, branch) {
    let subjects = yearContent[branch] || [];
  
    let content = `<div class="containerofsubjects">`;
  
    for (let i = 0; i < subjects.length; i++) {
      let subject = subjects[i].title;
      let links = subjects[i].links;
  
      content += `
        <div class="cardcontainer">
          <div>${subject}</div>
          <div class="units">
            <span class="unit" onclick="window.open('${links[0]}', '_blank')">Unit 1</span>
            <span class="unit" onclick="window.open('${links[1]}', '_blank')">Unit 2</span>
            <span class="unit" onclick="window.open('${links[2]}', '_blank')">Unit 3</span>
            <span class="unit" onclick="window.open('${links[3]}', '_blank')">Unit 4</span>
            <span class="unit" onclick="window.open('${links[4]}', '_blank')">Unit 5</span>
          </div>
        </div>`;
    }
  
    content += `</div>`;
    return content;
  }