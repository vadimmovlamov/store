import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Link } from "@mui/material";
import { ROUTE_NAMES } from "../../routes/routeNames";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ maxWidth: "100%", backgroundColor: "#1976d2" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={
          <Link to={ROUTE_NAMES.HOME}>
            <RestoreIcon style={{ color: "white" }} />
          </Link>
        }
      />

      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon style={{ color: "white" }} />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon style={{ color: "white" }} />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<AddBusinessIcon style={{ color: "white" }} />}
      />

      <BottomNavigationAction
        label="Review"
        value="review"
        icon={
          <Link to={ROUTE_NAMES.SHOP}>
            <YoutubeSearchedForIcon style={{ color: "white" }} />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
