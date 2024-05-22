import * as React from "react";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import "./styles.css";
import List from "../List";

export default function TabsComponent({coins}) {
  const [value, setValue] = React.useState('list');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFB6C1',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}> 
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab 
            label="Name"
            value="list" 
            sx={style}
          />
        </TabList>
        
        <TabPanel value="list">
          <table className="list-flex">
            {coins.map((item, i) => {
              return <List coin={item} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider> 
    
  );
}