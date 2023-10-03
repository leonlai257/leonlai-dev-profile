type utilsInput = string | [string?, string?, string?, string?, string?] | [number?, number?, number?, number?, number?]

interface TraitInterface {
    [key: string]: string | number
}

interface TraitsInterface {
    '@greater-sm'?: TraitInterface
    '@greater-md'?: TraitInterface
    '@greater-lg'?: TraitInterface
    '@greater-xl'?: TraitInterface
    [key: string]: string | number | TraitInterface | undefined
}

const responsiveInterpreter = (traitList: [string, utilsInput][]): TraitsInterface => {
    const traits: TraitsInterface = {}
    for (const [trait, value] of traitList) {
        if (typeof value !== 'object') {
            traits[trait] = value
        } else {
            const [sm] = value
            traits[trait] = sm
        }
    }
    for (const [trait, value] of traitList) {
        if (typeof value === 'object') {
            const [, md, lg, xl, xxl] = value
            if (md) {
                traits['@greater-sm'] = { ...traits['@greater-sm'], [trait]: md }
            }
            if (lg) {
                traits['@greater-md'] = { ...traits['@greater-md'], [trait]: lg }
            }
            if (xl) {
                traits['@greater-lg'] = { ...traits['@greater-lg'], [trait]: xl }
            }
            if (xxl) {
                traits['@greater-xl'] = { ...traits['@greater-xl'], [trait]: xxl }
            }
        }
    }
    return traits
}

const margin = {
    m: (value: utilsInput) => responsiveInterpreter([['margin', value]]),
    mt: (value: utilsInput) => responsiveInterpreter([['marginTop', value]]),
    mb: (value: utilsInput) => responsiveInterpreter([['marginBottom', value]]),
    ml: (value: utilsInput) => responsiveInterpreter([['marginLeft', value]]),
    mr: (value: utilsInput) => responsiveInterpreter([['marginRight', value]]),
    my: (value: utilsInput) =>
        responsiveInterpreter([
            ['marginTop', value],
            ['marginBottom', value],
        ]),
    mx: (value: utilsInput) =>
        responsiveInterpreter([
            ['marginLeft', value],
            ['marginRight', value],
        ]),
}

const padding = {
    p: (value: utilsInput) => responsiveInterpreter([['padding', value]]),
    pt: (value: utilsInput) => responsiveInterpreter([['paddingTop', value]]),
    pb: (value: utilsInput) => responsiveInterpreter([['paddingBottom', value]]),
    pl: (value: utilsInput) => responsiveInterpreter([['paddingLeft', value]]),
    pr: (value: utilsInput) => responsiveInterpreter([['paddingRight', value]]),
    py: (value: utilsInput) =>
        responsiveInterpreter([
            ['paddingTop', value],
            ['paddingBottom', value],
        ]),
    px: (value: utilsInput) =>
        responsiveInterpreter([
            ['paddingRight', value],
            ['paddingLeft', value],
        ]),
}

const font = {
    text: (value: utilsInput) => responsiveInterpreter([['fontSize', value]]),
    font: (value: utilsInput) => responsiveInterpreter([['fontWeight', value]]),
    line: (value: utilsInput) => responsiveInterpreter([['lineHeight', value]]),
}

const border = {
    rounded: (value: utilsInput) => responsiveInterpreter([['borderRadius', value]]),
}

const size = {
    h: (value: utilsInput) => responsiveInterpreter([['height', value]]),
    minH: (value: utilsInput) => responsiveInterpreter([['minHeight', value]]),
    maxH: (value: utilsInput) => responsiveInterpreter([['maxHeight', value]]),
    w: (value: utilsInput) => responsiveInterpreter([['width', value]]),
    minW: (value: utilsInput) => responsiveInterpreter([['minWidth', value]]),
    maxW: (value: utilsInput) => responsiveInterpreter([['maxWidth', value]]),
    flexGap: (value: utilsInput) => responsiveInterpreter([['gap', value]]),
    gapX: (value: utilsInput) => responsiveInterpreter([['columnGap', value]]),
    gapY: (value: utilsInput) => responsiveInterpreter([['rowGap', value]]),
}

const position = {
    tp: (value: utilsInput) => responsiveInterpreter([['top', value]]),
    bt: (value: utilsInput) => responsiveInterpreter([['bottom', value]]),
    lt: (value: utilsInput) => responsiveInterpreter([['left', value]]),
    rt: (value: utilsInput) => responsiveInterpreter([['right', value]]),
}

const flex = {
    flexDir: (value: utilsInput) => responsiveInterpreter([['flexDirection', value]]),
    flexWrap: (value: utilsInput) => responsiveInterpreter([['flexWrap', value]]),
    flex: (value: utilsInput) => responsiveInterpreter([['flex', value]]),
    justify: (value: utilsInput) => responsiveInterpreter([['justifyContent', value]]),
    items: (value: utilsInput) => responsiveInterpreter([['alignItems', value]]),
    itemsSelf: (value: utilsInput) => responsiveInterpreter([['alignSelf', value]]),
}

const color = {
    bg: (value: utilsInput) => responsiveInterpreter([['backgroundColor', value]]),
    textColor: (value: utilsInput) => responsiveInterpreter([['color', value]]),
    // border: (value: utilsInput) => responsiveInterpreter([['borderColor', value]]),
}

const filter = {
    blur: (value: utilsInput) => responsiveInterpreter([['--tw-blur', value]]),
    brightness: (value: utilsInput) => responsiveInterpreter([['--tw-brightness', value]]),
    contrast: (value: utilsInput) => responsiveInterpreter([['--tw-contrast', value]]),
    shadow: (value: utilsInput) => responsiveInterpreter([['--tw-shadow-color', value]]),
}

const background = {
    gradient: (value: utilsInput) => responsiveInterpreter([['backgroundImage', value]]),
}

const animation = {
    anim: (value: utilsInput) => responsiveInterpreter([['animation', value]]),
}

export const utils = {
    ...margin,
    ...padding,
    ...font,
    ...border,
    ...size,
    ...position,
    ...flex,
    ...color,
    ...filter,
    ...background,
    ...animation,
}
