import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StudyAssistant from './components/StudyAssistant';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <StudyAssistant />
            </main>
            <Footer />
        </div>
    );
}

export default App;