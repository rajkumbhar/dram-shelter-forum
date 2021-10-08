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
import { TextField } from '@mui/material';

export default function Answer() {
  const classes = useStyle();
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Which college is best for Masters in Data science ?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hi, While there isn't a formal ranking for the MS in Data Sciences
          program - the following universities have great course content and
          recruiters. I am including a snapshot of these for your reference:
          Arizona State University: ASU’s nine-month program focuses on using
          analytics in day-to-day business processes and managing it
          effectively. Required courses include data mining, applied regression
          models, analytical decision making tools and business analytics
          strategy. The curriculum also includes internship opportunities and a
          capstone practicum project with local Arizona companies such as
          American Express and Intel. 30 credit hours.
        </Typography>
      </CardContent>
    </Card>
  );
}
