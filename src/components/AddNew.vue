<template>
    <div class="card">
        <form @submit.prevent="checkForm" autocomplete="off">
            <div class="form-group">
                <label for="name">Name:</label>
                <input v-model="name" type="text" id="name">
                <p v-if="errorName" class="error-message">Required</p>
            </div>
            <div class="form-group">
                <label for="job">Job:</label>
                 <input v-model="job" type="text" id="job">
                <p v-if="errorJob" class="error-message">Required</p>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import * as dataApi from '../backend/dataAPI'

export default {
    data() {
        return {
            name: '',
            job: '',
            errorName: false,
            errorJob: false
        }
    },
    computed: {
        nameIsValid() {
            return this.name && this.name.length >= 5 && this.name.length <= 15
        },
        jobIsValid() {
            return this.job && this.job.length >=5 && this.job.length <= 15
        }
    },
    methods: {
        checkForm(){
            if(this.nameIsValid && this.jobIsValid) {
                this.createUser()
                return
            }

            if(!this.nameIsValid){
                this.errorName = true
            }

            if(!this.jobIsValid){
                this.errorJob = true
            }
        },
        async createUser() {
            const user = {
                name: this.name,
                job: this.job
            }

            try {
               await dataApi.createNewUser(user)
                this.$emit('add', user)
            } catch(err) {
                alert(err.text)
            }
        }
    }
}
</script>