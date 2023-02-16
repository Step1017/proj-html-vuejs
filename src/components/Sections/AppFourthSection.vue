<script>
export default {
    name: "AppFourthection",
    data() {
        return {
            sponsor: [
                "client-logo-colored-01.png",
                "client-logo-colored-02.png",
                "client-logo-colored-03.png",
                "client-logo-colored-04.png",
                "client-logo-colored-05.png",
                "client-logo-colored-06.png"
            ]
        }
    }
}
</script>
<template>
    <section>
        <div class="main-container">
            <h2>
                Why People Talk About <span>MaxCoach</span>?
            </h2>
            <div class="card">
                <div class="img">
                    <img src="/public/images/testimonial-avata-02.jpg" alt="">
                </div>
                <div class="info">
                <p>I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.</p>
                <div class="author">
                    MINA HOLLACE
                </div>
                <div class="job-description">
                    / Freelancer
                </div>
                </div>
            </div>
            <div class="sponsors">
                <div class="sponsor" v-for="item in sponsor">
                    <img :src="`/public/images/` + item" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .main-container {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        margin-top: 80px;
        h2 {
            font-size: 40px;
            span {
                font-weight: lighter;
                color: #34e0a7;
            }
        }
        .card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: start;
            width: 50%;
            margin: 0 auto;
            img {
                aspect-ratio: 1 / 1;
                scale: 0.7;
                border-radius: 100%;
            }
            p {
                line-height: 1.5;
                margin-bottom: 20px;
                font-size: 1.8rem;
                margin-top: 30px;
            }
            .author {
                font-size: small;
                font-weight: bolder;
                margin-bottom: 20px;
            }
            .job-description {
                font-size: small;
                color: #808080;
            }
        }
        .sponsors {
            display: flex;
            justify-content: center;
            .sponsor {
                margin: 50px;
                display: flex;
                align-items: center;
                transition: all 0.25s;
                &:hover {
                    filter: grayscale(100%);
                }
            }
        }
    }
</style>