/**
 * Renders iframe page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Iframe } from '../contents/Iframe'
import { PageTemplate } from './PageTemplate'

/**
 * IframePage component
 */
const SFCComponent: React.SFC<{ match: any }> = props => (
    <PageTemplate>
        <div className="contents">
            <Iframe src={`./pages/ja/${props.match.params.page}.html`} />
        </div>
    </PageTemplate>
)

export const IframePage = React.memo(SFCComponent)
