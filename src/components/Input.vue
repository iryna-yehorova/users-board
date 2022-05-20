<template>
    <div>
        <input type="text" :value="value">
    </div>
</template>

<script>
export default {
    props: {
        value: String
    }
}
</script>
