<template>
  <div id="search-bar">

    <!-- Search Bar -->

      <v-container class="search-bar">
        <v-toolbar
        dense
        flat
        class="mx-6"
        color="#e0ddd8"
        >

        <v-text-field
        class="input-field"
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        v-model="username" 
        v-on:keydown.13="search" 
        :class="{ 'has-error': error }"
        placeholder="Search for username..."
        ></v-text-field>

        </v-toolbar>
      </v-container>

     <!-- Search Bar -->

    <span class="loading" v-if="loading">Searching GitHub for "{{ username }}"...</span>

    <div v-if="results && !loading || error && !loading">


        <div v-if="results">
            <v-card
                class="mx-auto ma-3"
                max-width="344"
            >
                <v-img
                v-bind:src="results.avatar_url"
                height="320px"
                ></v-img>

                <v-card-title>
                {{results.login}}
                </v-card-title>

                <v-card-subtitle>
                User Type: {{results.type}}
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="orange lighten-2"
                    text
                    :href="results.login"
                >
                    View Profile
                </v-btn>

                <v-spacer></v-spacer>

                </v-card-actions>

            </v-card>
        </div>

        <span v-if="error">Sorry, can't find a user called "<i>{{ username }}</i>"!</span>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            username: '',
            results: '',
            error: '',
            loading: false,
        }
    },
    watch: {
        username: function () {
            this.error = '';
        }
    },
    methods:  {
        search: function() {
            if( this.username ){
                this.loading = true;
                console.log("Searching for... " + this.username );
                axios.get('https://api.github.com/users/' + this.username)
                    .then(response => {
                        console.log( response.data );
                        this.results = response.data;
                        this.error = '';
                        this.loading = false;
                    }).catch(error => {
                        this.results = '';
                        this.error = error;
                        this.loading = false;
                    });
            } else {
                this.results = '';
                this.error = '';
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
div {
   font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
   font-weight: 300;
   font-size: 16px; line-height: 1.4;

}

.input-field{
    background-color: rgb(224, 221, 216);
}

.search-bar{
    background-color: #e0ddd8;
}

input {
    display: block;
    width: 350px;
    max-width: 74%;
    padding: 15px 25px;
    margin: 0 auto;
    background-color: #e0ddd8;

}
.has-error {
    outline: none;
}
.box {
    display: block;
    width: 350px;
    max-width: 74%;
    padding: 25px;
    margin: 15px auto;
    background: #e0ddd8;
    text-align: center;
}
.box img {
    display: block;
    width: 100px;
    height: auto;
    margin: 0 auto 15px;
}
.loading {
    display: block;
    text-align: center;
    color: #e0ddd8;
}
</style>