<template>
    <div class="container mycontainer border-0">
      <article v-for="(reports) in reports" :key="reports.schoolName">
          <div class="card mb-3" style="max-width: 138rem;">
                <div class="card-body align-items-stretch card-my col">

                <div class="form-row align-items-center col-auto divp"> 
           
                  <div class="col">
                <div class="form-row align-items-center col-auto"> 
                    <div class="col">
                        <h6 class="card-text" style="font-family:system-ui;">School name = {{reports.schoolName}}</h6>
                    </div>
                  
                    <div class="col">
                        <h6 class="card-text" style="font-family:system-ui;">School Address = {{reports.schoolAddress}}</h6>
                    </div>
                </div>

                <div class="form-row align-items-center col-auto "> 
                    <div class="col">
                        <h6 class="card-text" style="font-family:system-ui;">school Type = {{reports.schoolType}}</h6>
                    </div>    

                    <div class="col">
                        <h6 class="card-text" style="font-family:system-ui;">Workshope Type = {{reports.workshopType}}</h6>
                    </div>
                </div>

                <div class="form-row align-items-center col-auto "> 
                    <div class="col">
                        <h6 class="card-text" style="font-family:system-ui;">Number of Students = {{reports.numStudents}}</h6>
                    </div>

                    <div class="col">
                        <h6 class="card-text" style="font-family:system-ui;">Number of Days = {{reports.numDays}}</h6>
                    </div>
                   
                </div>

                <div class="form-row align-items-center col-auto ">

                    <div class="col">
                        <h6 class="card-text a" style="font-family:system-ui;">Avarage age = {{reports.avarageAge}}</h6>
                    </div>
                   
                </div>
                  </div>

                <div class="col divp1">
                  <button type="submit" class="btn btn-outline-danger m-2 ml-auto" style="position: absolute; right: 0;" @click="deleteLocation(reports.id)">Delete</button>
              </div>

      </div>
  </div>
          </div>


      </article>
    </div>
</template>



<script>
import { db } from '../main'
export default {
    name: 'Reports',
    data () {
    return {
      reports: [],
    }
  },
  firestore () {
    return {
      reports: db.collection('reports').orderBy('schoolName')
    }
  },
  methods: { 
    deleteLocation (id) {
      db.collection('reports').doc(id).delete()
    },
  }

}
</script>


<style scoped>
.mycontainer {
  border: 0;
}
.divp1 {
  padding-top: 00px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  max-width: 90px;
}

.divp {
  padding-top: 00px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.h6.a {
  font-size: 5px,
}
</style>  