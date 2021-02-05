import React from 'react'
import Tweet from './Tweet';

export default function Tweets() {
    const Tweets = 
    [{name:'Tweet1', tweet:'Reach wow!!!'},
    {name:'Tweet2', tweet:'Hellow!!!!   where are you?'},
    {name: 'Tweet3', tweet:'Come on!! We are late'}
];
    return (
        <div>
            {Tweets.map((tweets)=>(
                <Tweet name={tweets.name} tweet={tweets.tweet}/>
            ))}
        </div>
    )
}
