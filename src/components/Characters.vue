<template>
  <div class="hello">
    <h1>Personajes Breaking Bad</h1>
    <ul v-for="p in people" v-bind:key="p.id">
        <li >
          {{ p.name }} - {{p.actor}}: <a :href="p.url" target="_blank">+ Info</a>
        </li>
    </ul>
  </div>
</template>

<script>
  import request_ from 'request';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        people: []
      }
    },
    async mounted() {
      const apiUrl = 'https://breaking-bad-voting.herokuapp.com/graphql';
      try {
        request_.post(apiUrl, {
          json: {
            query: `
              {
                characters {
                  id
                  name
                  actor
                  description
                  url
                }
              }
            `
          }
        }, (error, res, body) => {
          if (error) {
            console.error = function (message) {  // eslint-disable-line no-console
              throw new Error(message);
            };
          }
          this.people = body.data.characters;
        });
      } catch (error) {
        console.error = function (message) {  // eslint-disable-line no-console
          throw new Error(message);
        };
      }
    }
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
