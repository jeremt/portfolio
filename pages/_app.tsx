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
                        background: linear-gradient(#1f202f, #424351);
                    }
                `}
            />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
