import Axios from 'axios';
import * as d3 from 'd3';
import React from 'react';
import * as styles from './Graph.module.scss';

const MAP_WIDTH = 500;
const MAP_HEIGHT = 500;

const mapLongitude = (longitude: number): number => {
    return (MAP_WIDTH / 360) * (180 + Number(longitude));
};
const mapLatitude = (latitude: number): number => {
    return (MAP_HEIGHT / 180.0) * (90 - latitude);
};

export class Graph extends React.Component {
    private ref!: HTMLDivElement;

    public componentDidMount() {
        Axios.get('./data/graph.json').then((response) =>
            this.createGraph(response.data),
        );
    }

    public render() {
        return (
            <div
                ref={(ref) => (this.ref = ref!)}
                style={{ display: 'flex', justifyContent: 'center' }}
            />
        );
    }

    private createGraph(graph: JsonGraph) {
        const svg = d3
            .select(this.ref)
            .append('svg')
            .attr('width', MAP_WIDTH)
            .attr('height', MAP_HEIGHT);

        const startLinks = performance.now();
        const links = svg
            .selectAll('line')
            .data(graph.links)
            .enter()
            .append('line');
        let currentNode: Node;

        links
            .attr('x1', (link) => {
                currentNode = this.findNode(link.source, graph.nodes);

                return mapLongitude(currentNode.Longitude);
            })
            .attr('y1', (link) => mapLatitude(currentNode.Latitude))
            .attr('x2', (link) => {
                currentNode = this.findNode(link.destination, graph.nodes);

                return mapLongitude(currentNode.Longitude);
            })
            .attr('y2', (link) => mapLatitude(currentNode.Latitude))
            .attr('class', styles.link);

        console.log(`Finished adding nodes ${performance.now() - startLinks}`);

        const startNodes = performance.now();
        // adding nodes
        const nodes = svg
            .selectAll('circle')
            .data(graph.nodes)
            .enter()
            .append('circle');

        nodes
            .attr('color', 'blue')
            .attr('fill', 'blue')
            .attr('cx', (n) => mapLongitude(n.Longitude))
            .attr('cy', (n) => mapLatitude(n.Latitude))
            .attr('r', 6)
            .attr('class', styles.node);

        console.log(
            `Finished generating graph ${performance.now() - startNodes}`,
        );
    }

    private findNode(id: string, nodes: Node[]): Node {
        return nodes.filter((node) => node.IATA === id)[0];
    }
}

interface Node {
    IATA: string;
    Name: string;
    Longitude: number;
    Latitude: number;
}

interface Link {
    source: string;
    destination: string;
}

interface JsonGraph {
    nodes: Node[];
    links: Link[];
}
