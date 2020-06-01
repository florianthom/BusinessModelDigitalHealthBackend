export const User = {
    project_ids: (parent, args, ctx, info) => {
        return ctx.db.user({id: parent.id}).project_ids();
    }
}