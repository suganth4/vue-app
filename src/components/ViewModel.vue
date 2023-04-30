<template>
    <div>
        <b-button @click="show = true" variant="primary">View</b-button>

        <b-modal v-model="show" title="User details">
            <b-container fluid>

                <div>
                    <div>firstName : {{ user.firstName }}</div>
                    <div>email: {{ user.email }}</div>
                    <div>phoneNumber: {{ user.phoneNumber }}</div>
                </div>
            </b-container>
        </b-modal>
    </div>
</template>

<script>

export default {
    name: "ViewModel",
    data() {
        return {
            show: false,
            variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
            headerBgVariant: 'dark',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'warning',
            footerTextVariant: 'dark',
            user: {}
        }
    },
    props: ["id", "usersDetails"],
    created() {
        this.user = { ...this.getUser() }
    },
    methods: {
        getUser: function () {
            return this.usersDetails.find((v) => {
                return v.id === this.id
            })
        }
    }
}
</script>