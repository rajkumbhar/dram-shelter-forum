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

export default function UserSuggestion() {
  const classes = useStyle();
  return (
    <>
      <Card p={1.5} gap={2} bgcolor={'#f5f5f5'} borderradius={16}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
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
      <br />
    </>
  );
}
