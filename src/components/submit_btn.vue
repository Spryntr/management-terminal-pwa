<template>
    <button class="bg-firebrick rounded-md text-white px-5 w-1/2 py-3">
        {{innerText}}
    </button>
</template>

<script>
export default {
    props: ['innerText']
}
</script>