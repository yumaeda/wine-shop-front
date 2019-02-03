/**
 * Renders wineset table column
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { Image } from 'components/contents/Image'
import * as React from 'react'
import { IWineset } from 'states/IWineset'

/**
 * Wineset table column component
 */
const WinesetColumn: React.FC<IWineset> = props => {
    const { id, name, stock } = props

    return (
        <td className="wineset__column">
            <a
                href={`//anyway-grapes.jp/store/index.php?submenu=set_detail&id=${id}&pc_view=1`}
            >
                <Image
                    className="wineset__image"
                    srcUrl={`../images/wine_sets/${id}.png`}
                    errorUrl="../images/wine_sets/no_wine_set_image.png"
                    alt={String(id)}
                />
                <br />
                <br />
                <span>{name}</span>
                <br />
                <br />
                <span className="emphasis-span">
                    {stock > 0 ? '【 送料無料 】' : '完売しました'}
                </span>
            </a>
        </td>
    )
}

export default React.memo(WinesetColumn)
