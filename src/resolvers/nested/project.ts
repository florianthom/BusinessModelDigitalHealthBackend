export const Project = {
    canvas_ids: (parent, args, ctx, info) => {
        return ctx.db.project({id: parent.id}).canvas_ids();
    },
    
    createdBy: (parent, args, ctx, info) => {
        return ctx.db.project({id: parent.id}).createdBy();
    },

    updatedBy: (parent, args, ctx, info) => {
        return ctx.db.project({id: parent.id}).updatedBy();
    }
}