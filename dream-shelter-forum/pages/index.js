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

export default function Home() {
  const classes = useStyle();
  return (
    <Header>
      <Grid container spacing={1}>
        <Grid item md={3} className={classes.hideCard}>
          <Card>
            <CardContent>Topics goes here</CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid className={classes.quesCard}>
            <Question />
          </Grid>
          <Grid className={classes.answerCard}>
            <Answer />
          </Grid>
        </Grid>

        <Grid item md={3} xs={12} className={classes.quesCard}>
          <Card>
            <CardContent>friends suggestion goes here</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Header>
  );
}

//export default dynamic(() => Promise.resolve(Home), { ssr: false });
