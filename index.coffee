class BoxNode
    box = {}

    this.set = (key, value) ->
        box[key] = value
        return

    this.get = (key) ->
        return box[key]

module.exports = new BoxNode()