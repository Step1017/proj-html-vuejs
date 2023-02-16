<script>
    export default {
        name: "AppSixthSection",
        data() {
            return {
                scroll: false,
                cards: [
                    {
                        icon: "fa-regular fa-flag",
                        title:"Idea Discussion",
                        paragraph: "Get teamed up with the specialists who work and teach coding for years at famous universities."
                    },
                    {
                        icon: "fa-solid fa-gear",
                        title:"Web Development",
                        paragraph: "Learn to start building o webpage from scratch. You decide your own pace, course and speed."
                    },
                    {
                        icon: "fa-regular fa-life-ring",
                        title:"System Administration",
                        paragraph: "Learners are encouragad to study the mechanism ond structure of system administration."
                    },
                    {
                        icon: "fa-solid fa-display",
                        title:"Graphic Design",
                        paragraph: "Have a passion for graphics and arts? Snow your talents with confidence and self-assertiveness."
                    }
                ]
            }
        },
        methods: {
            activescroll() {
                this.scroll = true
            }
    },
    }
</script>
<template>
    <section>
        <div @mouseover="activescroll" :class="(this.scroll) ? 'main-container mouse-over' : 'main-container'">
            <div class="container">
                <div class="title">
                    <div class="info">
                        WANNA TRANSFORM YOUR LIFE?
                    </div>
                    <h2>Glad to <span>Help You</span> Learn</h2>
                </div>
                <div class="cards">
                    <div class="card" v-for="card in cards">
                        <font-awesome-icon class="fontaweicon" :icon="card.icon"/>
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.paragraph }}</p>
                    </div>
                </div>
                <img src="/public/images/home-6-services-image.png" alt="">
            </div>
        </div>
    </section>
</template>    
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    .main-container.mouse-over {
        transition: all 2s;
        opacity: 1;
        top: 0px;
    }

    .main-container {
        background-image: linear-gradient($bkg-main-primary, $bkg-main-secondary);
        opacity: 0;
        position: relative;
        top: 50px;
    }

    .container {
        width: 80%;
        margin: 0 auto;
        padding-top: 50px;
        img {
            position: relative;
            top: 35px;
        }
        .title {
            text-align: center;
            padding-bottom: 50px;
        }
        .info {
            font-size: small;
            color: $secondary-text;
        }
        h2 {
            font-size: 40px;
            margin: 20px 0px;
            span {
                font-weight: lighter;
                color: $extra-color;
            }
        }
        .cards {
            display: flex;
            justify-content: space-evenly ;
            margin-bottom: 150px;
            margin-top: 70px;
            .card {
                width: calc(90% / 4);
                h3 {
                    margin: 15px 0px;
                    font-size: 20px;
                }
                p {
                    width: 75%;
                    color: #808080;
                    line-height: 1.7;
                }
                .fontaweicon {
                    font-size: 3rem;
                }
            }
        }
        img {
            margin-left: calc(90vw / 8);
        }
    }
</style>