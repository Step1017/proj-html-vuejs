<script>
    export default {
        name:"AppSeventhSection",
        data() {
            return {

            }
        }
    }
    </script>
    <template>
        <section>
            <div class="main-container">
                <h3>Start today for getting <span>Online Certification</span></h3>
                <h2>You can be your own guiding star with our help!</h2>
                <button>Get started now</button>
            </div>
        </section>
    </template>
    <style lang="scss" scoped>
    .main-container {
        text-align: center;
        margin-top: 100px;
        h3 {
            font-size: 20px;
            span {
                font-weight: lighter;
                color: #42dac5;
            }
        }
        h2 {
            font-size: 30px;
        }
        button {
            margin-top: 50px;
            padding: 15px 30px;
            color: white;
            font-weight: bold;
            background-color: rgb(74, 209, 157);
            border: none;
            border-radius: 10px;
            margin-bottom: 50px;
        }
    }
</style>