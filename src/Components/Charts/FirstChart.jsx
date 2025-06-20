import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
  VictoryBoxPlot,
} from "victory";


import {  useState } from "react";
import { CompareModal } from "../CompareModal";
import { useSelector } from "react-redux";
import { useSendForm } from "../../Hooks/useFirstForm";


export const Firstchart = () => {
  

  const countries = useSelector((state)=>state.sendForm.forms)

  
  useSendForm()
  
  const results = useSelector((state)=> state.filterForm)
  const [compar, setcompare] = useState(false);

  console.log(countries,results)


  return (
    <>
      {compar ? <CompareModal close={setcompare} /> : " "}
      <VictoryChart
        theme={VictoryTheme.clean}
        height={430} // Aumenta la altura de la gráfica
        padding={69}
        width={500}
      >
        <VictoryLabel
          text={results? `Salario medio de ${countries[0].Profesión} en ${countries[0].País}`: ""}
          x={225}
          y={30}
          style={[{ fill: "#f0f8ff", fontSize: 23 }]}
          textAnchor="middle"
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#f0f8ff" },
            tickLabels: { fill: "#f0f8ff", fontSize: 20 },
            grid: { stroke: "#f0f8ff", opacity: 0.2 },
          }}
        />
       
        <VictoryAxis
          crossAxis
          tickValues={countries && countries.map((count)=>{
           return count.País
          } )}
          style={{
            axis: { stroke: "#f0f8ff" },
            tickLabels: { fill: "#f0f8ff", fontSize: 20, fontWeight: 500 },
          }}
        />
        <VictoryBoxPlot
          boxWidth={24}
          horizontal
          data={
          results && results.map((result)=>{
          return { 
          x: result.País,
          y: [0, result.lowerWage, result.media, result.higherWage, 9000] }
         })
              }
        />
      </VictoryChart>
      <button id="comparar" onClick={() => setcompare(true)}>
        Comparar
      </button>
    </>
  );
};
