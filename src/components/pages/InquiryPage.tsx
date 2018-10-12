/**
 * Renders inquiry page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';

/**
 * InquiryPage component
 */
export class InquiryPage extends React.Component {
    /**
     * Return inquiry page JSX to render
     */
    public render(): React.ReactElement<InquiryPage> {
        const mail = 'mailto:mail@anyway-grapes.jp';

        return (
            <div>
                <span>Mail to: </span>
                <a href={ `mailto:${mail}` }>{ mail }</a>
            </div>
        );
    }
}
