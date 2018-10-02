import * as React from 'react';
import { Clock } from './Clock';

/**
 * Interface for HtmlPage
 */
interface IHtmlPage {
    file: string;
    timeShown: boolean;
}

/**
 * HtmlPage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class HtmlPage extends React.Component<IHtmlPage, {}> {
    /**
     * Return payment info JSX to render
     */
    public render() {
        const iframeClass = 'content-height-iframe';
        const srcUrl = `//anyway-grapes.jp/pages/ja/${ this.props.file }`;

        let clock;
        if (this.props.timeShown) {
            clock = <Clock />;
        }

        return (
            <div>
                { clock }
                <iframe src={ srcUrl } width="100%" className={ iframeClass } />
            </div>
        );
    }
}
