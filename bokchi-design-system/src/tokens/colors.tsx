import tokens from './tokens.json';

interface IColorChipProps {
    red: number;
    green: number;
    blue: number;
}

function getY(k: number, usedVector: string, vectorX: number, vectorY: number, red: number, green: number) {
    let initValue = red;
    let denominator = vectorX;
    
    if (usedVector == 'vectorX') {
        initValue = red;
        denominator = vectorX;
    } else if (usedVector == 'vectorY') {
        initValue = green;
        denominator = vectorY;
    }

    let ret = Math.floor(((k - initValue) / denominator) * vectorY + green)

    if (ret <= 0) {
        ret = 0
    } else if (ret >= 255) {
        ret = 255
    }

    return ret
}

function getZ(k: number, usedVector: string, vectorX: number, vectorY: number, vectorZ:number, red: number, green: number, blue: number) {
    let initValue = red;
    let denominator = vectorX;
    
    if (usedVector == 'vectorX') {
        initValue = red;
        denominator = vectorX;
    } else if (usedVector == 'vectorY') {
        initValue = green;
        denominator = vectorY;
    }

    let ret = Math.floor(((k - initValue) / denominator) * vectorZ + blue)

    if (ret <= 0) {
        ret = 0
    } else if (ret >= 255) {
        ret = 255
    }

    return ret
}

function calcColorToken(red: number, green: number, blue: number, vectorX: number, vectorY: number, vectorZ:number) {
    const arrayX = [];
    const arrayY = [];
    const arrayZ = [];

    if (vectorX != 0) {
        let diff = Math.floor(Math.abs(vectorX) / 6);       // Primary color chip은 메인 색상보다 밝은 6개의 컬러와 어두운 한 개의 컬러로 이루어져 있다.

        for (let i = 1; i < 7; i++) {                         // red에 해당하는 값 6개를 기록한다.
            if (i == 6) {
                arrayX.push(red);
                break;
            }

            arrayX.push(255 - diff * i);
        }
        
        for (let i = 0; i < 6; i++) {                           // green, blue에 해당하는 값 6개를 기록한다.
            let y = getY(arrayX[i], 'vectorX', vectorX, vectorY, red, green);
            let z = getZ(arrayX[i], 'vectorX', vectorX, vectorY, vectorZ, red, green, blue);
            arrayY.push(y);
            arrayZ.push(z);
        }

        if (red - Math.floor(diff * 2.25) >= 0) {
            arrayX.push(red - Math.floor(diff * 2.25))
            let y = getY(arrayX[arrayX.length - 1], 'vectorX', vectorX, vectorY, red, green);
            let z = getZ(arrayX[arrayX.length - 1], 'vectorX', vectorX, vectorY, vectorZ, red, green, blue);
            arrayY.push(y);
            arrayZ.push(z);
        } else {
            arrayX.push(0);
            let y = arrayY[arrayY.length - 1] - Math.abs(arrayY[arrayY.length - 2] - arrayY[arrayY.length - 1]);
            let z = getZ(arrayX[arrayX.length - 1], 'vectorX', vectorX, vectorY, vectorZ, red, green, blue);
            arrayY.push(y);
            arrayZ.push(z);
        }
    } else if (vectorY != 0) {  // r값은 고정이다.
        for (let i = 0; i < 7; i++) {
            arrayX.push(red);
        }

        let diff = Math.floor(Math.abs(vectorY) / 6);
        for (let i = 1; i < 7; i++) {
            if (i == 6) {
                arrayY.push(green);
                break;
            }

            arrayY.push(255 - diff * i);
        }

        if (((green - diff * 2.25) >= 0) && ((green - diff * 2.25) < (green - Math.floor(green / 2)))) {
            arrayY.push(green - diff * 2.25);
        } else if (((green - Math.floor(green / 2)) >= 0) && ((green - diff * 2.25) > (green - Math.floor(green / 2)))) {
            arrayY.push(green - Math.floor(green / 2));
        } else {
            arrayY.push(0);
        }

        for (let i = 0; i < 7; i++) {
            let z = getZ(arrayY[i], 'vectorY', vectorX, vectorY, vectorZ, red, green, blue);
            arrayZ.push(z);
        }
    } else {                    // r, g값은 고정이다. 
        for (let i = 0; i < 7; i++) {
            arrayX.push(red);
            arrayY.push(green);
        }

        let diff = Math.floor(Math.abs(vectorZ) / 6);
        for (let i = 1; i < 7; i++) {
            if (i == 6) {
                arrayZ.push(green);
                break;
            }

            arrayZ.push(255 - diff * i);
        }

        if (((blue - diff * 2.25) >= 0) && ((blue - diff * 2.25) < (blue - Math.floor(blue / 2)))) {
            arrayZ.push(blue - diff * 2.25);
        } else if (((blue - Math.floor(blue / 2)) >= 0) && ((blue - diff * 2.25) > (blue - Math.floor(blue / 2)))) {
            arrayZ.push(blue - Math.floor(blue / 2));
        } else {
            arrayZ.push(0);
        }
    }

    return [arrayX, arrayY, arrayZ]
}


