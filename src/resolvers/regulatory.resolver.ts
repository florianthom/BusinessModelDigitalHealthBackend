export const RegulatoryQuery = {
    getRegulatory: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.regulatory({ id: args.id });;
        }
    },

    getAllRegulatories: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.regulatories();
        }
    }
};


export const RegulatoryMutation = {

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

    createRegulatory: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createRegulatory(args.data);
        }
    },

    updateRegulatory: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateRegulatory({
                where: {id: args.regulatoryId},
                data: args.data
            });
        }
    },

    
    deleteRegulatory: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteRegulatory({
                id: args.regulatoryId
            });

        }
    }
};