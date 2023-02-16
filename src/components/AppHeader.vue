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
                <img src="/public/images/light-logo.png" alt="MaxCoachLogo">
            </div>
            <div class="navbar">
                <ul class="nav-list">
                    <li v-for="(name, index) in this.HeaderList" class="nav-item">                        
                        <div class="option">
                            <a :href="name.url" target="_blank">{{ name.title }} <font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
                        </div>                    
                        <ul :class="(name.List.length > 15) ? 'split-ul-15' : (name.List.length > 7) ? 'split-ul-10' : ''">
                            <li v-for="(item, num) in name.List" :class="(name.List.length > 7) ? 'split-li-15' : ''">{{ item }}</li>
                        </ul>
                    </li>
                    <div class="icon"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></div>
                    <div class="icon"><font-awesome-icon icon="fa-solid fa-user-circle" /></div>
                </ul>
            </div>
            <div class="searchbar">
                <input type="search" name="" id="pad" placeholder="Search...">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use './styles/partials/variables' as *;
    #pad {
    padding: 5px 10px;
    }
    .logo {
        img{
            width: 50%;
        }
    }
    .header-container {
        background-color: $bkg-header;
    }
    .row {
        height: 100%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $bkg-main-primary;

        .navbar {
            width: 70%;
            .nav-list {
                display: flex;
                justify-content: space-around;
                list-style-type: none;
                .nav-item {
                    position: relative;
                    padding-bottom: 10px;
                    border-bottom: 3px solid transparent;
                    i {
                        scale: 0.7;
                    }
                        a {
                        text-decoration: none;
                        color: $bkg-main-primary;
                            &:hover{
                            border-bottom: 2px solid $bkg-main-primary;
                            border-radius: 2px;
                            }
                        }

                        &:hover ul {
                        top: 40px;
                        visibility: visible;
                        opacity: 1;
                        border: 1px solid $bkg-main-secondary;
                        box-shadow: 0px 0px 30px 5px rgba(114, 114, 114, 0.384);
                        }
                        ul {
                            padding: 15px;
                        }
                }
                .split-ul-15 {
                    width: 650px;
                    height: 300px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    right: -150%;
                }
                .split-ul-10{
                    width: 650px;
                    height: 300px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    right: -150%;
                }

                ul {
                    list-style-type: none;
                    position: absolute;
                    right: -25%;
                    top: 60px;
                    color: $primary-text;
                    visibility: hidden;
                    opacity: 0;
                    transition: all 0.5s;
                    background-color: $bkg-main-secondary;
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