import { useFish } from './fish/FishDataProvider.js';
import { FishListComponent } from './fish/FishListComponent.js';
import { useCare } from './care/CareDataProvider.js'
import { CareListComponent } from './care/CareListComponent.js'
// import { useLocations } from './LocationDataProvider.js'
import { LocationListComponent } from './locations/LocationListComponent.js'

FishListComponent();
CareListComponent();
LocationListComponent();