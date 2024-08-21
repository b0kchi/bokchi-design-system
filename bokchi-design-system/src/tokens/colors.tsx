export interface IColorChipProps {
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


export function createPrimaryColorToken({red, green, blue}: IColorChipProps) {
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

    type primaryColorType = {
        colorPrimaryBg: string,
        colorPrimaryBgHover: string,
        colorPrimaryBorder: string,
        colorPrimaryBorderHover: string,
        colorPrimaryHover: string,
        colorPrimary: string,
        colorPrimaryActive: string,
        colorPrimaryTextHover: string,
        colorPrimaryText: string,
        colorPrimaryTextActive: string
    }

    let primaryColorJson: primaryColorType = {
        colorPrimaryBg: `rgb(${colorArray[0][0]}, ${colorArray[1][0]}, ${colorArray[2][0]})`,
        colorPrimaryBgHover: `rgb(${colorArray[0][1]}, ${colorArray[1][1]}, ${colorArray[2][1]})`,
        colorPrimaryBorder: `rgb(${colorArray[0][2]}, ${colorArray[1][2]}, ${colorArray[2][2]})`,
        colorPrimaryBorderHover: `rgb(${colorArray[0][3]}, ${colorArray[1][3]}, ${colorArray[2][3]})`,
        colorPrimaryHover: `rgb(${colorArray[0][4]}, ${colorArray[1][4]}, ${colorArray[2][4]})`,
        colorPrimary: `rgb(${colorArray[0][5]}, ${colorArray[1][5]}, ${colorArray[2][5]})`,
        colorPrimaryActive: `rgb(${colorArray[0][6]}, ${colorArray[1][6]}, ${colorArray[2][6]})`,
        colorPrimaryTextHover: `rgb(${colorArray[0][4]}, ${colorArray[1][4]}, ${colorArray[2][4]})`,
        colorPrimaryText: `rgb(${colorArray[0][5]}, ${colorArray[1][5]}, ${colorArray[2][5]})`,
        colorPrimaryTextActive: `rgb(${colorArray[0][6]}, ${colorArray[1][6]}, ${colorArray[2][6]})`
    }

    return primaryColorJson;
}