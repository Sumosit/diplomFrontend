<template>
    <nav>
        <div class="nav-field">
            <router-link :to="'/user/profile/'+$store.state.auth.user.id+'/info'" class="right content-center cursor-pointer nav-username"
                         tag="div"
                         v-if="isUser">
                <span v-if="!$store.state.auth.user.name && !$store.state.auth.user.surname">
                    {{$store.state.auth.user.username}}
                </span>
                <span v-else-if="!$store.state.auth.user.name && !$store.state.auth.user.surname">
                    {{$store.state.auth.user.name}} {{$store.state.auth.user.surname}}
                </span>
            </router-link>
            <div class="right content-center notification" v-on:click="open_not = !open_not">
                <img src="../../assets/images/notification.png">
                <div v-show="$store.getters.getNotification.length > 0">{{$store.getters.getNotification.length}}</div>
            </div>
        </div>
        <Notification v-show="open_not"/>
    </nav>
</template>

<script>
    import Notification from "../Notification/Notification"

    export default {
        name: "Nav",
        components: {
            Notification
        },
        data() {
            return {
                dropdown: false,
                open_not: false,
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.user;
            },
            isUser() {
                if (this.$store.state.auth.status.loggedIn) {
                    return true;
                }
            },
            isAdmin() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_ADMIN')
                }
            },
            isModerator() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_MODERATOR')
                }
            },
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        methods: {
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            }
        },
    }
</script>

<style scoped>
    @import '../../assets/css/nav.css';
</style>
