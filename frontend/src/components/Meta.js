import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title , description , keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keyword' content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Oleg\'s Shop',
    description: 'We are the best!',
    keywords: 'shop'
}

export default Meta
