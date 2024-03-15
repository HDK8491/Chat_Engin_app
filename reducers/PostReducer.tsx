// const postReducer = (
//   state = { posts: null, loading: false, error: false, uploading: false },
//   action:any
// ) => {
//   switch (action.type) {
//     // belongs to PostShare.jsx
//     case "UPLOAD_START":
//       return { ...state, error: false, uploading: true };
//     case "UPLOAD_SUCCESS":
//       return {
//         ...state,
//         posts: [action.data, ...state.posts],
//         uploading: false,
//         error: false,
//       };
//     case "UPLOAD_FAIL":
//       return { ...state, uploading: false, error: true };
//     // belongs to Posts.jsx
//     case "RETREIVING_START":
//       return { ...state, loading: true, error: false };
//     case "RETREIVING_SUCCESS":
//       return { ...state, posts: action.data, loading: false, error: false };
//     case "RETREIVING_FAIL":
//       return { ...state, loading: false, error: true };
//     default:
//       return state;
//   }
// };

// export default postReducer;

interface Post {
  // Define the structure of a post if needed
  // For example: { id: string, title: string, content: string }
}

interface PostState {
  posts: Post[] | null;
  loading: boolean;
  error: boolean;
  uploading: boolean;
}

interface UploadAction {
  type: "UPLOAD_START" | "UPLOAD_SUCCESS" | "UPLOAD_FAIL";
  data: Post; // Define the type of 'data' if needed
}

interface RetrievingAction {
  type: "RETREIVING_START" | "RETREIVING_SUCCESS" | "RETREIVING_FAIL";
  data: Post[]; // Define the type of 'data' if needed
}

type Action = UploadAction | RetrievingAction;

const postReducer = (
  state: PostState = { posts: null, loading: false, error: false, uploading: false },
  action: Action
): PostState => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...(state.posts || [])],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;