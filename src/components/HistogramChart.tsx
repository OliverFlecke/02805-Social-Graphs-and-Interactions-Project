import * as Highcharts from 'highcharts';
import React from 'react';
import { Point } from '../shared/Point';
import * as styles from './HistogramChart.module.scss';

interface IHistogramProps {
    data: Point[];
    title: string;
    mean: number;
    normalDistribution?: Point[];
}

export class HistogramChart extends React.Component<IHistogramProps> {
    public componentDidMount() {
        const chart = Highcharts.chart('container', this.getOptions());
        chart.addSeries({
            name: 'Distribution',
            data: this.props.data,
            type: 'column',
        });

        chart.xAxis[0].addPlotLine({
            value: this.props.mean,
            width: 1,
            color: 'rgba(0,0,0,0.5)',
            zIndex: 8,
            label: {
                text: `Mean ${this.props.mean.toPrecision(2)}`,
            },
        });

        chart.addSeries({
            data: this.props.normalDistribution,
            type: 'spline',
        });
    }

    public render() {
        return <div id='container' className={styles.container} />;
    }

    private getOptions(): any {
        return {
            chart: {
                margin: [75, 25, 25, 50],
                backgroundColor: 'white',
            },
            title: {
                text: this.props.title,
            },
            legend: {
                enabled: false,
            },
            tooltip: {},
            plotOptions: {
                column: {
                    pointPadding: 0,
                    groupPadding: 0,
                    borderWidth: 0.5,
                    borderColor: 'rgba(255,255,255,0.5)',
                    pointWidth: 15,
                    color: '#87CEEB',
                },
                spline: {
                    enableMouseTracking: false,
                    marker: false,
                    color: '#000',
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
