<?php
/**
 * Plugin Name:       DLX Set Top 6
 * Plugin URI:        https://github.com/DLXPlugins/dlx-set-top-6
 * Description:       Set the top 6 items when you insert a block using the block editor.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            DLX Plugins
 * Author URI:        https://dlxplugins.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dlx-set-top-6
 * Domain Path:       /languages
 *
 * @package DLXTop6
 */

namespace DLXPlugins\DLXTop6;

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );

function enqueue_block_editor_assets() {
	// Load index asset file.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';


	wp_enqueue_script(
		'dlx-set-top-6',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-data', 'wp-blocks', 'wp-editor', 'wp-plugins' ),
		$asset_file['version'],
		true
	);
}
