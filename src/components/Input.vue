<template>
    <div>
        <input v-bind="$attrs" v-model="value" type="search" class="sm: w-[150px] lg:w-[400px] text-base outline-none bg-[#F3F3F3] rounded text-[#202020] p-3 hover:border hover:border-2 hover:border-[#202020] 
        hover:bg-[#F3F3F3] active:bg-white active:border active:border-2 active:border-[#202020]" 
        :class="{ 'border-[#BA1200] border-2': error }" @input="changeValue">
        <span class="pl-2 after:content-['*'] after:ml-0.5 after:text-[#BA1200]"></span>
        <p v-if="error" class="text-[#BA1200] text-xs pt-1 pl-2">Required</p>
    </div>
</template>

<script>
export default {
    props: {
        error: Boolean
    },
    data() {
        return {
            value: ''
        }
    },
    methods: {
        changeValue() {
            this.$emit('change', this.value)
        }
    }
}
</script>

