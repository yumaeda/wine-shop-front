/**
 * Renders login page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import PhotosContainer from '../../containers/PhotosContainer'
import PageTemplate from './PageTemplate'

/**
 * LoginPage component
 */
const PhotoPage = React.memo(() => (
    <PageTemplate>
        <div className="contents">
            <PhotosContainer url="api/v1/photos" />
        </div>
    </PageTemplate>
))

export default PhotoPage
