/**
 * Chek value min length
 * @param {string} value
 * @param {number} minValue  Min value
 * @param {number} maxValue Max value
 */
 export const checkMinLength = (value: number, minValue: number) => {
    return !(value <= minValue)
}
/**
 * Check value max length
 * @param {string} value
 * @param {number} maxValue Max value
 */
export const checkMaxLength = (value: string, maxValue: number) => {
    return !(value.length >= maxValue)
}
//phone
/**
 * Check value max length
 * @param {string} value
 * @param {number} maxValue Max value
 */

export const phoneMaxLength = (value: string, maxValue: number) => {
    return !(value.length < maxValue)
}

/**
 * Check value max length
 * @param {string} value
 * @param {number} maxValue Max value
 */

export const phoneMinLength = (value: string, minValue: number) => {
    return !(value.length < minValue)
}



//age
/**
 * Check value max length
 * @param {string} value
 * @param {number} minValue Max value
 */
export const rangeMinLength = (value: number, minValue: number) => {
    return !(value <= minValue || value >= 100 )
}

/**
 * Check value max length
 * @param {string} value
 * @param {number} maxValue Max value
 */
export const rangeMaxLength = (value: number, maxValue: number) => {
    return !(value >= maxValue)
}

//email
/**
 * Check valid pattern
 * @param {string} value
 * @param {RegExp} pattern
 */
export const checkPattern = (value: string, pattern: RegExp) => {
    return pattern.test(value)
}


