<template>
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">Rank</th>
        <th scope="col">Avatar</th>
        <th scope="col">Name</th>
        <th scope="col">User Type</th>
        <th scope="col">Profile</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in Users" :key="user.id">
        <th scope="row">
          {{ Users.indexOf(user) + 1 }}
        </th>
        <td>
          <v-avatar
            color="primary"
            size="75"
          >
            <img v-if="user.avatar_url" class="img-responsive" :src="user.avatar_url"/>
          </v-avatar>
        </td>
        <td>
          <h5><a class="text-secondary" target="_blank"  v-bind:href="user.html_url">{{user.login}}</a></h5>
        </td>
        <td>
          <p class="user-type">
            {{user.type}}
          </p>
          
        </td>
        <td>
          <v-btn
              color="orange lighten-2"
              text
              :href="user.login"
              class="profile-btn"
          >
              View Profile
          </v-btn>
        </td>

      </tr>
    </tbody>


  </table>



</template>


<script>
// Component for List view which uses props to output the data as Array
export default {
    name: 'List',

    props: {
        Users: Array,
    }
}
</script>

<style scoped>
.avatar {
    max-width: 50px;
  }

tbody{
  background: white;
}

h5{
  margin-top: 22px;
}

.user-type{
  margin-top: 22px;
}

.profile-btn{
  margin-top: 22px;
}

tr{
  margin: 5px;
}
</style>