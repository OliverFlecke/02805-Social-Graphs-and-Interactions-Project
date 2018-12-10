import React from 'react';

export class SigmaGraph extends React.Component {
    public componentDidMount() {
        const config: any = {
            container: 'sigmaContainer',
        };

        sigma.parsers.json('data/graph.json', config, () => console.log('callback'));
    }

    public render() {
        return <div id='sigmaContainer' />;
    }
}
