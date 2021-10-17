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
import {
  Avatar,
  CardHeader,
  Chip,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { Info } from '@mui/icons-material';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

export default function Topics() {
  const classes = useStyle();
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const handleClick = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip
          label="ggegg"
          variant="outlined"
          style={{ marginTop: '4%' }}
          onDelete={handleDelete}
        />
        <Chip
          label="gfwgergegg"
          variant="outlined"
          style={{ marginTop: '4%' }}
          onDelete={handleDelete}
        />
        <Chip
          label="ggegergegg"
          style={{ marginTop: '4%' }}
          onDelete={handleDelete}
        />
        <Chip
          label="ggreggegg"
          variant="outlined"
          style={{ marginTop: '4%' }}
          onDelete={handleDelete}
        />
        <Chip
          label="ggegg"
          variant="outlined"
          style={{ marginTop: '4%' }}
          onDelete={handleDelete}
        />
        <Chip
          label="ggreggegg"
          variant="outlined"
          style={{ marginTop: '4%' }}
          onDelete={handleDelete}
        />
        <Chip
          label="ggreggegg"
          variant="outlined"
          style={{ marginTop: '4%' }}
          onDelete={handleDelete}
        />
        <Chip
          variant="outlined"
          label="ggreggegg"
          style={{ marginTop: '4%', color: 'green' }}
          icon={<FaceOutlinedIcon />}
        />
      </Stack>
    </>
  );
}
