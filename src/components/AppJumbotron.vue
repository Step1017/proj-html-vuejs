<script>
export default {
    name: "AppJumbotron",
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <div class="jumbo-container">
        <div class="jumbotron">
            <h1>
            Learn At Your Own Place!
            </h1>
            <p>
                Get teamed up with people of same will.
            </p>
            <button>
                Get started for free
            </button>
            <div class="waves-container">               
                <div class="media-container">
                    <img class="left-person" src="../assets/images/home-6-hero-left-person-244x300.png" alt="">
                    <div class="video-container">
                        <div class="poster">
                            <img src="../assets/images/home-6-hero-poster-final.jpg" alt="">
                        </div>
                        <img class="youtube-img" src="../assets/images/icon-youtube-play.png" alt="">
                    </div>
                    <img class="right-person" src="../assets/images/home-6-hero-right-person-195x300.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .jumbo-container {
        background-color: #3f3a64;
        color: #ffffff;
        .jumbotron {
            display: flex;
            flex-direction: column;
            align-items: center;
            h1, p, button, .media-container {
                margin-top: 50px;
            }
            h1 {
                font-size: 50px;
            }
            p {
                color: #a8a8a8;
            }
            button {
                padding: 15px 30px;
                color: white;
                font-weight: bold;
                background-color: rgb(74, 209, 157);
                border: none;
                border-radius: 10px;
                box-shadow: 0px 0px 30px 5px rgba(63, 63, 63, 0.911);
            }
            .waves-container {  
                width: 100%;
                background-image: url(../assets/images/jumbotron-background-wave-big.svg), url(../assets/images/jumbotron-background-wave-medium.svg), url(../assets/images/jumbotron-background-wave-small.svg);
                background-size: cover;
                .media-container {
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    .right-person {
                        position: relative;
                        top: 250px;
                    }
                    .left-person {
                        position: relative;
                        top: 90px;
                    }
                    .video-container {
                        width: 760px;
                        height: 460px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        top: 50px;
                        right: 20px;
                        background-color: #ffffff;
                        box-shadow: 0px 0px 30px 5px rgba(114, 114, 114, 0.384);
                        border-radius: 15px;
                            .poster{
                                overflow: hidden;
                                img{
                                    transition: all 1.0s;
                                    &:hover{
                                        transform: scale(1.2);
                                    }
                                }
                            }
                            .youtube-img{
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                            }
                    }
                }
            }
            
        }
    }
</style>