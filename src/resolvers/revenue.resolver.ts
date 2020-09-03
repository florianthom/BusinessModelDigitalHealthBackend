export const RevenueQuery = {
    getRevenue: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.revenue({ id: args.id });;
        }
    },

    getAllRevenues: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.revenues();
        }
    }
};


export const RevenueMutation = {

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

    createRevenue: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createRevenue(args.data);
        }
    },

    updateRevenue: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateRevenue({
                where: {id: args.revenueId},
                data: args.data
            });
        }
    },

    
    deleteRevenue: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteRevenue({
                id: args.revenueId
            });

        }
    }
};