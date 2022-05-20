<template>
    <div>
        <div class="navbar"></div>
        <AddNew @add="addNewUser"/>
        <UsersList :users="users" @removeUser="removeUser"/>
    </div>
</template>

<script>
import AddNew from '../components/AddNew.vue'
import UsersList from '../components/UsersList.vue'
import * as dataApi from '../backend/dataAPI'

export default {
    components: {
        AddNew,
        UsersList
    },
    data() {
        return {
            users: []
        }
    },
    created(){
        this.getUsers()
    },
    methods: {
        addNewUser(user) {
            this.users.push(user)
        },
        async getUsers() {
            this.users = await dataApi.getUsers()
        },
        removeUser(userId) {
            const index = this.users.findIndex(user => user.id === userId)
            this.users.splice(index, 1)
        }
    }
}
</script>

<style>
</style>