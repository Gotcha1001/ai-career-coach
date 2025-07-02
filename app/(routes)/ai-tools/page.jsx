"use client"
import React from 'react'
import AiToolsList from './../dashboard/_components/AiToolsList'

function AiTools() {
    return (
        <div>
            <h2 className='font-bold text-3xl gradient-title mt-5'>AI Career Chat Agents</h2>
            <AiToolsList />
        </div>
    )
}

export default AiTools