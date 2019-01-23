/**
 * Renders photo page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import PhotosContainer from '../../containers/PhotosContainer'
import PageTemplate from './PageTemplate'

/**
 * PhotoPage component
 */
const PhotoPage: React.FC = () => (
    <PageTemplate>
        <div className="contents">
            <PhotosContainer url="api/v1/photos" />
        </div>
    </PageTemplate>
)

export default PhotoPage
