import {AppProps} from 'next/app';
import {css, Global, ThemeProvider} from '@emotion/react';

const theme = {
    colors: {
        background: '#121212',
        guide: '#67CEC8',
        quiz: '#FFDF6B',
        code: '#9DD357',
    },
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Global
                styles={css`
                    html,
                    body,
                    #__next {
                        display: flex;
                        //
                        width: 100%;
                        height: 100%;
                        //
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        color: #222222;
                        box-sizing: border-box;
                        font-family: 'Inter', sans-serif;
                        /* background: linear-gradient(#b5c3ce, #e3fcfe); */
                        background: linear-gradient(#121214, #27272e);
                    }
                `}
            />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
