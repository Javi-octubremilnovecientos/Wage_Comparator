import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel, VictoryGroup, VictoryScatter, VictoryLegend, Line, VictoryBoxPlot, VictoryPolarAxis} from "victory";
import { useFirstForm } from "../../Hooks/useFirstForm";

export const Firstchart = () => {
 
// const{media} = useFirstForm()

return (

  <VictoryChart
   width={700}
   height={200}
   padding={100}
   horizontal
   >
 <VictoryAxis style={{    
     axis: { stroke: "none" },         // Oculta la línea del eje
    ticks: { stroke: "none" },        // Oculta las marcas de los ticks
    tickLabels: { fill: "none" },     // Oculta las etiquetas de los ticks
    grid: { stroke: "none" }}}
    />


  <VictoryBoxPlot
    boxWidth={45}
    labels   
    scale={50}
    height={900}
    labelOrientation="bottom"
    data={[
      { x: 1, min: 900, median: 1460, max: 3600, q1: 900, q3: 3600 },
    ]}
    style={{
      min: { stroke: "transparent"},
      max: { stroke: "transparent"},
      q1: { fill: "orange" },
      q3: { fill: "orange" },
      median: {
        stroke: "tomato",
        strokeWidth: 4,
      },
      medianLabels: { fill: "tomato", fontSize: 32 },
      minLabels: { fill: "white", fontSize: 32 },
      maxLabels: { fill: "white", fontSize: 32 },
    }}
  />
  
</VictoryChart>
  );
}

