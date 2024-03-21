//let phoneMask = IMask(
//    document.querySelectorAll('[type="tel"]'), {
 //     mask: '+{7} (000) 000-00-00'
 // });

let phoneMask = document.querySelectorAll('[type="tel"]')

  phoneMask.forEach(function(phoneMask){
    IMask(phoneMask , {
           mask: '+{7} (000) 000-00-00'
       })
  })
  
document.querySelectorAll('header .mob-menu a').forEach((e) =>{
  e.addEventListener('click', menu)
})

  function menu(){
    document.querySelector('body').classList.toggle('show-menu')
  }
  function menu_fav(){
    document.querySelector('body').classList.toggle('show-men-fav')
  }
  function menu_comparison(){
    document.querySelector('body').classList.toggle('show-menu-comparison')
  }
  function menu_basket(){
    document.querySelector('body').classList.toggle('show-menu-basket')
  }

 



