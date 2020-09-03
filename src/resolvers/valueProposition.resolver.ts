export const ValuePropositionQuery = {
    getValueProposition: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.valueProposition({ id: args.id });;
        }
    },

    getAllValuePropositions: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.valuePropositions();
        }
    }
};


export const ValuePropositionMutation = {

    /* 
        mutation{
            createRevenueStream(data: {
            table_ids: {connect: [
                {id: "ckarcrdgv001507762l9upsnl"}
            ]},
            text: "testTextPlayground",
            note: "testNodePlayground",
            createdBy: {
                connect: {
                    id: "ckarcrczl00080776jzr3qcyh"
                    }
                }
                updatedBy: {
                connect: {
                    id: "ckarcrczl00080776jzr3qcyh"
                    }
                }
            }){
                text
            }
        }
    */

    createValueProposition: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createValueProposition(args.data);
        }
    },

    updateValueProposition: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateValueProposition({
                where: {id: args.valuePropositionId},
                data: args.data
            });
        }
    },

    
    deleteValueProposition: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteValueProposition({
                id: args.valuePropositionId
            });

        }
    }
};