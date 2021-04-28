import TurnRadius from './containers/TurnRadius';
import { Map } from './containers/Map';

import { Grid } from "@material-ui/core";
import MarkersList from './containers/MarkersList';

function App() {
  return (
    <Grid container spacing={0} className="h-100 bg-light">
      <Grid item xs={12} sm={5} md={4} lg={3} className="h-100 order-2 order-sm-1">
        <div className="p-3">
          <TurnRadius />
        </div>
        <div className="pt-4 pb-4 overflow-auto">
          <MarkersList />
        </div>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9} className="order-1 order-sm-2">
        <Map />
      </Grid>
    </Grid>
  );
}

export default App;
