<template>
    <div class="coming-up-container">
        <h5>
            <slot name="name"></slot>
        </h5>
    </div>
</template>

<style scoped>
.coming-up-container {
    width: 25vw;
    height: 10vh;
    border-radius: 20px;
    border: 1px solid var(--accent-color);
    background-color: var(--background-color-secondary);
    padding: 20px;
}
</style>