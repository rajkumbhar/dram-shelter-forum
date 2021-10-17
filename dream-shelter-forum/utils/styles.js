import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'darkgreen',
    boxShadow: 'none',
    color: 'white',
  },
  main: {
    minHeight: '80vh',
  },
  quesCard: {
    marginTop: 10,
    marginBottom: 10,
  },
  hideCard: {
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  textInput: {
    width: '100%',
  },
  askButton: {
    marginBottom: '2%',
    marginTop: '3%',
    float: 'right',
  },
  headerIcons: {
    marginLeft: '20px',
  },
  answerCard: {
    marginBottom: '1%',
  },
  actionCardIcons: {
    marginLeft: '20px',
  },
  chips: {
    margin: '10%',
    color: 'green',
  },
}));

export default useStyles;
