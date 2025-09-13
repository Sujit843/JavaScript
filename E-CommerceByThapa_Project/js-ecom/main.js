import './style.css';

import products from "./api/products.json";
import {showProductContainer} from './homeProductCard';

// call the function named 'showProductContainer  , jo hamne json bnaya he usko ap kisi loop ke help se call kro

showProductContainer(products);

