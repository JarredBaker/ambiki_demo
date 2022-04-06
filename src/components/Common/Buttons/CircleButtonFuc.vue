<script>
export default {
    name: 'CircleButton',
    props: {
        act: Function,
        backgroundColor: String
    }
}
</script>

<template>
    <div class="item-circle" :style="{ 'background-color': backgroundColor }">
        <button @click="act">
            <slot name="icon"></slot>
        </button>
    </div>
</template> 

<style scoped>
button {
    border: none;
    background-color: Transparent;
}
.item-circle {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    box-shadow: 0 0 10px 1px var(--highlight-color);
    margin-right: 10px;
}

i {
    display: flex;
    place-items: center;
    place-content: center;
    color: var(--text-primary-color);
}
</style>
