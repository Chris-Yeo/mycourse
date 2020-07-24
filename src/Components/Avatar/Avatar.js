/** @jsx jsx */
import { jsx } from '@emotion/core';
import './avatar.css'

const Avatar = ({image, styles}) => {
    const defaultStyles = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'contain',
    }
    return (
        <div className="image">
            <img
             src={image}
             css={[defaultStyles, styles]}
             alt="Avatar"
             className="avatar"
            />
        </div>
    )
}


export default Avatar;