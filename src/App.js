import React from 'react';
import './style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import FetchData from './service/FetchData';

// import Details from './components/Details/Details';
// import Calendar from './components/Calendar/Calendar';

class App extends React.Component {
    fetchData = new FetchData();

    state = {
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
        company: null,
    };

    componentDidMount() {
        this.updateRocket();
        this.companyInfo();
    }

    updateRocket() {
        this.fetchData
            .getRocket()
            .then((data) => {
                this.setState({ rockets: data.map((item) => item.name) });
                return data;
            })
            .then((data) =>
                data.find((item) => item.name === this.state.rocket)
            )
            .then((rocketFeatures) => this.setState({ rocketFeatures }));
    }

    companyInfo() {
        this.fetchData
            .getCompany()
            .then((company) => this.setState({ company }));
    }

    changeRocket = (rocket) => {
        this.setState({ rocket }, this.updateRocket);
    };

    render() {
        return (
            <>
                <Header
                    rockets={this.state.rockets}
                    changeRocket={this.changeRocket}
                />
                <Main rocket={this.state.rocket} />
                <Features features={this.state.rocketFeatures} />
                <Footer company={this.state.company} />
            </>
        );
    }
}

export default App;
