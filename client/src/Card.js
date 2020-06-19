import * as React from 'react'
import { PropTypes } from 'prop-types'

export const Card = ({ text, profileImageUrl, name, username }) => {
    return (
        <div className="card">
            <User {...{profileImageUrl, name, username}} />
            {text}
        </div>
    )
}

Card.propTypes = {
    text: PropTypes.string,
    profileImageUrl: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
}

const User = ({profileImageUrl, name, username}) => {
    return (
        <div>
            <img src={profileImageUrl} alt='@{username}' />
            <div>{name}</div>
            <div>{username}</div>
        </div>
    )
}
