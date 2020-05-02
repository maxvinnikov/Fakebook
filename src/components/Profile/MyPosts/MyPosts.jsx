import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (  
        <div className={s.posts}>
          <textarea></textarea>
            <button>Like</button>
          <Post message='Hello, I am new here' like='7'/>
          <Post message='Hey, me too' like='2'/>
          <Post message='what`s up' like='0'/>
          <Post message='kek' like='0'/>
        </div>
        
      );
  }

  export default MyPosts;