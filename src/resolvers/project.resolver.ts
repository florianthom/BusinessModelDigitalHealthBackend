

export const ProjectQuery = {
    getProject: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.project({id: args.id})
        }
    },
    getAllProjects: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.projects();
        }
    }
};


export const ProjectMutation = {
};
