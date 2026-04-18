import { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import './styles.css';
import NavBar from "./NavBar";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data));
  }, []);

  const title = 'Reactivities';
  return (
    <>
      <NavBar />
      <List>
        {activities.map((activity: Activity) => (
          <ListItem key={activity.id}>
            <ListItemText>
              {activity.title}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default App;
