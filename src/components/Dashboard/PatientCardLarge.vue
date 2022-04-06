<template>
    <div class="next-container">
        <h5>
            <slot name="name"></slot>
        </h5>
    </div>
</template>

<style scoped>
.next-container {
    width: 25vw;
    height: 25vh;
    border-radius: 20px;
    border: 1px solid var(--accent-color);
    background-color: var(--background-color-secondary);
    padding: 20px
}
</style>