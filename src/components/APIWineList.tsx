/**
 * List of wines retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { HorizontalWineList } from './HorizontalWineList';

/**
 * Interface for AJAX get wines request state
 */
export interface IGetWinesAPI {
    error: Error | null;
    loaded: boolean;
    wines: any[];
}

/**
 * Component for rendering a wine list, which is retrieved by API call
 */
export class APIWineList extends React.Component<{ url: string }, IGetWinesAPI> {
    /**
     * Constructor for APIWineList
     */
    public constructor(props: { url: string }) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            wines: []
        };
    }

    /**
     * You should populate data with AJAX calls in the componentDidMount lifecycle method.
     * This is so you can use setState to update your component when the data is retrieved.
     */
    public componentDidMount() {
        fetch(this.props.url)
        .then((res) => res.json())
        .then(
            (result) => {
                this.setState({
                    loaded: true,
                    wines: result.wines
                });
            },

            (error) => {
                this.setState({
                    error,
                    loaded: true
                });
            }
        );
    }

    /**
     * Return horizontal wine list JSX to render
     */
    public render(): React.ReactElement<APIWineList> {
        const { error, loaded, wines } = this.state;

        if (error) {
          return <div>Error: { error.message }</div>;
        }

        if (!loaded) {
          return <div>Loading...</div>;
        }

        return <HorizontalWineList wines={ wines } />;
    }
}
