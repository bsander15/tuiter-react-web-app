import React from 'react';
import TuitsList from './tuits';
import WhatsHappening from './whats-happening';

function HomeScreen() {
    return (
    <div>
        Home
        <WhatsHappening />
        <TuitsList />
    </div>
    );
}
export default HomeScreen;