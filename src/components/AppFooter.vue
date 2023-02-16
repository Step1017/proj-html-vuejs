<script>
    export default {
        name: "AppFooter",
        data() {
            return {
                infos: [
                    {
                        address: "382 NE 191st St # 87394 Miami, FL 33179-3899",
                        number: "+1(305)547-9909 (9am - 5pm EST, Monday - Friday)",
                        mail: "support@maxcoach.com",
                        socialIcon: [
                            "Icon1",
                            "Icon2",
                            "Icon3",
                            "Icon4"
                        ]
                    }
                ],
                lists: [
                    {
                        title: "Explore",
                        items: [
                            "Start here",
                            "Blog",
                            "About us",
                            "Success story",
                            "Courses",
                            "Contact us"
                        ]
                    },
                    {
                        title: "Information",
                        items: [
                            "Membership",
                            "Purchase guide",
                            "Privacy policy",
                            "Terms of services"
                        ]
                    },
                ]
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="info" v-for="info in infos">
            <h4>Address</h4>
            <div class="address">
                {{ info.address }}
            </div>
            <div class="number">
                {{ info.number }}
            </div>
            <div class="mail">
                {{ info.mail }}
            </div>
            <div class="icons">
                <i :class="icon" v-for="icon in info.socialIcon">
                    ICONA
                </i>
            </div>
        </div>
        <div class="more">
            <ul class="main-ul">
                <li v-for="list in lists" class="main-li">
                    <h4>{{ list.title }}</h4>
                    <ul>
                        <li v-for="item in list.items">
                            {{ item }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
        <div class="copyright">
            © 2020 Maxcoach. All Rights Reserved
        </div>
</template>
<style lang="scss" scoped>
    .container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 70px;
        .info {
            line-height: 2;
            .icons {
                display: flex;
                i {
                    margin-right: 20px;
                }
            }
        }
        .more {
            line-height: 2;
            ul {
                list-style-type: none;
            }
            .main-ul {
                display: flex;
                .main-li {
                    width: 250px;
                    ul {
                        height: 110px;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        color: gray;
                        font-size: small;
                    }
                }
            }
        }
    }
    .copyright {
            font-size: small;
            color: gray;
            margin: 50px 0px;
            text-align: center;
        }
</style>