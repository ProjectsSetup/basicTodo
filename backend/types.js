const zod = require("zod");

/* the schema given to zod to validate inputs is
    {
        title: string,
        description: string,
    }

    {
        id: string,
    }
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})
const updateTodo = zod.object({
    id: zod.string()
})

//exporting the schema to be used by other files in the project
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}