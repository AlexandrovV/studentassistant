import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });
  
  class PrimarySearchAppBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleMaterials = this.toggleMaterials.bind(this);
        this.toggleContacts = this.toggleContacts.bind(this);
        this.toggleHelp = this.toggleHelp.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
            materialsDropdownOpen: false,
            contactsDropdownOpen: false,
            helpDropdownOpen: false,
            drawerOpen: false
        };
      }
    
      toggleMaterials() {
        this.setState({
          materialsDropdownOpen: !this.state.materialsDropdownOpen
        });
      }
      toggleContacts() {
        this.setState({
            contactsDropdownOpen: !this.state.contactsDropdownOpen
        });
      }
      toggleHelp() {
        this.setState({
            helpDropdownOpen: !this.state.helpDropdownOpen
        });
      }
      toggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
      }

  
    handleProfileMenuOpen = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleMenuClose = () => {
      this.setState({ anchorEl: null });
      this.handleMobileMenuClose();
    };
  
    handleMobileMenuOpen = event => {
      this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };
  
    handleMobileMenuClose = () => {
      this.setState({ mobileMoreAnchorEl: null });
    };
  
    render() {
      const { anchorEl, mobileMoreAnchorEl } = this.state;
      const { classes } = this.props;
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      );
  
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton color="inherit">
              <Badge className={classes.margin} badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge className={classes.margin} badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
  
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="title" color="inherit" noWrap>
                <Link to="/" className="link">Student Assistant</Link>
              </Typography>
              <Button style={{marginLeft: '2rem', color: '#ffffff'}}>
                  Assignments
              </Button>
              <ButtonDropdown isOpen={this.state.materialsDropdownOpen} toggle={this.toggleMaterials}>
                <DropdownToggle caret style={{backgroundColor: 'transparent', border: 'none'}} >
                    Materials
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Academic calendar</DropdownItem>
                <DropdownItem>Books</DropdownItem>
                <DropdownItem>Educational software</DropdownItem>
                <DropdownItem>Schedule</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <ButtonDropdown isOpen={this.state.helpDropdownOpen} toggle={this.toggleHelp}>
                <DropdownToggle caret style={{backgroundColor: 'transparent', border: 'none'}} >
                    Help
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem><Link to="/qa">FAQ</Link></DropdownItem>
                <DropdownItem>User manual</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <ButtonDropdown isOpen={this.state.contactsDropdownOpen} toggle={this.toggleContacts}>
                <DropdownToggle caret style={{backgroundColor: 'transparent', border: 'none'}} >
                    Contacts
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>About us</DropdownItem>
                <DropdownItem>Donate</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
              
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Input
                  placeholder="Search…"
                  disableUnderline
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                {/* <IconButton color="inherit">
                  <Badge className={classes.margin} badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge className={classes.margin} badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */}
                <Button style={{marginLeft: '2rem', color: '#ffffff'}}>
                  <Link to="/login" className="link">Sign in</Link>
                </Button>
                <Button style={{marginLeft: '2rem', color: '#ffffff'}}>
                  <Link to="/register" className="link">Sign up</Link>
                </Button>
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
                open={this.state.drawerOpen}
                onClose={this.toggleDrawer}
                style={{overflow: 'hidden'}}
            >
                <List>
                    <ListItem style={{cursor: 'pointer'}}>
                        My profile
                    </ListItem>
                    <Divider />
                    <ListItem style={{cursor: 'pointer'}}>
                        Friends
                    </ListItem>
                    <Divider />
                    <ListItem style={{cursor: 'pointer'}}>
                        My group
                    </ListItem>
                    <Divider />
                    <ListItem style={{cursor: 'pointer'}}>
                        My Chats
                    </ListItem>
                    <Divider />
                    <ListItem style={{cursor: 'pointer'}}>
                        My Homework
                    </ListItem>
                    <Divider />
                    <ListItem style={{cursor: 'pointer'}}>
                        Move to dl.iitu.kz
                    </ListItem>
                </List>
            </Drawer>
          {renderMenu}
          {renderMobileMenu}
        </div>
      );
    }
  }
  
  PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PrimarySearchAppBar);