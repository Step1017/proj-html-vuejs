<script>
export default {
    name: "AppFirstSection",
    data() {
        return {
            scroll: false,
            numberOne: 0,
            numberOneStatic: "1.926",
            numberTwo: 0,
            numberTwoStatic: "3.092",
            numberThree: 0,
            numberThreeStatic: "200",
            numberFour: 0,
            numberFourStatic: "100",
            interval: 0,
        }
    },
    methods: {
        activescroll() {
            this.scroll = true
        },
        updateTimer() {
            if(this.scroll) {
                clearInterval(this.interval)
                this.interval = setInterval(() => {
                    if(this.numberOne < 100){
                        this.numberOne = this.numberOne + 1
                        this.numberTwo = this.numberTwo + 1
                        this.numberThree = this.numberThree + 1
                        this.numberFour = this.numberFour + 1
                    }
                }, 13)
            }
    }
    },
    computed: {
        myCount() {
            let self = this;
                this.updateTimer()
                if(this.numberOne < 100){
                    return this.numberOne
                }
                else {
                    return this.numberOneStatic
                }
        },
        myCountTwo() {
            let self = this;
                this.updateTimer()
                if(this.numberTwo < 100){
                    return this.numberTwo
                }
                else {
                    return this.numberTwoStatic
                }
        },
        myCountThree() {
            let self = this;
                this.updateTimer()
                if(this.numberThree < 100){
                    return this.numberThree
                }
                else {
                    return this.numberThreeStatic
                }
        },
        myCountFour() {
        let self = this;
                this.updateTimer()
                if(this.numberFour < 100){
                    return this.numberFour
                }
                else {
                    return this.numberFourStatic
                }
        }
    },
}
</script>

<template>
    <section>
        <div @mouseover="activescroll" :class="(this.scroll) ? 'main-container mouse-over' : 'main-container'">
            <div class="p-container">                
                <div class="main-p">
                    <p>
                        Let passion and determination be the guide along the way and develop at your own place that's comfortable.
                    </p>
                    <div class="author">
                        Fannie Moreno
                    </div>
                    <div class="job-description">
                        /Founder & CEO
                    </div>
                </div>               
            </div>
            <div class="number-container">
                <div class="number-section">
                    <div class="number">
                        {{ myCount }}
                    </div>
                    <div class="details">
                        FINISHED SESSIONS
                    </div>
                </div>
                <div class="number-section">
                    <div class="number">
                        {{ myCountTwo }}
                    </div>
                    <div class="details">
                        ENROLLED LEARNERS
                    </div> 
                </div>
                <div class="number-section">
                    <div class="number">
                        {{ myCountThree }}
                    </div>
                    <div class="details">
                        ONLINE INSTRUCTORS
                    </div> 
                </div>
                <div class="number-section">
                    <div class="number">
                        {{ myCountFour }}
                    </div>
                    <div class="details">
                        SATISFACTION RATE
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
        margin-top: 250px;
        padding-bottom: 50px;
        opacity: 0;
        position: relative;
        top: 50px;
        .p-container{            
            height: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .main-p {
                width: 28%;
                text-align: center;
                color: #353535;
                p {
                    font-size: x-large;
                    font-weight: bold;
                }
                .author {
                    padding-top: 50px;
                }
                .job-description{
                    color: $secondary-text;
                    font-size: small;
                }
            }
        }
        .number-container {
            width: 80%;
            margin: 0 auto;
            height: 20%;
            display: flex;
            margin-top: 130px;
            .number-section {
                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .number {
                    color: $extra-color;
                    font-size: xx-large;
                    font-weight: bold;
                }
                .details {
                    font-size: x-small;
                    color: $secondary-text;
                    margin-top: 10px;
                }
            }
        }
    }
</style>