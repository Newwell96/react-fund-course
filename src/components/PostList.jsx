import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts){
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не были найдены!
            </h1>
        )
    }

    return (
        <>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem
                            remove={remove}
                            number={index+1}
                            post={post}
                            key={post.id}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    );
};

export default PostList;