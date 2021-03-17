import { PROFILE_UPDATED } from '../actions/types';

const initialState = {
    profile: null,
    loading: true
}

const profile = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case PROFILE_UPDATED:
            return {
                profile: payload.profile,
                loading: false
            }

        default:
            return state;
    }
}

export default profile;