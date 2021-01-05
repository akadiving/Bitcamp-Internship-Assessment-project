<template>
    <div class="profile">
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
        <v-responsive
        width="100%">
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
        </v-responsive>

        </v-col>
        <!--- end of Home button  --->

        <!-- Search bar -->
        <v-col
        cols="auto"
        class="ml-auto"
        >
        
        <Search />
        </v-col>
        <!-- end of Search bar -->

        </v-row>
        <!-- end of Nav bar -->
        <v-spacer></v-spacer>   

        </v-container>
            <!-- Profile -->
            <div v-if="Profile">
                
                <v-container>
                <v-row
                mb-6
                dense
                >

                <!-- Profile Card -->
                    <v-col
                    sm="5"
                    offset-sm="0"
                    md="6"
                    offset-md="0"
                    >
                    <v-card
                    color="#385F73"
                    dark
                    >

                    <v-img
                    v-if="Profile.avatar_url"
                    v-bind:src="Profile.avatar_url"
                    height="320px"
                    ></v-img>

                    <v-card-title class="headline">
                    {{Profile.name}}
                    </v-card-title>

                    <v-card-subtitle v-if="Profile.followers">Followers: {{Profile.followers}}</v-card-subtitle>
                    <v-card-subtitle v-else>Followers: 0</v-card-subtitle>
                    <v-card-subtitle v-if="Profile.location">Location: {{Profile.location}}</v-card-subtitle>
                    <v-card-subtitle v-else>Location: </v-card-subtitle>

                    <v-card-actions>

                    <v-btn text
                    v-bind:href="Profile.html_url"
                    target="_blank"
                    width="100%"
                    >
                    <font-awesome-icon :icon="['fab', 'github']" size="2x" />
                        Github Page
                    </v-btn>

                    </v-card-actions>
                    </v-card>
                    </v-col>
                <!-- Profile Card -->

                <!-- repositories -->
                    <v-col
                        sm="5"
                        offset-sm="0"
                        md="6"
                        offset-md="0"
                    >
                    <v-card
                    color="#f78834"
                    dark
                    v-if="Repo[0]"
                    >
                        <v-card-title class="headline">
                        Repositories
                        </v-card-title>
                        <v-card-subtitle v-if="Profile.public_repos">Total of {{Profile.public_repos}} public repositories.</v-card-subtitle>
                        <div v-if="Repo[0]">
                            <v-card-title v-if="Repo[0]">1: {{Repo[0].name}}.</v-card-title>
                            <v-card-title v-else>1: ** No repository ** </v-card-title>
                            <v-card-title v-if="Repo[1]">2: {{Repo[1].name}}.</v-card-title>
                            <v-card-title v-else>2: ** No repository ** </v-card-title>
                            <v-card-title v-if="Repo[2]">3: {{Repo[2].name}}.</v-card-title>
                            <v-card-title v-else>3: ** No repository ** </v-card-title>
                        </div>
                        <v-card-subtitle v-else>No public repositories.</v-card-subtitle>
                        <v-card-actions>
                        <v-btn text
                        v-bind:href="`https://github.com/${Profile.login}?tab=repositories`"
                        target="_blank"
                        >
                            View all
                        </v-btn>
                        </v-card-actions>

                    </v-card>

                     <v-card
                    color="#f78834"
                    dark
                    v-else
                    >
                        <v-card-title class="headline">
                        Repositories
                        </v-card-title>
                        <v-card-subtitle >Total of 0 public repositories.</v-card-subtitle>
                        <div >
                            <v-card-title>1: ** No repository ** </v-card-title>
                            <v-card-title>2: ** No repository ** </v-card-title>
                            <v-card-title>3: ** No repository ** </v-card-title>
                        </div>
                        <v-card-subtitle>No public repositories.</v-card-subtitle>
                        <v-card-actions>
                        <v-btn text
                        >
                            No repos
                        </v-btn>
                        </v-card-actions>

                    </v-card>
                    </v-col>
                <!-- repositories -->

                <!-- orgnanization -->
                    <v-col
                        sm="5"
                        offset-sm="0"
                        md="6"
                        offset-md="0"
                    >
                    <v-card
                    color="#4745c4"
                    dark
                    class="pa-2"
                    v-if="Orgs[0]"
                    >
                    <v-container>
                        <v-row mb-6 dense>
                            <v-col
                            sm="6"
                            offset-sm="0"
                            md="6"
                            offset-md="0"
                            >
                                <div class="org-class" >
                                    <v-card-title class="headline">
                                    {{Orgs[0].login}}
                                    </v-card-title>
                                    <v-card-subtitle>{{Orgs[0].description}}</v-card-subtitle>
                                </div>
                                    
                            </v-col>

                            <v-col
                            sm="6"
                            offset-sm="0"
                            md="6"
                            offset-md="0"
                            >

                            <div v-if="Orgs[0].avatar_url">
                              <v-avatar
                                class="ma-3"
                                size="75"
                                tile
                                >
                                <v-img :src="Orgs[0].avatar_url"></v-img>
                                </v-avatar>
                            </div>

                            <div v-else>No avatar</div>

                            <div v-if="Orgs[0].url">
                                <v-card-actions>
                                <v-btn text
                                v-if="Orgs[0].url"
                                v-bind:href="`https://github.com/${Orgs[0].login}`"
                                target="_blank"
                                >
                                    View
                                </v-btn>
                                </v-card-actions>
                            </div>
                                
                            <div v-else>No Organization</div>
                            </v-col>
                            
                        </v-row>
                    </v-container>

                    </v-card>

                    <v-card
                    color="#4745c4"
                    dark
                    class="pa-2"
                    v-else
                    ><v-container>
                        <v-row mb-6 dense>
                            <v-col
                            sm="6"
                            offset-sm="0"
                            md="6"
                            offset-md="0"
                            >
                                <div class="org-class" >
                                    <v-card-title class="headline">
                                    
                                    </v-card-title>
                                    <v-card-subtitle>No organization</v-card-subtitle>
                                </div>
                                    
                            </v-col>

                            <v-col
                            sm="6"
                            offset-sm="0"
                            md="6"
                            offset-md="0"
                            >

                            <div>
                              <v-avatar
                                class="ma-3"
                                size="75"
                                tile
                                >
                                No avatar
                                </v-avatar>
                            </div>

                            <div >
                                <v-card-actions>
                                <v-btn text
                                >
                                    No orgs
                                </v-btn>
                                </v-card-actions>
                            </div>
                            </v-col>
                            
                        </v-row>
                    </v-container>
                    </v-card>
                <!-- repositories -->

                    </v-col>
                <!-- organization -->
            
                </v-row>
                </v-container>

            </div>
            <!-- Profile -->

        <div v-else>
            <v-container fluid>
                <NotFound />
            </v-container>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Search from '../components/Search';
import NotFound from '../components/NotFound'

export default {
    name: 'Profile',
    components: {
      Search,
      NotFound
    },
    
    data () {
        return {
            Profile: '',
            Repo: '',
            Orgs: '',
        };
    },

    created () {
        // Create userprofile, Organization and Repository GET request for specific user
        let repos = `https://api.github.com/users/${this.$route.params.username}/repos`
        let orgs = `https://api.github.com/users/${this.$route.params.username}/orgs`
        let profile = `https://api.github.com/users/${this.$route.params.username}`
        const requestRepos = axios.get(repos)
        const userRequest = axios.get(profile)
        const orgsRequest = axios.get(orgs)
        // Perform multiple get request to get user and repositories at the sam time
            axios.all([userRequest, requestRepos, orgsRequest])
            .then(axios.spread((...response) => {
            // All requests are now complete
            this.Profile = response[0].data
            this.Repo = response[1].data
            this.Orgs = response[2].data

            console.log("responseOne",this.Profile);
            console.log("responseTwo",this.Repo);
            console.log("responseThree",this.Orgs);
            }))
        .catch(err => {
            console.log(err)
        })
    },

}
</script>

<style scoped>

</style>