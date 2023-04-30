<template>
    <div class="container">
        <Header></Header>
        <div class="image-container">
            <div class="data-container">
                <p class="description">We take care Marketing things</p>
                <button class="blueButton">Pick a Plan</button>
            </div>
            <div>
                <img src="../assets/Illustration.png" class="main-image" />
            </div>
        </div>
        <div class="main">
            <div class="main-head">
                <div class="main-container">
                    <div>
                        <div class="arrow"></div>
                        <p>BLOG</p>
                    </div>
                    <div class="two-arrow">
                        <div class="two-arrow">
                            <div class="left">
                                <div class="arrow-container-left">&lt;</div>
                                <div class="arrow"></div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="arrow"></div>
                            <div class="arrow-container-right">></div>
                        </div>
                    </div>
                </div>
                <div class="main-text">Explore Marketing Tips</div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="card-img-container"><img src="../assets/MaskGroup1.png" class="card-img" />
                        <div class="small-card">
                            <img src="../assets/Ellipse1.png" class="small-img" />
                            <div>
                                <p class="small-card-text">John Doe</p>
                                <p class="small-card-desc">Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-detail">
                        <p class="card-title">Tips for a good Pitching Presentation</p>
                        <p class="card-desc">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img-container"><img src="../assets/MaskGroup2.png" class="card-img" />
                        <div class="small-card">
                            <img src="../assets/Ellipse2.png" class="small-img" />
                            <div>
                                <p class="small-card-text">John Doe</p>
                                <p class="small-card-desc">Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-detail">
                        <p class="card-title">Tips for a good Pitching Presentation</p>
                        <p class="card-desc">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img-container"><img src="../assets/MaskGroup3.png" class="card-img" />
                        <div class="small-card">
                            <img src="../assets/Ellipse3.png" class="small-img" />
                            <div>
                                <p class="small-card-text">John Doe</p>
                                <p class="small-card-desc">Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-detail">
                        <p class="card-title">Tips for a good Pitching Presentation</p>
                        <p class="card-desc">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"

export default {
    name: "HomePage",
    components: {
        Header,
        Footer
    }
}
</script>

<style>
.container {
    font-family: "Merriweather";
    width: 1366px !important;
    padding-left: 78px !important;
}

.left {
    opacity: 0.5;
    font-size: 25px;
    margin-right: 10px;
}

.right {
    font-size: 25px;
}

.arrow-container-left {
    color: #4099F1;
    margin-right: -12px;
}

.arrow-container-right {
    color: #4099F1;
    margin-left: -12px;
}

.header {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding-right: 78px;
}

.menu {
    display: flex;
    align-items: center;
    gap: 32px;
    justify-content: space-between;
}

.image {
    width: 148px;
    height: 58px;
}

ul {
    display: flex;
    list-style: none;
    gap: 32px;
    margin: 0px !important;
}

li {
    font-size: 14px;
    color: #1E202F;
}

.menuItem {
    display: flex;
    align-items: center;
}

.description {
    font-weight: bold;
    font-size: 64px;
    line-height: 90px;
    color: #1E202F;
    letter-spacing: 0.45px;
}

.main {
    padding: 64px 78px 64px 0px;
    display: flex;
    flex-direction: column;
    gap: 42px;
}

.main-head {
    display: flex;
    flex-direction: column;
}

.main-container {
    display: flex;
    justify-content: space-between;
}

.main-container div {
    display: flex;
    gap: 8px;
    align-items: center;
}

.arrow {
    width: 43px;
    height: 1px;
    background-color: #4099F1;
}

.main-container div p {
    color: #4099F1;
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
}

.image-container {
    padding-top: 63px;
    padding-bottom: 63px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.data-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.main-image {
    width: 636px;
    height: 542px;
    margin-right: -10px;
}

.main-text {
    font-size: 32px;
    line-height: 42px;
    font-weight: bold;
    color: #1E202F;
}

.button {
    border: 1px solid #4099F1;
    color: #4099F1;
    background-color: #FFFFFF;
    height: 42px;
    font-size: 14px;
}

.blueButton {
    background: #4099F1;
    font-size: 14px;
    color: #FFFFFF;
    padding: 17px 0px;
    border: 1px solid #FFFFFF;
    width: 144px;
}

.card-container {
    display: flex;
    gap: 24px;
    justify-content: space-between;
}

.card {
    flex-basis: 312px !important;
    border: none !important;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.card-detail {
    display: flex;
    flex-direction: column;
    gap: 16px
}


.card-title {
    color: #1E202F;
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 0.42px;
}

.card-desc {
    color: #888990;
    font-size: 12px;
    letter-spacing: 0.24px;
    line-height: 23px;
}

.small-img {
    width: 32px;
    height: 32px;
}

.card-img-container {
    position: relative;

}

.small-card {
    position: absolute;
    bottom: 0px;
    display: flex;
    gap: 8px;
    background-color: #FFFFFF;
    padding: 11px 16px;

}

.small-card-text {
    font-weight: bold;
    color: #1E202F;
    font-size: 12px;
    letter-spacing: 0.25px;
}

.small-card-desc {
    color: #B2B2B2;
    font-weight: 300;
    font-size: 8px;
    letter-spacing: 0.25px;
}

p {
    margin: 0px !important;
}


.footer {
    display: flex;
    height: 142px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 78px 0px 0px;
}

.footer-container {
    display: flex;
    align-items: center;
}

.footer-menuItem li {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: #212B36;
}

.footer p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: #82868A;
}
</style>