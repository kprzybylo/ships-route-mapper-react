import TurnRadius from './containers/TurnRadius';
import { Map } from './containers/Map';

import { Grid } from "@material-ui/core";
import MarkersList from './containers/MarkersList';

function App() {
  return (
    <Grid container spacing={0} className="h-100 bg-light">
      <Grid item xs={4} className="mh-100">
        <div className="m-3">
          <TurnRadius />
        </div>
        <div className="mt-4 mb-4 h-75 overflow-auto">
          <MarkersList />
        </div>
      </Grid>
      <Grid item xs={8}>
        <Map />
      </Grid>
    </Grid>
  );
}

export default App;
