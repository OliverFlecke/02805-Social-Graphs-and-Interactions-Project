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
        const width = range / bins; //size of the bins

        let bin_bottom; //place holders for the bounds of each bin
        let bin_top;

        //loop through the number of cells
        for (let i = 0; i < bins; i++) {
            //set the upper and lower limits of the current cell
            bin_bottom = min + i * width;
            bin_top = bin_bottom + width;

            //check for and set the x value of the bin
            if (!histData[i]) {
                histData[i] = new Array();
                histData[i][0] = bin_bottom + width / 2;
            }

            //loop through the data to see if it fits in this bin
            for (let j = 0; j < data.length; j++) {
                let x = data[j];

                //adjust if it's the first pass
                i == 0 && j == 0
                    ? (bin_bottom -= 1)
                    : (bin_bottom = bin_bottom);

                //if it fits in the bin, add it
                if (x > bin_bottom && x <= bin_top) {
                    !histData[i][1] ? (histData[i][1] = 1) : histData[i][1]++;
                }
            }
        }

        return histData;
    }

    private getPercentile(data: number[], percentile: number) {
        data.sort((a: number, b: number) => a - b);
        const index = (percentile / 100) * data.length;

        if (Math.floor(index) == index) {
            return (data[index - 1] + data[index]) / 2;
        } else {
            return data[Math.floor(index)];
        }
    }

    private getMad(data: number[]) {
        const median = this.getPercentile(data, 50);
        const devs = data.map((point: number) => Math.abs(point - median));
        const mad = this.getPercentile(devs, 50);

        return {
            median: median,
            mad: mad,
        };
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
