// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    const { data } = await axios.get(`https://www.upthoa.com/admin/api/collections/get/boardMembers?token=${process.env.COCKPIT_API_KEY}`);
    const contentType = store.addContentType({
      typeName: 'BoardMembers'
    })

    for (const item of data.entries) {
      contentType.addNode({
        id: item.id,
        president: item.president,
        vicePresident: item.vicePresident,
        secretary: item.secretary,
        treasurer: item.treasurer,
        memberAtLarge: item.memberAtLarge,
        data: item,
      })
    }
  });

  api.loadSource(async store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    const { data } = await axios.get(`https://www.upthoa.com/admin/api/collections/get/welcome?token=${process.env.COCKPIT_API_KEY}`);
    const contentType = store.addContentType({
      typeName: 'WelcomeMessage'
    });

    for (const item of data.entries) {
      contentType.addNode({
        welcome: item.welcome,
      });
    }
  });

  api.loadSource(async store => {
    const { data } = await axios.get(`https://www.upthoa.com/admin/api/collections/get/footer?token=${process.env.COCKPIT_API_KEY}`);
    const contentType = store.addContentType({
      typeName: 'Footer'
    });

    for (const item of data.entries) {
      contentType.addNode({
        propertyManager: item.propertyManager,
        management: item.management,
        address: item.address,
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
}
