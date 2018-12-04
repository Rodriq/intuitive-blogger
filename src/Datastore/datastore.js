import Datastore from 'nedb'

const User = new Datastore({
    filename: 'users.db',
    timestampData: true,
    autoload: true
});
const Post = new Datastore({
    filename: 'posts.db',
    timestampData: true,
    autoload: true
});

export {User, Post}