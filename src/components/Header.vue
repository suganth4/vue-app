<template>

    <nav class="navbar navbar-expand-lg ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <img class="navbar-brand image" src="../assets/Logo.png" />

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ml-auto mt-2 ">
                <li class="nav-item">
                    <a class="nav-link" href="#">Why Us? </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Marketing Platform</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Pricing</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="button">Sign Up, It’s Free</button>                          
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderView"
}
</script>

<style>

.navbar {
    padding-right: 78px;
    padding-left: 78px;
    font-family: "Merriweather";
}
.navbar-nav {
    margin-right: 32px !important;
}

.nav-link {
    font-size: 14px;
    color: #1E202F !important;
}

</style>