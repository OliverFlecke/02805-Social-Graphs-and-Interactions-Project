import * as Highcharts from 'highcharts';
import * as React from 'react';

interface IBarChartProps {
    data: any;
}

export class BarChart extends React.PureComponent<IBarChartProps> {
    public componentDidMount() {
        Highcharts.chart('barchart', {
            chart: { type: 'column' },
            series: [
                {
                    data: [1, 0, 4],
                    name: 'Jane',
                },
                {
                    data: [5, 7, 3],
                    name: 'John',
                },
            ],
            title: { text: 'Test' },
            xAxis: {},
            yAxis: {
                categories: ['Apples', 'Bananas', 'Oranges'],
                title: {
                    text: 'Fruit eaten',
                },
            },
        });
    }

    public render() {
        return (
            <div>
                <div
                    id="barchart"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                />
            </div>
        );
    }
}
