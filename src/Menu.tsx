import {
    Menu,
    DashboardMenuItem,
    MenuItemLink,
} from "react-admin";

import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MicIcon from "@mui/icons-material/Mic";

export const MyMenu = () => (
    <Menu>

        <DashboardMenuItem />

        <MenuItemLink
            to="/events"
            primaryText="Events"
            leftIcon={<EventIcon />}
        />

        <MenuItemLink
            to="/sessions"
            primaryText="Sessions"
            leftIcon={<MicIcon />}
        />

        <MenuItemLink
            to="/speakers"
            primaryText="Speakers"
            leftIcon={<PersonIcon />}
        />

        <MenuItemLink
            to="/locations"
            primaryText="Locations"
            leftIcon={<LocationOnIcon />}
        />

    </Menu>
);