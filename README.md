Drupal Leaflet Search
=====================

Integrates the [leaflet-control-geocoder](https://github.com/perliedman/leaflet-control-geocoder) plugin with the Drupal leaflet module.


Usage
-----

Add the `$map_definition[plugins][search]` key to your map definition, and set the value to either `TRUE` for default options on an array of settings to be passed to the constructor of the javascript plugin.

    function MYMODULE_leaflet_map_info() {
      return array(
        'Map Name' => array(
          'label' => 'Some Label',
          'description' => t('Some Description'),
          'settings' => array(
            // ...
          ),
          'layers' => array(
            // ...
          ),
          'plugins' => array(
            'search' => array(
              'collapsed' => FALSE,
              'position' => 'topcenter',
              'noResultIcon' => TRUE,
            ),
          )
        ),
      );
    }
