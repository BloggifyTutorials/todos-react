const { Todo } = Bloggify.models

exports.add = todo => {
    return new Promise((res, rej) => {
        new Todo(todo).save((err, data) => {
            if (err) {
                if (err.name === "ValidationError") {
                    err.status = 400
                }
                return rej(err)
            }
            res(res)
        })
    })
}

exports.toggle = _id => {
    return Todo.findOne({ _id }).then(todo => {
        todo.set("solved", !todo.get("solved"))
        return todo.save()
    })
}

exports.remove = _id => {
    return Todo.remove({ _id })
}

exports.list = () => Todo.find()
