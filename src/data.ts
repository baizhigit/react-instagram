import { v4 as uuidv4 } from 'uuid';

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
}

export interface IPost {
  post: Post;
}

interface Post {
  id: string;
  likes: number;
  caption: string;
  user: {
    id: string;
    username: string;
    name: string;
    profileImage: string;
  };
  media: string;
  comments: Comment[];
  created_at: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  profileImage: string;
}

export const defaultUser: User = {
  id: uuidv4(),
  username: 'username',
  name: 'name',
  profileImage:
    'https://instagram.fala3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/75328490_2479013179035101_6582791409873453056_n.jpg?_nc_ht=instagram.fala3-2.fna.fbcdn.net&_nc_ohc=2NSTFFuxoLoAX9C51hK&oh=e1c94c41bcf5fdfd8cc0f8e9089939eb&oe=5F4398A9',
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser(): User {
  return {
    id: uuidv4(),
    username: 'username',
    name: 'name',
    profileImage:
      'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF',
  };
}

export const defaultPost: Post = {
  id: uuidv4(),
  likes: 10,
  caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
  user: defaultUser,
  media:
    'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/80126161_2456912044637768_8188145638093587415_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=108&_nc_ohc=GAkCBeSLLnwAX_Xn25U&oh=58af570f5ad051b24583c388b946784a&oe=5EA44484',
  comments: [],
  created_at: '2020-02-28T03:08:14.522421+00:00',
};

export function getDefaultPost(): Post {
  return {
    id: uuidv4(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
      'https://instagram.fala3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/115902756_292414865326189_6259090288445797824_n.jpg?_nc_ht=instagram.fala3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=KMVeKLpJgiAAX9cDLwO&oh=85be64ef209705019877d291570ef605&oe=5F42D2EB',
    comments: [],
    created_at: '2020-02-28T03:08:14.522421+00:00',
  };
}

export const defaultNotifications = [
  {
    id: uuidv4(),
    type: 'follow',
    user: defaultUser,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
  {
    id: uuidv4(),
    type: 'like',
    user: defaultUser,
    post: defaultPost,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
];

export const defaultCurrentUser = {
  id: uuidv4(),
  username: 'me',
  name: 'myself',
  profile_image:
    'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF',
  website: 'https://react12.io',
  email: 'me@gmail.com',
  bio: 'This is my bio',
  phone_number: '555-555-5555',
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser],
};
