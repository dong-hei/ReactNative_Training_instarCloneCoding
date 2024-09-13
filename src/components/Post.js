import {View, Text} from 'react-native';
import React from 'react';
import PostItem from './PostItem.js';
const postInfo = [
  {
    postTitle: 'Aaron',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    like: 3,
    isLiked: true,
  },
  {
    postTitle: 'Xi',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    like: 0,
    isLiked: false,
  },
  {
    postTitle: 'wonderful',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    like: 12,
    isLiked: true,
  },
  {
    postTitle: 'Life goes on..',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post10.jpeg'),
    like: 2,
    isLiked: true,
  },
  {
    postTitle: 'Why always me',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post10.jpeg'),
    like: 0,
    isLiked: false,
  },
  {
    postTitle: 'Aint no stop me now!',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post14.jpeg'),
    like: 0,
    isLiked: false,
  },
  {
    postTitle: 'City is always right',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    like: 1134,
    isLiked: true,
  },
];

const Post = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        return <PostItem key={index} data={data} />;
      })}
    </View>
  );
};

export default Post;
