export const StrategyQuery = {
    getStrategy: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.strategy({ id: args.id });;
        }
    },

    getAllStrategys: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.strategys();
        }
    }
};


export const StrategyMutation = {

    /* 
        mutation{
            createPattern(data: {
            table_id: {
            create: {
                key_partner_entry_ids: {
                create: [
                    {
                    text: "testPatternKeyPartnerEntryPlayground",
                    note: "",
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
                    }
                ]
                }
                }
            },
            name: "testNamePatternPlayground",
            description: "testDescriptionPatternPlayground",
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
                name
            }
        }
    */

   createStrategy: {
    resolve: async (root, args, ctx, info) => {
        const userId = ctx.userId;
        return await ctx.db.createStrategy(args.data);
    }
    },


    updateStrategy: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateStrategy({
                where: {id: args.strategyId},
                data: args.data
            });
        }
    },


    deleteStrategy: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteStrategy({
                id: args.strategyId
            });

        }
    }
};