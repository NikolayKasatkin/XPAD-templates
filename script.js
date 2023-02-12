
         
         
         
         
         
         $(function() {
                $(".btn").click(function() {
                    $(".form-signin").toggleClass("form-signin-left");
                $(".form-signup").toggleClass("form-signup-left");
               
                $(".two_cycle").toggleClass("two_cycle_active");
                $(".frame").toggleClass("frame-long");
                $(".signup-inactive").toggleClass("signup-active");
                $(".signin-active").toggleClass("signin-inactive");
                $(".forgot").toggleClass("forgot-left");   
                $(this).removeClass("idle").addClass("active");
                });
            });
            
            $(function() {
                $(".btn-signup").click(function() {
              $(".nav").toggleClass("nav-up");
             $(".form-signup-left").toggleClass("form-signup-down");
              $(".second_cycle").toggleClass("second_cycle_active");
              $(".first_cycle").toggleClass("first_cycle_active");
              $(".form-signup_contunie").toggleClass("form-signup_contunie__left");
             // $(".success").toggleClass("success-left"); 
            //  $(".frame").toggleClass("frame-short");
                });
            });
            
            $(function() {
                $(".btn-signin").click(function() {
              $(".btn-animate").toggleClass("btn-animate-grow");
              $(".welcome").toggleClass("welcome-left");
              $(".cover-photo").toggleClass("cover-photo-down");
              $(".frame").toggleClass("frame-short");
              $(".profile-photo").toggleClass("profile-photo-down");
              $(".btn-goback").toggleClass("btn-goback-up");
              $(".forgot").toggleClass("forgot-fade");
                });
            });
       
        function show(value) {
            document.querySelector(".text-box").value = value;
        }
        
        let dropdown = document.querySelector(".dropdown")
        dropdown.onclick = function() {
            dropdown.classList.toggle("active")
        }
        


        let imagesss = document.querySelectorAll(".likec_people_covers_img");
     
        let imgleft = 0;
        for(i = 0; i < imagesss.length; i++){
            imagesss[i].style.left = -imgleft + "px";
         
            imgleft +=10
    
    

          
        }

        

// Отображение количества токенов и цены на странице
  const maxQuantity = 5; //Максимальное количество нфт которое можно купить
  const minQuantity = 1; // Минимальное количество нфт которое можно купить
  let costOneToken = 200;// Цена одного нфт


  function rangeslider(value){
      let col = document.getElementById('fader');
      document.getElementById("output").innerHTML = parseInt(col.value);
      document.getElementById("output").style.width =+ value + "";

  }


  function rangeslider2(value2){
      let col = document.getElementById('faderr');
      document.getElementById("outputt").innerHTML = parseInt(col.value);
      document.getElementById("outputt").style.width =+ value2 + "";
          let el = value.target;
      el.style.setProperty("--value", el.value);
      el.style.setProperty("--min", el.min === "" ? "0" : el.min);
      el.style.setProperty("--max", el.max === "" ? "100" : el.max);
      el.style.setProperty("--value", el.value);


  }



  function rangeslidermob(value){
  let col = document.getElementById('fader');
  document.getElementById("output").innerHTML = parseInt(col.value);
  document.getElementById("output").style.width =+ value + "";
  let total = parseInt(col.value) * costOneToken;
  document.getElementById('total').innerHTML = total  + ' BUSD + gas';
  }




  