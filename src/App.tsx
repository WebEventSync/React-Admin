import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { EventList } from "./events/EventList";
import { EventCreate } from "./events/EventCreate";
import { EventEdit } from "./events/EventEdit";
import { SpeakerList } from "./speakers/SpeakerList";
import { SessionList } from "./sessions/SessionList";
import { SessionEdit } from "./sessions/SessionEdit";
import { SpeakerEdit } from "./speakers/SpeakerEdit";
import { SessionCreate } from "./sessions/SessionCreate";
import { SpeakerCreate } from "./speakers/SpeakerCreate";
import { RoomList } from "./rooms/RoomList"
import { RoomCreate } from "./rooms/RoomCreate";
import { RoomEdit } from "./rooms/RoomEdit";
 
export const App = () => (
  <Admin layout={Layout} authProvider={authProvider}  dataProvider={dataProvider}>
    <Resource name="events"
    list={EventList}
    create={EventCreate}
    edit={EventEdit}
    />
    <Resource name="sessions" list={SessionList} create={SessionCreate} edit={SessionEdit}/>
    <Resource name="speakers" list={SpeakerList} create={SpeakerCreate} edit={SpeakerEdit}/>
    <Resource name="rooms" list={RoomList} create={RoomCreate} edit={RoomEdit}/>
  </Admin>
);
