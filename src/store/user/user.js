import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, avatarPlaceholder} from "../../const";
import {changeUserAvatar, changeUserName, requiredAuthorization, setErrorMessage} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userName: ``,
  avatarUrl: avatarPlaceholder,
  errorMessage: ``
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requiredAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(changeUserName, (state, action) => {
    state.userName = action.payload;
  });

  builder.addCase(changeUserAvatar, (state, action) => {
    state.avatarUrl = action.payload;
  });

  builder.addCase(setErrorMessage, (state, action) => {
    state.errorMessage = String(action.payload);
  });
});

// const user1 = (state = initialState, action) => {
//   switch (action.type) {
//     // case ActionType.REQUIRED_AUTHORIZATION:
//     //   return {
//     //     ...state,
//     //     authorizationStatus: action.payload
//     //   };

//     // case ActionType.CHANGE_USER_NAME:
//     //   return {
//     //     ...state,
//     //     userName: action.payload
//     //   };

//     // case ActionType.CHANGE_USER_AVATAR:
//     //   return {
//     //     ...state,
//     //     avatarUrl: action.payload
//     //   };

//     // case ActionType.SET_ERROR_MESSAGE:
//     //   return {
//     //     ...state,
//     //     errorMessage: String(action.payload)
//     //   };

//     default:
//       return state;
//   }
// };

export {user};
