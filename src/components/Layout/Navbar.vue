<template>
    <b-navbar toggleable="md" type="dark" variant="light" class="navbar">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">IB</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <b-link class="btn btn-primary btn-sm" to="/sign-up">Sign up</b-link>
                </b-nav-item>

                 <b-nav-item>
                     <router-link class="btn btn-outline-success btn-sm" to="/login">Login</router-link>
                 </b-nav-item>


                <!--<b-nav-item-dropdown right>-->
                <!--<template slot="button-content">-->
                <!--<em>User</em>-->
                <!--</template>-->
                <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
                <!--<b-dropdown-item href="#">Signout</b-dropdown-item>-->
                <!--</b-nav-item-dropdown>-->
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .navbar {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.3);
    }
    .nav-link {
        color: black!important;
    }
    .navbar-brand {
        color: #007bff;
    }
</style>