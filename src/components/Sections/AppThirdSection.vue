<script>
export default {
    name: "AppThirdSection",
    data() {
        return {
            scroll: false,
            cards: [
                {
                    img: "course-02-480x298.jpg",
                    cost: "40",
                    title: "Learning to Write as a Professional Author",
                    lessonsNumber: "20",
                    studentsNumber: "",
                    free: false
                },
                {
                    img: "stock-full-hd-04-480x298.jpg",
                    cost: "19",
                    title: "Open Programming Courses for Everyone: Python",
                    lessonsNumber: "17",
                    studentsNumber: "62",
                    free: false
                },
                {
                    img: "course-featured-image-01-480x298.jpg",
                    cost: "39",
                    title: "Master jQuery in a Short Period of Time",
                    lessonsNumber: "6",
                    studentsNumber: "51",
                    free: false
                },
                {
                    img: "stock-full-hd-03-480x298.jpg",
                    cost: "Free",
                    title: "Customer-centric Info-Tech Strategies",
                    lessonsNumber: "24",
                    studentsNumber: "769",
                    free: true
                },
                {
                    img: "stock-full-hd-06-480x298.jpg",
                    cost: "26",
                    title: "Academic Listening and Note-taking",
                    lessonsNumber: "14",
                    studentsNumber: "67",
                    free: false
                },
                {
                    img: "stock-full-hd-05-480x298.jpg",
                    cost: "59",
                    title: "Introduction to Javascript for Beginners",
                    lessonsNumber: "14",
                    studentsNumber: "67",
                    free: false
                }
            ]
        }
    },

    methods: {
        activescroll(){
            this.scroll = true
        }
    },
}
</script>

<template>
    <section>
        <div @mouseover="activescroll" :class="(this.scroll) ? 'main-container mouse-over' : 'main-container'">
            <div class="intro">
                CHOOSE A COURSE TO GET STARTED
            </div>
            <h2 class="title">
                Latest Featured <span>Courses</span>
            </h2>
            <div class="cards">
                <div class="card" v-for="(card, index) in cards">
                    <img :src="`/public/images/` + card.img" alt="">
                    <div class="info">
                        <div class="cost" v-if="card.free == true">
                            {{ card.cost }}
                        </div>
                        <div class="cost" v-else>
                            ${{ card.cost }}<span>.00</span>
                        </div>
                        <div class="title">
                            {{ card.title }}
                        </div>
                        <div class="statistics">
                            <div class="lessons">
                                <font-awesome-icon icon="fa-regular fa-file-lines"/> {{ card.lessonsNumber }} Lessons
                            </div>
                            <div class="students">
                                <font-awesome-icon icon="fa-regular fa-user"/> {{ card.studentsNumber }} Students
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button>View all courses <font-awesome-icon icon="fa-solid fa-arrow-right"/></button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    .main-container.mouse-over {
        transition: all 2s;
        opacity: 1;
        top: 0px;
    }

    .main-container{
        text-align: center;
        background-color: $bkg-main-secondary;
        padding-top: 50px;
        opacity: 0;
        position: relative;
        top: 50px;
    }
    .intro {
        font-size: small;
        color: $secondary-text;
        margin-bottom: 20px;
    }
    h2 {
        font-size: 40px;
        margin-bottom: 50px;
        span {
            font-weight: lighter;
            color: $extra-color;
        }
    }
    button {
        margin-top: 40px;
        margin-bottom: 50px;
        @include my-button;
            &:hover {
            @include my-hover-button-2
            }
    }
    .cards {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 700px;
        width: 60%;
        margin: 0 auto;
        text-align: start;
        .card {
            display: flex;
            height: 180px;
            margin-bottom: 20px;
            margin: 20px;
            padding: 10px;
            transition: all 0.25s;
            border-radius: 10px;
                &:hover{
                    background-color: $bkg-main-primary;
                    box-shadow: 0px 0px 30px 5px rgba(114, 114, 114, 0.384);
                }
            img {
                width: 160px;
                aspect-ratio: 1 / 1;
                object-fit: cover;
                border-radius: 100%;
            }
            .info {
                margin-left: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .cost {
                    font-size: large;
                    font-weight: bold;
                    color: $extra-color;
                    margin-bottom: 15px;
                    span{
                        font-size: small;
                    }
                }
                .title {
                    width: 90%;
                    font-weight: bold;
                    line-height: 1.7;
                }
                .statistics {
                    display: flex;
                    margin-top: 30px;
                    color: $secondary-text;
                    .lessons {
                        margin-right: 40px;
                    }
                }
            }
        }
    }
</style>