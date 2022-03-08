import ToggleButton from 'react-toggle-button'
import { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import ToogleTheme from './ToogleTheme'


  function SwitchButton() {
    // And now you can use hooks
    // But only inside your functional component's
    // body
    
     const [check, setCheck ] = useState(true)
     

    return (
      <Switch onChange={() => {
          setCheck(!check);
          ToogleTheme(check)
      }}/>
    );
  }
  export default SwitchButton
    