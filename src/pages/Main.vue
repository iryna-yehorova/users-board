<template>
    <div>
        <div class="navbar"></div>
        <div class="loader" v-if="pageLoading">Loading...</div>
        <template v-else>
            <AddNew @add="addNewUser"/>
            <UsersList :users="users" @removeUser="removeUser"/>
        </template>
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
            users: [],
            pageLoading: false
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
            this.pageLoading = true
            this.users = await dataApi.getUsers()
            this.pageLoading = false
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