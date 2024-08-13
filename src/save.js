/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { thickness, color, width, borderStyle } = attributes;

	return (
		<div {...useBlockProps.save()} className="wp-block-wpvillain-line-block">
			<hr
				className="custom-line-block"
				style={{
					borderTop: `${thickness}px ${borderStyle} ${color || '#e0bd5f'}`,
					width: width,
				}}
			/>
		</div>
	);
}
