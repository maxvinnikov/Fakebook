import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (        
          <div className={s.item}>
            <div>
              <img src='https://cdn.pixabay.com/photo/2017/06/20/16/25/facebook-2423669_640.png' />
            </div>
              <div>
                <span>{ props.message } { props.like } </span>
                
              </div>
              <div>
                 
              </div>
            
          </div>
      );
  }

  export default Post;