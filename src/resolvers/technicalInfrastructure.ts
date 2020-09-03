export const TechnicalInfrastructureQuery = {
    getTechnicalInfrastructure: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.technicalInfrastructure({ id: args.id });;
        }
    },

    getAllTechnicalInfrastructures: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.technicalInfrastructures();
        }
    }
};


export const TechnicalInfrastructureMutation = {

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

    createTechnicalInfrastructure: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createTechnicalInfrastructure(args.data);
        }
    },

    updateTechnicalInfrastructure: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateTechnicalInfrastructure({
                where: {id: args.technicalInfrastructureId},
                data: args.data
            });
        }
    },

    
    deleteTechnicalInfrastructure: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteTechnicalInfrastructure({
                id: args.technicalInfrastructureId
            });

        }
    }
};