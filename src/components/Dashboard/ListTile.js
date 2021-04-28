import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";

export default function ListTile({ avatar, label, date }) {
  return (
    <>
      <List style={{ backgroundColor: "grey", marginRight: 20, margin: 10 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{avatar}</Avatar>
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="h6">{label}</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="h6">{date}</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}
