<template>
    <div class="users">
        <v-container
        fluid
        >
        <!-- Nav bar -->
        <v-row     
        justify="space-around"
        class="mb-6"
        >

        <!-- Home button -->
        <v-col
        cols="sm"
        >
            <v-container 
                fluid
                >
                <v-btn text
                    to="/"
                    class="mx-2"
                    fab
                    
                    >
                    <font-awesome-icon :icon="['fab', 'github']" size="3x" />
                </v-btn>
            
            </v-container>
        </v-col>
        <!-- Home button -->

        <!-- Search -->
        <v-col
        cols="sm"
        >
        <Search />
        </v-col>
        <!-- Search -->

         <!-- These are buttons to dynamicly switch 
        - list view to grid and vice-versa -->
        <v-col
        cols="sm"
        >
            <v-container 
                fluid
                class="text-center"
                >
                
                <v-btn
                class="mx-2"
                fab
                dark
                small
                color="teal"
                v-on:click="component ='List'"
                >
                <v-icon dark>
                    mdi-format-list-bulleted-square
                </v-icon>
                </v-btn>

                <v-btn
                class="mx-2"
                fab
                dark
                small
                color="teal"
                v-on:click="component ='Grid'"
                >
                <v-icon dark>
                    mdi-domain
                </v-icon>
                </v-btn>
            
            </v-container>
        </v-col>
        <!--- end of buttons   --->

        </v-row>
        <!-- Nav bar -->
        <v-spacer></v-spacer>   
        <keep-alive>
            <component class="content" v-bind:is="component" :Users="Users"></component>
        </keep-alive>
        </v-container>
        </div>
</template>

<script>
import { getAPI } from '../axios-api.js';
// Import all essential components
import Search from '../components/Search';
import List from '../components/List';
import Grid from '../components/Grid';

export default {
    name: 'Home',

    components: {
        Search,
        'List': List,
        'Grid': Grid,

    },

    data () {
    return {
        Users: [],
        search: '',
        component: 'Grid',
        }
    },
    mounted () {
        // Getting user data from github API with axios get() method
        getAPI.get()
        .then(response => {
            console.log('User API has received data')
            // Receives data and shows it on console
            this.Users = response.data
            console.log("responseOne",this.Users);
        })
        .catch(err => {
            console.log(err)
        })    
    },
    
}
</script>

<style scoped>
.content{
    background-color: #e0ddd8;
}
</style>