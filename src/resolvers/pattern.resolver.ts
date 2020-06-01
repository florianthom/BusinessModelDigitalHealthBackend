export const PatternQuery = {
    getPattern: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.pattern({ id: args.id });;
        }
    },

    getAllPattern: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.patterns();
        }
    }
};


export const PatternMutation = {

};