import React from "react";

import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="experience" className="experience">
      <Card variant="outlined">
        <CardContent>
          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Bitcoin Technologies" {...allyProps(0)} />
              <Tab label="Sii - German Electronic Company" {...allyProps(0)} />
              <Tab label="Sii - German Clothing Company" {...allyProps(0)} />
              <Tab label="Sii - Spanish Clothing Company" {...allyProps(0)} />
            </Tabs>
          </Box>
          <CustomTabPanel index={0} value={value}>
            Developing cryptocurrency exchanges website using Angular 15,
            Angular 16, Typescript, Sass, NgRx, RxJS
            <ul>
              <li>
                Successfully updating the technology stack of the website,
                migrating it to modern versions of frameworks, e.g. from Angular
                15 to Angular 16, resulting in improved performance,
                maintainability and scalability.
              </li>
              <li>
                Processed and implemented new UI/UX solutions to enhance the
                user experience and increase visibility on the website, e.g.
                making trade view chart bigger by 20% for easier usage without
                decreasing visibility of other elements.
              </li>
              <li>
                Conducted in-depth research and analysis of competitor websites
                to identify areas for improvement. Leveraged the finding to
                propose and implement innovative features, such as integrating a
                trade view chart with the ability to draw on the chart and save
                these drawing, providing traders with enhanced tools for
                technical analysis.
              </li>
            </ul>
          </CustomTabPanel>
          <CustomTabPanel index={1} value={value}>
            Worked on Cockpit Panel using Angular 13, AngularJS, Javascript,
            Typescript, Sass, Jasmine, Karma
          </CustomTabPanel>
          <CustomTabPanel index={2} value={value}>
            Developed Labels & Packaging website using Angular 13, Typescript,
            Storybook, Sass, Jest, NGXS
          </CustomTabPanel>
          <CustomTabPanel index={3} value={value}>
            Created sales dashboards using React, Typescript, Sass, Jest,
            react-testing-library, Redux
          </CustomTabPanel>
        </CardContent>
      </Card>
    </section>
  );
}

export default Experience;
