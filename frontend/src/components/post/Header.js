import React from 'react';

const Header = props => (
    <div className="header">
        <div className="left">
            <img src={props.profileImageUrl} alt="profile" className="profile__img" />
            <div className="user__name">
                {props.username}
            </div>
        </div>
    </div>
);

export default Header;