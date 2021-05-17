import { drizzleReactHooks } from '@drizzle/react-plugin';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Divider, ListItemAvatar, ListItemText, ListItem, List } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '50%',
    align: 'center',
    margin: 'auto',
    backgroundColor: 'transparent',
  },
  listItemText: {
    color:'#ABABAB',
    '& p': {
      color: '#e53935',
      fontWeight: "bolder"
    }
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      margin: '0 10px'
    }
  },
}));


function Profile() {
  const classes = useStyles();
  const { useDrizzleState } = drizzleReactHooks;
  const state = useDrizzleState(state => ({...state}))
  console.log(state)
  const { accounts, accountBalances, web3} = state;

  return (
    <div>
      <h1>Profile</h1>
      <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.listItemText} primary="Account" secondary={accounts ? accounts[0] : "Pas de compte!"} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              <AccountBalanceOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.listItemText} primary="Account Balance" secondary={`${accountBalances[accounts[0]]} wei`} />
          </ListItem>
          <Divider variant="inset" component="li" />
          
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              
              </Avatar>
            </ListItemAvatar>
           <ListItemText className={classes.listItemText} primary="Current Network" secondary={`Id: ${web3.networkId}, Custom network`} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountBalanceWalletOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
          <ListItemText className={classes.listItemText} primary="Status" secondary={web3.status} />
         </ListItem>
        </List>
    </div>
  );
}

export default Profile;
