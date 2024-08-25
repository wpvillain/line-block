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
import { PanelBody, ColorPalette, SelectControl, RangeControl } from '@wordpress/components';

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
    const { width, borderColor, borderStyle, borderWidth } = attributes;
    const blockProps = useBlockProps({
        style: {
            width,
            borderTopColor: borderColor,
            borderTopStyle: borderStyle,
            borderTopWidth: borderWidth
        }
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Line Settings", "hr-line")} initialOpen={true}>
                    <RangeControl
                        label={__("Width (%)", "hr-line")}
                        value={parseInt(width)}
                        onChange={(newWidth) => setAttributes({ width: `${newWidth}%` })}
                        min={10}
                        max={100}
                    />
                    <RangeControl
                        label={__("Border Width (px)", "hr-line")}
                        value={parseInt(borderWidth)}
                        onChange={(newBorderWidth) => setAttributes({ borderWidth: `${newBorderWidth}px` })}
                        min={1}
                        max={10}
                    />
                    <SelectControl
                        label={__("Border Style", "hr-line")}
                        value={borderStyle}
                        options={[
                            { label: __("Solid", "hr-line"), value: "solid" },
                            { label: __("Dashed", "hr-line"), value: "dashed" },
                            { label: __("Dotted", "hr-line"), value: "dotted" }
                        ]}
                        onChange={(newBorderStyle) => setAttributes({ borderStyle: newBorderStyle })}
                    />
                    <ColorPalette
                        label={__("Border Color", "hr-line")}
                        value={borderColor}
                        onChange={(newColor) => setAttributes({ borderColor: newColor })}
                    />
                </PanelBody>
            </InspectorControls>
            <hr {...blockProps} />
        </>
    );
}
