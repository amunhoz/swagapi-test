

module.exports = {
          adapters: {
              'default': require('sails-mysql'),
              disk: require('sails-disk')
          },

          connections: {
              default: {
                  adapter: 'disk',
                  filePath: app.config.locations.data +"/"
              }
          }
      };