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

export default function Question() {
  const classes = useStyle();
  return (
    <Card>
      <CardContent>
        <TextField
          id="standard-basic"
          label="Ask your question "
          variant="standard"
          className={classes.textInput}
        />
        <Button
          variant="outlined"
          className={classes.askButton}
          startIcon={<Edit />}
        >
          Ask
        </Button>
      </CardContent>
    </Card>
  );
}
