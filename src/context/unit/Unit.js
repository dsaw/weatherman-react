import React, {useState} from 'react';
// celsius and fahrenheit
const UnitContext = React.createContext({ weatherUnit: 'C'});

function UnitContextProvider({children}) {

  const [weatherUnit, setWeatherUnit] = useState('C');



   return (<UnitContext.Provider value={{weatherUnit, setWeatherUnit}}>
        {children}
     </UnitContext.Provider>);
}



export {
  UnitContextProvider,
  UnitContext
};
