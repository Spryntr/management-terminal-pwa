<template>
    <input :type="type" class="bg-transparent border">
</template>

<script>
export default {
    name: 'Input',
    props: ['type']
}
</script>