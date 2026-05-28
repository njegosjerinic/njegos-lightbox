<?php

/**
 * Plugin Name: Njegos Lightbox
 */

if (!defined('ABSPATH')) {
    exit;
}

function njegosLightboxAssets()
{
    wp_enqueue_style(
        'njegos-lightbox-style',
        plugin_dir_url(__FILE__) . 'assets/lightbox.css',
        [],
        '1.0'
    );

    wp_enqueue_script(
        'njegos-lightbox-script',
        plugin_dir_url(__FILE__) . 'assets/lightbox.js',
        [],
        '1.0',
        true
    );
}

add_action('wp_enqueue_scripts', 'njegosLightboxAssets');