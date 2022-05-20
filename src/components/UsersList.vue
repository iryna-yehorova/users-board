<template>
    <div>
        <div v-for="(user, index) in users" :key="index">
            <UserCard :user="user" @removeUser="removeUser"/>
        </div>
    </div>
</template>

<script>
import UserCard from './UserCard.vue'
export default {
    props: {
        users: Array
    }, 
    components: {
        UserCard
    },
    methods: {
        removeUser(userId) {
            this.$emit('removeUser', userId)
        }
    }
}
</script>