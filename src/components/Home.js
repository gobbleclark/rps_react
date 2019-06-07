import React from 'react';
import { Container, Header, Grid, Card, Button, } from "semantic-ui-react";
import OptionBox from './OptionBox';
import rock from './rock-icon-grey.png';
import scissors from './scissors-icon-grey.png';
import paper from './paper-icon-grey.png';



class Home extends React.Component {
    state = { 
      userChoice: null, 
      userScore: 0,
      compScore: 0,
      choice: undefined,
    }
    
    compChoice = ['rock', 'paper', 'scissors']
    
  
    optionClick = (option) => {
      // const { userChoice } = this.state;
      this.setState({ userChoice: option },
        () => { this.randomChoice() }
        )}
  
    randomChoice = () => {
      var choice = this.compChoice[Math.floor(Math.random() * this.compChoice.length)]
      this.setState({compChoice: choice}, () => { this.gameOutcome() })
    }
  
    gameOutcome = () => {
      // debugger
      if (this.state.userChoice === "rock" && this.state.compChoice === 'scissors' && this.state.userChoice !== this.state.compChoice)
       { this.setState({outcome: "You Win!"}, () => { this.increaseScore() })}
      else if (this.state.userChoice === "paper" && this.state.compChoice === 'rock' && this.state.userChoice !== this.state.compChoice)
      { this.setState({outcome: "You Win!"}, () => { this.increaseScore() })}
      else if (this.state.userChoice == this.state.compChoice)
      { this.setState({outcome: "Tie Game!"}, () => { this.increaseScore() })}
      else if (this.state.userChoice === "scissors" && this.state.compChoice === 'paper' && this.state.userChoice !== this.state.compChoice)
      { this.setState({outcome: "You Win!"}, () => { this.increaseScore() })} 
        else { 
         this.setState({outcome: "You Lose."}, () => { this.increaseScore() })
        }
        
    }
  
    increaseScore = () => {
      const { userScore, compScore } = this.state;
      if (this.state.outcome === 'You Win!') 
      { this.setState({userScore: userScore + 1 })}
      else if (this.state.outcome === 'Tie Game!') 
      { this.setState({userScore: userScore + 0 })}
      else 
      { this.setState({compScore: compScore + 1 })}
    }

    restartGame = () => {

    }
  
  
    render() {
      return (  
          <Container style={{ paddingTop: "25px", }}>
            <Header as="h1"> rock - paper - scissors</Header>
            <hr />
            <div id='scoreboard'>
            <Card.Group id='cards'>
              <Card>
                <Card.Content>
                  <Card.Header>Scoreboard</Card.Header>
                  <Card.Meta>You vs. Computer</Card.Meta>
                  <Card.Description as='h2'>Your Score: {this.state.userScore}</Card.Description>
                  <Card.Description as='h2'>Computer Score: {this.state.compScore}</Card.Description>

                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Card.Header>Game Choices</Card.Header>
                  <Card.Meta> Take your pick. </Card.Meta>
                  <Card.Description as='h3'>Your Chose: {this.state.userChoice}</Card.Description>
                  <Card.Description as='h3'>Computer Chose: {this.state.compChoice}</Card.Description>

                </Card.Content>
              </Card>

              <Card>
                <Card.Content>
                  <Card.Header>Guess What?</Card.Header>
                  <Card.Meta> the pressure is on. </Card.Meta>
                  <Card.Description as='h1' id='outcome'> {this.state.outcome} </Card.Description>

                </Card.Content>
              </Card>


            </Card.Group>
            </div>
            <hr/>
            <br/>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <OptionBox name='rock' img={rock} optionClick={this.optionClick} />
                </Grid.Column>
                <Grid.Column>
                  <OptionBox name='paper' img={paper} optionClick={this.optionClick} />
                </Grid.Column>
                <Grid.Column>
                  <OptionBox name='scissors' img={scissors} optionClick={this.optionClick} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <h3 id= 'directions'> Simply click the click the image to choose. Good luck! </h3>
            <Button>
              Restart Game 
            </Button>
          </Container>
  
      )
    }
  }


export default Home;