import backendUrl from "./backendUrl";
import authHeader from "../services/auth-header";
import axios from 'axios';

export const user = {
    state: {
        storageFiles: [],
        allFiles: [],
        news: [],
        users: [],
        chat: [],
        groupsByUserId: [],
        userExtra: Object,
        user: Object,
        salaries: []
    },
    actions: {
        async fetchGroupsByUserId(ctx, user_id) {
            await fetch(backendUrl() + 'api/user/group/all/' + user_id,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const groupsByUserId = json;
                        // console.log(userExtra);
                        ctx.commit('updateUserGroups', groupsByUserId);
                        return groupsByUserId;
                    }, 1000)
                });
        },
        async fetchUserExtra(ctx, user_id) {
            await fetch(backendUrl() + 'api/user/userExtra/' + user_id,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const userExtra = json;
                        // console.log(userExtra);
                        ctx.commit('updateUserExtra', userExtra);
                        return userExtra;
                    }, 1000)
                });
        },
        async fetchUser(ctx, user_id) {
            await fetch(backendUrl() + 'api/user/one/' + user_id,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const user = json;
                        // console.log(user);
                        ctx.commit('updateUser', user);
                        return user;
                    }, 1000)
                });
        },
        async fetchChat(ctx) {
            await fetch(backendUrl() + 'api/chat/all/' + this.state.auth.user.id,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const chat = json;
                        // console.log(chat);
                        ctx.commit('updateChat', chat);
                        return chat;
                    }, 1000)
                });
        },
        async fetchUsers(ctx) {
            await fetch(backendUrl() + 'api/test/all/users')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const users = json;
                        ctx.commit('updateUsers', users);
                        return users;
                    }, 1000)
                });
        },
        async fetchNews(ctx) {
            await fetch(backendUrl() + 'news',
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const news = json;
                        // console.log(news);
                        ctx.commit('updateNews', news);
                    }, 1000)
                });
        },
        async fetchStorageFiles(ctx) {
            await fetch(backendUrl() + 'user/storage',
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const storageFiles = json;
                        ctx.commit('updateStorageFiles', storageFiles);
                    }, 1000)
                });
        },
        async fetchAllFiles(ctx) {
            await fetch(backendUrl() + 'files',
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const allFiles = json;
                        ctx.commit('updateStorageFiles', allFiles);
                    }, 1000)
                });
        },
        async fetchUserSalaries(ctx, userId) {
            await fetch(backendUrl() + 'api/user/salaries/' + userId,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const salaries = json;
                        ctx.commit('updateUserSalaries', salaries);
                    }, 1000)
                });
        }
    },
    mutations: {
        updateUserGroups(state, payload) {
            state.groupsByUserId = payload;
        },
        updateAllFiles(state, payload) {
            state.allFiles = payload;
        },
        updateUserExtra(state, userExtra) {
            state.userExtra = userExtra;
        },
        pushUserExtraDocuments(state, payload) {
            state.userExtra.documents.push(payload);
        },
        updateChat(state, chat) {
            state.chat = chat;
        },
        updateUsers(state, users) {
            state.users = users;
        },
        updateUser(state, user) {
            state.user = user;
        },
        updateNews(state, payload) {
            state.news = payload.reverse();
        },
        unshiftNews(state, payload) {
            state.news.unshift(payload);
        },
        pushNews(state, payload) {
            state.news.push(payload);
        },
        updateStorageFiles(state, payload) {
            state.storageFiles = payload;
        },
        updateUserSalaries(state, salaries) {
            state.salaries = salaries.slice().sort(function (a, b) {
                return b.id - a.id;
            });
        },
        unshiftSalaries(state, payload) {
            state.salaries.unshift(payload);
        }
    },
    getters: {
        getGroupsByUserId(state) {
            return state.groupsByUserId;
        },
        getAllFiles(state) {
            return state.allFiles;
        },
        getUserExtra(state) {
            return state.userExtra;
        },
        getUser(state) {
            return state.user;
        },
        allChat(state) {
            return state.chat;
        },
        allUsers(state) {
            return state.users;
        },
        allNews(state) {
            return state.news;
        },
        allStorageFiles(state) {
            return state.storageFiles;
        }
    }
};
