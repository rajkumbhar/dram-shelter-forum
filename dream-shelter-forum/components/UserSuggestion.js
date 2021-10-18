import Edit from '@mui/icons-material/Edit';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import useStyle from '../utils/styles';
import { Avatar, CardHeader, IconButton, TextField } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { Info } from '@mui/icons-material';
import Add from '@material-ui/icons/Add';
import customTheme, {
  customShadow,
  shadow,
  colorShadows,
} from '../utils/theme';
import Box from '@mui/material/Box';

export default function UserSuggestion() {
  console.log(customTheme);
  const classes = useStyle();
  return (
    <>
      <Card
        style={{
          boxShadow: customShadow.gray[10],
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              style={{
                backgroundColor: customTheme.palette.warning.main,
              }}
              aria-label="recipe"
            >
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Add />
            </IconButton>
          }
          title="Sam Andrew"
          subheader="September 14, 2016"
        />
      </Card>
      <Button
        variant="contained"
        style={{
          backgroundColor: customTheme.palette.error.main,
          color: '#fff',
          boxShadow: customShadow.error[10],
        }}
      >
        Secondary
      </Button>
      <br />
    </>
  );
}
