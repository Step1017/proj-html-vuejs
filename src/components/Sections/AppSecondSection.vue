<script>
    export default {
        name: "AppSecondSection",
        data() {
            return {
                cards: [
                    {
                        title: "Graphic Design",
                        paragraph: "Have a passion for graphics and arts? Show your talents with confidence ond self-assertiveness.",
                        img: "home-6-service-image-01.png" 
                    },
                    {
                        title: "Idea Discussion",
                        paragraph: "Gat teamed up with the specialists who work and teach coding for years at famous universities.",
                        img: "home-6-service-image-03.png"
                    },
                    {
                        title: "Buisness Administration",
                        paragraph: "Learners are encouraged to study the mechanism and structure of system administratiom.",
                        img: "home-6-service-image-02.png"
                    },
                    {
                        title: "Web Development",
                        paragraph: "Learn to start building a webpage from scratch. You decide your own pace. course and speed.",
                        img: "home-6-service-image-04.png"
                    }
                ],
                Check:[
                    "Select & customize courses to your preferences",
                    "Change the tutor and make arrangements",
                    "Participate in events to join others",
                    "Get the desired certificate delivered at house"
                ]
            }
        }
    }
</script>
<template>
    <section>
        <div class="main-container">
            <div class="cards-container">
                <div v-for="(card, index) in cards" :class="(index > 1) ? 'cards down' : 'cards'">
                    <div :class="(index == 1) ? 'card reverse' : (index == 3) ? 'card reverse' : 'card'">
                        <div class="card-text">
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.paragraph }}</p>
                        </div>
                        <img :src="`/public/images/`+ card.img" alt="">
                    </div>
                </div>
            </div>
            <div class="check-container">
                <div class="intro">
                    TOGETHER WE CAN CREATE
                </div>
                <h2>Services We <span>Can Provide</span> For My Clients.</h2>
                <div class="check" v-for="(item, num) in Check">
                    V {{ item }}
                </div>
                <button>
                    Get started for free
                </button>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .main-container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        margin-top: 100px;
        .cards-container {
            width: 50%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 1000px;
            .down {
                position: relative;
                top: 40px;
            }
            .cards {
                width: 40%;
                margin-top: 30px;
                margin-right: 30px;
                min-height: 380px;
                box-shadow: 0px 0px 30px 5px rgba(114, 114, 114, 0.384);
                .card {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    h3 {
                        margin: 20px;
                    }
                    p {
                        margin: 20px;
                        font-size:large;
                        line-height: 1.5;
                        color: #353535;
                    }
                    img {
                        width: 200px;
                        margin-left: 20px;
                    }
                }
                .reverse {
                    flex-direction: column-reverse;
                    img {
                        margin-top: 15px;
                    }
                }
            }
        }
        .check-container {
            width: 30%;
            align-self: center;
            .intro {
                font-size: x-small;
                margin-bottom: 20px;
            }
            h2 {
                width: 70%;
                font-size: 35px;
                margin-bottom: 40px;
                span {
                    color: #34e0a7;
                    font-weight: lighter;
                }
            }
            .check {
                line-height: 2;
            }
            button {
                margin-top: 30px;
                padding: 15px 30px;
                color: #ffffff;
                font-weight: bold;
                background-color: #4ad19d;
                border: none;
                border-radius: 10px;
            }
            
        }
    }
</style>