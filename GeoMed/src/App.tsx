import { Provider } from './components/ui/provider';
import { Box,} from '@chakra-ui/react';
import { Home } from "./pages/Home";
function App() {

  return (
   
    <Provider>
       <Box>
          <Home/>
       </Box>
    </Provider>
  
   
  );
};

export default App;
