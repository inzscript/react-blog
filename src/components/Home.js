import React from 'react';
import './../css/Home.css';
import Banner from './../components/Banner';
import Card from './../components/Card';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480" title="Entire Homes" description="Soming quite suprising for you to see." />
                <Card src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480" title="Unique Stays" description="Soming quite suprising for you to see." />
                <Card src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=480" title="Pets Welcome" description="Soming quite suprising for you to see." />
            </div>
        </div>
    )
}

export default Home
