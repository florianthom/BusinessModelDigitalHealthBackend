export const KeyPartnerQuery = {
    getKeyPartner: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.keyPartner({ id: args.id });;
        }
    },

    getAllKeyPartners: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.keyPartners();
        }
    }
};


export const KeyPartnerMutation = {

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

    createKeyPartner: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createKeyPartner(args.data);
        }
    },

    updateKeyPartner: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateKeyPartner({
                where: {id: args.keyPartnerId},
                data: args.data
            });
        }
    },

    
    deleteKeyPartner: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteKeyPartner({
                id: args.keyPartnerId
            });

        }
    }
};