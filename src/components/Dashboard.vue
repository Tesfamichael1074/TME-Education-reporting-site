<template>
<div>
  <Reports />

  <div class="container-sm pt-5 my-3 border bg-light">

    <form @submit.prevent="addLocation(schoolName, schoolAddress, schoolType, workshopType, numDays, numStudents, avarageAge)">
      
      <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" >School name</span>
          </div>
          <input type="text" v-model="schoolName" class="form-control" placeholder="Ex. Woldia preparatory, Wolkite University, etc..." >
    </div>

    <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" >School Address</span>
          </div>
          <input type="text" v-model="schoolAddress" class="form-control" placeholder="Ex. Woldia/N/Wollo, Cairo, 121 str" >
    </div>

    <div class="form-row align-items-center">
    <div class="col-auto mb-3 my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select v-model="schoolType" class="custom-select mr-sm-2" id="inlineFormCustomSelect" onchange="doSomething()">
        <option value="None" selected>School Type...</option>
        <option value="Primary school">Primary school</option>
        <option value="Secondary School">Secondary School</option>
        <option value="Vocational school">Vocational school</option>
        <option value="University">University</option>
        <option value="FabLab/Makerspace">FabLab/Makerspace</option>
        <option value="Library">Library</option>
        <option value="Startup/Org">Startup/Org</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div  class="col-auto mb-3 my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select v-model="workshopType" class="custom-select mr-sm-2">
        <option value="None" selected>Workshop Type...</option>
        <option value="Students Workshop">Students Workshop</option>
        <option value="Teacher Training">Teacher Training</option>
        <option value="Students/Teacher workshop">Students/Teacher workshop</option>
        <option value="Individual training">Individual training</option>
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
            <div class="col-auto m-2 mb-4">
                <input v-model="numDays" class="quantity" min="1" name="quantity" value="10" type="number">
              </div>
              
            </div>

            <div class="form-row align-items-center">
              <div class="col-auto md-3  my-1">
              <p>
                  Number of Students   
              </p>

            </div>
            <div class="col-auto m-2 mb-4">
                <input v-model="numStudents"  class="quantity" min="1" name="quantity" value="10" type="number">
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
            <div class="col-auto m-2 mb-4">
                <input v-model="avarageAge"  class="quantity" min="1" name="quantity" value="10" type="number">
              </div>
              
            </div>
        </div>

        <div class="row m-2">
              <button type="submit" class="btn btn-outline-success m-2 ml-auto" >Add</button>
        </div>
        

    
    </form>

  </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Reports from './Roports.vue';
import { db } from '../main';

export default {

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
     
    })
  },
 components: {
        Reports
    },

  data () {
    return {
      reps: [],
      schoolName: '',      
      schoolAddress: '',
      schoolType: '',
      workshopType: '',
      numDays: '',
      numStudents: '',
      avarageAge: ''  
    }
  },
  firestore () {
    return {
      locations: db.collection('reports').orderBy('name')
    }
  },
   methods: { 
    addLocation (schoolName, schoolAddress, schoolType, workshopType, numDays, numStudents, avarageAge) {
      const created = new Date()

      db.collection('reports').add({ schoolName: schoolName,
                                       schoolAddress: schoolAddress,
                                       schoolType: schoolType,
                                       workshopType: workshopType,
                                       numDays: numDays,
                                       numStudents: numStudents,
                                       avarageAge: avarageAge,
                                       })
      // Clear values
      
      this.schoolName = ''
      this.schoolAddress = ''
      this.schoolType = ''
      this.workshopType = ''
      this.numDays = ''
      this.numStudents = ''
      this.avarageAge = ''
    },

    deleteLocation (id) {
      db.collection('locations').doc(id).delete()
    },

    doSomething(){
        alert("just");
    },
  }
};
</script>



<style scoped>
.container-sm{
  max-width: 50%;
}
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