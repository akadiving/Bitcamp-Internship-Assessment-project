<template>
    <div class="page-loader" v-if="!isLoader">
        
        <div class="cube-1"></div>
        <div class="cube-2"></div>
        <div class="cube-3"></div>
        <div class="cube-4"></div>
         
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isLoader: false
        }
    },

    mounted() {
        document.onreadystatechange = () => {
            if(document.readyState == "complete"){
                setTimeout(() => {
                    this.isLoader = true;
                }, 1500)  
            }
        }
    }
}
</script>

<style scoped>

.page-loader{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #5b5861;
    z-index: 999;
}

.cube-1{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #8cc271;
    animation: left 1s infinite 0.5s;
}

.cube-2{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-color: #69beeb;
    border-radius: 50%;
}

.cube-3{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #f5aa39;
}

.cube-4{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #e9643b;
    animation: right 1s infinite;
}

@keyframes left{
    40% {
        transform: translateX(-60px);
    }
    50% {
        transform: translateX(0);
    }
}

@keyframes right{
    40% {
        transform: translateX(60px);
    }
    50% {
        transform: translateX(0);
    }
}
</style>