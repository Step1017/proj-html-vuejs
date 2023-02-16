<script>
export default {
    name: "AppFifthSection",
    data() {
        return {
            scroll: false,
            cards: [
                {
                    img: "artist-blog-03-480x325.jpeg",
                    title: "Brush Strokes Energize Trees in Paintings",
                    date: "May 15, 2020",
                    views: "688"
                },
                {
                    img: "artist-blog-01-480x325.jpg",
                    title: "Pocket-Sized Notebooks Hold Miniature Paintings",
                    date: "May 15, 2020",
                    views: "603"
                },
                {
                    img: "artist-blog-02-480x325.jpg",
                    title: "Connection Between Self-Portraits and Identity",
                    date: "May 15, 2020",
                    views: "397"
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
                    <div class="intro">
                        ENJOY READING ON MAXCOACH
                    </div>
                    <h2>Latest on <span>Our Blogs</span></h2>
                </div>
                <div class="cards">
                    <div class="card"  v-for="card in cards">
                        <div class="img-cont">
                            <img :src="`/public/images/` + card.img" alt="">
                        </div>
                        <div class="info">
                            ARTIST
                        </div>
                        <h3>{{ card.title }}</h3>
                        <div class="card-info">
                        <div class="date">
                            <font-awesome-icon icon="fa-regular fa-calendar"/> {{ card.date }}
                        </div>
                        <div class="views">
                            <font-awesome-icon icon="fa-regular fa-eye"/> {{ card.views }} views
                        </div>
                        </div>
                    </div>
                </div>
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
        margin-top: 100px;
        background-color: $bkg-main-secondary;
        padding: 50px 0px;
        opacity: 0;
        position: relative;
        top: 50px;

        .container {
            width: 80%; 
            margin: 0 auto;       
            .title {
                text-align: center;
            }
            .info {
                font-size: small;
                color: $secondary-text;
                margin-top: 15px;
            }
            h2 {
                font-size: 40px;
                margin-top: 20px;
                span {
                    font-weight: lighter;
                    color: $extra-color;
                }
            }
            .cards {
                display: flex;
                justify-content: space-between;
                margin-top: 50px;
                .card {
                    width: calc(90% / 3);
                    .img-cont{
                        height: 250px;
                        overflow: hidden;
                        border-radius: 10px;
                    }
                    img {
                        width: 100%;
                        border-radius: 10px;
                        margin-bottom: 15px;
                        transition: all 1.5s;
                            &:hover{
                                transform: scale(1.2);
                            }
                    }
                    h3 {
                        width: 80%;
                        margin: 15px 0px;
                    }
                    .card-info {
                        display: flex;
                        font-size: small;
                        color: $secondary-text;
                        .views {
                            margin-left: 20px;
                        }
                    }
                }
            }
        }
    }
</style>