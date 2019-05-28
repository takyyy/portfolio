<template>
    <div class="shadow">
        <nav class="navbar navbar-expand-lg navbar-dark ">
            <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto m-2">
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/">HOME</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/about">ABOUT</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/works">WORKS</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/career">CAREER</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-3" to="/contact">CONTACT</router-link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>

nav{
    background-color:#263238
}

</style>