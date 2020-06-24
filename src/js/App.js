import React from 'react';
import Nav from './components/Nav';
import ContentBrowser from './components/ContentBrowser';
import Section from './components/Section';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (<Router>
        <div className="app">
            <Nav />
            <div className="flex flex-col md:flex-row my-16">
                <div className="md:w-1/3 w-full sm:mr-4 mb-8">
                    <Section>
                        <div className="rounded mx-auto">
                            <img src="/images/samyouaret450x450-min.jpg"
                                className="rounded-full shadow-lg md:max-w-full md:rounded-lg" />
                        </div>
                    </Section>
                </div>
                <div className="w-full md:ml-4 md:w-2/3">
                    <Section>
                        <ContentBrowser />
                    </Section>
                </div>
            </div>
        </div>
    </Router>);
}