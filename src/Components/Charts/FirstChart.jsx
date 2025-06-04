import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel, VictoryGroup, VictoryScatter, VictoryLegend, Line, VictoryBoxPlot} from "victory";
import { useFirstForm } from "../../Hooks/useFirstForm";

export const Firstchart = () => {
 
// const{media} = useFirstForm()

return (

    <VictoryChart
  horizontal
  domainPadding={20}
  theme={VictoryTheme.clean}
>
  <VictoryBoxPlot
    boxWidth={10}
    data={[
      { x: 1, y: ["2", "6", "8", "8.7"] }
    ]}
    style={{
    
      min: { stroke: "tomato" },
      max: { stroke: "orange" },
      q1: { fill: "tomato" },
      q3: { fill: "orange" },
      median: {
        stroke: "white",
        strokeWidth: 4,
      },
      minLabels: { fill: "tomato" },
      maxLabels: { fill: "orange" },
    }}
  />
</VictoryChart>
  );
}

