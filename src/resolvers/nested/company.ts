export const Company = {
    pattern_ids: (parent, args, ctx, info) => {
        return ctx.db.company({id: parent.id}).pattern_ids();
    }
};