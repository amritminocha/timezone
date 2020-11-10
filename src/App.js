import React, { Component } from 'react';
import './App.css';
import moment from "moment-timezone";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pstTime: '',
      pstDate: '',
      mountainDate: '',
      mountainTime: '',
      centralDate: '',
      centralTime: '',
      easternDate: '',
      easternTime: '',
      ksaDate: '',
      ksaTime: '',
      pstIstTime: '',
      pstIstDate: '',
      mountainIstDate: '',
      mountainIstTime: '',
      centralIstDate: '',
      centralIstTime: '',
      easternIstDate: '',
      easternIstTime: '',
      ksaIstDate: '',
      ksaIstTime: '',
      selectedDate: '2020-05-24',
      selectedTime: '07:30:00',
      converted: false

    }
  }
  useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    }

  }));

  componentDidMount = () => {
    console.log(moment().toString())
    console.log(this.state.selectedTime);
    console.log(moment(`${this.state.selectedDate}T${this.state.selectedTime}`).toString())
    console.log(moment(`${this.state.selectedDate}T${this.state.selectedTime}`).add(2, "hours").format());

    setInterval(() => {
      const m = moment();
      this.setState({ pstTime: m.tz("America/Los_Angeles").format('h:mm a') });
      this.setState({ pstDate: m.tz("America/Los_Angeles").format('MMMM Do') });
      this.setState({ mountainTime: m.tz("US/Arizona").format('h:mm a') });
      this.setState({ mountainDate: m.tz("US/Arizona").format('MMMM Do') });
      this.setState({ centralTime: m.tz("America/Chicago").format('h:mm a') });
      this.setState({ centralDate: m.tz("America/Chicago").format('MMMM Do') });
      this.setState({ easternTime: m.tz("America/New_York").format('h:mm a') });
      this.setState({ easternDate: m.tz("America/New_York").format('MMMM Do') });
      this.setState({ ksaTime: m.tz("America/New_York").add(8, "hours").format('h:mm a') });
      this.setState({ ksaDate: m.tz("America/New_York").add(8, "hours").format('MMMM Do') });


      // console.log(m.tz("America/Los_Angeles").format('MMMM Do YYYY,h:mm:ss a'));//pst
      // console.log(m.tz("US/Arizona").format('MMMM Do YYYY,h:mm:ss a')); //mountain
      // console.log(m.tz("America/Chicago").format('MMMM Do YYYY,h:mm:ss a'));//CENTRAL
      // console.log(m.tz("America/New_York").format('MMMM Do YYYY,h:mm:ss a'));//eastern
      // console.log(m.tz("America/New_York").add(8, "hours").format('MMMM Do YYYY,h:mm:ss a'));//ksa
    }, 1000);

  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date.target.value });
    console.log(date.target.value);
  }

  handleTimeChange = async (time) => {
    await this.setState({ selectedTime: time.target.value });
    console.log(this.state.selectedTime)
  }

  resultHandlerPart = () => {
    console.log('part entered')
    return new Promise((resolve, reject) => {
      console.log('promise entered')
      var pstIstTime = moment(`${this.state.selectedDate}T${this.state.selectedTime}`).add(13, "hours").add(30, "minutes").format();
      this.setState({ pstIstDate: moment(pstIstTime).format('MMMM Do') });
      this.setState({ pstIstTime: moment(pstIstTime).format('h:mm a') });

      var mountainIstTime = moment(`${this.state.selectedDate}T${this.state.selectedTime}`).add(12, "hours").add(30, "minutes").format();
      this.setState({ mountainIstDate: moment(mountainIstTime).format('MMMM Do') });
      this.setState({ mountainIstTime: moment(mountainIstTime).format('h:mm a') });

      var centralIstTime = moment(`${this.state.selectedDate}T${this.state.selectedTime}`).add(11, "hours").add(30, "minutes").format();
      this.setState({ centralIstDate: moment(centralIstTime).format('MMMM Do') });
      this.setState({ centralIstTime: moment(centralIstTime).format('h:mm a') });

      var easternIstTime = moment(`${this.state.selectedDate}T${this.state.selectedTime}`).add(10, "hours").add(30, "minutes").format();
      this.setState({ easternIstDate: moment(easternIstTime).format('MMMM Do') });
      this.setState({ easternIstTime: moment(easternIstTime).format('h:mm a') });

      var ksaIstTime = moment(`${this.state.selectedDate}T${this.state.selectedTime}`).add(2, "hours").add(30, "minutes").format();
      this.setState({ ksaIstDate: moment(ksaIstTime).format('MMMM Do') });
      this.setState({ ksaIstTime: moment(ksaIstTime).format('h:mm a') });
      resolve();
    })

  }

  resultHandler = async () => {
    console.log('entered')
   this.resultHandlerPart().then(datat =>{
      this.setState({ converted: true });
      console.log(this.state.converted)

    })

  }



  render() {
    const classes = this.useStyles;
    var lower = null;
    if (this.state.converted) {
      lower = (
        <div className="second">
          <Grid container className="Lower">
            <Grid item xs={true}>
              <p>Pacific(P) to Ist</p>
              <h3>{this.state.pstIstTime}</h3>
              <p>{this.state.pstIstDate}</p>
            </Grid>

            <Grid item xs={true}>
              <p>Mountain(M) to Ist</p>
              <h3>{this.state.mountainIstTime}</h3>
              <p>{this.state.mountainIstDate}</p>
            </Grid>

            <Grid item xs={true}>
              <p>Central(C) to Ist</p>
              <h3>{this.state.centralIstTime}</h3>
              <p>{this.state.centralIstDate}</p>
            </Grid>

            <Grid item xs={true}>
              <p>Eastern(E) to Ist</p>
              <h3>{this.state.easternIstTime}</h3>
              <p>{this.state.easternIstDate}</p>
            </Grid>

            <Grid item xs={true}>
              <p>KSA to Ist</p>
              <h3>{this.state.ksaIstTime}</h3>
              <p>{this.state.ksaIstDate}</p>
            </Grid>
          </Grid>
        </div>
      );
    }
    return (
      <div>

        <Grid container className="App">
          {/* <Grid item xs={true}><Paper className={classes.paper}><p>asasasas</p></Paper></Grid> */}
          <Grid item xs={true}>
            <p>Pacific(P)</p>
            <h3>{this.state.pstTime}</h3>
            <p>{this.state.pstDate}</p>
          </Grid>

          <Grid item xs={true}>
            <p>Mountain(M)</p>
            <h3>{this.state.mountainTime}</h3>
            <p>{this.state.mountainDate}</p>
          </Grid>

          <Grid item xs={true}>
            <p>Central(C)</p>
            <h3>{this.state.centralTime}</h3>
            <p>{this.state.centralDate}</p>
          </Grid>

          <Grid item xs={true}>
            <p>Eastern(E)</p>
            <h3>{this.state.easternTime}</h3>
            <p>{this.state.easternDate}</p>
          </Grid>

          <Grid item xs={true}>
            <p>KSA</p>
            <h3>{this.state.ksaTime}</h3>
            <p>{this.state.ksaDate}</p>
          </Grid>

        </Grid>

        <div className="Second">
          <h3>Convert Client Time & Date --- Indian Date & Time</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
              id="date"
              label="Select Date"
              type="date"
              value={this.state.selectedDate}
              // defaultValue="2020-05-24"
              className={classes.textField}
              onChange={this.handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              label="Alarm clock"
              type="time"
              onChange={this.handleTimeChange}
              value={this.state.selectedTime}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ marginLeft: "5px" }}
              onClick={this.resultHandler}
            >Done</Button>
          </div>
        </div>
        {lower}
      </div>
    );
  }
}

export default App;
