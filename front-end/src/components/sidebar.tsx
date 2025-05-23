// Sidebar.tsx
import React from 'react';
import { Box, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart'
import { logout } from '../store/authSlice';
import { useDispatch, UseDispatch } from 'react-redux';
import HelpIcon from '@mui/icons-material/Help';
import { useDarkMode } from '../DarkMode/DarkModeContext';

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar}) => {
 
  
   const { darkMode, toggleDarkMode } = useDarkMode();

    const navigate = useNavigate();
    const tohome = () => navigate('/home');
    const toprofile = () => navigate('/profile');
    const tohelp = () => navigate('/help');
    const toinvoices = () => navigate('/invoices');
    const toexpences = () => navigate('/reports');
    const tologin = () => navigate('/');
    const dispatch = useDispatch();

    const logoutt = () => {

      dispatch(logout());
      tologin();

    }

    

  return (
    <Box
      sx={{
        width: sidebarOpen ? { xs: '100%', sm: '200px' } : { xs: '100%', sm: '60px' },
        backgroundColor: darkMode ? '#555' : '#fff',
        transition: 'width 0.3s',
        position: 'fixed',
        height: '100%',
        top: 0,
        left: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 1000,
        display: { xs: 'none', sm: 'block' }, // Hide sidebar on mobile
        cursor: 'pointer'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 3, marginTop: '40px', marginLeft: '10px' }}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List sx={{ paddingRight: sidebarOpen ? 5 : 4.5 ,cursor: 'pointer'}}>
        <ListItem
          onClick={tohome}
          component='button'
          sx={{
            marginBottom: 5,
            backgroundColor: darkMode ? 'transparent' : 'transparent',
            marginLeft: '18px',
            border: '0px',
            paddingLeft: sidebarOpen ? 0 : 0,
            '&:hover': { backgroundColor: sidebarOpen ? (darkMode ? '#666' : '#f0f0f0') : 'transparent',
              transform: sidebarOpen ? 'none' : 'scale(1.3)' },
            cursor: 'pointer'
          }}
          
        >
          <HomeIcon sx={{ marginRight: sidebarOpen ? 2 : 0, transition: 'transform 0.3s ease', }} />
          {sidebarOpen && <ListItemText primary="Home" />}
        </ListItem>
        <ListItem
            onClick={toprofile}
          component='button'
          sx={{
            marginBottom: 5,
            marginLeft: '18px',
            backgroundColor: darkMode ? 'transparent' : 'transparent',
            border: '0px',
            paddingLeft: sidebarOpen ? 0 : 0,
            '&:hover': { backgroundColor: sidebarOpen ? (darkMode ? '#666' : '#f0f0f0') : 'transparent',
              transform: sidebarOpen ? 'none' : 'scale(1.3)' },
            cursor: 'pointer'
          }}
        >
          <PersonIcon sx={{ marginRight: sidebarOpen ? 2 : 0 }} />
          {sidebarOpen && <ListItemText primary="Profile" />}
        </ListItem>
        <ListItem
        onClick={toinvoices}
          component='button'
          sx={{
            marginBottom: 5,
            marginLeft: '18px',
            backgroundColor: darkMode ? 'transparent' : 'transparent',
            border: '0px',
            paddingLeft: sidebarOpen ? 0 : 0,
            '&:hover': {backgroundColor: sidebarOpen ? (darkMode ? '#666' : '#f0f0f0') : 'transparent',
              transform: sidebarOpen ? 'none' : 'scale(1.3)'},
            cursor: 'pointer'
          }}
        >
          <ReceiptIcon sx={{ marginRight: sidebarOpen ? 2 : 0 }} />
          {sidebarOpen && <ListItemText primary="Invoices" />}
        </ListItem>
        <ListItem
        onClick={toexpences}
          component='button'
          sx={{
            marginBottom: 5,
            marginLeft: '18px',
            backgroundColor: darkMode ? 'transparent' : 'transparent',
            border: '0px',
            paddingLeft: sidebarOpen ? 0 : 0,
            '&:hover': { backgroundColor: sidebarOpen ? (darkMode ? '#666' : '#f0f0f0') : 'transparent',
              transform: sidebarOpen ? 'none' : 'scale(1.3)' },
              cursor: 'pointer'
          }}
        >
          <BarChartIcon sx={{ marginRight: sidebarOpen ? 2 : 0 }} />
          {sidebarOpen && <ListItemText primary="Expenses" />}
        </ListItem>
        <ListItem
        onClick={tohelp}
          component='button'
          sx={{
            marginBottom: 1.5,
            marginLeft: '18px',
            backgroundColor: darkMode ? 'transparent' : 'transparent',
            border: '0px',
            paddingLeft: sidebarOpen ? 0 : 0,
            '&:hover': { backgroundColor: sidebarOpen ? (darkMode ? '#666' : '#f0f0f0') : 'transparent',
              transform: sidebarOpen ? 'none' : 'scale(1.3)' },
            cursor: 'pointer'
            
          }}
        >
          <HelpIcon sx={{ marginRight: sidebarOpen ? 2 : 0 }} />
          {sidebarOpen && <ListItemText primary="Support" />}
        </ListItem>
      </List>

      {/* Log Out Button */}
      <Box sx={{ position: 'absolute', width: '100%', bottom: 80, textAlign: sidebarOpen ? 'left' : 'center' }}>
        <Button
          variant="contained"
          startIcon={<ExitToAppIcon/>}
          sx={{
            justifyContent: sidebarOpen ? 'flex-start' : 'center',
            borderRadius: '30px',
            width: sidebarOpen ? '120px' : '10px',
            marginLeft: sidebarOpen ? '15px' : '0px',
            backgroundColor: darkMode ? '#888' : '#01579b',
            ':hover': { backgroundColor: darkMode ? '#666' : '#0288d1' },
            transition: 'margin-left 0.3s',
            paddingRight: 1
          }}
          onClick={logoutt}
        >
          {sidebarOpen && 'Log Out'}
        </Button>
      </Box>

      {/* Dark Mode Toggle */}
      <Box sx={{ position: 'absolute', bottom: 10, width: '100%', textAlign: 'center', marginLeft: sidebarOpen ? '-10px' : '0px' }}>
        <IconButton onClick={toggleDarkMode}>
          <Brightness4Icon />
        </IconButton>
        {sidebarOpen && <Typography variant="body2">Dark Mode</Typography>}
      </Box>
    </Box>
  );
};

export default Sidebar;
