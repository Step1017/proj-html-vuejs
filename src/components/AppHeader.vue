<script>
export default {
    name: "AppHeader",
    data() {
        return {
            activeOption: 7,
            HeaderList: [
        {
            title: "Home",
            List: [
                "MaxCoach Education",
                "Course Portal",
                "Distant Learning",
                "Multimedia Pedagology",
                "Modern Schooling",
                "Remote Training",
                "Healt Coaching",
                "Gym Coaching",
                "Buisness",
                "Artist",
                "Kitchen",
                "Motivation",
                "Dancing",
                "Guitar",
                "Yoga",
                "Photography",
                "Personal Finance",
                "Sales Coaching",
                "Mental Therapy"
            ]
        },
        {
            title: "Pages",
            List: [
                "Start Here",
                "Success Story",
                "About me",
                "About us 01",
                "About us 02",
                "About us 03",
                "Contact me",
                "Contact us",
                "Purchase Guide",
                "Privacy Policy",
                "Terms of Service"
            ]
        },
        {
            title: "Courses",
            List: [
                "Courses Grid 01",
                "Courses Grid 02",
                "Courses Grid 03",
                "Membership Levels",
                "Become a Teacher",
                "Profile",
                "Checkout",
                "Single Layout"
            ]
        },
        {
            title: "Features",
            List: [
                "Events",
                "Zoom Meetings"
            ]
        },
        {
            title: "Blog",
            List: [
                "Blog Grid",
                "Blog Masonary",
                "Blog Classic",
                "Blog List"
            ]
        },
        {
            title: "Shop",
            List: [
                "Shop Left Sidebar",
                "Shop Right Sidebar",
                "Cart",
                "Wishlist",
                "Single Product"
            ]
        },
    ],
        }
    },
    methods: {
        
        }
    }
        
    

</script>

<template>
    <div class="header-container">
        <div class="row">
            <div class="logo">
                <img src="../assets/images/light-logo.png" alt="MaxCoachLogo">
            </div>
            <div class="navbar">
                <ul class="nav-list">
                    <li v-for="(name, index) in this.HeaderList" class="nav-item">                        
                        <div class="option">
                        {{ name.title }} V
                        </div>                    
                        <ul>
                            <li v-for="(item, num) in name.List"> {{ item }} </li>
                        </ul>
                    </li>
                    <div class="icon">I-Carr</div>
                    <div class="icon">I-Usr</div>
                </ul>
            </div>
            <div class="searchbar">
                <input type="search" name="" id="">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .header-container {
        background-color: #3f3a64;
        height: 50px;
    }
    .row {
        height: 100%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;

        .navbar {
            width: 70%;
            .nav-list {
                display: flex;
                justify-content: space-around;
                list-style-type: none;
                .nav-item {
                    position: relative;
                    &:hover ul {
                        top: 20px;
                        opacity: 1;
                    }
                }

                ul {
                    list-style-type: none;
                    position: absolute;
                    right: -25%;
                    top: 30px;
                    color: black;
                    background-size: cover;
                    opacity: 0;
                    max-height: 250px;
                    transition: all 0.5s;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    
                    li {
                        padding: 5px;
                        background-color: white;
                    }
                }
            }
        }
    }
</style>