/**
 * Renders iframe page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { Iframe } from 'components/contents/Iframe'
import PageTemplate from 'components/pages/PageTemplate'
import * as React from 'react'

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
