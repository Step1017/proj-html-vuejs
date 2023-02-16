<script>
export default {
    name: "AppFirstSection",
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section>
        <div class="main-container">
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
                        1.926
                    </div>
                    <div class="details">
                        FINISHED SESSIONS
                    </div>
                </div>
                <div class="number-section">
                    <div class="number">
                    3.092+
                    </div>
                    <div class="details">
                        ENROLLED LEARNERS
                    </div> 
                </div>
                <div class="number-section">
                    <div class="number">
                        200
                    </div>
                    <div class="details">
                        ONLINE INSTRUCTORS
                    </div> 
                </div>
                <div class="number-section">
                    <div class="number">
                        100%
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
    .main-container {  
        margin-top: 250px;
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
                    color: #a9a9a9;
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
                    color: #26dd97;
                    font-size: xx-large;
                    font-weight: bold;
                }
                .details {
                    font-size: x-small;
                    color: rgb(53, 53, 53);
                    margin-top: 10px;
                }
            }
        }
    }
</style>