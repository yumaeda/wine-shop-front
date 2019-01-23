/**
 * Renders iframe page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Iframe } from '../contents/Iframe'
import PageTemplate from './PageTemplate'

/**
 * IframePage component
 */
const IframePage: React.FC<{ match: any }> = props => {
    const { match } = props

    return (
        <PageTemplate>
            <div className="contents">
                <Iframe src={`./pages/ja/${match.params.page}.html`} />
            </div>
        </PageTemplate>
    )
}

export default React.memo(IframePage)
