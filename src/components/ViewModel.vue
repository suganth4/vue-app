<template>
    <div>
        <b-button @click="handleSubmit" variant="primary">View</b-button>

        <b-modal v-model="show" title="User details">
            <b-container fluid>

                <div>
                    <div>firstName : {{ user.firstName }}</div>
                    <div>lastName : {{ user.lastName }}</div>
                    <div>email: {{ user.email }}</div>
                    <div>phoneNumber: {{ user.phoneNumber }}</div>
                    <div>address1 : {{ user.address1 }}</div>
                    <div>address2: {{ user.address2 }}</div>
                    <div>city: {{ user.city }}</div>
                    <div>country : {{ user.country }}</div>
                    <div>state: {{ user.state }}</div>
                    <div>qualification: {{ user.qualification }}</div>
                    <div>zipCode: {{ user.zipCode }}</div>
                    <div>comments: {{ user.comments }}</div>
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
    methods: {
        handleSubmit : function() {
            console.log("user", this.usersDetails)
            this.show = true
            this.user = { ...this.getUser() } 
        },
        getUser: function () {
            return this.usersDetails.find((v) => {
                return v.id === this.id
            })
        }
    }
}
</script>