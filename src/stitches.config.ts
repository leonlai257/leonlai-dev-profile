import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const NAVBAR_HEIGHT = '130px';
export const NAVBAR_MOBILE_HEIGHT = '89px';

export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    styled,
    theme,
    keyframes,
} = createStitches({
    theme: {
        fonts: {
            system: 'system-ui',
            ubuntu: '"Ubuntu", sans-serif',
        },
        colors: {
            bgPrimary: '#1a1a1a',
            bgPrimaryLight: '#1a1a1a',
            textPrimary: '#ffffff',
            textSecondary: '#1a1a1a',
            primary: '#aaaaaa',
            background: '#171717',
            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'white',

            charcoal: '#171717',
            canvas: 'hsl(0,0%,93%)',
            panel: 'white',
            shadowLight: 'hsla(206,22%,7%,.35)',
            shadowDark: 'hsla(206,22%,7%,.2)',
            transparentExtreme: 'hsla(0,0%,0%,.97)',

            disabledBackground: '#838383',
            disabledBg: '#555555',

            gray100: 'hsl(206, 20%, 98.8%)',
            gray200: 'hsl(206, 14%, 96.0%)',
            gray300: 'hsl(206, 13%, 93.7%)',
            gray400: 'hsl(206, 12%, 92.0%)',
            gray500: 'hsl(206, 12%, 89.5%)',
            gray600: 'hsl(206, 11%, 85.2%)',
            gray700: 'hsl(206, 10%, 80.0%)',
            gray800: 'hsl(206, 6%, 56.1%)',
            gray900: 'hsl(206, 6%, 43.9%)',

            red100: 'hsl(351, 100%, 98.5%)',
            red200: 'hsl(351, 89%, 96.0%)',
            red300: 'hsl(352, 86%, 93.4%)',
            red400: 'hsl(352, 85%, 90.3%)',
            red500: 'hsl(353, 84%, 86.4%)',
            red600: 'hsl(354, 83%, 80.7%)',
            red700: 'hsl(355, 82%, 71.7%)',
            red800: 'hsl(356, 91%, 59.0%)',
            red900: 'hsl(356, 80%, 47.1%)',

            crimson100: 'hsl(332, 100%, 98.5%)',
            crimson200: 'hsl(332, 87%, 96.0%)',
            crimson300: 'hsl(333, 84%, 93.3%)',
            crimson400: 'hsl(333, 83%, 90.2%)',
            crimson500: 'hsl(334, 82%, 86.3%)',
            crimson600: 'hsl(335, 81%, 80.3%)',
            crimson700: 'hsl(336, 80%, 70.0%)',
            crimson800: 'hsl(336, 88%, 56.1%)',
            crimson900: 'hsl(336, 79%, 46.1%)',

            pink100: 'hsl(322, 100%, 98.5%)',
            pink200: 'hsl(322, 90%, 95.8%)',
            pink300: 'hsl(322, 87%, 93.0%)',
            pink400: 'hsl(322, 86%, 89.9%)',
            pink500: 'hsl(322, 85%, 86.2%)',
            pink600: 'hsl(322, 85%, 80.3%)',
            pink700: 'hsl(322, 84%, 68.9%)',
            pink800: 'hsl(322, 75%, 60.0%)',
            pink900: 'hsl(322, 80%, 43.9%)',

            purple100: 'hsl(280, 100%, 99.0%)',
            purple200: 'hsl(279, 75%, 95.7%)',
            purple300: 'hsl(278, 71%, 92.4%)',
            purple400: 'hsl(278, 69%, 89.0%)',
            purple500: 'hsl(277, 68%, 85.2%)',
            purple600: 'hsl(275, 67%, 80.2%)',
            purple700: 'hsl(272, 66%, 68.1%)',
            purple800: 'hsl(272, 53%, 50.0%)',
            purple900: 'hsl(272, 62%, 44.1%)',

            violet100: 'hsl(252, 100%, 99.0%)',
            violet200: 'hsl(252, 87%, 96.4%)',
            violet300: 'hsl(252, 85%, 93.7%)',
            violet400: 'hsl(252, 84%, 90.7%)',
            violet500: 'hsl(252, 83%, 86.8%)',
            violet600: 'hsl(252, 83%, 80.8%)',
            violet700: 'hsl(252, 82%, 72.2%)',
            violet800: 'hsl(252, 62%, 54.9%)',
            violet900: 'hsl(250, 55%, 48.0%)',

            indigo100: 'hsl(226, 100%, 99.0%)',
            indigo200: 'hsl(226, 83%, 96.3%)',
            indigo300: 'hsl(226, 80%, 93.3%)',
            indigo400: 'hsl(226, 79%, 89.8%)',
            indigo500: 'hsl(226, 78%, 85.4%)',
            indigo600: 'hsl(226, 77%, 79.1%)',
            indigo700: 'hsl(226, 76%, 70.2%)',
            indigo800: 'hsl(226, 68%, 56.1%)',
            indigo900: 'hsl(226, 70%, 44.1%)',

            blue100: 'hsl(206, 100%, 98.8%)',
            blue200: 'hsl(206, 98%, 95.8%)',
            blue300: 'hsl(206, 97%, 92.6%)',
            blue400: 'hsl(206, 97%, 88.9%)',
            blue500: 'hsl(206, 97%, 83.9%)',
            blue600: 'hsl(206, 97%, 76.7%)',
            blue700: 'hsl(206, 97%, 68.3%)',
            blue800: 'hsl(206, 100%, 50.0%)',
            blue900: 'hsl(211, 100%, 43.9%)',

            turquoise100: 'hsl(185, 78%, 97.8%)',
            turquoise200: 'hsl(185, 73%, 93.2%)',
            turquoise300: 'hsl(186, 71%, 88.2%)',
            turquoise400: 'hsl(186, 71%, 82.8%)',
            turquoise500: 'hsl(187, 70%, 76.4%)',
            turquoise600: 'hsl(187, 69%, 68.2%)',
            turquoise700: 'hsl(188, 68%, 59.2%)',
            turquoise800: 'hsl(190, 88%, 40.0%)',
            turquoise900: 'hsl(190, 90%, 30.0%)',

            teal100: 'hsl(165, 100%, 97.5%)',
            teal200: 'hsl(166, 73%, 93.1%)',
            teal300: 'hsl(166, 66%, 88.1%)',
            teal400: 'hsl(167, 63%, 82.3%)',
            teal500: 'hsl(168, 60%, 75.1%)',
            teal600: 'hsl(170, 57%, 65.2%)',
            teal700: 'hsl(172, 54%, 50.0%)',
            teal800: 'hsl(173, 82%, 36.1%)',
            teal900: 'hsl(174, 100%, 24.5%)',

            green100: 'hsl(130, 100%, 97.5%)',
            green200: 'hsl(131, 72%, 94.0%)',
            green300: 'hsl(132, 63%, 89.8%)',
            green400: 'hsl(134, 58%, 84.6%)',
            green500: 'hsl(136, 55%, 78.0%)',
            green600: 'hsl(139, 52%, 69.0%)',
            green700: 'hsl(144, 48%, 55.8%)',
            green800: 'hsl(145, 62%, 41.0%)',
            green900: 'hsl(148, 69%, 30.0%)',

            lime100: 'hsl(85, 86%, 96.5%)',
            lime200: 'hsl(84, 79%, 92.6%)',
            lime300: 'hsl(83, 76%, 87.3%)',
            lime400: 'hsl(82, 74%, 80.7%)',
            lime500: 'hsl(81, 73%, 72.6%)',
            lime600: 'hsl(79, 72%, 62.8%)',
            lime700: 'hsl(76, 74%, 48.9%)',
            lime800: 'hsl(77, 85%, 47.1%)',
            lime900: 'hsl(78, 80%, 25.1%)',

            yellow100: 'hsl(55, 100%, 95.5%)',
            yellow200: 'hsl(55, 93%, 89.9%)',
            yellow300: 'hsl(54, 90%, 83.6%)',
            yellow400: 'hsl(54, 89%, 76.5%)',
            yellow500: 'hsl(53, 88%, 67.5%)',
            yellow600: 'hsl(52, 88%, 57.1%)',
            yellow700: 'hsl(52, 88%, 51.7%)',
            yellow800: 'hsl(52, 99%, 52.0%)',
            yellow900: 'hsl(40, 80%, 32.0%)',

            orange100: 'hsl(40, 100%, 97.0%)',
            orange200: 'hsl(40, 97%, 93.2%)',
            orange300: 'hsl(39, 97%, 88.7%)',
            orange400: 'hsl(39, 96%, 83.0%)',
            orange500: 'hsl(38, 96%, 75.5%)',
            orange600: 'hsl(37, 96%, 65.5%)',
            orange700: 'hsl(36, 96%, 53.9%)',
            orange800: 'hsl(38, 100%, 53.9%)',
            orange900: 'hsl(27, 65%, 35.9%)',

            brown100: 'hsl(30, 75%, 98.0%)',
            brown200: 'hsl(30, 67%, 94.0%)',
            brown300: 'hsl(30, 66%, 90.0%)',
            brown400: 'hsl(29, 64%, 85.7%)',
            brown500: 'hsl(29, 64%, 80.5%)',
            brown600: 'hsl(29, 62%, 72.6%)',
            brown700: 'hsl(28, 61%, 61.6%)',
            brown800: 'hsl(28, 48%, 52.0%)',
            brown900: 'hsl(20, 50%, 37.1%)',

            bronze100: 'hsl(18, 100%, 98.5%)',
            bronze200: 'hsl(18, 57%, 94.1%)',
            bronze300: 'hsl(18, 50%, 89.8%)',
            bronze400: 'hsl(17, 46%, 85.3%)',
            bronze500: 'hsl(17, 44%, 80.0%)',
            bronze600: 'hsl(17, 42%, 73.0%)',
            bronze700: 'hsl(16, 39%, 64.0%)',
            bronze800: 'hsl(17, 28%, 52.0%)',
            bronze900: 'hsl(15, 30%, 43.1%)',

            gold100: 'hsl(50, 75%, 98.0%)',
            gold200: 'hsl(49, 52%, 93.8%)',
            gold300: 'hsl(47, 48%, 89.6%)',
            gold400: 'hsl(46, 45%, 85.1%)',
            gold500: 'hsl(44, 43%, 79.6%)',
            gold600: 'hsl(41, 41%, 71.4%)',
            gold700: 'hsl(36, 37%, 60.0%)',
            gold800: 'hsl(36, 30%, 52.0%)',
            gold900: 'hsl(36, 26%, 40.0%)',
        },
        space: {
            navbar: NAVBAR_HEIGHT,
            navbarMobile: NAVBAR_MOBILE_HEIGHT,
            0: '0px',
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem', // 28px
            8: '2rem', // 32px
            9: '2.25rem', // 36px
            10: '2.5rem', // 40px
            11: '2.75rem', // 45px
            12: '3rem', // 48px
            14: '3.5rem', // 56px
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
        },
        lineHeights: {
            'leading-3': '.75rem' /* 12px */,
            'leading-4': '1rem' /* 16px */,
            'leading-5': '1.25rem' /* 20px */,
            'leading-6': '1.5rem' /* 24px */,
            'leading-7': '1.75rem' /* 28px */,
            'leading-8': '2rem' /* 32px */,
            'leading-9': '2.25rem' /* 36px */,
            'leading-10': '2.5rem' /* 40px */,
            'leading-none': 1,
            'leading-tight': 1.25,
            'leading-snug': 1.375,
            'leading-normal': 1.5,
            'leading-relaxed': 1.625,
            'leading-loose': 2,
        },
        sizes: {
            navbar: NAVBAR_HEIGHT,
            navbarMobile: NAVBAR_MOBILE_HEIGHT,
            0: '0rem',
            none: ' none',
            xs: ' 20rem', // 480px
            sm: ' 24rem', // 576px
            md: ' 28rem', // 768px
            lg: ' 32rem', // 992px
            xl: ' 36rem', // 1200px
            xl2: ' 42rem', // 1440px
            xl3: ' 48rem', // 1920px
            xl4: ' 56rem', // 2560px
            xl5: ' 64rem', // 3840px
            xl6: ' 72rem', // 5120px
            xl7: ' 80rem', // 7680px
            full: '100%',
        },
        fontSizes: {
            xs3: '0.5625rem', // 9px
            xs2: '0.625rem', // 10px
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            xl2: '1.5rem', // 24px
            xl3: '1.875rem', // 30px
            xl4: '2.25rem', // 36px
            xl5: '3rem', // 48px
            xl6: '3.75rem', // 60px
            xl7: '4.5rem', // 72px
            xl8: '6rem', // 96px
            xl9: '8rem', // 128px
        },
        letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.4em',
        },
        radii: {
            sm: '0.125rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            xl2: '1rem',
            xl3: '1.5rem',
            full: '9999px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
    },
    utils: {
        p: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingTop: value,
            paddingBottom: value,
            paddingLeft: value,
            paddingRight: value,
        }),
        pt: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingTop: value,
        }),
        pr: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingRight: value,
        }),
        pb: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingBottom: value,
        }),
        pl: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingLeft: value,
        }),
        px: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),

        m: (value: Stitches.PropertyValue<'margin'>) => ({
            marginTop: value,
            marginBottom: value,
            marginLeft: value,
            marginRight: value,
        }),
        mt: (value: Stitches.PropertyValue<'margin'>) => ({
            marginTop: value,
        }),
        mr: (value: Stitches.PropertyValue<'margin'>) => ({
            marginRight: value,
        }),
        mb: (value: Stitches.PropertyValue<'margin'>) => ({
            marginBottom: value,
        }),
        ml: (value: Stitches.PropertyValue<'margin'>) => ({
            marginLeft: value,
        }),
        mx: (value: Stitches.PropertyValue<'margin'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.PropertyValue<'margin'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        mw: (value: Stitches.PropertyValue<'maxWidth'>) => ({
            maxWidth: value,
        }),
        mh: (value: Stitches.PropertyValue<'maxHeight'>) => ({
            maxHeight: value,
        }),
        h: (value: Stitches.PropertyValue<'height'>) => ({
            height: value,
        }),
        w: (value: Stitches.PropertyValue<'width'>) => ({
            width: value,
        }),

        ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
            textAlign: value,
        }),

        fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
            flexDirection: value,
        }),
        fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({
            flexWrap: value,
        }),

        ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
            alignItems: value,
        }),
        ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
            alignContent: value,
        }),
        as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
            alignSelf: value,
        }),
        jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
            justifyContent: value,
        }),
        js: (value: Stitches.PropertyValue<'justifySelf'>) => ({
            justifySelf: value,
        }),
        f: (value: Stitches.PropertyValue<'flex'>) => ({ flex: value }),
        fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({
            flexGrow: value,
        }),
        fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
            flexShrink: value,
        }),
        fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
            flexBasis: value,
        }),

        bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
            boxShadow: value,
        }),

        lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
            lineHeight: value,
        }),

        ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
            overflowX: value,
        }),
        oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
            overflowY: value,
        }),

        pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
            pointerEvents: value,
        }),
        us: (value: Stitches.PropertyValue<'userSelect'>) => ({
            userSelect: value,
        }),

        br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
            borderRadius: value,
        }),

        size: (value: Stitches.PropertyValue<'width'>) => ({
            width: value,
            height: value,
        }),

        linearGradient: (value: any) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),

        hexa: (value: Record<string, string | undefined>) => value,
    },
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
});

