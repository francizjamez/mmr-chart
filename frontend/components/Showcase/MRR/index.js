import { Box, Icon, Text } from "@airtable/blocks/ui";
import React from "react";
import { opaqueGreen, opaqueRed, red, green } from "../../../colors";
import LineChart from "./LineChart";
import Breakout from "./Breakout";

const MRR = () => {
  const data = {
    labels: ["AAA", "AAB", "AAB", "AAC"],
    datasets: [
      {
        backgroundColor: [
          "rgba(96, 120, 255, 0.1)",
          "rgba(96, 120, 255, 0.1)",
          "rgba(96, 120, 255, 0.1)",
          "rgba(96, 120, 255, 0.1)",
        ],
        pointBackgroundColor: "white",
        pointBorderColor: "#6078FF",
        pointHoverBorderWidth: 2,
        pointHoverRadius: 10,
        borderColor: ["#6078FF"],
        fillColor: "#ffff00",
        data: ["123.0", "321.0", "212.0", "333.0"],
        pointRadius: 0,
        lineTension: 0.1,
        borderWidth: 5,
      },
    ],
  };

  const [first, last] = [123, 333];

  let totalYield = (((last - first) / first) * 100).toFixed(2);

  return (
    <Box
      marginY="10px"
      backgroundColor="white"
      borderRadius="12px"
      display="flex"
      flex={1}
      marginRight={2}
      flexDirection="column"
      minWidth="400px"
    >
      <Box paddingTop={3}>
        <Box borderBottom={`1px solid #f2f2ff`} paddingY={3} paddingX={3}></Box>
        <Box paddingX={3}>
          <Text textColor="#7171a6" fontSize={16} marginTop={4}>
            MRR
          </Text>
          <Box
            display="flex"
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="baseline" marginY="25px">
              <Text fontSize={30} fontWeight={600} marginRight="8px">
                {!isNaN(Number(last)) && Number(last).toLocaleString("en")}
              </Text>
            </Box>
          </Box>

          <Box display="flex" alignItems="baseline" marginBottom={5}>
            <Box
              backgroundColor={
                totalYield > 0 ? opaqueGreen(0.2) : opaqueRed(0.2)
              }
              borderRadius={999}
              position="relative"
              top="1px"
            >
              {totalYield > 0 ? (
                <Icon name="up" size={16} fillColor={green} />
              ) : (
                <Icon
                  name="down"
                  size={16}
                  fillColor={red}
                  position="relative"
                  top="1px"
                />
              )}
            </Box>

            <Text
              marginLeft={2}
              fontSize={16}
              textColor={totalYield > 0 ? "#12c457" : "red"}
            >
              {Math.abs(totalYield)}%
            </Text>
          </Box>
        </Box>

        {data && (
          <Box marginBottom={4} paddingX={3}>
            <LineChart data={data} />
          </Box>
        )}

        <Breakout />
      </Box>
    </Box>
  );
};

export default MRR;
