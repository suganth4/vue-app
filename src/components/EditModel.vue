<template>
  <div>
    <b-button @click="show = true" variant="primary">Edit</b-button>

    <b-modal v-model="show" title="Edit details">
      <b-container fluid>
        <div class="form-group">
          <label class="reg_txt">Name <span>*</span></label>
          <div class="controls form-inline">
            <input type="text" class="input-name" placeholder="First" v-model="firstName">
          </div>
        </div>
        <div class="clearfix"></div>

        <div class="form-group">
          <label class="reg_txt">Email <span>*</span></label>
          <input type="text" class="form-register text" id="" placeholder="E-mail" v-model="email">
        </div>
        <div class="clearfix"></div>

        <div class="form-group" style="height:70px;">
          <label class="reg_txt">Phone Number <span>*</span></label>
          <div class="clearfix"></div>
          <input type="text" class="text input-name1" v-model="phoneNumber">
        </div>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <b-button variant="primary" size="sm" class="float-right" @click="handleSubmit">
            Update
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: "EditModel",
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
      firstName: "",
      email: "",
      phoneNumber: "",
    }
  },
  props: ["id", "usersDetails"],
  methods: {
    handleSubmit: function () {
      this.show = false
      console.log(this.usersDetails)
      const users = this.usersDetails.map((v) => {
        if (v.id === this.id) {
          return {
            ...v,
            "firstName": this.firstName,
            "email": this.email,
            "phoneNumber": this.phoneNumber
          }
        }
        return v
      })
      this.$emit("update", users)
    }
  }
}
</script>

<style scoped>
.input-name,
.input-name1 {
  width: 92%;
}
</style>