getButton = document.querySelector("form button");

getButton.addEventListener("click", e => {
  e.preventDefault();
  
});

 function converter() {

  const qntYears = document.querySelector("form input");
 
  let value = qntYears.value;
    if(value == "" || value == "0"){
        qntYears.value = "1";
        value = 1;
    }
   
   const resultsTxt = document.querySelector("form .results");
   resultsTxt.innerText = "Waiting a number of light year..";
        let results = value * 9.460e12;
        resultsTxt.innerText = `${value} ano(s) luz equivale(m) ${results} Km`;
};
