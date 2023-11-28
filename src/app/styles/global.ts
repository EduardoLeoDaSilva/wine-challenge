import { createStitches } from "@stitches/react";
import { globalCss } from ".";
import { Noto_Sans } from 'next/font/google'

const font = Noto_Sans({
        weight: ['400', '700'],
        style: ['normal', 'italic'],
        subsets: ['latin'],
        display: 'swap',
})

export const gobalStyle = globalCss({
    '*' : {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily: font.style.fontFamily,
        fontSize: font.style.fontWeight
    },

    body : {
      backgroundColor: "$background"   
    }
})