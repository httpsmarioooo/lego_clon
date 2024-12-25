var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  let inputSearch = false;
  function openSearch(){
    if(!inputSearch){
      document.getElementById('btnSearch').classList.add('d-none');
      document.getElementById('inputSearch').classList.remove('d-none')
      document.getElementById('boxx-shadow').innerHTML = '<div style="z-index:0" onclick="openSearch()" class = "modal-backdrop fade show"></div>';
      inputSearch = true;
    }else{
      document.getElementById('btnSearch').classList.remove('d-none');
      document.getElementById('inputSearch').classList.add('d-none')
      document.getElementById('boxx-shadow').innerHTML = '';
      inputSearch = false;
    }
  }

  function closeTopbar(){
    let element = document.getElementById('topbar');
  
    if(!element.classList.contains('d-none')){
      element.classList.add('d-none');
    }
  }
  
  window.addEventListener('resize',()=>{
    console.log(window.innerWidth);
    let element = document.getElementById('topbar');
  
    if(element.classList.contains('d-none')){
      if(window.innerWidth >= 992){
        element.classList.remove('d-none');
      }
    }
  });

