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
import { filterForm } from "../../Store/Slices/dispatchFilter";

export const Firstchart = () => {
  const [compar, setcompare] = useState(false);

  const forms = useSelector((state) => state.sendForm.forms);
  const theme = useSelector((state) => state.themeToggler);

  const formNumber = useSelector((state) => state.sendForm.formNumber);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(filterForm({ type: formNumber, payload: forms }));
  }, [forms]);

  const results = useSelector((state) => state.dispatchFilter);
 console.log(results)
  return (
    <>
      {compar ? <CompareModal close={setcompare} /> : " "}
      <VictoryChart
        theme={VictoryTheme.clean}
        height={450}
        padding={64}
        width={470}
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
              textAnchor: "center",
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
              fontSize: 17,
              fontWeight: 400,
              angle: -58,
            },
          }}
          domain={200}
        />
        <VictoryBoxPlot
          boxWidth={22}
          horizontal
          whiskerWidth={19}
          domain={100}
          data={
            results &&
            results.map((result) => {
              return {
                x: result.País ,
                y: [0,result.lowerWage , result.media, result.higherWage, 9000],
              };
            })
          }
          q3Labels
          q3LabelComponent={
            <VictoryLabel
              dx={32}
              dy={19}
              style={{ fill: "white"}}
              angle={45}
            />
          }
          q1Labels
          q1LabelComponent={
            <VictoryLabel
              dx={28}
              dy={17}
              style={{ fill:"white"}}
              angle={45}
            />
          }
          medianLabels
          medianLabelComponent={
            <VictoryLabel 
            dx={30} 
            dy={22} 
            textAnchor="middle"
            angle={45}
            style={{fill:"white"}} />
          }
          style={{
            min: { stroke: "white", strokeWidth: 3 },
            max: { stroke: "white", strokeWidth: 3 },
            q1: {fill: theme ? "#801197" : "#4478d9"  , fillOpacity: 0.9 },
            q3: { fill: theme ? "#77317f" : "#7bb4ff", fillOpacity: 0.9 },
            median: { stroke: "orange", strokeWidth: 4 },
            box: {
              
              fillOpacity: 0.9,
              stroke: "#1976d2",
              strokeWidth: 19,
            },
            labels: { fill: "#f0f8ff", fontSize: 26 },
          }}
        />
      </VictoryChart>
      <button id="comparar" onClick={() => setcompare(true)}>
        Comparar
      </button>
    </>
  );
};
