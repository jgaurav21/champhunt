import axios from 'axios';
import { PROFILE_UPDATED } from './types';

export const updateProfile = (profile) => async dispatch => {
    try {
        const { firstName,
            lastName,
            email,
            gender,
            dob,
            state,
            district,
            country,
            role,
            favIPLTeam,
            favBatsman,
            favBowler,
            favAllRounder,
            favWK, } = profile;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQ4OWY5YWU5ZTg1MzFiZmNjY2Q5YzIiLCJpYXQiOjE2MTU2NjQxNjN9.Cx44pSH039ZcKjOtGEzyjLpw0xV1IwbZvsE6O5fBIco'
                // 'x-auth-token': localStorage.getItem('token')
            }
        }

        const body = JSON.stringify({
            firstName,
            lastName,
            email,
            gender,
            dob,
            state,
            district,
            country,
            role,
            favIPLTeam,
            favBatsman,
            favBowler,
            favAllRounder,
            favWK
        });

        const res = await axios.post('/api/profile', body, config);

        dispatch({
            type: PROFILE_UPDATED,
            payload: res.data
        })
    } catch (err) {
        console.log(err.message)
    }

}