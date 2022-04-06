<template>
    <div class="coming-up-container">
        <div class="client-sum">
            <img src="@/assets/person.jpg" class="profile-picture" />
            <div class="client-info">
                <h5>
                    <slot name="name"></slot>
                </h5>
                <p>
                    <slot name="time"></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h5 {
    color: var(--text-primary-color);
    margin: 0
}
p {
    opacity: 0.8;
}

.client-info {
    display: flex;
    flex-direction: column;
}

.client-sum {
    display: flex;
    flex-direction: row;
}

.profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 10px;
}
.coming-up-container {
    width: 25vw;
    height: 10vh;
    border-radius: 20px;
    border: 1px solid var(--accent-color);
    background-color: var(--background-color-secondary);
    padding: 20px;
    margin-top: 10px;
}
</style>