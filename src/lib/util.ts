/**
 * @author https://github.com/fiveman1
 * @file util.ts
 * Contains some functions.
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
    return Number(num.toPrecision(6)).toString();
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