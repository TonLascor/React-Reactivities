import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, MenuItem, Typography } from "@mui/material";
import { Group } from "@mui/icons-material";

function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ position: "static", backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large"></Group>
                <Typography variant="h4" fontWeight='bold'>
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <MenuItem sx={{ fontSize: '1.25rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Activities
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.25rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                About
              </MenuItem>
              <MenuItem sx={{ fontSize: '1.25rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                Contacts
              </MenuItem>
            </Box>
            <Button size='large' variant='contained' color="warning">
              CreateActivity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar;