import { VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel, VictoryBoxPlot} from "victory";
 import { useFirstForm } from "../../Hooks/useFirstForm";

export const Firstchart = () => {
 
 const{media} = useFirstForm()

const mediaRedonda =  (media).toFixed(2);
const toNumber = Number(mediaRedonda)
 console.log(toNumber)
return (
  <VictoryChart
    theme={VictoryTheme.clean}
    height={430} // Aumenta la altura de la gráfica
    padding={80}
    width={500}
  >
    <VictoryLabel
      text="Salario medio de Veterianrios en España"
      x={225}
      y={30}
      style={[{ fill: "#f0f8ff", fontSize:23}]}
      textAnchor="middle"
    />
    <VictoryAxis
      dependentAxis
      style={{
        axis: { stroke: "#f0f8ff" },
        tickLabels: { fill: "#f0f8ff", fontSize: 20 },
        grid: { stroke: "#f0f8ff", opacity: 0.2 }
      }}
    />
    <VictoryAxis
      crossAxis
      tickValues={["Spain"]}
      style={{
        axis: { stroke: "#f0f8ff" },
        tickLabels: { fill: "#f0f8ff", fontSize: 20, fontWeight:500 }
      }}
    />
    <VictoryBoxPlot
      boxWidth={24}
      horizontal

      data={[
        { x: "Spain", y: [0,  1000, toNumber ,3000, 5000] }
      ]}
    />

  </VictoryChart>
)
}

