<script>
    export default {
        name: "AppSixthSection",
        data() {
            return{
                cards: [
                    {
                        icon: "icon",
                        title:"Idea Discussion",
                        paragraph: "Get teamed up with the specialists who work and teach coding for years at famous universities."
                    },
                    {
                        icon: "icon",
                        title:"Web Development",
                        paragraph: "Learn to start building o webpage from scratch. You decide your own pace, course and speed."
                    },
                    {
                        icon: "icon",
                        title:"System Administration",
                        paragraph: "Learners are encouragad to study the mechanism ond structure of system administration."
                    },
                    {
                        icon: "icon",
                        title:"Graphic Design",
                        paragraph: "Have a passion for graphics and arts? Snow your talents with confidence and self-assertiveness."
                    }
                ]
            }
        }
    }
</script>
<template>
    <section>
        <div class="main-container">
            <div class="title">
                <div class="info">
                    WANNA TRANSFORM YOUR LIFE?
                </div>
                <h2>Glad to <span>Help You</span> Learn</h2>
            </div>
            <div class="cards">
                <div class="card" v-for="card in cards">
                    <div :class="card.ico">ICONA</div>
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.paragraph }}</p>
                </div>
            </div>
            <img src="/public/images/home-6-services-image.png" alt="">
        </div>
    </section>
</template>    
<style lang="scss" scoped>
    .main-container {
        width: 80%;
        margin: 0 auto;
        margin-top: 150px;
        .title {
            text-align: center;
        }
        .info {
            font-size: small;
            color: #808080;
        }
        h2 {
            font-size: 40px;
            margin: 20px 0px;
            span {
                font-weight: lighter;
                color: #58f1b7;
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
            }
        }
        img {
            margin-left: calc(90vw / 8);
        }
    }
</style>