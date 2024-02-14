import React from 'react'

interface Props {
    title: string
}

function StepTitle(props: Props) {
    const {title} = props

    return (
        <div className='text-xl font-bold'>
            {title}
        </div>
    )
}

export default StepTitle