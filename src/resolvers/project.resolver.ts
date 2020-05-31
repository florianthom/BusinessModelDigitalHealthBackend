export const ProjectQuery = {
    getProject: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.project({id: args.id})
        }
    },

    // query {getAllProjects}: error:
    // GraphQL requires that you construct your queries in a way that only returns concrete data.
    // Each field has to ultimately resolve to one or more scalars (or enums). That means you cannot
    // just request a field that resolves to a type without also indicating which fields of that type you want to get back.
    // solution: just speficy the field you want to have till it is a scalar/enum/string
    getAllProjects: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.projects();
        }
    }
};


export const ProjectMutation = {
};
