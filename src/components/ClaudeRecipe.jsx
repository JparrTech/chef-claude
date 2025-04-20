import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function ClaudeRecipe({ recipe }) {
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
            <h3>Chef Claude Recommends: </h3>
            <ReactMarkdown >
                {recipe}
            </ ReactMarkdown>

        </section>

    )
}