import React, { Component } from 'react';
import './App.css';
import babyanimals from './babyanimals.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import AnimalCard from './components/AnimalCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        babyanimals: babyanimals,
        unselectedAnimals: babyanimals
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectAnimal = breed => {
        const findAnimal = this.state.unselectedAnimals.find(item => item.breed === breed);

        if(findAnimal === undefined) {
            // failure to select a new animal
            this.setState({ 
                message: "You guessed incorrectly!",
                alert: "Start Over",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                babyanimals: babyanimals,
                unselectedAnimals: babyanimals
            });
        }
        else {
            // success to select a new animal
            const newAnimals = this.state.unselectedAnimals.filter(item => item.breed !== breed);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                babyanimals: babyanimals,
                unselectedAnimals: newAnimals
            });
        }

        this.shuffleArray(babyanimals);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.babyanimals.map(babyanimal => (
                        <AnimalCard
                            breed={babyanimal.breed}
                            image={babyanimal.image}
                            selectAnimal={this.selectAnimal} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

