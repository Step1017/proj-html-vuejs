<script>
export default {
    name: "AppThirdSection",
    data() {
        return {
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
    }
}
</script>

<template>
    <section>
        <div class="main-container">
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
                                icon {{ card.lessonsNumber }} Lessons
                            </div>
                            <div class="students">
                                icon {{ card.studentsNumber }} Students
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button>View all courses</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .main-container {
        text-align: center;
        margin-top: 100px;
    }
    .intro {
        font-size: small;
        color: rgb(139, 139, 139);
        margin-bottom: 20px;
    }
    h2 {
        font-size: 40px;
        margin-bottom: 50px;
        span{
            font-weight: lighter;
            color: rgb(52, 224, 167);
        }
    }
    button {
        margin-top: 40px;
        margin-bottom: 50px;
        padding: 15px 30px;
        color: white;
        font-weight: bold;
        background-color: rgb(74, 209, 157);
        border: none;
        border-radius: 10px;
    }
    .cards {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 600px;
        width: 60%;
        margin: 0 auto;
        text-align: start;
        .card {
            display: flex;
            height: 180px;
            margin-bottom: 20px;
            img {
                width: 180px;
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
                    color: #34e0a7;
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
                    color: #8b8b8b;
                    .lessons {
                        margin-right: 40px;
                    }
                }
            }
        }
    }
</style>