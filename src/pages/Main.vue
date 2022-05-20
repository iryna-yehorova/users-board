<template>
    <div>
       <Header />
        <div class="loader" v-if="pageLoading">
            <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"></svg>
            Loading...
        </div>
        <div v-else class="flex flex-col items-center">
            <AddNew @add="addNewUser" class="mb-[106px]"/>
            <UsersList :users="users" @removeUser="removeUser"/>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import AddNew from '../components/AddNew.vue'
import UsersList from '../components/UsersList.vue'
import * as dataApi from '../backend/dataAPI'

export default {
    components: {
        Header,
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
.navbar {
    box-shadow: 0px 4px 16px rgba(32, 32, 32, 0.05);
}
</style>