export const ValueCreationQuery = {
    getValueCreation: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.valueCreation({ id: args.id });;
        }
    },

    getAllValueCreations: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.valueCreations();
        }
    }
};


export const ValueCreationMutation = {

    /* 
        mutation{
            createKeyPartner(data: {
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

    createValueCreation: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createValueCreation(args.data);
        }
    },

    updateValueCreation: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateValueCreation({
                where: {id: args.valueCreationId},
                data: args.data
            });
        }
    },

    
    deleteValueCreation: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteValueCreation({
                id: args.valueCreationId
            });

        }
    }
};