

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PRodect1 from "../images/product-img-1.jpg"
import PRodect2 from "../images/product-img-2.jpg"
import PRodect3 from "../images/product-img-3.jpg"
import PRodect4 from "../images/product-img-4.jpg"
import { Card, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const prodectData = [
  {
    id: 1,
    name: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    image: PRodect1,
    price: "18",
    rating: "3",

  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    category: "Bakery & Biscuits",
    image: PRodect2,
    price: "20",
    rating: "2",

  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuits",
    image: PRodect3,
    price: "14",
    rating: "4",

  },
  {
    id: 4,
    name: "Onion Flavour Potato",
    category: "Snack & Munchies",
    image: PRodect4,
    price: "28",
    rating: "2",

  },
];

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Applayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box className="d-flex gap-3">
          {prodectData.map((product) => {
            return (
              <Card key={product.id} className="p-2">
                <img src={product.image} alt={product.productName} />
                <Typography variant="body2">{product.category}</Typography>
                <Typography variant="body1">{product.productName}</Typography>
                <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography>{product.price}</Typography>
                  <Button size="small" variant="contained">
                    <AddIcon />
                    Add
                  </Button>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}



export default Applayout;
