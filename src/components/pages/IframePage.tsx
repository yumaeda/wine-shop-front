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
const IframePage = React.memo<{ match: any }>(props => (
    <PageTemplate>
        <div className="contents">
            <Iframe src={`./pages/ja/${props.match.params.page}.html`} />
        </div>
    </PageTemplate>
))

export default IframePage
