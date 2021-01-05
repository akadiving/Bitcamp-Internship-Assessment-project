<template>

<table class="table table-hover table-responsive-sm">
  <thead class="thead-dark">
      <th scope="col">Rank</th>
      <th scope="col">Avatar</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Profile</th>
  </thead>
  <tbody>
    <tr v-for="user in Users" :key="user.id" class="table-light">
      <th scope="row">
        <p class="rank"><b>{{ Users.indexOf(user) + 1 }}</b></p>
      </th>
      <td scope="row">
        <v-avatar
        color="primary"
        size="70"
        >
          <img v-if="user.avatar_url" class="img-responsive" :src="user.avatar_url"/>
        </v-avatar>
      </td>
      <td scope="row">
        <h5><a class="text-secondary" target="_blank"  v-bind:href="user.html_url">{{user.login}}</a></h5>
      </td>
      <td scope="row">
        <p class="user-type">{{user.type}}</p>
      </td>
      <td scope="row">
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

.rank{
  margin-top: 22px;
  font-weight: 500;
  
}

tr{
  margin: 5px;
}
</style>