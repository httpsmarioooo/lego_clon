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
      document.getElementById('box-shadow').innerHTML = '<div style="z-index:0" onclick="openSearch()" class = "modal-backdrop fade show"></div>';
      inputSearch = true;
    }else{
      document.getElementById('btnSearch').classList.remove('d-none');
      document.getElementById('inputSearch').classList.add('d-none')
      document.getElementById('box-shadow').innerHTML = '';
      inputSearch = false;
    }
  }