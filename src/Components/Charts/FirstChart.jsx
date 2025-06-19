import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
  VictoryBoxPlot,
} from "victory";
import { useSendForm } from "../../Hooks/useFirstForm";

import { useState } from "react";
import { CompareModal } from "../CompareModal";

export const Firstchart = () => {
  const { media, currentForm, higerWage, lowerWage } = useSendForm();
  const [compar, setcompare] = useState(false);
  
  const mediaRedonda = media.toFixed(2);
  const minRedonda = lowerWage.toFixed(2)
  const maxRedonda = higerWage.toFixed(2)
  const toNumber = Number(mediaRedonda);
  const minToNumber = Number(minRedonda)
  const maxToNumber = Number(maxRedonda)
  
  console.log(currentForm, toNumber,  lowerWage, higerWage);

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
          text={`Salario medio de ${currentForm.Profesión} en ${currentForm.País}`}
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
          tickValues={[`${currentForm.País}`]}
          style={{
            axis: { stroke: "#f0f8ff" },
            tickLabels: { fill: "#f0f8ff", fontSize: 20, fontWeight: 500 },
          }}
        />
        <VictoryBoxPlot
          boxWidth={24}
          horizontal
          data={[{ x: `${currentForm.País}`, y: [0, minToNumber, toNumber, maxToNumber, 9000] }]}
        />
      </VictoryChart>
      <button id="comparar" onClick={() => setcompare(true)}>
        Comparar
      </button>
    </>
  );
};
