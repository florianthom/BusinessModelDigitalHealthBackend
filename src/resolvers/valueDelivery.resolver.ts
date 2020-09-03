export const ValueDeliveryQuery = {
    getValueDelivery: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.valueDelivery({ id: args.id });;
        }
    },

    getAllValueDeliveries: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.valueDeliveries();
        }
    }
};


export const ValueDeliveryMutation = {

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

    createValueDelivery: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createValueDelivery(args.data);
        }
    },

    updateValueDelivery: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateValueDelivery({
                where: {id: args.valueDeliveryId},
                data: args.data
            });
        }
    },

    
    deleteValueDelivery: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteValueDelivery({
                id: args.valueDeliveryId
            });

        }
    }
};