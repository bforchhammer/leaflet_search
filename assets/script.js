(function ($) {

    // Add option to not have a marker placed for the selected result.
    var markGeocode_callback = L.Control.Geocoder.prototype.markGeocode;
    L.Control.Geocoder.prototype.markGeocode = function (result) {
        if (this.options.noResultIcon) {
            // If we don't want a result icon, only fit bounds and remove any previous icons.
            this._map.fitBounds(result.bbox);
            if (this._geocodeMarker) {
                this._map.removeLayer(this._geocodeMarker);
            }
            return this;
        }
        // Else, execute default behavior
        return markGeocode_callback.apply(this, arguments);
    };

    $(document).on('drupal_leaflet.map.plugin.search', function (e, settings, lMap) {
        if (settings.plugins.search) {
            var geocoder_settings = settings.plugins.search;

            // 1) Initialise a "topcenter" control container.
            if (geocoder_settings.position == 'topcenter') {
                var $controlContainer = lMap._controlContainer,
                    nodes = $controlContainer.childNodes,
                    topCenter = false;

                for (var i = 0, len = nodes.length; i < len; i++) {
                    var klass = nodes[i].className;
                    if (/leaflet-top/.test(klass) && /leaflet-center/.test(klass)) {
                        topCenter = true;
                        break;
                    }
                }
                if (!topCenter) {
                    var tc = document.createElement('div');
                    tc.className += 'leaflet-top leaflet-center';
                    $controlContainer.appendChild(tc);
                    lMap._controlCorners.topcenter = tc;
                }
            }

            // 2) Create and attach geocoder control.
            var geocoder = L.Control.geocoder(geocoder_settings);
            geocoder.addTo(lMap);

        }
    });
})(jQuery);
