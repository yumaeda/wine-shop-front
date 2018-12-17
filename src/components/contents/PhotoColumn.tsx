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
const PhotoColumn = React.memo<IPhoto>(props => (
    <td className="photo__column">
        <a href="#" rel={props.comment}>
            <img
                src={`http://sei-ya.jp/${props.dir}thumb_${props.filename}`}
                className="thumbnail-image"
                onClick={props.onClick}
            />
        </a>
    </td>
))

export default PhotoColumn
