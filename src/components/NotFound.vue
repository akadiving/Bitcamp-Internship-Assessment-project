<template>
    <div id="container">
        <div class="content">
            <h4>** User Not Found **</h4>
            <p>There is no user with that name</p>
            <router-link class='link' to="/">Back to home</router-link>
        </div> 
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isLoader: false
        }
    },    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    height: 100vh;
}

#container{
    position: absolute;
    top: 20%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0ddd8;
    box-shadow: 0 15px 30px rgba(0,0,0,.5)
}

#container .content{
    max-width: 600px;
    text-align:center;
}

#container .content h2{
    font-size: 18vw;
    color: #fff;
    line-height: 1em;
}

#container .content p{
    color: rgb(7, 7, 7);
    font-size: 1.2em;

}

#container .content .link{
    position: relative;
    display: inline-block;
    padding: 10px 25px;
    background: #FFA000;
    color: #fff;
    text-decoration: none;
    margin-top: 25px;
    border-radius: 25px;
    border-bottom: 4px solid #FFA000;
}
</style>