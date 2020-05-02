import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className={s.profile}>
        <div>
          <img src='http://www.bhmpics.com/wallpapers/facebook_digital_art-1280x720.jpg'></img>
        </div>
        <div>
          Ava
        </div>
        <MyPosts />
      </div>

    );
  }

  export default Profile;