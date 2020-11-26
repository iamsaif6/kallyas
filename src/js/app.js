 let trigger_wrap = document.querySelector('.nav__trigger-wrap')
 let trigger = document.querySelector('.nav__trigger')
 let offcanvas = document.querySelector('.offset__nav')


 trigger_wrap.addEventListener('click' ,  ()=> {
    trigger.classList.toggle('active');
    offcanvas.classList.toggle('active');
 })