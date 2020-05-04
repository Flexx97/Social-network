import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return  <div className={p.block}>
        <div className={p.item}>{props.message}</div>
        <span className={p.likely}>
            <img src="https://1.bp.blogspot.com/-d3LozscUMBY/Vtz13aLffMI/AAAAAAAALp0/Y9pFym980s0/s1600/love.png" className={p.img}/>
                {props.like}</span>
        </div>

};

export default Post;