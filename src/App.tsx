import TurnRadius from './components/TurnRadius';
import { Map } from './containers/Map';

import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container spacing={0} className="h-100">
      <Grid item xs={4}>
        <div className="m-3">
          <TurnRadius />
        </div>
      </Grid>
      <Grid item xs={8}>
        <Map />
      </Grid>
    </Grid>
  );
}

export default App;
