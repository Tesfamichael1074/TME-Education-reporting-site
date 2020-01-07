<template>
  <div class="container ">

      <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" >School name</span>
          </div>
          <input type="text" class="form-control" placeholder="Ex. Woldia preparatory, Wolkite University, etc..." >
    </div>

    <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" >School Address</span>
          </div>
          <input type="text" class="form-control" placeholder="Ex. Woldia/N/Wollo, Cairo, 121 str" >
    </div>

    <div class="form-row align-items-center">
    <div class="col-auto mb-3 my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>School Type...</option>
        <option value="1">Primary school</option>
        <option value="2">Secondary School</option>
        <option value="3">Vocational school</option>
        <option value="1">University</option>
        <option value="2">FabLab/Makerspace</option>
        <option value="3">Library</option>
        <option value="2">Startup/Org</option>
        <option value="3">Other</option>
      </select>
    </div>

    <div class="col-auto mb-3 my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2">
        <option selected>Workshop Type...</option>
        <option value="1">Students Workshop</option>
        <option value="2">Teacher Training</option>
        <option value="3">Students/Teacher workshop</option>
        <option value="4">Individual training</option>
      </select>
    </div>
   
    </div>
      <!--  Number of Days and Number of Student 
          -->
        <div class="form-row align-items-center m-2">
              <div class="form-row align-items-center ">
              <div class="col-auto md-3 my-1">
              <p>
                  Number of Days   
              </p>

            </div>
            <div class="def-number-input number-input safari_only col-auto m-2 mb-4">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                <input class="quantity" min="1" name="quantity" value="10" type="number">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
              </div>
              
            </div>

            <div class="form-row align-items-center">
              <div class="col-auto md-3 m-2 my-1">
              <p>
                  Number of Students   
              </p>

            </div>
            <div class="def-number-input number-input safari_only col-auto m-2 mb-4">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                <input class="quantity" min="1" name="quantity" value="10" type="number">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
              </div>
              
            </div>
        </div>

        <!--  Avarage age 
          -->

          <div class="form-row align-items-center m-2">
              <div class="form-row align-items-center">
              <div class="col-auto md-3 my-1">
              <p>
                  Avarage age  
              </p>

            </div>
            <div class="def-number-input number-input safari_only col-auto m-2 mb-4">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                <input class="quantity" min="1" name="quantity" value="10" type="number">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
              </div>
              
            </div>
        </div>

    


  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",

    })
  }
};
</script>



<style scoped>
.number-input input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.number-input input[type=number]::-webkit-inner-spin-button,
.number-input input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.number-input {
  margin-bottom: 3rem;
}

.number-input button {
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  position: relative;
}

.number-input button:before,
.number-input button:after {
  display: inline-block;
  position: absolute;
  content: '';
  height: 2px;
  transform: translate(-50%, -50%);
}

.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.number-input input[type=number] {
  text-align: center;
}

.number-input.number-input {
  border: 1px solid #ced4da;
  width: 10rem;
  border-radius: .25rem;
}

.number-input.number-input button {
  width: 2.6rem;
  height: .7rem;
}

.number-input.number-input button.minus {
  padding-left: 10px;
}

.number-input.number-input button:before,
.number-input.number-input button:after {
  width: .7rem;
  background-color: #495057;
}

.number-input.number-input input[type=number] {
  max-width: 4rem;
  padding: .5rem;
  border: 1px solid #ced4da;
  border-width: 0 1px;
  font-size: 1rem;
  height: 2rem;
  color: #495057;
}

@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance: none) and (stroke-color:transparent) {

    .number-input.def-number-input.safari_only button:before,
    .number-input.def-number-input.safari_only button:after {
      margin-top: -.3rem;
    }
  }
}
</style>