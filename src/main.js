import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faUserSecret,
    faChevronDown,
    faCartShopping,
    faUserCircle,
    faGear,
    faDisplay,
    faArrowRight,
    faCheck
} 
  from '@fortawesome/free-solid-svg-icons'

import {
    faSquareFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
}
  from '@fortawesome/free-brands-svg-icons'

import {
    faCalendar,
    faEye,
    faFlag,
    faLifeRing,
    faFileLines,
    faUser
}
  from '@fortawesome/free-regular-svg-icons'
library.add(
    faUserSecret,
    faChevronDown,
    faCartShopping,
    faUserCircle,
    faGear,
    faDisplay,
    faArrowRight,
    faCheck,
    faSquareFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faCalendar,
    faEye,
    faFlag,
    faLifeRing,
    faFileLines,
    faUser
)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

