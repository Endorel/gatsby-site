import { createGlobalStyle } from 'styled-components'
import * as fontfiles from '../webfonts/fonts'

export default createGlobalStyle`

    @font-face {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: normal;
        src: url(${fontfiles.GilroyNormalWoff});
    }

    body p {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: normal;
    }

`
