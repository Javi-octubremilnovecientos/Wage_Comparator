import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel, VictoryGroup, VictoryScatter, VictoryLegend, Line, VictoryBoxPlot} from "victory";


export const Firstchart = () => {
 


return (

    <VictoryChart
  horizontal
  domainPadding={20}
  theme={VictoryTheme.clean}
>
  <VictoryBoxPlot
    boxWidth={10}
    data={[
      { x: 1, y: ["2", "3,9", "5", "8.7"] }
    ]}
    style={{
      min: { stroke: "tomato" },
      max: { stroke: "orange" },
      q1: { fill: "tomato" },
      q3: { fill: "orange" },
      median: {
        stroke: "white",
        strokeWidth: 2,
      },
      minLabels: { fill: "tomato" },
      maxLabels: { fill: "orange" },
    }}
  />
</VictoryChart>
  );
}

