import { Box, Text } from "@airtable/blocks/ui";
import React from "react";
import { green, red } from "../../../colors";
import formatDate from "../../../helpers/formatDate";

const Breakout = () => {
  let breakoutTypes = ["New", "Old", "Medium"];

  const breakoutLabels = [
    { label: "2021-10-01" },
    { label: "2021-10-02" },
    { label: "2021-10-03" },
    { label: "2021-10-02" },
  ];

  const valueData = [
    [123, 0, 0],
    [0, 654, 0],
    [0, 0, 212],
    [0, 0, 0],
  ];

  return (
    <Box display="flex">
      <Box zIndex={1} boxShadow="5px 0px 3px rgba(161, 160, 159, 0.5)">
        <Text
          fontWeight={600}
          flex={1}
          paddingY={2}
          paddingX={4}
          border="1px solid #E6E6FF"
          backgroundColor="#FCFCFF"
          textColor="#7171A6"
          fontSize="12px"
        >
          BREAKOUT
        </Text>
        {breakoutTypes.map((name) => (
          <Text
            key={name}
            fontSize="16px"
            fontWeight={600}
            backgroundColor="white"
            paddingY={2}
            paddingX={4}
            border="1px solid #E6E6FF"
            borderTop="hidden"
            borderLeft="hidden"
            flex={1}
          >
            {name || "empty"}
          </Text>
        ))}
        <Text
          fontSize="16px"
          fontWeight={600}
          backgroundColor="white"
          flex={0}
          paddingY={2}
          paddingX={4}
          border="1px solid #E6E6FF"
          borderTop="hidden"
        >
          Change
        </Text>
      </Box>

      {breakoutLabels.map(({ label }, i) => {
        const formattedLabel = formatDate(label);
        const totalChange = valueData ? calculateChange(valueData[i]) : 0;
        return (
          <Box flex={1} key={label}>
            <Text
              paddingY={2}
              paddingLeft={3}
              fontWeight={600}
              fontSize="12px"
              textColor="#7171A6"
              backgroundColor="#FCFCFF"
              border="1px solid #E6E6FF"
              borderRight="hidden"
              borderLeft="hidden"
            >
              {formattedLabel}
            </Text>
            {valueData &&
              valueData[i].map((val, i) => (
                <Text
                  key={val + i}
                  fontWeight={400}
                  paddingY={2}
                  paddingLeft={3}
                  border="1px solid #E6E6FF"
                  borderLeft="hidden"
                  borderRight="hidden"
                  borderTop="hidden"
                  textColor={val === 0 ? "black" : val > 0 ? green : red}
                >
                  {Number(val).toLocaleString("en")}
                </Text>
              ))}
            <Text
              fontWeight={400}
              paddingY={2}
              paddingLeft={3}
              border="1px solid #E6E6FF"
              borderLeft="hidden"
              borderRight="hidden"
              borderTop="hidden"
              textColor={
                totalChange === 0 ? "black" : totalChange > 0 ? green : red
              }
            >
              {Number(totalChange).toLocaleString("en")}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

function calculateChange(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

export default Breakout;
