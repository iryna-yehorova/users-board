<template>
    <div class="card rounded-3xl bg-white">
        <h1 class="card__heading sm:text-base md:text-2xl lg:text-3xl text-black text-center py-5">Create User</h1>
        <form @submit.prevent="checkForm" autocomplete="off">
            <div class="form-group">
                <label for="name" class="card__text sm:text-base text-sm pb-1 ">Name</label>
                <input v-model="name" type="text" id="name">
                <p v-if="errorName" class="error-message">Required</p>
            </div>
            <div class="form-group">
                <label for="job" class="card__text sm:text-base text-sm pb-1">Job</label>
                 <input v-model="job" type="text" id="job">
                <p v-if="errorJob" class="error-message">Required</p>
            </div>
            <div>
                <Button title="Submit" />
            </div>
        </form>
    </div>
</template>

<script>
import Button from './Button'
import * as dataApi from '../backend/dataAPI'

export default {
    components: {
        Button
    },
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

<style lang="scss">
.card {
    box-shadow: 0px 4px 16px rgba(32, 32, 32, 0.05);

    &__heading, 
    &__text {
        color: #202020
    }
}
</style>