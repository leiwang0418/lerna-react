// import React, { useState } from "react";
// import { styled, alpha } from "@material-ui/core/styles";
// import {
// 	Tooltip,
// 	IconButton,
// 	Menu,
// 	MenuProps,
// 	MenuItem,
// } from "@material-ui/core";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import PropTypes from "prop-types";
// import { defineMessage, MessageDescriptor, useIntl } from "react-intl";

// const StyledMenu = styled((props: MenuProps) => (
// 	<Menu
// 		elevation={0}
// 		anchorOrigin={{
// 			vertical: "bottom",
// 			horizontal: "right",
// 		}}
// 		transformOrigin={{
// 			vertical: "top",
// 			horizontal: "right",
// 		}}
// 		{...props}
// 	/>
// ))(({ theme }) => ({
// 	"& .MuiPaper-root": {
// 		borderRadius: 6,
// 		marginTop: theme.spacing(1),
// 		minWidth: 180,
// 		color:
// 			theme.palette.mode === "light"
// 				? "rgb(55, 65, 81)"
// 				: theme.palette.grey[300],
// 		boxShadow:
// 			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
// 		"& .MuiMenu-list": {
// 			padding: "4px 0",
// 		},
// 		"& .MuiMenuItem-root": {
// 			"& .MuiSvgIcon-root": {
// 				fontSize: 18,
// 				color: theme.palette.text.secondary,
// 				marginRight: theme.spacing(1.5),
// 			},
// 			"&:active": {
// 				backgroundColor: alpha(
// 					theme.palette.primary.main,
// 					theme.palette.action.selectedOpacity
// 				),
// 			},
// 		},
// 	},
// }));

// const UserMenu = (props: UserMenuPorps) => {
// 	const intl = useIntl();
// 	const { icon = <AccountCircle />, label = userMenuMessage } = props;
// 	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
// 	const open = Boolean(anchorEl);
// 	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void =>
// 		setAnchorEl(event.currentTarget);
// 	const handleClose = () => setAnchorEl(null);

// 	// const DefaultUserMenuButton = (
// 	// 	<Tooltip title={label && intl.formatMessage(label)}>
// 	// 		<IconButton
// 	// 			id="menu-button"
// 	// 			aria-label={label && intl.formatMessage(label)}
// 	// 			color="inherit"
// 	// 			aria-expanded={open ? "true" : undefined}
// 	// 			aria-haspopup="true"
// 	// 			onClick={handleClick}
// 	// 			disableRipple
// 	// 		>
// 	// 			{icon}
// 	// 			<ArrowDropDownIcon viewBox="5 0 24 24" fontSize="small" />
// 	// 		</IconButton>
// 	// 	</Tooltip>
// 	// );

// 	return (
// 		<div>
// 			<Tooltip title={label && intl.formatMessage(label)}>
// 				<IconButton
// 					id="menu-button"
// 					aria-label={label && intl.formatMessage(label)}
// 					color="inherit"
// 					aria-expanded={open ? "true" : undefined}
// 					aria-haspopup="true"
// 					onClick={handleClick}
// 					disableRipple
// 				>
// 					{icon}
// 					<ArrowDropDownIcon viewBox="5 0 24 24" fontSize="small" />
// 				</IconButton>
// 			</Tooltip>
// 			<StyledMenu
// 				id="menu-button"
// 				anchorEl={anchorEl}
// 				open={open}
// 				onClose={handleClose}
// 				MenuListProps={{
// 					"aria-labelledby": "menu-button",
// 				}}
// 			>
// 				<MenuItem onClick={handleClose} disableRipple>
// 					Edit
// 				</MenuItem>
// 				<MenuItem onClick={handleClose} disableRipple>
// 					Duplicate
// 				</MenuItem>
// 				<MenuItem onClick={handleClose} disableRipple>
// 					Archive
// 				</MenuItem>
// 				<MenuItem onClick={handleClose} disableRipple>
// 					More
// 				</MenuItem>
// 			</StyledMenu>
// 		</div>
// 	);
// };

// UserMenu.propTypes = {
// 	icon: PropTypes.node,
// 	handleMenu: PropTypes.func.isRequired,
// 	label: PropTypes.shape({
// 		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// 			.isRequired,
// 		defaultMessage: PropTypes.string,
// 		description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
// 	}),
// };

// export interface UserMenuPorps {
// 	icon?: React.ReactNode;
// 	handleMenu: () => void;
// 	label?: MessageDescriptor;
// }

// const userMenuMessage = defineMessage({
// 	id: "ra.userMenu",
// 	defaultMessage: "Profile",
// });

// export default UserMenu;

import * as React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Stack from "@material-ui/core/Stack";

export default function UserMenu() {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<Stack direction="row" spacing={2}>
			<Paper>
				<MenuList>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem>Logout</MenuItem>
				</MenuList>
			</Paper>
			<div>
				<Button
					ref={anchorRef}
					id="composition-button"
					aria-controls={open ? "composition-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
				>
					Dashboard
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement="bottom-start"
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom-start"
										? "left top"
										: "left bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="composition-menu"
										aria-labelledby="composition-button"
										onKeyDown={handleListKeyDown}
									>
										<MenuItem onClick={handleClose}>
											Profile
										</MenuItem>
										<MenuItem onClick={handleClose}>
											My account
										</MenuItem>
										<MenuItem onClick={handleClose}>
											Logout
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	);
}
