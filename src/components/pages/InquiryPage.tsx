import * as React from 'react';

/**
 * InquiryPage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class InquiryPage extends React.Component<{}, {}> {
    /**
     * Return inquiry page JSX to render
     */
    public render() {
        const mail = 'mailto:mail@anyway-grapes.jp';

        return (
            <div>
                <span>Mail to: </span>
                <a href={ `mailto:${mail}` }>{ mail }</a>
            </div>
        );
    }
}
