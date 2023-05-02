<template>
  <div>
    <b-button @click="handleClick" variant="primary">Edit</b-button>

    <b-modal v-model="show" title="Edit details">
      <b-container fluid>
        <form role="form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="reg_txt">Name <span>*</span></label>
            <div class="controls form-inline">

              <input type="text" :class="['input-name', isSubmitted && !$v.userData.firstName.required && 'invalid']"
                placeholder="First" v-model="userData.firstName">
              <input type="text" :class="['input-name input-last', isSubmitted && !$v.userData.lastName.required && 'invalid']"
                placeholder="Last" v-model="userData.lastName">
            </div>
          </div>
          <div class="clearfix"></div>

          <div class="form-group">
            <label class="reg_txt">Email <span>*</span></label>
            <input type="text"
              :class="['form-register text', isSubmitted && !$v.userData.email.required && 'invalid', isSubmitted && !$v.userData.email.email && 'invalid']"
              id="" placeholder="E-mail" v-model="userData.email">
          </div>
          <div class="clearfix"></div>

          <div class="form-group" style="height:70px;">
            <label class="reg_txt">Phone Number <span>*</span></label>
            <div class="clearfix"></div>
            <div class="wsite-form">
              <input type="text" :class="['text input-name1', isSubmitted && !$v.userData.phoneNumber.required && 'invalid']"
                v-model="userData.phoneNumber">
            </div>

          </div>

          <div class="clearfix"></div>

          <div class="form-group">
            <label class="reg_txt">Address <span>*</span></label>
            <input type="text" :class="['form-register text', isSubmitted && !$v.userData.address1.required && 'invalid']" id=""
              placeholder="Line 1" style="margin-bottom:15px;" v-model="userData.address1">
            <input type="text" :class="['form-register text', isSubmitted && !$v.userData.address2.required && 'invalid']" id=""
              placeholder="Line 2" v-model="userData.address2">
          </div>

          <div class="form-group">
            <div class="controls form-inline">
              <input type="text" :class="['input-name ', isSubmitted && !$v.userData.city.required && 'invalid']"
                placeholder="City" v-model="userData.city">
              <input type="text" :class="['input-name input-phone1', isSubmitted && !$v.userData.state.required && 'invalid']"
                placeholder="State" v-model="userData.state">
            </div>
          </div>

          <div class="form-group">
            <div class="controls form-inline">
              <input type="text" :class="['input-name', isSubmitted && !$v.userData.zipCode.required && 'invalid']"
                placeholder="Zip Code" v-model="userData.zipCode">
              <input type="text" :class="['input-name input-phone1', isSubmitted && !$v.userData.country.required && 'invalid']"
                placeholder="Country" v-model="userData.country">
            </div>
          </div>

          <div class="form-group">
            <label class="reg_txt">Write Your qualification <span>*</span></label>
            <input type="text" :class="['form-register text', isSubmitted && !$v.userData.qualification.required && 'invalid']"
              id="" placeholder="" style="margin-bottom:15px;" v-model="userData.qualification">
          </div>


          <div class="clearfix"></div>

          <div class="form-group">
            <label class="reg_txt">Comment<span>*</span></label>
            <textarea :class="['form-register text', isSubmitted && !$v.userData.comments.required && 'invalid']"
              v-model="userData.comments"></textarea>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-default submit" style="width:97%;">Submit</button>
          </div>
        </form>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  required,
  email,
} from "vuelidate/lib/validators";

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
      isSubmitted: false,
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        qualification: "",
        comments: "",
      }
    }
  },
  props: ["id", "usersDetails"],
  validations() {
    return {
      userData: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        email: {
          required, email
        },
        phoneNumber: {
          required
        },
        address1: {
          required,
        },
        address2: {
          required
        },
        city: {
          required
        },
        state: {
          required
        },
        zipCode: {
          required
        },
        country: {
          required
        },
        qualification: {
          required
        },
        comments: {
          required
        },
      }
    }
  },
  methods: {
    handleSubmit: function () {
      this.isSubmitted = true
      this.$v.$touch();
      console.log("asdas", this.userData.firstName)
      if (this.$v.$invalid) {
        return;
      }
      this.show = false
      const users = this.usersDetails.map((v) => {
        if (v.id === this.id) {
          const data = {
            ...v,
            "firstName": this.userData.firstName,
            "email": this.userData.email,
            "phoneNumber": this.userData.phoneNumber,
            "lastName": this.userData.lastName,
            "address1": this.userData.address1,
            "address2": this.userData.address2,
            "city": this.userData.city,
            "state": this.userData.state,
            "zipCode": this.userData.zipCode,
            "country": this.userData.country,
            "qualification": this.userData.qualification,
            "comments": this.userData.comments,
          }
          this.userData = { ...data }

          return data
        }
        return v
      })
      this.$emit("update", users)
    },
    handleClick: function () {
      this.show = true
      const data = this.usersDetails.find((v) => {
        console.log(v.id)
        if (v.id === this.id || v._id === this.id) {
          return v
        }
      })
      this.userData = { ...data }
    },
  }
}
</script>

<style scoped>
.input-name,
.input-name1 {
  width: 92%;
}
</style>