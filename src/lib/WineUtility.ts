/**
 * WineUtility (Singleton)
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Wine type hash table
 */
const wineTypeHash: { [key: string]: string } = {
    Beer: 'ビール',
    Blanc: '白ワイン',
    Champagne: 'シャンパーニュ',
    'Champagne Rosé': 'シャンパーニュ・ロゼ',
    Cider: 'シードル',
    Doux: '甘口ワイン',
    'Eau de Vie': 'オー・ド・ヴィ',
    Food: '食品',
    Goods: 'グッズ',
    Gris: 'ヴァン・グリ',
    Jaune: 'ヴァン・ジョーヌ',
    Liqueur: 'リキュール',
    Madeira: 'マデイラ',
    Mousseux: 'スパークリング',
    'Mousseux Rosé': 'スパークリング・ロゼ',
    'Mousseux Rouge': 'スパークリング・ルージュ',
    Orange: 'オレンジワイン',
    Port: 'ポートワイン',
    Rosé: 'ロゼワイン',
    Rouge: '赤ワイン',
    Sherry: 'シェリー'
}

/**
 * Get Japanese version of the specified wine type
 *
 * @param string type
 * @return string Wine type in Japanese
 */
export function getJpnType(type: string): string {
    return wineTypeHash[type]
}
