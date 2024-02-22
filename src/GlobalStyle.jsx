import { createGlobalStyle } from "styled-components";
import PretendardMedium from "./assets/fonts/pretendard-medium.otf";
import PretendardBold from "./assets/fonts/pretendard-bold.otf";

export const GlobalStyle = createGlobalStyle`html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {

@font-face {
    font-family: 'Pretendard-Medium';
    src: url(${PretendardMedium}) format('otf');
    font-weight: 500;
}

@font-face {
    font-family: 'Pretendard-Bold';
    src: url(${PretendardBold}) format('woff');
    font-weight: 700;
}


	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
	font-size: 10px;
    @media (max-width: 768px) {
        font-size: 8px;
    }
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`;
