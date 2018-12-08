import Axios from 'axios';
import _ from 'lodash';
import React from 'react';
import { Point } from '../shared/Point';
import { HistogramChart } from './HistogramChart';

interface HistogramProps {
    dataFile: string;
    title: string;
    mean?: number;
    isBinned?: boolean;
    normalDistributionFile?: string;
}

interface HistogramState {
    data?: Point[];
    normalDistribution?: Point[];
}

export class Histogram extends React.Component<HistogramProps, HistogramState> {
    constructor(props: HistogramProps) {
        super(props);

        this.state = {};

        Axios.get(this.props.dataFile).then((response: any) => {
            let data = response.data.series;
            if (!this.props.isBinned) {
                data = this.binData(data);
                this.setState({ data, normalDistribution: this.getNormalDistribution(data) });
            } else {
                this.setState({
                    data,
                });
            }
        });

        if (this.props.normalDistributionFile) {
            Axios.get(this.props.normalDistributionFile).then((response: any) =>
                this.setState({ normalDistribution: response.data.series }),
            );
        }
    }

    public render() {
        if (!this.state.data || !this.state.normalDistribution) {
            return null;
        }

        return (
            <HistogramChart
                data={this.state.data}
                normalDistribution={this.state.normalDistribution}
                title={this.props.title}
                mean={6.2}
            />
        );
    }

    private getNormalDistribution(data: number[]) {
        const mean = data.reduce((acc: number, value: number) => acc + value) / data.length;
        const std = Math.sqrt(
            data
                .map((x: number) => x - mean)
                .map((x: number) => x ** 2)
                .reduce((acc: number, value: number) => acc + value) /
                (data.length - 1),
        );

        const min = data.reduce((acc, x) => (acc < x ? acc : x));
        const max = data.reduce((acc, x) => (acc > x ? acc : x));
        const unit = (max - min) / 100;

        const normalY = (x: number, mu: number, sigma: number) => Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));

        return _.range(min, max, unit).map((x: number) => ({
            x,
            y: normalY(x, mean, std),
        }));
    }

    private binData(data: number[]) {
        const histData: any[] = [];
        const bins = 30;

        const max = data.reduce((prev: number, current: number) => (prev > current ? prev : current));
        const min = data.reduce((prev: number, current: number) => (prev < current ? prev : current));
        const range = max - min;
        const width = range / bins; // size of the bins

        let binBottom; // place holders for the bounds of each bin
        let binTop;

        // loop through the number of cells
        for (let i = 0; i < bins; i++) {
            // set the upper and lower limits of the current cell
            binBottom = min + i * width;
            binTop = binBottom + width;

            // check for and set the x value of the bin
            if (!histData[i]) {
                histData[i] = new Array();
                histData[i][0] = binBottom + width / 2;
            }

            // loop through the data to see if it fits in this bin
            for (let j = 0; j < data.length; j++) {
                const x = data[j];

                // adjust if it's the first pass
                i === 0 && j === 0 ? (binBottom -= 1) : (binBottom = binBottom);

                // if it fits in the bin, add it
                if (x > binBottom && x <= binTop) {
                    !histData[i][1] ? (histData[i][1] = 1) : histData[i][1]++;
                }
            }
        }

        histData.forEach((bin: number[], index: number) => {
            if (bin.length === 1) {
                histData[index].push(0);
            }
        });

        const maxFreq = histData.reduce((acc: number, x: number[]) => (acc > x[1] ? acc : x[1]), Number.MIN_VALUE);
        const minFreq = histData.reduce((acc: number, x: number[]) => (acc < x[1] ? acc : x[1]), Number.MAX_VALUE);

        histData.forEach((value: number[], index: number) => {
            histData[index][1] = (value[1] - minFreq) / (maxFreq - minFreq);
        });

        return histData;
    }
}
