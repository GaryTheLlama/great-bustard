/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { PropTypes } from 'prop-types'

export const Card = ({ text, profileImageUrl, name, username }) => {
    return (
        <div css={css`
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
            border-style: solid;
            border-radius: 10px;
            margin: 20px 20px 20px 20px;
            padding: 20px 0 20px 0;
        `}>
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
