define([
    'jquery',
    'Encomage_OwlCarousel/js/plugin/owl.carousel.min'
], function ($) {
    'use strict';

    return function (params, element) {
        $(element).owlCarousel(params);
    }

});
