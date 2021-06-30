const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { //выставление стандартного значения
    posts: [
        {id:1, message: 'Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!', likesCount: 12},
        {id:2, message: 'Это мой первый пост!', likesCount: 21}
    ],
    newPostText: 'JS СОСАТБ',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:  //это action, а action это объект
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 1
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;