import {Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel }  from '@mui/lab';
import { useState } from 'react';
import { tabData } from "../utility/data";
const MTab = () => {
  const [value, setValue] = useState('1');
   const handleChange = (event, newValue) => {
    setValue(newValue);
  }
    return (
      <Box sx={{ width: '100%', typography: 'body1' }} marginTop={5}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            {tabData.map((tab, index) => (
              <Tab key={index} label={tab.label} value={index} />
            ))}
          </TabList>
        </Box>
        {tabData.map((tab, index) => (
          <TabPanel key={index} value={index} sx={{ px: { xs: 1, sm: 3 } }}>
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
export default MTab