export const globalStyles = globalCss({
    '*': {
        fontFamily: 'inherit',
    },
    'html, body': {
        fontFamily: '$ubuntu',
        color: '$textPrimary',
        backgroundColor: '$background',
        margin: '0',
        padding: '0',
        WebkitFontSmoothing: 'antialiased',
        scrollBehavior: 'smooth',
    },
    '#__next': {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    '@font-face': [
        {
            fontFamily: 'Ubuntu',
            src: `local("Ubuntu"), url("/fonts/Ubuntu-Bold.ttf"), url("/fonts/Ubuntu-Bold.woff"), url("/fonts/Ubuntu-Bold.woff2"), url("/fonts/Ubuntu-Bold.eot"), url("/fonts/Ubuntu-Bold.svg")`,
            fontWeight: 'bold',
            fontStyle: 'normal',
        },
        {
            fontFamily: 'Ubuntu',
            src: `local("Ubuntu"), url("/fonts/Ubuntu-Regular.ttf"), url("/fonts/Ubuntu-Regular.woff"), url("/fonts/Ubuntu-Regular.woff2"), url("/fonts/Ubuntu-Regular.eot"), url("/fonts/Ubuntu-Regular.svg")`,
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        {
            fontFamily: 'Ubuntu',
            src: `local("Ubuntu"), url("/fonts/Ubuntu-Light.ttf"), url("/fonts/Ubuntu-Light.woff"), url("/fonts/Ubuntu-Light.woff2"), url("/fonts/Ubuntu-Light.eot"), url("/fonts/Ubuntu-Light.svg")`,
            fontWeight: 'light',
            fontStyle: 'normal',
        },
    ],
});
