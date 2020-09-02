/* ONE PAGE NAVIGATE */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset
    });
    
/* EXPEND MENU */

    var CloseMu = $('.close-menu');
    var ExMu = $('.mainmenu-expand');
    var ExMuOp = $('.expand-menu-open');
    CloseMu.on('click', function(){
        $(this).parent(ExMu).removeClass('slide_right');
    });
    ExMuOp.on('click', function(){
        CloseMu.parent(ExMu).addClass('slide_right');
    });
    