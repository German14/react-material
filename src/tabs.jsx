import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataGrid2 from "./components/DataGrid";
import NestedModal from "./components/modal";

import Photos from "./components/photos";
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Photos" value="1" />
            <Tab label="Table" value="2" />
            <Tab label="Modals" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Photos />
        </TabPanel>
        <TabPanel value="2">
          <DataGrid2 />
        </TabPanel>
        <TabPanel value="3">
        <NestedModal/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
