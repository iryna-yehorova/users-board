<template>
    <div class="button rounded w-52 h-12 flex flex-row justify-center items-center">
        <button v-bind="$attrs" class="text-center text-base button__text">
            {{ title }}
        </button>
    </div>
</template>

<script>
export default{
    props: {
        title: String,
    }
}
</script>

<style lang="scss">
.button {
    background-color: #68B43E;

    &__text {
         color: #FCFCFC
    }
}
</style>