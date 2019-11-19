import React from 'react';
import Nav from './Nav';
import ContentBrowser from './ContentBrowser';
import SectionChild from './SectionChild';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (<Router>
        <div className="app">
            <Nav />
            <div className="flex">
                <div className="left-section">
                    <SectionChild>
                        <div className="rounded-img">
                            <img src="/src/images/samyouaret-cropped.jpg" className="img" />
                        </div>
                    </SectionChild>
                </div>
                <div className="right-section">
                    <SectionChild>
                        <h2 className="flex flex-column">Samy Ouaret</h2>
                        <strong className="text-muted">Web developer, PHP programmer, React lover</strong>
                        <ContentBrowser />
                    </SectionChild>
                </div>
            </div>
        </div>
    </Router>);
}