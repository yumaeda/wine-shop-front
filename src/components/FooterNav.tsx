import * as React from 'react';

/**
 * Interface for FooterNav
 */
interface IFooterNav {
    links: Array<{ href: string, text: string }>;
}

/**
 * FooterNav component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class FooterNav extends React.Component<IFooterNav, {}> {
    /**
     * Return footer navigation JSX to render
     */
    public render() {
        const jsx = this.props.links.map((link: { href: string, text: string }, index: number) =>
            <li key={ index }><a href={ link.href }>{ link.text }</a></li>
        );

        return <ul className="nav-links">{ jsx }</ul>;
    }
}
