
/* Menu script */

    const header = document.getElementById('header');
    const menu_btn = document.getElementById('js-menu-btn')
    const header_height = header.clientHeight

    menu_btn.onclick = function() {
        const is_close = header.clientHeight === header_height
        if(is_close) {
            header.style.height = 'auto'
        }
        else {
            header.style.height = null
        }
    }

    const menu_Items = document.querySelectorAll('#nav li a[href*="#"]')
    for(var i = 0 ; i < menu_Items.length ; i++) {
         var menu_Item = menu_Items[i] 

        menu_Item.onclick = function(event)
         {
            var is_parent_menu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-nav')
            if (is_parent_menu)
             {
                event.preventDefault()
             }
            else
             {
            header.style.height = null
             }
          }
    }

/* Slide script */
    var slideText1 = document.getElementsByClassName("js-slide-text-1")
    var slideText2 = document.getElementsByClassName("js-slide-text-2")
    var slideImage = document.getElementById("slider")
    var slideMainText = ["Los Angeles", "New York", "Chicago"]
    var slideSubText = ["We had the best time playing at Venice Beach!", "The atmosphere in New York is lorem ipsum.", "Thank you, Chicago - A night we won't forget."]


    var i = 0
    function changeImageAndText() {
        if(i == slideMainText.length) i = 0;
        switch(i)
        {
            case 0: 
            slideImage.classList.add("slide-img-1");
            slideImage.classList.remove("slide-img-3");
            break;
            case 1: 
            slideImage.classList.add("slide-img-2");
            slideImage.classList.remove("slide-img-1");
            break;
            case 2: 
            slideImage.classList.add("slide-img-3");
            slideImage.classList.remove("slide-img-2");
            break;
        }

        slideText1[0].innerHTML = slideMainText[i];
        slideText2[0].innerHTML = slideSubText[i];
        i++;
        setTimeout(changeImageAndText, 4000);
    }

    changeImageAndText();

    
/* Modal script */

    const buyBtns = document.querySelectorAll('.js-buy-btn')
    const modal = document.querySelector('.js-modal')
    const modal_exit = document.querySelector('.js-modal-exit')
    const modal_close = document.querySelector('.modal-btn-exit')
    const modal_container = document.querySelector('.js-modal-container')

    function show_modal() {
        modal.classList.add('open-modal')
    }

    function hide_modal() {
        modal.classList.remove('open-modal')
    }

    for(const buyBtn of buyBtns) {
        buyBtn.addEventListener('click',show_modal)
    }
    modal_exit.addEventListener('click',hide_modal)
    modal_close.addEventListener('click',hide_modal)
    modal.addEventListener('click',hide_modal)
    modal_container.addEventListener('click',function(event) {
        event.stopPropagation()
    })
