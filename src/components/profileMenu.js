import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import React from "react";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withRouter } from 'react-router-dom';


class ProfileMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            showModal: false,
            searchVal: ''
        }

    }

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    onDeviceSearch = (event) => {
        if (event.key === 'Enter') {
            this.props.dispatch({ type: 'HEADER_DEVICE_SEARCH_VALUE', searchValue: this.state.searchVal })
            this.props.history.push('/device')
        }
    }

    onDeviceChange = (event) => {
        this.setState({
            searchVal: event.target.value
        })
    }

    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <>
                <div className="profile-menu quick-add-menu" >
                    <div>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            color="inherit"
                            aria-haspopup="true"
                            className="icon-button"
                            onClick={this.handleMenu}
                        >
                            <Tooltip title={"Profile Menu"} placement="bottom" >
                                <i className="icon-ellipsis" />
                            </Tooltip>
                        </IconButton>
                        <Menu
                            id="quick-add-menu"
                            className="profile-menu-dropdown"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem title="Coming Soon" onClick={() => { this.props.history.push('/profile'); this.handleClose() }}>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={() => { this.props.history.push('/reset-password'); this.handleClose() }}>
                                Reset Password
                            </MenuItem>
                            <MenuItem title="Coming Soon" onClick={this.handleClose}>Support</MenuItem>
                            <MenuItem title="Coming Soon" onClick={this.handleClose}>FAQ</MenuItem>
                        </Menu>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ProfileMenu);
