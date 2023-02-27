import styled from '@emotion/styled';

export const MarkdownPreview = styled.main<{padding: string}>`
    width: 100%;
    padding: ${props => props.padding};
    overflow: auto;
    flex-grow: 1;
    box-sizing: border-box;
    h2 {
        font-size: 2.2rem;
        text-align: center;
        font-family: 'Dosis', sans-serif;
        font-weight: 500;
    }
    h3 {
        font-family: 'Dosis', sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
    }
    p,
    ul {
        color: #aaaaaa;
        line-height: 30px;
    }
    strong {
        color: #eeeeee;
    }
    img {
        margin: auto;
        display: flex;
        max-width: 100%;
    }
    pre {
        padding: 10px 20px;
        overflow: auto;
        border-radius: 5px;
        background-color: #1e1e1e;
    }
    code {
        color: #d4d4d4;
        font-size: 14px;
        font-family: Menlo, Monaco, 'Courier New', monospace;
        line-height: 24px;
        background-color: #1e1e1e;
    }
    a {
        color: #67cec8;
    }
`;
