<template>
    <button class="bg-firebrick mx-auto rounded-md text-white px-5 w-full py-3">
        {{innerText}}
    </button>
</template>

<script>
export default {
    props: ['innerText']
}
</script>