function createColorPalette({red, green, blue}: IColorChipProps) {
    const vectorX = +red - 255;
    const vectorY = +green - 255;
    const vectorZ = +blue - 255;

    if ((vectorX === 0) && (vectorY === 0) && (vectorZ === 0)) {
        alert("red, green, blue 값이 모두 255일 수 없습니다.");
        throw new Error("Invalid parameters values");
    } else if ((red < 0) || (green < 0) || (blue < 0) || (red > 255) || (green > 255) || (blue > 255)) {
        alert("red, green, blue 값은 최소 0에서 최대 255까지 가능합니다.");
        throw new Error("Invalid parameters values");
    }

    let colorArray = calcColorToken(red, green, blue, vectorX, vectorY, vectorZ);

    return colorArray;
}

export function createColorToken() {
    let seedPrimary = tokens.colors.seed.primary.$value;
    let seedPrimaryArray = seedPrimary.slice(4, seedPrimary.length - 1).split(',');
    let seedSuccess = tokens.colors.seed.success.$value;
    let seedSuccessArray = seedSuccess.slice(4, seedSuccess.length - 1).split(',');
    let seedWarning = tokens.colors.seed.warning.$value;
    let seedWarningArray = seedWarning.slice(4, seedWarning.length - 1).split(',');
    let seedInfo = tokens.colors.seed.info.$value;
    let seedInfoArray = seedInfo.slice(4, seedInfo.length - 1).split(',');
    let seedError = tokens.colors.seed.error.$value;
    let seedErrorArray = seedError.slice(4, seedError.length - 1).split(',');

    let primaryColorChip = createColorPalette({red: parseInt(seedPrimaryArray[0]), green: parseInt(seedPrimaryArray[1]), blue: parseInt(seedPrimaryArray[2])});
    let successColorChip = createColorPalette({red: parseInt(seedSuccessArray[0]), green: parseInt(seedSuccessArray[1]), blue: parseInt(seedSuccessArray[2])});
    let warningColorChip = createColorPalette({red: parseInt(seedWarningArray[0]), green: parseInt(seedWarningArray[1]), blue: parseInt(seedWarningArray[2])});
    let infoColorChip = createColorPalette({red: parseInt(seedInfoArray[0]), green: parseInt(seedInfoArray[1]), blue: parseInt(seedInfoArray[2])});
    let errorColorChip = createColorPalette({red: parseInt(seedErrorArray[0]), green: parseInt(seedErrorArray[1]), blue: parseInt(seedErrorArray[2])});

    type colorType = {
        colorPrimaryBg: string,
        colorPrimaryBgHover: string,
        colorPrimaryBorder: string,
        colorPrimaryBorderHover: string,
        colorPrimaryHover: string,
        colorPrimary: string,
        colorPrimaryActive: string,
        colorPrimaryTextHover: string,
        colorPrimaryText: string,
        colorPrimaryTextActive: string,
        colorSuccessBg: string,
        colorSuccessBgHover: string,
        colorSuccessBorder: string,
        colorSuccessBorderHover: string,
        colorSuccessHover: string,
        colorSuccess: string,
        colorSuccessActive: string,
        colorSuccessTextHover: string,
        colorSuccessText: string,
        colorSuccessTextActive: string,
        colorWarningBg: string,
        colorWarningBgHover: string,
        colorWarningBorder: string,
        colorWarningBorderHover: string,
        colorWarningHover: string,
        colorWarning: string,
        colorWarningActive: string,
        colorWarningTextHover: string,
        colorWarningText: string,
        colorWarningTextActive: string,
        colorInfoBg: string,
        colorInfoBgHover: string,
        colorInfoBorder: string,
        colorInfoBorderHover: string,
        colorInfoHover: string,
        colorInfo: string,
        colorInfoActive: string,
        colorInfoTextHover: string,
        colorInfoText: string,
        colorInfoTextActive: string,
        colorErrorBg: string,
        colorErrorBgHover: string,
        colorErrorBorder: string,
        colorErrorBorderHover: string,
        colorErrorHover: string,
        colorError: string,
        colorErrorActive: string,
        colorErrorTextHover: string,
        colorErrorText: string,
        colorErrorTextActive: string,
        colorLink: string,
        colorLinkHover: string,
        colorLinkActive: string
    }
    let colorJson: colorType = {
        colorPrimaryBg: `rgb(${primaryColorChip[0][0]}, ${primaryColorChip[1][0]}, ${primaryColorChip[2][0]})`,
        colorPrimaryBgHover: `rgb(${primaryColorChip[0][1]}, ${primaryColorChip[1][1]}, ${primaryColorChip[2][1]})`,
        colorPrimaryBorder: `rgb(${primaryColorChip[0][2]}, ${primaryColorChip[1][2]}, ${primaryColorChip[2][2]})`,
        colorPrimaryBorderHover: `rgb(${primaryColorChip[0][3]}, ${primaryColorChip[1][3]}, ${primaryColorChip[2][3]})`,
        colorPrimaryHover: `rgb(${primaryColorChip[0][4]}, ${primaryColorChip[1][4]}, ${primaryColorChip[2][4]})`,
        colorPrimary: `rgb(${primaryColorChip[0][5]}, ${primaryColorChip[1][5]}, ${primaryColorChip[2][5]})`,
        colorPrimaryActive: `rgb(${primaryColorChip[0][6]}, ${primaryColorChip[1][6]}, ${primaryColorChip[2][6]})`,
        colorPrimaryTextHover: `rgb(${primaryColorChip[0][4]}, ${primaryColorChip[1][4]}, ${primaryColorChip[2][4]})`,
        colorPrimaryText: `rgb(${primaryColorChip[0][5]}, ${primaryColorChip[1][5]}, ${primaryColorChip[2][5]})`,
        colorPrimaryTextActive: `rgb(${primaryColorChip[0][6]}, ${primaryColorChip[1][6]}, ${primaryColorChip[2][6]})`,
        colorSuccessBg: `rgb(${successColorChip[0][0]}, ${successColorChip[1][0]}, ${successColorChip[2][0]})`,
        colorSuccessBgHover: `rgb(${successColorChip[0][1]}, ${successColorChip[1][1]}, ${successColorChip[2][1]})`,
        colorSuccessBorder: `rgb(${successColorChip[0][2]}, ${successColorChip[1][2]}, ${successColorChip[2][2]})`,
        colorSuccessBorderHover: `rgb(${successColorChip[0][3]}, ${successColorChip[1][3]}, ${successColorChip[2][3]})`,
        colorSuccessHover: `rgb(${successColorChip[0][4]}, ${successColorChip[1][4]}, ${successColorChip[2][4]})`,
        colorSuccess: `rgb(${successColorChip[0][5]}, ${successColorChip[1][5]}, ${successColorChip[2][5]})`,
        colorSuccessActive: `rgb(${successColorChip[0][6]}, ${successColorChip[1][6]}, ${successColorChip[2][6]})`,
        colorSuccessTextHover: `rgb(${successColorChip[0][4]}, ${successColorChip[1][4]}, ${successColorChip[2][4]})`,
        colorSuccessText: `rgb(${successColorChip[0][5]}, ${successColorChip[1][5]}, ${successColorChip[2][5]})`,
        colorSuccessTextActive: `rgb(${successColorChip[0][6]}, ${successColorChip[1][6]}, ${successColorChip[2][6]})`,
        colorWarningBg: `rgb(${warningColorChip[0][0]}, ${warningColorChip[1][0]}, ${warningColorChip[2][0]})`,
        colorWarningBgHover: `rgb(${warningColorChip[0][1]}, ${warningColorChip[1][1]}, ${warningColorChip[2][1]})`,
        colorWarningBorder: `rgb(${warningColorChip[0][2]}, ${warningColorChip[1][2]}, ${warningColorChip[2][2]})`,
        colorWarningBorderHover: `rgb(${warningColorChip[0][3]}, ${warningColorChip[1][3]}, ${warningColorChip[2][3]})`,
        colorWarningHover: `rgb(${warningColorChip[0][4]}, ${warningColorChip[1][4]}, ${warningColorChip[2][4]})`,
        colorWarning: `rgb(${warningColorChip[0][5]}, ${warningColorChip[1][5]}, ${warningColorChip[2][5]})`,
        colorWarningActive: `rgb(${warningColorChip[0][6]}, ${warningColorChip[1][6]}, ${warningColorChip[2][6]})`,
        colorWarningTextHover: `rgb(${warningColorChip[0][4]}, ${warningColorChip[1][4]}, ${warningColorChip[2][4]})`,
        colorWarningText: `rgb(${warningColorChip[0][5]}, ${warningColorChip[1][5]}, ${warningColorChip[2][5]})`,
        colorWarningTextActive: `rgb(${warningColorChip[0][6]}, ${warningColorChip[1][6]}, ${warningColorChip[2][6]})`,
        colorInfoBg: `rgb(${infoColorChip[0][0]}, ${infoColorChip[1][0]}, ${infoColorChip[2][0]})`,
        colorInfoBgHover: `rgb(${infoColorChip[0][1]}, ${infoColorChip[1][1]}, ${infoColorChip[2][1]})`,
        colorInfoBorder: `rgb(${infoColorChip[0][2]}, ${infoColorChip[1][2]}, ${infoColorChip[2][2]})`,
        colorInfoBorderHover: `rgb(${infoColorChip[0][3]}, ${infoColorChip[1][3]}, ${infoColorChip[2][3]})`,
        colorInfoHover: `rgb(${infoColorChip[0][4]}, ${infoColorChip[1][4]}, ${infoColorChip[2][4]})`,
        colorInfo: `rgb(${infoColorChip[0][5]}, ${infoColorChip[1][5]}, ${infoColorChip[2][5]})`,
        colorInfoActive: `rgb(${infoColorChip[0][6]}, ${infoColorChip[1][6]}, ${infoColorChip[2][6]})`,
        colorInfoTextHover: `rgb(${infoColorChip[0][4]}, ${infoColorChip[1][4]}, ${infoColorChip[2][4]})`,
        colorInfoText: `rgb(${infoColorChip[0][5]}, ${infoColorChip[1][5]}, ${infoColorChip[2][5]})`,
        colorInfoTextActive: `rgb(${infoColorChip[0][6]}, ${infoColorChip[1][6]}, ${infoColorChip[2][6]})`,
        colorErrorBg: `rgb(${errorColorChip[0][0]}, ${errorColorChip[1][0]}, ${errorColorChip[2][0]})`,
        colorErrorBgHover: `rgb(${errorColorChip[0][1]}, ${errorColorChip[1][1]}, ${errorColorChip[2][1]})`,
        colorErrorBorder: `rgb(${errorColorChip[0][2]}, ${errorColorChip[1][2]}, ${errorColorChip[2][2]})`,
        colorErrorBorderHover: `rgb(${errorColorChip[0][3]}, ${errorColorChip[1][3]}, ${errorColorChip[2][3]})`,
        colorErrorHover: `rgb(${errorColorChip[0][4]}, ${errorColorChip[1][4]}, ${errorColorChip[2][4]})`,
        colorError: `rgb(${errorColorChip[0][5]}, ${errorColorChip[1][5]}, ${errorColorChip[2][5]})`,
        colorErrorActive: `rgb(${errorColorChip[0][6]}, ${errorColorChip[1][6]}, ${errorColorChip[2][6]})`,
        colorErrorTextHover: `rgb(${errorColorChip[0][4]}, ${errorColorChip[1][4]}, ${errorColorChip[2][4]})`,
        colorErrorText: `rgb(${errorColorChip[0][5]}, ${errorColorChip[1][5]}, ${errorColorChip[2][5]})`,
        colorErrorTextActive: `rgb(${errorColorChip[0][6]}, ${errorColorChip[1][6]}, ${errorColorChip[2][6]})`,
        colorLink: `rgb(${primaryColorChip[0][5]}, ${primaryColorChip[1][5]}, ${primaryColorChip[2][5]})`,
        colorLinkHover: `rgb(${primaryColorChip[0][3]}, ${primaryColorChip[1][3]}, ${primaryColorChip[2][3]})`,
        colorLinkActive: `rgb(${primaryColorChip[0][6]}, ${primaryColorChip[1][6]}, ${primaryColorChip[2][6]})`,
    }

    return colorJson;
}