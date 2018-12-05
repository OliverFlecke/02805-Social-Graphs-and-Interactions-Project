import * as Highcharts from 'highcharts';
import React from 'react';
import * as styles from './Histogram.module.scss';

interface IHistogramProps {
    data: number[];
    title: string;
    bins?: number;
}

export class Histogram extends React.Component<IHistogramProps> {
    public componentDidMount() {
        const chart = Highcharts.chart('container', this.getOptions());
        chart.addSeries({
            name: 'Distribution',
            data: this.binData(this.props.data),
        });

        const mean =
            this.props.data.reduce(
                (acc: number, value: number) => acc + value,
            ) / this.props.data.length;

        chart.xAxis[0].addPlotLine({
            value: mean,
            width: 1,
            color: 'rgba(0,0,0,0.5)',
            zIndex: 8,
            label: {
                text: `Mean ${mean.toPrecision(2)}`,
            },
        });
    }

    public render() {
        return <div id='container' className={styles.container} />;
    }

    private binData(data: number[]) {
        console.debug(data[0]);
        const histData: any[] = [];
        const bins = 30;

        const max = data.reduce((prev: number, current: number) =>
            prev > current ? prev : current,
        );
        const min = data.reduce((prev: number, current: number) =>
            prev < current ? prev : current,
        );
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

        return histData;
    }

    private getOptions(): any {
        return {
            chart: {
                type: 'column',
                margin: [50, 25, 25, 50],
                backgroundColor: 'white',
            },
            title: {
                text: this.props.title,
            },
            legend: {
                enabled: false,
            },
            width: 100,
            tooltip: {},
            plotOptions: {
                series: {
                    pointPadding: 0,
                    groupPadding: 0,
                    borderWidth: 0.5,
                    borderColor: 'rgba(255,255,255,0.5)',
                },
            },
            xAxis: [
                {
                    title: {
                        text: 'Range',
                    },
                },
                {
                    linkedTo: 0,
                    opposite: true,
                    gridLineWidth: 0.5,
                    gridLineColor: 'rgba(0,0,0,0.25)',
                    gridZIndex: 8,
                },
            ],
            yAxis: {
                title: {
                    text: 'Frequency',
                },
                min: 0,
            },
            credits: {
                enabled: false,
            },
        };
    }
}
