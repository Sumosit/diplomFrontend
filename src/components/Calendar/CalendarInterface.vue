<template>
    <div class="calendar-interface-field">
        <div class="calendar-interface" id="calendar-interface">
            <router-link :to="previous()">
                <div class="c-i-img" v-on:click="refresh = !refresh">
                    <img
                            alt="" src="../../assets/images/left-arrow.png">
                </div>
            </router-link>
            <router-link :to="next()">
                <div class="c-i-img" v-on:click="refresh = !refresh">
                    <img
                            alt="" src="../../assets/images/right-arrow.png">
                </div>
            </router-link>
            <router-link :to="currentDate()">
                <div class="c-i-text content-center">
                    <span>Today</span>
                </div>
            </router-link>
            <router-link :to="currentMonth()">
                <div class="c-i-text content-center">
                    <span>Month</span>
                </div>
            </router-link>
            <router-link :to="currentYear()">
                <div class="c-i-text content-center">
                    <span>Year</span>
                </div>
            </router-link>
            <a>
                <div :class="{
          'c-i-checkbox-not-checked > span': !this.weekends,
          'c-i-checkbox-checked > span': this.weekends}"
                     class="c-i-checkbox content-center"
                     v-on:click="emitToParent()">
                    <span>Weekends</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "CalendarInterface",
        props: ['weekends'],
        data() {
            return {
                link: "/user/calendar/"
            }
        },
        computed: {},
        methods: {
            emitToParent() {
                this.weekends = !this.weekends;
                // this.updateWeekends(this.weekends);
                this.$emit('childToParent', this.weekends);
            },
            next() {
                let tempYearPOne = Number.parseInt(this.$route.params.year) + 1;
                let tempMonthPOne = Number.parseInt(this.$route.params.month) + 1;
                let tempDayPOne = Number.parseInt(this.$route.params.day) + 1;

                if (this.$route.params.year && this.$route.params.month && this.$route.params.day) {
                    if (tempDayPOne > this.getDaysCount(this.$route.params.year, this.$route.params.day)) {
                        if (tempMonthPOne === 13) {
                            return this.link + tempYearPOne + "/1/1";
                        }
                        return this.link + this.$route.params.year + "/" + tempMonthPOne + "/1";
                    } else {
                        return this.link + this.$route.params.year + "/" + this.$route.params.month + "/" + tempDayPOne;
                    }
                } else if (this.$route.params.year && this.$route.params.month && !this.$route.params.day) {
                    if (tempMonthPOne === 13) {
                        return this.link + tempYearPOne + "/1";
                    } else {
                        return this.link + this.$route.params.year + "/" + tempMonthPOne
                    }
                } else if (this.$route.params.year && !this.$route.params.month && !this.$route.params.day) {
                    return this.link + tempYearPOne;
                }
            },
            previous() {
                let tempYearMOne = Number.parseInt(this.$route.params.year) - 1;
                let tempMonthMOne = Number.parseInt(this.$route.params.month) - 1;
                let tempDayMOne = Number.parseInt(this.$route.params.day) - 1;

                if (this.$route.params.year && this.$route.params.month && this.$route.params.day) {
                    if (tempDayMOne === 0) {
                        if (tempDayMOne === 0) {
                            return this.link + tempYearMOne + "/12/" + this.getDaysCount(tempYearMOne, 12);
                        }
                        return this.link + this.$route.params.year + "/" + tempMonthMOne + "/" + this.getDaysCount(this.$route.params.year, tempMonthMOne)
                    }
                    return this.link + this.$route.params.year + "/" + this.$route.params.month + "/" + tempDayMOne;
                } else if (this.$route.params.year && this.$route.params.month && !this.$route.params.day) {
                    if (tempMonthMOne === 0) {
                        return this.link + tempYearMOne + "/" + 12;
                    }
                    return this.link + this.$route.params.year + "/" + tempMonthMOne;
                } else if (this.$route.params.year && !this.$route.params.month && !this.$route.params.day) {
                    return this.link + tempYearMOne;
                }
            },
            currentDate() {
                return "/user/calendar/" +
                    new Date().getFullYear() + "/" +
                    Number.parseInt(new Date().getMonth() + 1) + "/" +
                    new Date().getDate();
            },
            currentMonth() {
                return "/user/calendar/" +
                    new Date().getFullYear() + "/" +
                    Number.parseInt(new Date().getMonth() + 1);
            },
            currentYear() {
                return "/user/calendar/" +
                    new Date().getFullYear();
            },
            getDaysCount(year, month) {
                return new Date(year, month, 0).getDate();
            },
            updateW() {
            }
        },
    }
</script>

<style scoped>
    @import '../../assets/css/calendar-interface.css';
</style>
