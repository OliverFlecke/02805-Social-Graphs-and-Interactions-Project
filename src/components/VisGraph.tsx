import Axios from 'axios';
import React from 'react';
import vis from 'vis';

// const graph: any = {
//     nodes: [
//         { id: 1, label: 'Node 1', fixed: true, x: 0, y: 0 },
//         { id: 2, label: 'Node 2', fixed: true, x: 10, y: 110 },
//         { id: 3, label: 'Node 3', fixed: true, x: 120, y: 20 },
//         { id: 4, label: 'Node 4', fixed: true, x: -110, y: -110 },
//         { id: 5, label: 'Node 5', fixed: true, x: 220, y: 220 },
//     ],
//     edges: [{ from: 1, to: 3 }, { from: 2, to: 4 }, { from: 3, to: 4 }, { from: 2, to: 5 }],
// };

export class VisGraph extends React.Component {
    public componentDidMount() {
        Axios.get(`${process.env.PUBLIC_URL}/data/graph.json`).then((x: any) => {
            const graph = x.data;
            console.log('Drawing graph');
            console.log(graph);
            const container = document.getElementById('visContainer')!;
            const options = {};
            const timeline = new vis.Network(container, graph, options);
        });
    }

    public render() {
        return <div id='visContainer' />;
    }
}
