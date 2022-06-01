import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from "victory";

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];

const xTickValues = data.map((d) => d["quarter"]);
// const xTickFormat = data.map((d) => `Quarter ${d["quarter"]}`);

export const SimpleBar = () => {
  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryAxis tickValues={xTickValues} tickFormat={(x) => `Quarter ${x}`} />
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 100}k`} />
      <VictoryBar data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
};
