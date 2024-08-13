/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ColorPalette, TextControl, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { thickness, color, width, borderStyle } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Line Settings', 'line-block')}>
					<RangeControl
						label={__('Thickness', 'line-block')}
						value={thickness}
						onChange={(value) => setAttributes({ thickness: value })}
						min={1}
						max={20}
					/>
					<ColorPalette
						value={color}
						onChange={(value) => setAttributes({ color: value || '#e0bd5f' })}
					/>
					<TextControl
						label={__('Width', 'line-block')}
						value={width}
						onChange={(value) => setAttributes({ width: value })}
						help={__('Set the width as a percentage or in pixels (e.g., 100% or 300px).')}
					/>
					<SelectControl
						label={__('Border Style', 'line-block')}
						value={borderStyle}
						options={[
							{ label: __('Solid', 'line-block'), value: 'solid' },
							{ label: __('Dotted', 'line-block'), value: 'dotted' },
							{ label: __('Dashed', 'line-block'), value: 'dashed' },
						]}
						onChange={(value) => setAttributes({ borderStyle: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<hr
					className="custom-line-block"
					style={{
						borderTop: `${thickness}px ${borderStyle} ${color || '#e0bd5f'}`,
						width: width,
					}}
				/>
			</div>
		</>
	);
}