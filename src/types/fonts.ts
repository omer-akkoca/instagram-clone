interface IFontFamily {
    100: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
    th: string,
    li: string,
    r: string,
    m: string,
    sb: string,
    b: string,
    xb: string,
    bl: string
}

export type fontFamilyType = "100" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 
                        "th" | "li" | "r" | "m" | "sb" | "b" | "xb" | "bl"

export interface IFontSize{
    xxxxxl: number;
    xxxxl:  number;
    xxxl:  number;
    xxl:  number;
    xl:  number;
    ld:  number;
    l:  number;
    dd:  number;
    dc:  number;
    d:  number;
    mm:  number;
    m:  number;
    smed:  number;
    s:  number;
    xs:  number;
}

export type fontSizeType = "xxxxxl" | "xxxxl" | "xxxl" | "xxl" | "xl" | "ld" | "l" | "dd" | "dc" | "d" | "mm" | "m" | "smed" | "s" | "xs"

export type IRoboto = IFontFamily;