<template>
    <div>
        <div class="main">
            <div
                    :class="{
      'wrapper-nav-ls': windowWidth > 1400
            }">
                <NavLeftSide v-show="windowWidth > 1400"/>
                <router-view v-if="show"/>
                <div v-else>
                    User Page Forbidden
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserService from '../services/user.service';
    import NavLeftSide from "../components/Navigation/NavLeftSide";

    export default {
        name: 'User',
        data() {
            return {
                content: '',
                show: false,
                windowWidth: window.innerWidth
            };
        },
        components: {
            NavLeftSide
        },
        mounted() {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            };
            UserService.getUserBoard().then(
                response => {
                    this.show = true;
                    this.content = response.data;
                },
                error => {
                    this.show = false;
                    this.content =
                        (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        },
        methods: {
            checkGame() {
                console.log(this.$route.path.includes("games"))
                return this.$route.path.includes("games");
            },
        }
    };
</script>

<style scoped>
    @import '../assets/css/main.css';
</style>
