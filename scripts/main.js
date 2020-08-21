import { useFish } from './fish/FishDataProvider.js';
import { FishListComponent } from './fish/FishList.js';
import { useCare } from './care/CareDataProvider.js'
import { CareListComponent } from './care/CareListComponent.js'

FishListComponent();

// const allTheCare = useCare();

// for (const care of allTheCare) {
//     console.log(care)
// }

CareListComponent();