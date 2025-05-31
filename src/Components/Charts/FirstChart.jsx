import React from "react";
import { VictoryChart, VictoryLine } from "victory";

const series = [
  {
    name: "Canada",
    data: [
      3.9670002, 5.2650003, 6.201, 7.8010006, 9.694, 11.214001, 11.973001,
      12.250001, 12.816001, 13.413001, 13.626961, 14.30356, 15.295461,
    ],
  },
];

export const Firstchart = () => {
  
  return (
    
    <VictoryChart theme={VictoryTheme.clean}>
      <VictoryAxis
        tickValues={_.range(2010, 2024, 2)}
        style={{
          tickLabels: {
            fontSize: 8,
          },
          ticks: {
            stroke: "#757575",
            size: 5,
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickValues={_.range(0, 200, 40)}
        tickFormat={(value) => `${value} GW`}
        style={{
          axis: {
            stroke: "transparent",
          },
          axisLabel: {
            fontSize: 8,
            padding: 50,
          },
          tickLabels: {
            fontSize: 8,
          },
          grid: {
            stroke: "#d9d9d9",
            size: 5,
          },
        }}
      />
      <VictoryLine
        data={series[0].data.map((d, i) => ({
          x: i + 2010,
          y: d,
        }))}
      />
    </VictoryChart>
  );
};
