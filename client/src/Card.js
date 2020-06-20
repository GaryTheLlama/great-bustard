/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { PropTypes } from 'prop-types'

export const Card = ({ text, profileImageUrl, name, username }) => {
    return (
        <div css={css`
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            margin: 20px 20px 20px 20px;
            padding: 20px 30px 20px 30px;
            width: 460px;
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
        <div css={css`
            display: flex;
            justify-content: space-between;
        `}>
            <div css={css`
                border-radius: 50%;
                width: 200px;
                height: 200px;
                top: -50px;
                left: -50px;
                position: relative;
                background: url('${profileImageUrl}');
            `}>
            </div>
            <div>
                <div>{name}</div>
                <div>{username}</div>
            </div>
        </div>
    )
}
