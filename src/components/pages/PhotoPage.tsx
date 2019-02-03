/**
 * Renders photo page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import PageTemplate from 'components/pages/PageTemplate'
import PhotosContainer from 'containers/PhotosContainer'
import * as React from 'react'

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
