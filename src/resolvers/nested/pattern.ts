export const Pattern = {
    table_id: (parent, args, ctx, info) => {
        return ctx.db.pattern({id: parent.id}).table_id();
    },

    company_ids: (parent, args, ctx, info) => {
        return ctx.db.pattern({id: parent.id}).company_ids();
    },
    
    createdBy: (parent, args, ctx, info) => {
        return ctx.db.pattern({id: parent.id}).createdBy();
    },

    updatedBy: (parent, args, ctx, info) => {
        return ctx.db.pattern({id: parent.id}).updatedBy();
    }

    
};
