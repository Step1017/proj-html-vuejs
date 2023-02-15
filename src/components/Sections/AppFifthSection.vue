<script>
export default {
    name: "AppFifthSection",
    data() {
        return {
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
    }
}
</script>
<template>
    <section>
        <div class="main-container">
            <div class="title">
                <div class="intro">
                    ENJOY READING ON MAXCOACH
                </div>
                <h2>Latest on <span>Our Blogs</span></h2>
            </div>
            <div class="cards">
                <div class="card"  v-for="card in cards">
                    <img :src="`/public/images/` + card.img" alt="">
                    <div class="intro">
                        ARTIST
                    </div>
                    <h3>{{ card.title }}</h3>
                    <div class="card-info">
                    <div class="date">
                        icon {{ card.date }}
                    </div>
                    <div class="views">
                        icon {{ card.views }}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .main-container {
        width: 80%;
        margin: 0 auto;
        .title {
            text-align: center;
        }
        .intro {
            font-size: small;
            color: #808080;
        }
        h2 {
            font-size: 40px;
            margin-top: 20px;
            span {
                font-weight: lighter;
                color: #58f1b7;
            }
        }
        .cards {
            display: flex;
            justify-content: space-between;
            .card {
                width: calc(90% / 3);
                img {
                    width: 100%;
                    border-radius: 10px;
                    margin-bottom: 15px;
                }
                h3 {
                    margin: 15px 0px;
                }
                .card-info {
                    display: flex;
                    font-size: small;
                    color: #808080;
                    .views {
                        margin-left: 20px;
                    }
                }
            }
        }
    }
</style>