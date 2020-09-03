export const ActorQuery = {
    getActor: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.actor({ id: args.id });;
        }
    },

    getAllActors: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.actors();
        }
    }
};


export const ActorMutation = {

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

    createActor: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createActor(args.data);
        }
    },

    updateActor: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateActor({
                where: {id: args.actorId},
                data: args.data
            });
        }
    },

    
    deleteActor: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteActor({
                id: args.actorId
            });

        }
    }
};