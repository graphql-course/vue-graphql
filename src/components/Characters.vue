<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <h1>Lista de personajes Breaking Bad</h1>
      <span v-if="loading">Loading...</span>
      <span v-else-if="error">An error occured</span>

      <section v-if="data">
        <ul v-if="data.characters.length">
            <li :key="p.id" v-for="p in data.characters">
              {{ p.name }} - {{p.actor}}: <a :href="p.url" target="_blank">+ Info</a>
            </li><br/>
        </ul>

        <span v-else>No result :(</span>
      </section>
    </template>
  </ApolloQuery>
</template>

<script>
  import { GET_CHARACTERS } from './../graphql/queries';
  export default {
    name: 'Characters',
    data() {
      return {
        query: GET_CHARACTERS
      };
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
