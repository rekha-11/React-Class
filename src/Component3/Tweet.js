import React from 'react'

export default function Tweet({name, tweet}) {
    return (
        <div>
            <section>
                <h1>{name}</h1>
                <p>{tweet}</p>
            </section>
        </div>
    )
}
