<script>
export default {
    name: "AppHeader",
    data() {
        return {
            activeOption: 7,
            HeaderList: [
        {
            title: "Home",
            url:"https://maxcoach.thememove.com/",
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
            url:"https://maxcoach.thememove.com/",
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
            url:"https://maxcoach.thememove.com/main/courses/",
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
            url:"https://maxcoach.thememove.com/main/courses/",
            List: [
                "Events",
                "Zoom Meetings"
            ]
        },
        {
            title: "Blog",
            url:"https://maxcoach.thememove.com/main/blog/",
            List: [
                "Blog Grid",
                "Blog Masonary",
                "Blog Classic",
                "Blog List"
            ]
        },
        {
            title: "Shop",
            url:"https://maxcoach.thememove.com/main/shop/",
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
                <img src="../public/images/light-logo.png" alt="MaxCoachLogo">
            </div>
            <div class="navbar">
                <ul class="nav-list">
                    <li v-for="(name, index) in this.HeaderList" class="nav-item">                        
                        <div class="option">
                            <a :href="name.url">{{ name.title }} V</a>
                        </div>                    
                        <ul :class="(name.List.length > 15) ? 'split-ul-15' : (name.List.length > 7) ? 'split-ul-10' : ''">
                            <li v-for="(item, num) in name.List" :class="(name.List.length > 7) ? 'split-li-15' : ''">{{ item }}</li>
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
                        a {
                        text-decoration: none;
                        color: white;
                        }
                    &:hover ul {
                        top: 20px;
                        opacity: 1;
                    }
                }
                .split-ul-15 {
                    width: 450px;
                    height: 350px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    right: -150%;
                }
                .split-ul-10{
                    width: 450px;
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    right: -150%;
                }

                ul {
                    list-style-type: none;
                    position: absolute;
                    right: -25%;
                    top: 30px;
                    color: #000000;
                    opacity: 0;
                    transition: all 0.5s;
                    z-index: 2;
                    background-color: #ffffff;
                    border-radius: 15px;
                    .split-li-15 {
                        width: 150px;
                        height: 50px;
                    }

                    
                    li {
                        padding: 5px;
                        width: 100px;
                        height: 50px;
                    }
                }
            }
        }
    }
</style>