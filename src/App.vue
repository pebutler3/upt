<template>
  <div id="app">
    <CincPanel />
    <header class="header">
      <nav class="container">
        <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/documents">Documents</router-link>
        </ul>
      </nav>
    </header>
    <router-view
      :content="content"
      :documents="documents"
      :staff="staff"
      :welcomeMessage="welcomeMessage"
      :welcomeImage="welcomeImage"
      :contactInfo="contactInfo">
    </router-view>
    <Footer :contactInfo="contactInfo" />
  </div>
</template>

<script>
import CincPanel from './components/CincPanel.vue';
import Footer from './components/Footer.vue';
import gql from 'graphql-tag';

export default {
  name: 'app',
  components: {
    CincPanel,
    Footer,
  },
  apollo: {
    content: gql `query boardMembers($id: ID) {
       content: boardMembersesConnection(where: {id: $id}) {
         edges {
           node {
            president
            vicePresident
            secretary
            treasurer
            memberAtLarge
           }
         }
       }
     }
    `,
    staff: gql `query staff($id: ID) {
        staff: staffsConnection(where: {id: $id}) {
          edges {
            node {
              staff
            }
          }
        }
      }
    `,
    welcomeMessage: gql `query welcomeMessage($id: ID) {
        welcomeMessage: welcomeMessagesConnection(where: {id: $id}) {
          edges {
            node {
              message {
                html
              }
            }
          }
        }
      }
    `,
    contactInfo: gql `query contactInfo($id: ID) {
        contactInfo: contactInfoesConnection(where: {id: $id}) {
          edges {
            node {
              one
              two
              three
            }
          }
        }
      }
    `,
    welcomeImage: gql `query welcomeImage($id: ID) {
        welcomeImage: welcomeImagesConnection(where: {id: $id}) {
          edges {
            node {
              id
              image {
                url
                height
                width
              }
            }
          }
        }
      }
    `,
    documents: gql `query documents($id: ID) {
      documents: documentsesConnection(where: {id: $id}) {
        edges {
          node {
            document {
              url
              fileName
            }
          }
        }
      }
    }`
  },
}
</script>

<style lang="scss">
  body {
    color:#3d315b;
    font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
    line-height: 1.5;
    margin:0;
    padding:0;
  }

  header {
    background-color: #3d315b;

    nav {

      ul {
        display: flex;
        margin: 0;
      }

      a {
        background-color: #3d315b;
        color: #e6ebe0;
        display: flex;
        line-height: 3.75rem;
        padding: 0 1.25rem;
        text-decoration: none;

        &:hover {
          background-color: #e6ebe0;
          color: #3d315b;
        }
      }
    }
  }

  a {
    color: #008cba;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  main {
    margin: 5em 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .board-staff {

    &__wrapper {
      display: flex;
    }
  }
</style>
