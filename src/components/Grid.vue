<template>
    <div>
        
        <!--- old card --->

        <!---
        <div class="container">
            <div class="row">
                <div v-for="user in Users" :key="user.id" class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" v-bind:src="user.avatar_url" alt="Card image cap">
                        <div class="card-body">
                            <h4 class=""><a class="text-secondary"  target="_blank"  v-bind:href="user.html_url">{{user.login}}</a></h4>
                            <p class="user-type">User Type: {{user.type}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a :href="user.login" class="btn btn-sm btn-outline-primary" role="button" aria-pressed="true">View Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        --->

        <!--- old card --->

        <v-container grid-list-md
        color="#e0ddd8">

            <v-layout row wrap>
                <v-flex class="card-space" xs14 sm8 md6 lg4 v-for="user in Users" :key="user.id">

                    <v-card
                        class="mx-auto ma-3"
                        max-width="344"
                    >
                        <v-img
                        v-bind:src="user.avatar_url"
                        height="320px"
                        ></v-img>

                        <v-card-title>
                        <a class="text-secondary"  target="_blank"  v-bind:href="user.html_url">{{user.login}}</a>
                        </v-card-title>

                        <v-card-subtitle>
                        User Type: {{user.type}}
                        </v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            color="amber darken-2"
                            text
                            :href="user.login"
                        >
                            View Profile
                        </v-btn>

                        <v-spacer></v-spacer>


                        </v-card-actions>

                    </v-card>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
          
</template>

<script>
// Component for Grid view which uses props to output the data as Array
export default {
    name: 'Grid',

    props: {
        Users: Array,
    },

    data: () => ({
      show: false,
      model: null,
    }),

    methods: {
        
    }
}

</script>

<style scoped>
.container{
    background-color: #e0ddd8;
}

.card-space{
    background-color: #e0ddd8;
}

</style>