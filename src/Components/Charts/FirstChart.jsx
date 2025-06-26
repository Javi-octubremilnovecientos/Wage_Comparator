import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
  VictoryBoxPlot,
} from "victory";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CompareModal } from "../CompareModal";
  import {filterForm} from "../../Store/Slices/dispatchFilter"
           

export const Firstchart = () => {
  const [compar, setcompare] = useState(false);

 const forms = useSelector((state) => state.sendForm.forms);
 const formNumber = useSelector((state) => state.sendForm.formNumber);

 const dispatch = useDispatch()

 useEffect(() => {
    dispatch(filterForm({type:formNumber, payload:forms}))
  }, [forms]);

const results = useSelector((state)=> state.dispatchFilter)
console.log(forms, results)
  return (
    <>
      {compar ? <CompareModal close={setcompare} /> : " "}
      <VictoryChart
        theme={VictoryTheme.clean}
        height={430} // Aumenta la altura de la gráfica
        padding={80}
        width={500}
          domainPadding={80}
      >
  
        <VictoryLabel
          text={
            results
              ? `Salario medio de ${forms[0].Profesión} en ${forms[0].País}`
              : ""
          }
          x={225}
          y={30}
          style={[{ fill: "#f0f8ff", fontSize: 23 }]}
          textAnchor="middle"
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#f0f8ff" },
            tickLabels: {
              fill: "#f0f8ff",
              fontSize: 20,
              textAnchor: "center", // Align text to the end for better readability
            },
            grid: { stroke: "#f0f8ff", opacity: 0.2 },
          }}
          
        />

        <VictoryAxis
          crossAxis
          tickValues={
            forms &&
            forms.map((count) => {
              return count.País;
            })
          }
          style={{
            axis: { stroke: "#f0f8ff" },
            tickLabels: {
              fill: "#f0f8ff",
              fontSize: 20,
              fontWeight: 500,
              angle: -45,
            },
          }}
          domain={200}
        />
        <VictoryBoxPlot
          boxWidth={24}
          horizontal
          domain={200}
          data={
            results &&
            results.map((result) => {
              return {
                x: result.País,
                y: [0, result.lowerWage, result.media, result.higherWage, 9000],
              };
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
