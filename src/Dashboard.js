import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import SwitchButton from './Theme';
import Switch from '@material-ui/core/Switch';
import ToogleTheme from './ToogleTheme'
import ToggleButton from 'react-toggle-button'
import { useEffect, useState } from 'react';



function Dashboard() {
    const [check, setCheck ] = useState(true)

    return(
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            <Switch />
            <SwitchButton />
        </Card>
    )
    
  }


export default Dashboard