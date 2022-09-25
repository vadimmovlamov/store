import React from "react";
import {Link} from "react-router-dom";
import {capitalize, startCase} from "lodash";

import {ROUTE_NAMES} from "../../router/routeNames";

const Header = {
    return(
        <div>
            {
                Object.entries(ROUTE_NAMES).map(([pageName, path]) => {
                    <Link className={styles.menuItem} key={path} to={path}>{startCase(capitalize(pageName))}</Link>
                })
            }
        </div>
    )
}

export default Header;