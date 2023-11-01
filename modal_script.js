'use-strict';
let root = document.querySelector(":root");
// check for theme
if (localStorage.getItem('background-color') !== null){
  root.style.setProperty("--page-background-color", localStorage.getItem('background-color'));
  root.style.setProperty("--page-accent-color",localStorage.getItem('page-accent'));
}



let setting_open = document.querySelectorAll('.settings-btn')
let setting_close = document.querySelectorAll('.settings-close')
function openModal(modalName){
   let modal = document.querySelector(`.${modalName}`)
   modal.style.display ='block'
 
  //  overlay.style.display='block'
  //  console.log(`${modal} opened`)

}
function closeModal(modalName){
    let modal = document.querySelector(`.${modalName}`)
    modal.style.display = 'none';
    // overlay.style.display = 'none';
    inputBox.style.display = 'block'
    // console.log(`${m.classList[0]} closed`)
    if (modal.classList.contains("themes-modal")){
            modal.children[2].innerHTML = '';
    }
}
setting_close.forEach(function(close_btn) {
    close_btn.addEventListener('click',function() {
      console.log("CLose")
        let modal_name = this.parentElement.classList[0]
        closeModal(modal_name)
    })
})
setting_open.forEach(function(open_btn){
    open_btn.addEventListener('click',function() {
        // console.log(this)
        let modal_name = this.dataset.settings;
        // let settings_modal =  document.querySelector(`.${modal_name}`)
        // console.log(settings_modal)
        openModal(modal_name)
    })
})
// Fetch the JSON data
function applyTheme() {}
let theme_modal_box = document.querySelector(".settings-modal");
let theme_popup = document.querySelector(".themes-modal");
let theme_button  = document.querySelector('.themes-button')

theme_button.addEventListener('click',function(){
    openModal('themes-modal')
    fetch("./themes.json")
    .then((response) => response.json())
    .then((data) => {
      // Access the themes array from the JSON data
      const themes = data.themes;
  
      themes.forEach((theme) => {
       document.querySelector('.insertion-modal').insertAdjacentHTML(
          "beforeend",
          `<li class='ilist-item ind-theme text-xl py-1 cursor-pointer  list-none' data-accent = '${theme["accent-color"]}' data-theme='${theme["background-color"]}'>${theme.name}</li>`
        ); 
        let to_hover_themes = document.querySelectorAll(".ind-theme");
        to_hover_themes.forEach(function (elem) {
          elem.addEventListener("click", function () {
            // console.log(this.dataset.theme);
            localStorage.setItem('background-color', this.dataset.theme);
            localStorage.setItem('page-accent',this.dataset.accent);

            // if (localStorage.getItem('background-color') !== null){
              root.style.setProperty("--page-background-color", localStorage.getItem('background-color'));
              root.style.setProperty("--page-accent-color",localStorage.getItem('page-accent'));
            //   console.log('set')
            // }else {
             
            //   console.log('apply')
            // }
          });
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
  
})


// console.log(`Theme Name: ${theme.name}`);

// console.log(`Background Color: ${theme["background-color"]}`);
// console.log(`Font Color: ${theme["font-color"]}`);
// console.log(`Font Family: ${theme["font-family"]}`);
// console.log("-----------------------");
