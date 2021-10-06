<template>
     <label class="block text-xs mb-2 tracking-wide text-left">{{label}}</label>
    <input name="input" :type="type" class="bg-transparent border w-full rounded-lg text-sm py-3 px-3 outline-none">
</template>

<script>
export default {
    name: 'Input',
    props: ['type','label']
}
</script>