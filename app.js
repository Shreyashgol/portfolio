let tablinks=document.getElementsByClassName("tab-links");
let tabContents=document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for (tablink of tablinks ){
        tablink.classList.remove('active-link');
        
    }
    for (tabcont of tabContents ){
        tabcont.classList.remove('active-tab');

    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxuiE6Lblm5DXVLilaiiv6TrqNyLh12cY7-v5tKz8kHbwpVvQXqmYzBl_RJWjLgkUxJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = 'Message sent successfully! 🎉'
            setTimeout(function(){
                msg.innerHTML = ''
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


var sidemenu=document.getElementById('sideMenu');
function openMenu(){
    sidemenu.style.right='0';

}
function closeMenu(){
    sidemenu.style.right='-200px'
}