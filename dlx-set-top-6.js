( function( wp ) {
	console.log( wp );
    const { updateBlockListSettings } = wp.data.dispatch( 'core/block-editor' );

    updateBlockListSettings( null, {
        prioritizedInserterBlocks: [
            'core/paragraph',
            'core/image',
            'core/heading',
            'core/list',
            'core/quote',
            'core/gallery'
        ],
    } );
} )( window.wp );
