import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '97bcf72e-92a6-4c79-b74f-ce772503fc06',
    }
})

export const userAPI = {
    getUsers(currentPageNum = 1, visibleCount = 5) {
        return instance.get(`users?page=${currentPageNum}&count=${visibleCount}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '97bcf72e-92a6-4c79-b74f-ce772503fc06',
                }
            })
            .then(
                response => {
                    return response.data
                }
            )
    },

    getProfileUser(id) {
        return instance.get(`profile/${id}`)
            .then(
                response => {
                    return response.data;
                }
            )
    },

    followUserPost(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    followUserDelete(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },

    getAuthUser() {
        return instance.get('auth/me').then(
            response => {
                if (response.data.resultCode === 0) {
                    return response.data.data
                }
            }
        )
    }

    // followUser(id)  {
    //     return instance.
    // }
}

export const profileStatusAPI = {
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(
            response => response.data
        )
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        }).then(
            response => {
                if (response.data.resultCode === 0) {
                    return response
                }
            }
        )
    },
    updatePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(
            response => {
            }

        )
    },

    updateProfile(info) {
        return instance.put(`profile`, {
            ...info
        }).then(
            response => {
                return response
            }
        )
    }
}

export const authAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(
            response => response
        )
    },
    logout() {
        return instance.delete(`auth/login`).then(
            response => {
                if (response.data.resultCode === 0) {
                    return response
                }
            }
        )
    }
}
// const axioss = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://ai-chatbot.p.rapidapi.com/chat/free',
//   params: {message: 'What\'s your name?', uid: 'user1'},
//   headers: {
//     'X-RapidAPI-Key': 'ff2cdbd7b5msh8ce4e43184ff15ap1b9f0djsne4e318b2e942',
//     'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const dialogAPI = {
    getChat(message, user) {
        return axios.get(`https://ai-chatbot.p.rapidapi.com/chat/free?message=${message}&uid=user${user}`, {
            headers: {
                withCredentials: true,
                'X-RapidAPI-Key': 'ff2cdbd7b5msh8ce4e43184ff15ap1b9f0djsne4e318b2e942',
                'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
            }
        }).then(response => {
            console.log(response);
            return response
        })
    }
}

