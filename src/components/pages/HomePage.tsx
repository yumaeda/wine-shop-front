/**
 * Renders iframe page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { DefaultContents } from '../contents/DefaultContents'
import { PageTemplate } from './PageTemplate'

/**
 * HomePage component
 */
const SFCComponent: React.SFC = () => (
    <PageTemplate>
        <div className="contents">
            <DefaultContents />
        </div>
    </PageTemplate>
)

export const HomePage = React.memo(SFCComponent)
