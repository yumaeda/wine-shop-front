/**
 * DateTimeUtility (Singleton)
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Week names
 *
 * @var string[]
 */
const WEEK_NAMES = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

/**
 * Get week names
 *
 * @return string[]
 */
export function getWeekNames(): string[] {
    return WEEK_NAMES
}

/**
 * Get last date of the specified month
 *
 * @param number year
 * @param number month
 * @return number Last date of the month
 */
export function getLastDateOfMonth(year: number, month: number): number {
    return (new Date(year, month, 0)).getDate()
}

/**
 * Get day of week of the specified date
 *
 * @param number year
 * @param number month
 * @param number date
 * @return string Day of week of the date
 */
export function getDayOfWeek(year: number, month: number, date: number): string {
    const dayOfWeek = (new Date(year, month - 1, date)).getDay()

    return WEEK_NAMES[dayOfWeek]
}

/**
 * Prepend zeros to the specified digits
 *
 * @param number digits
 * @param number length
 * @return string Number as string, which is prepended by zeros
 */
export function prependZeros(digits: number, length: number): string {
    const currentLength = String(digits).length
    if (currentLength >= length) {
        return String(digits)
    }

    return '0' + prependZeros(digits, length - 1)
}
