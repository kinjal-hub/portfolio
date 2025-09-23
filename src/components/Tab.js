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
            {tabData.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
        {tabData.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.info}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
export default MTab