/**
 * Renders iframe page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import DefaultContents from 'components/contents/DefaultContents'
import PageTemplate from 'components/pages/PageTemplate'
import * as React from 'react'

/**
 * HomePage component
 */
const HomePage: React.FC = () => (
    <PageTemplate>
        <div className="contents">
            <DefaultContents />
        </div>
    </PageTemplate>
)

export default HomePage
