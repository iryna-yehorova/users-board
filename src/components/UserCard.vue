<template>
    <div class="card">
        <p>{{user.name}}</p>
        <p>Color: {{color ? color : '---'}}</p>
        <button @click="generateColor">Generate color</button>
        <button @click="deleteUser">Delete user</button>
    </div>
</template>

<script>
export default {
    props: {
        user: Object
    },
    data() {
        return {
            color: ''
        }
    },
    methods: {
        generateColor() {
            this.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        },
        deleteUser() {
            this.$emit('removeUser', this.user.id)
        }
    }
}
</script>