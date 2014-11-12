(function ($) {
    $(document).on('leaflet.map', function (e, settings, lMap) {
        if (settings.plugins.search) {
            var geocoder = L.Control.geocoder(settings.plugins.search).addTo(lMap);
        }
    });
})(jQuery);
