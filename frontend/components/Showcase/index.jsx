import { Box, Text } from "@airtable/blocks/ui";
import React from "react";
import License from "../License";
import MRR from "./MRR";

const Showcase = () => {
  return (
    <Box display="flex" flexDirection="column">
      <License />
      <Text marginY={3} size="xlarge" fontWeight={600} textAlign="center">
        Sample Breakdown chart
      </Text>
      <MRR />
    </Box>
  );
};

export default Showcase;
