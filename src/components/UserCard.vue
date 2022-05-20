<template>
     <div class="card rounded-3xl bg-white pb-7 sm:w-[250px] md:w-[450px] lg:w-[730px] sm:px-3">
         <div class="flex justify-center">
            <h1 class="card__heading sm:text-base md:text-2xl lg:text-3xl text-black text-center py-5">User #{{item.id ? item.id : new Date.toISOString()}}</h1>
            <button @click="deleteUser" class="justify-self-end">Delete user</button>
        </div>
        <div class="flex justify-between items-baseline px-3 md:px-[75px] lg:px-[150px]">
            <p class="text-[#878787] text-sm">Name</p>
            <p class="text-base text-[#202020]">{{item.name}}</p>
        </div>
         <div class="flex justify-between items-baseline px-3 md:px-[75px] lg:px-[150px]">
            <p class="text-[#878787] text-sm">Color</p>
            <p class="text-base text-[#202020]">{{item.color ? item.color : '---'}}</p>
        </div>
        <div class="flex flex-col items-center mt-6">
            <Button title="Generate Color" @click="generateColor" class="flex justify-center"></Button>
        </div>
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