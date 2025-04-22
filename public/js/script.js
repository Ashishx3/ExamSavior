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

////////////////////////////////////////

let branch = "";
let year = "";

function showBranchContent(selectedbranch){
  selectyouryrmsg();
  branch = selectedbranch ;
    const ids = ["main-content", "conc", "branch-selection", "facilities-container", "facilities-container2","facilities-container3"]; // threedivs-tobehid ko rehedeta h abh i List of IDs to be hidden

    ids.forEach(id => {
        document.getElementById(id)?.classList.add("hidden");
    });
    document.getElementById("footercont").style.position = "fixed";
    document.getElementById("madebyashishd").style.display = "none";
    document.getElementById("dynamic-content").classList.remove("hidden");
    document.getElementById("sidebarkiid").classList.remove("sidebar-hidden");
    document.getElementById("sidebarkiid").classList.add("sidebar-active");
//  ...arguments.callee
    
}

function selectyouryrmsg(){
let parentDiv = document.getElementById("dynamic-content");

    // Check if the message div already exists
    if (!document.getElementById("yearMessage")) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("ju")
        messageDiv.id = "yearMessage";
        messageDiv.textContent = " Select Your Year !🙃";
        parentDiv.appendChild(messageDiv);
    }
  }
  function hideYearMessage() {
    let messageDiv = document.getElementById("yearMessage");
    if (messageDiv) {
        messageDiv.remove();
    }
}

const objforyears = {
    1 : firstYearContent,
    2 : secondYearContent,
    3 : thirdYearContent,
    4 : fourthYearContent
}
function sidebar_selected_year_first(){
  document.getElementById("firstyear").classList.remove("hid")
  document.getElementById("firstyear").classList.add("adddis")
 let furstcontent = document.getElementById("firstyear") ;
 yearContent = objforyears[1];
 console.log(yearContent);
 
let x = generateDivs(yearContent, branch);
furstcontent.innerHTML = x
maintainYearVisibility(1)
hideYearMessage();
}


function sidebar_selected_year_second(){
  document.getElementById("secondyear").classList.remove("hid")
  document.getElementById("secondyear").classList.add("adddis")
 let secondcontent = document.getElementById("secondyear") ;
 yearContent = objforyears[2];
 console.log(yearContent);
 
let y = generateDivs(yearContent, branch);
secondcontent.innerHTML = y
maintainYearVisibility(2)
hideYearMessage();
}

function sidebar_selected_year_third(){
  document.getElementById("thirdyear").classList.remove("hid")
  document.getElementById("thirdyear").classList.add("adddis")
  let thirdcontent = document.getElementById("thirdyear") ;
 yearContent = objforyears[3];
 console.log(yearContent);
 
 let z = generateDivs(yearContent, branch);
 thirdcontent.innerHTML = z
 maintainYearVisibility(3)
 hideYearMessage();

}


function sidebar_selected_year_fourth(){
  document.getElementById("fourthyear").classList.remove("hid")
  document.getElementById("fourthyear").classList.add("adddis")
 let fourthcontent = document.getElementById("fourthyear") ;
 yearContent = objforyears[4];
 console.log(yearContent);
 
let s = generateDivs(yearContent, branch);
fourthcontent.innerHTML = s
maintainYearVisibility(4)
hideYearMessage();
}


  function maintainYearVisibility(selectedYear){
    const yearIds = ["firstyear", "secondyear", "thirdyear", "fourthyear"];

    yearIds.forEach((id, index) => {
        let yearElement = document.getElementById(id);
        if (!yearElement) return; // Skip if element is not found

        if (index + 1 !== selectedYear) {
            yearElement.classList.add("hid"); // Hide other years
            yearElement.classList.remove("adddis"); // Hide other years
        }
    });
}


function generateDivs(yearContent, branch) {
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

  function removeAddDisFromAll() {
    document.querySelectorAll(".adddis").forEach((element) => {
      element.classList.remove("adddis");
    });
  }
  function showHome() { 
    const idssd = ["main-content", "containering", "branch-selection", "facilities-container", "facilities-container2", "facilities-container3" ]; // threedivs-tobehid ko rehedeta h abh i List of IDs to be hidden

    idssd.forEach(id => {
        document.getElementById(id)?.classList.remove("hidden");
    });
    document.getElementById("footercont").style.position = "relative";
  document.getElementById("madebyashishd").style.display = "block";

  document.getElementById("dynamic-content").classList.add("hidden");
    document.getElementById("sidebarkiid").classList.add("hidden");
    document.getElementById("sidebarkiid").classList.remove("sidebar-active");
  
    document
      .querySelectorAll(".section")
      .forEach((section) => section.classList.add("hid"));
  
    document
      .querySelectorAll(".units")
      .forEach((units) => units.classList.add("hid"));
  
    document
      .querySelectorAll(".containerofsubjects")
      .forEach((container) => container.classList.add("hid"));
  

    removeAddDisFromAll();
  }
  
  
  