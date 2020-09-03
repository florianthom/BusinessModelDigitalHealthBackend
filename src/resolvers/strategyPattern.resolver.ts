import { Prisma} from '../generated/prisma-client';
export interface Context{
    db: Prisma;
  }

export const StrategyPatternQuery = {
    getStrategyPattern: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.strategyPattern({ id: args.id });;
        }
    },

    getAllStrategyPatterns: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.strategyPatterns();
        }
    },

    
    // query {
    //     getWeightBetweenStrategyAndPattern(
    //       strategy_id: "ckel5xwak0eah078469c9j7cl",
    //       pattern_id: "ckel5xxfu0eda0784w8nmavl9"
    //     ){
    //       weight
    //     }
    //   }
    getWeightBetweenStrategyAndPattern: {
        resolve: (root, args, ctx : Context, info) => {
            return ctx.db.strategyPatterns({
                where: {
                    AND: [
                        {
                            strategy_id: {id: args.strategy_id},
                        },
                        {
                            pattern_id: {id: args.pattern_id},
                        },
                    ],
                },
            });
        }
    }

};


export const StrategyPatternMutation = {

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

   createStrategyPattern: {
    resolve: async (root, args, ctx, info) => {
        const userId = ctx.userId;
        return await ctx.db.createStrategyPattern(args.data);
    }
    },


    updateStrategyPattern: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateStrategyPattern({
                where: {id: args.strategyPatternId},
                data: args.data
            });
        }
    },


    deleteStrategyPattern: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteStrategyPattern({
                id: args.strategyPatternId
            });

        }
    }
};