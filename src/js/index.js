window.addEventListener("keydown", (e) => {
  const container = document.querySelector(".container");
  container.innerHTML = `

     <div class="key-cols">
     <p>The Key Input</p>
       ${e.key === " " ? "space" : e.key}
     </div>

     <div class="key-cols">
     <p>The Key Code</p>
       ${e.keyCode}
      </div>

       <div class="key-cols">
       <p>The Key</p>
        ${e.code}
        </div>

    `;
    console.log(keys)
});

// const handleKey = (e) => {
//   const container = document.querySelector(".container");
//   container.innerText = "";

//   const keys = {
//     "e.key": e.key === " " ? "space" : e.key,
//     "e.keyCode": e.keyCode,
//     "e.code": e.code,
//   };

//   for (let codes in keys) {
//     const div = document.createElement("div");
//     div.classList.add("key-cols");

   

//     const textValue = document.createElement("p");
//     textValue.append(keys[codes]);


//     div.append(textValue);
//     container.append(div);
//   }

//   console.log(keys);
// };

// window.addEventListener("keydown", handleKey);
