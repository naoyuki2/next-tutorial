'use server'

type State = {
    message: string
}

export const createTodo = async (prevState: State, formData: FormData) => {
    const test = formData.get('test')
    if (test) {
        return {
            message: 'Success',
        }
    } else {
        return {
            message: 'Failed',
        }
    }
}
