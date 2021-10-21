import Header from '../components/Header';
import dynamic from 'next/dynamic';
import Edit from '@mui/icons-material/Edit';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { Box, width } from '@mui/system';
import useStyle from '../utils/styles';
import { TextField } from '@mui/material';
import Question from '../components/Question';
import Answer from '../components/Answer';
import UserSuggestion from '../components/UserSuggestion';
import Topics from '../components/Topics';
import theme from '../utils/theme';

export default function Home() {
  console.log(theme);
  const classes = useStyle();
  return (
    <Header>
      <Grid container spacing={1}>
        <Grid item md={3} className={classes.hideCard}>
          <Card>
            <CardContent>
              <Topics></Topics>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid className={classes.quesCard}>
            <Question />
          </Grid>
          <Grid className={classes.answerCard}>
            <Answer />
            <br />
            <Answer />
          </Grid>
        </Grid>

        <Grid item md={3} xs={12} className={classes.quesCard}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="div">
                Friends with similar interest like you
              </Typography>
              <UserSuggestion />
              <UserSuggestion />
              <UserSuggestion />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Header>
  );
}

//export default dynamic(() => Promise.resolve(Home), { ssr: false });
