import React, { useEffect } from 'react';
import { registerPlugin } from '@wordpress/plugins';
import { useDispatch, useSelect } from '@wordpress/data';
import { store } from '@wordpress/block-editor';

registerPlugin( 'dlx-set-top-6', {
	icon: null,
	render: () => {
		const { updateBlockListSettings } = useDispatch( store, 'core/block-editor' );
		const { getBlocks, getBlockHierarchyRootClientId, getSelectedBlockClientId } = useSelect( store, 'core/block-editor' );
		useEffect( () => {
			console.log( 'blah' );
			const blocks = getBlocks();
			const rootClientId = getSelectedBlockClientId();
			console.log( rootClientId );
			updateBlockListSettings(rootClientId, {
				prioritizedInserterBlocks: [
					'core/paragraph',
					'core/image',
					'core/heading',
					'core/list',
					'core/quote',
					'core/gallery'
				],
			} );
		}, [ getSelectedBlockClientId ] );
		return null;
	},
})