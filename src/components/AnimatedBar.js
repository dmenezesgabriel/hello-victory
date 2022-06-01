import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from "victory";
import {useEffect, useState} from "react";

const earningsData = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];

export const AnimatedBar = () => {
  const [data, setData] = useState(null);
  // On start
  useEffect(() => {
    setData(earningsData);
  }, []);
  if (!data) {
    return;
  }
  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material} animate={{duration: 2000, easing: "bounce"}}>
      <VictoryAxis tickValues={data ? data.map((d) => d["quarter"]) : ""} tickFormat={(x) => `Quarter ${x}`} />
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 100}k`} />
      <VictoryBar data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
};
