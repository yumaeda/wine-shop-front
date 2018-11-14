/**
 * CountryInfo (Singleton)
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Interface for CountryNameHash
 */
interface ICountryNameHash {
    [key: string]: { id: number; text: string }
}

/**
 * Country name hash table
 */
const CountryNameHash: ICountryNameHash = {
    Argentina: { id: 13, text: 'アルゼンチン' },
    Australia: { id: 6, text: 'オーストラリア' },
    Austria: { id: 2, text: 'オーストリア' },
    Bulgaria: { id: 26, text: 'ブルガリア' },
    Canada: { id: 23, text: 'カナダ' },
    Chile: { id: 28, text: 'チリ' },
    Colombia: { id: 18, text: 'コロンビア' },
    'Costa Rica': { id: 17, text: 'コスタリカ' },
    Croatia: { id: 12, text: 'クロアチア' },
    France: { id: 1, text: 'フランス' },
    Georgia: { id: 32, text: 'ジョージア' },
    Germany: { id: 4, text: 'ドイツ' },
    Greece: { id: 31, text: 'ギリシャ' },
    Hungary: { id: 14, text: 'ハンガリー' },
    India: { id: 20, text: 'インド' },
    Italy: { id: 3, text: 'イタリア' },
    Japan: { id: 5, text: '日本' },
    Lebanon: { id: 27, text: 'レバノン' },
    Malawi: { id: 21, text: 'マラウイ共和国' },
    Moldova: { id: 30, text: 'モルドヴァ' },
    'New Zealand': { id: 9, text: 'ニュージーランド' },
    Portugal: { id: 7, text: 'ポルトガル' },
    Rumania: { id: 16, text: 'ルーマニア' },
    Scotland: { id: 33, text: 'スコットランド' },
    'South Africa': { id: 10, text: '南アフリカ' },
    Spain: { id: 11, text: 'スペイン' },
    Switzerland: { id: 25, text: 'スイス' },
    Taiwan: { id: 29, text: '台湾' },
    Turkey: { id: 22, text: 'トルコ' },
    Ukraine: { id: 24, text: 'ウクライナ' },
    'United Kingdom': { id: 15, text: 'イギリス' },
    'United States': { id: 8, text: 'アメリカ合衆国' },
    'Uyghur Turpan': { id: 19, text: 'ウイグル・トルファン' }
}

/**
 * Get Japanese version of the specified country name
 *
 * @param string country
 * @return string Country name in Japanese
 */
export function getJpnName(country: string): string {
    return CountryNameHash[country].text
}

/**
 * Get ID of the country
 *
 * @param string country
 * @return number Country ID
 */
export function getID(country: string): number {
    return CountryNameHash[country].id
}
