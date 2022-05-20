<template>
    <div class="card">
        <p>{{ item.name }}</p>
        <p>Color: {{ item.color ? item.color : '---' }}</p>
        <Button title="Generate Color" @click="generateColor"></Button>
        <button @click="deleteUser">Delete user</button>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    components: {
        Button
    },
    props: {
        user: Object
    },
    data() {
        return {
                item: {}
        }
    },
    watch: {
        user: {
            handler(val) {
                this.item = val
            },
            immediate: true
        }
    },
    methods: {
        generateColor() {
            this.item.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        },
        deleteUser() {
            this.$emit('removeUser', this.item.id)
        }
    }
}
</script>