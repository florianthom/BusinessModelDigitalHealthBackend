export const NetworkEffectQuery = {
    getNetworkEffect: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.networkEffect({ id: args.id });;
        }
    },

    getAllNetworkEffects: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.networkEffects();
        }
    }
};


export const NetworkEffectMutation = {

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

    createNetworkEffect: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createNetworkEffect(args.data);
        }
    },

    updateNetworkEffect: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateNetworkEffect({
                where: {id: args.networkEffectId},
                data: args.data
            });
        }
    },

    
    deleteNetworkEffect: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteNetworkEffect({
                id: args.networkEffectId
            });

        }
    }
};