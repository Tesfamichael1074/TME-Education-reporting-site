<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7 ">
      
       <img class= " displayed" src="../assets/tme.jpg"  width="420" height="270"/>

      </div>
      <div class="col-md-8">
        
        <div class="card">
          
          <div class="card-header">Login</div>
          <div class="card-body m-md-4">
            <div v-if="error" class="alert alert-danger">{{error}}</div>

            <form action="#" @submit.prevent="submit">


              <div class="form-group row">
                <div class="input-group flex-nowrap">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">@</span>
                  </div>
                   <input id="email" type="email" class="form-control" name="email" placeholder="enter your email here" aria-label="Username" value required autofocus v-model="form.email"/>
                </div>
              </div>

              <div class="form-group row">
                    <div class="input-group flex-nowrap">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">*</span>
                      </div>
                          <input id="password" type="password" class="form-control" name="password" placeholder="enter your password here" aria-label="Password" required v-model="form.password" />
                     </div>
              </div>



              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>


<style scoped>
img.displayed {
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-content: center;
     }
</style>