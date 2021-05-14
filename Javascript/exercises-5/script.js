function green (){
    remove(); document.querySelector(".quadrado").classList.add('green'); 
   };
   function red (){ 
     remove(); document.querySelector(".quadrado").classList.add('red');
   };
   function blue (){ 
     remove(); document.querySelector(".quadrado").classList.add('blue');
   };
   function remove (){
    document.querySelector(".quadrado").classList.remove('red'); document.querySelector(".quadrado").classList.remove('blue');  document.querySelector(".quadrado").classList.remove('green');
   }