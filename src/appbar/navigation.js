import React from 'react'

import {Tabs, Tab} from 'material-ui/Tabs';

const Navigation = ({ onChange, value }) =>
  <Tabs onChange={onChange} value={value}>
    <Tab label="Allocation" value='allocation'/>
    <Tab label="Outliers" value='outliers'/>
    <Tab label="Diagnostics" value='diagnostics'/>
  </Tabs>

export default Navigation
