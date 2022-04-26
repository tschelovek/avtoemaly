$(document).ready(() => {
    /**
     * SLICK
     */
    $('.hero__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: false,
    });

    $('.cases__slider').slick({
        infinite: false,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-next">слудующий<br>кейс</button>',
        prevArrow: '<button type="button" class="slick-prev">предыдущий<br>кейс</button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ]

    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });

    /**
     * FILE INPUT
     */
    $('input[type=file] ~ label').on('click', (e) => {
        console.log('test')
        $(e.target).siblings('input').trigger('click');
    });

    $('input[type="file"]').on('change', (e) => {
        let input = $(e.target);
        let container = input.parents('form');
        let name = e.currentTarget.files[0].name;

        if (!name) {
            return;
        }

        container.find(('.form__file-name')).text(name);
        container.find('.btn__delete-file').css('display', 'inline-block');
    });

    $('.btn__delete-file').on('click', (e) => {
        let parent = $(e.target).parents('form');

        parent.find('input[type="file"]').val(null);
        parent.find('.form__file-name').text('');
        parent.find('.btn__delete-file').css('display', 'none');
    });

    /**
     * YANDEX.MAPS API
     */
});
