const aboutXpad_Section = document.querySelector(".about_xpad");
            const left_side_of_secAbout_top_sec  = document.querySelector(".left_side_of_secAbout_top");
            const left_side_of_secAbout_bottom_sec = document.querySelector(".left_side_of_secAbout_bottom");
            const rigth_side_of_secAbout_top_sec = document.querySelector(".rigth_side_of_secAbout_top");

            const first_pec__box = document.querySelectorAll(".first_pec__box");

            const rigth_side_of_secAbout_bottom = document.querySelector(".rigth_side_of_secAbout_bottom");
            const Investing_and_made = document.querySelector(".inveting_and_made");




            const  inv_heading = document.querySelector(".inv_heading");
            const  inv_sub = document.querySelector(".inv_sub");
            const  md_sub = document.querySelector(".md_sub");
            const  md_heading = document.querySelector(".md_heading");



            const Peculiarities = document.querySelector(".Peculiarities");


            const Tokenimcs_sec = document.querySelector(".tokenomics");
            const Token_head = document.querySelector(".token_head");
            const Token_sub = document.querySelector(".token_sub");





document.addEventListener("scroll", function (){
    const clientHeight = document.documentElement.clientHeight;
    const  aboutXpad_Section_Y= aboutXpad_Section.getBoundingClientRect().y;

    const aboutXpad_Section_Height = aboutXpad_Section.getBoundingClientRect().height;

    if (clientHeight > aboutXpad_Section_Y ){
        left_side_of_secAbout_top_sec.style.animation = 
         "fadin_about_top1 1s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1"

         left_side_of_secAbout_bottom_sec.style.animation = 
         "fadin_about_top1 1.4s 0.5s forwards cubic-bezier(0.87, 0, 0.13, 1"

         rigth_side_of_secAbout_top_sec.style.animation = 
         "fadin_about_top1 1.8s 0.5s forwards cubic-bezier(0.87, 0, 0.13, 1"

         rigth_side_of_secAbout_bottom.style.animation =
         "fadin_about_top1 2.2s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1"
    };

    const  Inv_and_madeing_y = Investing_and_made.getBoundingClientRect().y;
    const Inv_and_madeing_heigth = Investing_and_made.getBoundingClientRect().height;
    const decor_up = document.querySelector(".decor") 
    const decor_1 = document.querySelector(".decor_1")
    const start_to_div = document.querySelectorAll(".start_to_div")

    if(clientHeight>Inv_and_madeing_y + (Inv_and_madeing_heigth * 2) / 3){
        start_to_div[0].style.animation=
        "opacitY 1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        start_to_div[1].style.animation=
        "opacitY 1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        decor_1.style.animation=
        "opacitY 1.4s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        decor_up.style.animation=
        "opacitY 1.4s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        inv_heading.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         inv_sub.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         md_sub.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         md_heading.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         
    };

    if(window.innerWidth <= 1000 && clientHeight>Inv_and_madeing_y){
      
        inv_heading.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         inv_sub.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         md_sub.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         md_heading.style.animation = 
         "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
         
    
    }
   const first_pec__box = document.querySelectorAll(".first_pec__box");
    const Peculiarities_Y = first_pec__box[1].getBoundingClientRect().y;
  const header_perticulate = document.querySelector(".peculiarities_header")

    if(clientHeight>Peculiarities_Y ){
        header_perticulate.style.animation =
        "slideUp 0.6s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        first_pec__box[0].style.animation = 
        "fadin_about_top1 1.6s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1"
        first_pec__box[1].style.animation = 
        "fadin_about_top1 1.6s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1"
        first_pec__box[2].style.animation = 
        "fadin_about_top1 1.6s 0.6s forwards cubic-bezier(0.87, 0, 0.13, 1"
        first_pec__box[3].style.animation = 
        "fadin_about_top1 1.6s 0.8s forwards cubic-bezier(0.87, 0, 0.13, 1"

        first_pec__box[4].style.animation = 
        "fadin_about_top1 1.6s 0.9s forwards cubic-bezier(0.87, 0, 0.13, 1"
        first_pec__box[5].style.animation = 
        "fadin_about_top1 1.6s 1.2s forwards cubic-bezier(0.87, 0, 0.13, 1"
      

    };

    const Tokenimcs_sec_Y = Tokenimcs_sec.getBoundingClientRect().y;
    const Tokent_heigth = Tokenimcs_sec.getBoundingClientRect().height;
    if(clientHeight>Tokenimcs_sec_Y + (Tokent_heigth * 2) /4){
        Token_head.style.animation=
        "slideUp 0.8s forwards cubic-bezier(0.92, 0, 0.13, 1)"

        Token_sub.style.animation=
        "slideUp 1.8s forwards cubic-bezier(0.92, 0, 0.13, 1)"
    };

    if(window.innerWidth <= 1000 && clientHeight>Tokenimcs_sec_Y){
        Token_head.style.animation=
        "slideUp 1.2s forwards cubic-bezier(0.92, 0, 0.13, 1)"

        Token_sub.style.animation=
        "slideUp 1.8s forwards cubic-bezier(0.92, 0, 0.13, 1)"
    }

    const benefits_box = document.querySelectorAll(".benefits_box");
    const benefits_box_Y = benefits_box[1].getBoundingClientRect().y;
    const benefits_header = document.querySelector(".benefits_header_1")
    const benefit_higth_Y = document.querySelector(".benefits")

    if(clientHeight>benefits_box_Y){
        benefits_header.style.animation=
        "slideUp 1.2s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        benefits_box[0].style.animation =
        "fadin_about_top1 1.6s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1"
        benefits_box[1].style.animation =
        "fadin_about_top1 1.6s 0.4s forwards cubic-bezier(0.87, 0, 0.13, 1"
        benefits_box[2].style.animation =
        "fadin_about_top1 1.6s 0.5s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[3].style.animation =
        "fadin_about_top1 1.6s 0.6s forwards cubic-bezier(0.87, 0, 0.13, 1"
        benefits_box[4].style.animation =
        "fadin_about_top1 1.6s 0.7s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[5].style.animation =
        "fadin_about_top1 1.6s 0.8s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[6].style.animation =
        "fadin_about_top1 1.6s 0.8s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[7].style.animation =
        "fadin_about_top1 1.6s 1s forwards cubic-bezier(0.87, 0, 0.13, 1"

          benefits_box[8].style.animation =
        "fadin_about_top1 1.6s 1s forwards cubic-bezier(0.87, 0, 0.13, 1"

    };

    if(window.innerWidth <= 1260 && clientHeight>benefit_higth_Y){
        benefits_header.style.animation=
        "slideUp 1.2s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        benefits_box[0].style.animation =
        "fadin_about_top1 1.6s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1"
        benefits_box[1].style.animation =
        "fadin_about_top1 1.6s 0.4s forwards cubic-bezier(0.87, 0, 0.13, 1"
        benefits_box[2].style.animation =
        "fadin_about_top1 1.6s 0.5s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[3].style.animation =
        "fadin_about_top1 1.6s 0.6s forwards cubic-bezier(0.87, 0, 0.13, 1"
        benefits_box[4].style.animation =
        "fadin_about_top1 1.6s 0.7s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[5].style.animation =
        "fadin_about_top1 1.6s 0.8s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[6].style.animation =
        "fadin_about_top1 1.6s 0.8s forwards cubic-bezier(0.87, 0, 0.13, 1"

        benefits_box[7].style.animation =
        "fadin_about_top1 1.6s 1s forwards cubic-bezier(0.87, 0, 0.13, 1"

          benefits_box[8].style.animation =
        "fadin_about_top1 1.6s 1s forwards cubic-bezier(0.87, 0, 0.13, 1"
    }

    const header_box_pools =  document.querySelectorAll(".header_box_pools");
    const sub_box_pools = document.querySelectorAll(".sub_box_pools");
    const header_pool_1 = document.querySelector(".header_pool_1");

    const  header_box_pools_Y = header_box_pools[0].getBoundingClientRect().y;
    const img_pools = document.querySelectorAll(".img_pools")

    if(clientHeight>header_box_pools_Y){

        header_box_pools[0].style.animation = 
        "slideUp 1.2s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        header_box_pools[1].style.animation = 
        "slideUp 1.2s 0.4s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        header_box_pools[2].style.animation = 
        "slideUp 1.2s 1.6s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        header_box_pools[3].style.animation = 
        "slideUp 1.2s 2s forwards cubic-bezier(0.92, 0, 0.13, 1)"

        sub_box_pools[0].style.animation = 
        "slideUp 1.2s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        sub_box_pools[1].style.animation = 
        "slideUp 1.2s 0.4s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        sub_box_pools[2].style.animation = 
        "slideUp 1.2s 1.6s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        sub_box_pools[3].style.animation = 
        "slideUp 1.2s 2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
    
    
    }

    const live_pools = document.querySelector(".live_pools")
    const live_pools_Y = live_pools.getBoundingClientRect().y;
    const sub_livepoll = document.querySelector(".header_sub__pool_1")

    if(clientHeight>live_pools_Y){
        img_pools[0].style.animation=
        "heigth_to_hight 1.2s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        img_pools[1].style.animation=
        "heigth_to_hight 1.2s 0.4s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        img_pools[2].style.animation=
        "heigth_to_hight 1.2s 1.6s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        img_pools[3].style.animation=
        "heigth_to_hight 1.2s 2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        header_pool_1.style.animation=
        "slideUp 1.2s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        sub_livepoll.style.animation=
        "slideUp 1.2s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
    }


    const sovorovojdenia = document.querySelector(".sovorovojdenia");
    const sovorovojdenia_box = document.querySelector(".sovorovojdenia_box");
    const sovpo_content = document.querySelector(".sovpo_content");
    const sovpo_img = document.querySelector(".sovpo_img");
    const sovorovojdenia_Heigth =  sovorovojdenia.getBoundingClientRect().y
    
    if(clientHeight>sovorovojdenia_Heigth){
        sovorovojdenia_box.style.animation = 
        "glowUp 2s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1)"
        sovpo_content.style.animation = 
        "fadin_cont 0.5s 1s forwards cubic-bezier(0.87, 0, 0.13, 1)"
        sovpo_img.style.animation = 
        "fadin_cont 0.5s 1s forwards cubic-bezier(0.87, 0, 0.13, 1)"
    }



    const roadmap_sec = document.querySelector(".roadmap");
    const roadmap_sec_Y = roadmap_sec.getBoundingClientRect().y;
    const roadmap_header_text = document.querySelector(".roadmap_header_text");


    if(clientHeight>roadmap_sec_Y){
        roadmap_header_text.style.animation = 
        "slideUp 0.8s 0.3s forwards cubic-bezier(0.92, 0, 0.13, 1)";
    }


    const rigth_slide = document.querySelector(".rigth_slide");
    const rigth_slide_Y = rigth_slide.getBoundingClientRect().y;
    const app_content_header = document.querySelector(".app_content_header");
    const app_content_sub = document.querySelector(".app_content_sub");
    const download_app = document.querySelector(".download_app");

    if(clientHeight>rigth_slide_Y){
        rigth_slide.style.animation = 
        "rigth_up 1.8s 0.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        app_content_header.style.animation=
        "slideUp 1.1s forwards cubic-bezier(0.92, 0, 0.13, 1)"
        app_content_sub.style.animation=
        "fadin_about_top1 1.2s 0.2s forwards cubic-bezier(0.87, 0, 0.13, 1)"
        download_app.style.animation=
        "fadin_cont 0.5s 1s forwards cubic-bezier(0.87, 0, 0.13, 1)"
    }


    const meet_our_team = document.querySelector(".meet_our_team");
    const team = document.querySelector(".team")
    const team_Y = team.getBoundingClientRect().y;

    if(clientHeight>team_Y){
        meet_our_team.style.animation=
        "meet_team 2s forwards cubic-bezier(0.92, 0, 0.13, 1)"
    }



});

