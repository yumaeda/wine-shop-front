/**
 * Renders iframe page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import DefaultContents from '../contents/DefaultContents'
import PageTemplate from './PageTemplate'

/**
 * HomePage component
 */
const HomePage = React.memo(() => (
    <PageTemplate>
        <div className="contents">
            <DefaultContents />
        </div>
    </PageTemplate>
))

export default HomePage
