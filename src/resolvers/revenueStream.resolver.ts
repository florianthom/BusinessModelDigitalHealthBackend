export const RevenueStreamQuery = {
    getRevenueStream: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.revenueStream({ id: args.id });;
        }
    },

    getAllRevenueStreams: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.revenueStreams();
        }
    }
};


export const RevenueStreamMutation = {

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

    createRevenueStream: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createRevenueStream(args.data);
        }
    },

    updateRevenueStream: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateRevenueStream({
                where: {id: args.revenueStreamId},
                data: args.data
            });
        }
    },

    
    deleteRevenueStream: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteRevenueStream({
                id: args.revenueStreamId
            });

        }
    }
};