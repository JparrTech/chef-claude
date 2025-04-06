import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function ClaudeRecipe({ recipe }) {
    return (
            <ReactMarkdown >
            {recipe}
            </ ReactMarkdown>

            )
}