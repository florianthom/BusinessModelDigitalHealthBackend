export const Canvas = {
    table_id: (parent, args, ctx, info) => {
        return ctx.db.canvas({id: parent.id}).table_id();
    },
    
    createdBy: (parent, args, ctx, info) => {
        return ctx.db.canvas({id: parent.id}).createdBy();
    },

    updatedBy: (parent, args, ctx, info) => {
        return ctx.db.canvas({id: parent.id}).updatedBy();
    },

    strategy_id: (parent, args, ctx, info) => {
        return ctx.db.canvas({id: parent.id}).strategy_id();
    },

    pattern_ids: (parent, args, ctx, info) => {
        return ctx.db.canvas({id: parent.id}).pattern_ids();
    },

};
