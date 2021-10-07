import Header from '../components/Header';
import dynamic from 'next/dynamic';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { Box } from '@mui/system';
import useStyle from '../utils/styles';

export default function Home() {
  const classes = useStyle();
  return (
    <Header>
      <Card className={classes.quesCard} md={{ minWidth: 25 }}>
        <CardContent>Question Goes here</CardContent>
      </Card>
    </Header>
  );
}

//export default dynamic(() => Promise.resolve(Home), { ssr: false });
