import { useEffect, useState } from "react";
import './App.css';
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data));
  }, []);

  const title = 'Reactivities';
  return (
    <>
      <Typography variant="h3">{title}</Typography>

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
}

export default App;
