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

export default function Answer() {
  const classes = useStyle();
  return (
    <>
      <Card>
        <CardContent>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Which college is best for Masters in Data science ?
            </Typography>
            <Typography variant="body2" color="inherit">
              Hi, While there isn't a formal ranking for the MS in Data Sciences
              program - the following universities have great course content and
              recruiters. I am including a snapshot of these for your reference:
              Arizona State University: ASU’s nine-month program focuses on
              using analytics in day-to-day business processes and managing it
              effectively. Required courses include data mining, applied
              regression models, analytical decision making tools and business
              analytics strategy. The curriculum also includes internship
              opportunities and a capstone practicum project with local Arizona
              companies such as American Express and Intel. 30 credit hours.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              className={classes.actionCardIcons}
            >
              <ThumbUpAltRoundedIcon />
            </IconButton>
            <IconButton aria-label="share" className={classes.actionCardIcons}>
              <ModeCommentRoundedIcon />
            </IconButton>
            <IconButton aria-label="share" className={classes.actionCardIcons}>
              <ShareRoundedIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}
