export const getPosts = (state) => state.posts.postsData;
export const getPostData = (state) => state.posts.postData;
export const getImages = (state) => state.posts.image;
export const getTotalNumberPosts = (state) => state.posts.totalPostsNumber;
export const getResponse = (state) => state.posts.searchResponseData;
export const getUserPosts = (state) => state.posts.usersPostsData;
export const getMessage = (state) => state.posts.message;
export const getLoadingPost = (state) => state.posts.isLoadingPost;
export const getLoadingAllPosts = (state) => state.posts.isLoadingAllPosts;
export const getIdPostOwner = (state) => state.posts.postData.user._id;
