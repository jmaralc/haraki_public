import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
    root: {
      margin:0,
      width:'auto'
    },
    card: {
      margin:10
    },
    content: {
      display: 'flex',
      direction: 'row',
      alignment: 'center',
      justify: 'space-between',
      wrap: 'wrap',
    },
    summaryText:{
      margin: 5,
      padding: 2,
      textAlign: "left"
       
    },
    descriptiveText:{
      margin: 5,
      padding: 2, 
    },

  });

class ExplanationSection extends React.Component {


    render(){
      const {classes} = this.props
      return(
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='button' color='primary'>
                What is Haraki?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <Card className={classes.card}>
                  <CardContent className={classes.content}>
                    <Typography className={classes.summaryText} component="h4" variant="h4" color='primary'>
                      A place for the aikido community...
                    </Typography>
                    <Typography className={classes.descriptiveText} component="p" variant="body" color="textSecondary">
                      Haraki is just a tool for Aikido practitioners. It presents a set of services 
                      whose aim is to help you to keep track of your aikido practice, share it with 
                      your aikido sensei, and keep you update to the latest news of your aikido community.
                    </Typography>
                  </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardContent className={classes.content}>
                    <Typography className={classes.summaryText} component="h4" variant="h4" color='primary'>
                      ...by the community
                    </Typography>
                    <Typography className={classes.descriptiveText} component="p" variant="subtitle1" color="textSecondary">
                      The spirit of O-sensei was to develop a global community with
                      no borders where people can live and interact to grow in Aikido. We have the same aim
                      and offer you with HARAKI the tools to achieve it.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )
    }
}

  
  export default withStyles(styles)(ExplanationSection);