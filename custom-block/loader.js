module.exports = function(source, map) {
  this.callback(null, `
    export default function(Component) {
      Component.options._docs = ${JSON.stringify(source)}
    }
  `, map)
}