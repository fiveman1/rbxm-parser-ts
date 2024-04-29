/**
 * @author https://github.com/fiveman1
 * Contains some utility functions.
 */

/**
 * Converts a byte array to an array of hexadecimal strings
 * @param bytes byte array
 * @returns hex string array
 */
export function bytesToHex(bytes: Uint8Array)
{
    const hex = new Array<string>();
    bytes.forEach((val) =>
    {
        hex.push(val.toString(16));
    });
    return hex;
}

/**
 * Formats a number as a string
 * @param num a number
 * @returns a string respresentation of the number
 */
export function formatNum(num: number)
{
    // Some silly formatting tricks since JS numbers are not very accurate...
    if (Math.abs(num) < 0.0001) return "0";
    return Number(num.toPrecision(5)).toString();
}

/**
 * Creates a narrow copy of an array.
 * @param arr array
 * @returns a narrow copy of the array
 */
export function narrowCopyArray<T>(arr: T[])
{
    const copyArr = [];
    for (const val of arr)
    {
        copyArr.push(val);
    }
    return copyArr;
}

export function bytesToBitArray(bytes: Uint8Array) 
{
    const output = new Uint8Array(bytes.length * 8);

    for (let i = 0; i < bytes.length; i++) {
        const val = bytes[i];
        const offset = i * 8;
        // Read 1 byte at a time
        for (let j = 0; j < 8; ++j) {
            const bit = (val >> j) & 1;
            // The bits are being read in reverse order
            output[7 - j + offset] = bit;
        }
    }

    return output;
}

export function bitsToByteArray(bits: Uint8Array)
{
    const outBytes = new Uint8Array(bits.length / 8);
    for (let i = 0; i < 4; ++i) 
    {
        let val = 0;
        const offset = i * 8;
        for (let j = 0; j < 8; ++j) 
        {
            val |= bits[j + offset] << (7 - j);
        }
        outBytes[i] = val;
    }
    return outBytes;
}

export function floatsEqual(num1: number, num2: number, eps: number = 0.00000001)
{
    return Math.abs(num1 - num2) < eps;
}