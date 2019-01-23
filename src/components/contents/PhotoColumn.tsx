/**
 * Renders photo table column
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IPhoto } from '../../interfaces/IPhoto'

/**
 * Photo table column component
 */
const PhotoColumn: React.FC<IPhoto> = props => {
    const { comment, dir, filename, onClick } = props

    return (
        <td className="photo__column">
            <a href="#" rel={comment}>
                <img
                    src={`http://sei-ya.jp/${dir}thumb_${filename}`}
                    className="thumbnail-image"
                    onClick={onClick}
                />
            </a>
        </td>
    )
}

export default React.memo(PhotoColumn)
