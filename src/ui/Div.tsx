import styled from '@emotion/styled';

const alignToCss = {start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch'};
const distributeToCss = {start: 'flex-start', center: 'center', end: 'flex-end', around: 'space-around', between: 'space-between', evenly: 'space-evenly'};

type CSSSize = '0' | `${number}px` | `${number}%` | 'fit-content';
type CSSMargin = '0' | `${number}px` | `${number}%` | 'auto';
type CSSPadding = '0' | `${number}px` | `${number}%`;

interface DivProps {
    hidden?: boolean;
    //
    grow?: boolean;
    align?: keyof typeof alignToCss;
    shrink?: boolean;
    direction?: 'x' | 'y';
    distribute?: keyof typeof distributeToCss;
    //
    margin?: CSSMargin | `${CSSMargin} ${CSSMargin}` | `${CSSMargin} ${CSSMargin} ${CSSMargin} ${CSSMargin}`;
    padding?: CSSPadding | `${CSSPadding} ${CSSPadding}` | `${CSSPadding} ${CSSPadding} ${CSSPadding} ${CSSPadding}`;
    //
    width?:
        | CSSSize // width
        | `${CSSSize} ${CSSSize}` // width max-width
        | `${CSSSize} ${CSSSize} ${CSSSize}`; // width max-width min-width: ;
    height?:
        | CSSSize // height
        | `${CSSSize} ${CSSSize}` // height max-height
        | `${CSSSize} ${CSSSize} ${CSSSize}`; // height max-height min-height
    //
    overflow?: 'auto' | 'hidden' | 'visible';
    spacing?: `${number}px`;
}

export const Div = styled.div<DivProps>`
    display: ${props => (props.hidden ? 'none' : 'flex')};
    flex-grow: ${props => (props.grow ? 1 : undefined)};
    flex-basis: ${props => (props.grow ? '0%' : undefined)};
    flex-shrink: ${props => (props.shrink ? undefined : 0)};
    align-items: ${props => (props.align ? alignToCss[props.align] : undefined)};
    flex-direction: ${props => (props.direction === 'y' ? 'column' : undefined)};
    justify-content: ${props => (props.distribute ? distributeToCss[props.distribute] : undefined)};
    //
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    //
    ${props => widthToCss(props.width)}
    ${props => heightToCss(props.height)}
    //
    overflow: ${props => props.overflow};
    box-sizing: border-box;
    ${props => (props.spacing === undefined ? undefined : props.direction === 'y' ? verticalSpacing(props.spacing) : horizontalSpacing(props.spacing))}
`;

const verticalSpacing = (spacing: `${number}px`) => `
    & > *:not(:last-child) {
        margin-bottom: ${spacing};
    }
`;

const horizontalSpacing = (spacing: `${number}px`) => `
    & > *:not(:last-child) {
        margin-right: ${spacing};
    }
`;

const widthToCss = (width: DivProps['width']) => {
    if (width === undefined) {
        return undefined;
    }
    const widths = width.split(' ');
    let cssResult = `width: ${widths[0]};`;
    if (widths.length > 1) {
        cssResult += `max-width: ${widths[1]};`;
    }
    if (widths.length > 2) {
        cssResult += `min-width: ${widths[2]};`;
    }
    return cssResult;
};

const heightToCss = (height: DivProps['height']) => {
    if (height === undefined) {
        return undefined;
    }
    const heights = height.split(' ');
    let cssResult = `height: ${heights[0]};`;
    if (heights.length > 1) {
        cssResult += `max-height: ${heights[1]};`;
    }
    if (heights.length > 2) {
        cssResult += `min-height: ${heights[2]};`;
    }
    return cssResult;
};
