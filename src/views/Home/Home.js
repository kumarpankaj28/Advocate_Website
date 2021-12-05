import React from 'react';
import Abou from './Abou/Abou';
import Cont from './Cont/Cont';
import Heros from './Heros/Heros';
import Service from './Service/Service';
import Stats from './Stats/Stats';
import Testi from './Testi/Testi';


export default function LandingPage() {
    return (
        <div>
            <Heros/>
            <Stats/>
            <Abou/>
            <Service/>
            <Testi/>
            <Cont/>
        </div>
    )
}
