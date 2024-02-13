'use client'

import React from 'react'
import { useFormState } from 'react-dom'
import { createTodo } from './action'

const page = () => {
    const initialState = {
        message: '',
    }
    const [state, formAction] = useFormState(createTodo, initialState)
    return (
        <>
            <form action={formAction}>
                <p>test</p>
                <input name="test" />
                <button type="submit">Submit</button>
            </form>
            <p>{state.message}</p>
        </>
    )
}

export default page
