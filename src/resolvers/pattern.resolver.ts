export const PatternQuery = {
    getPattern: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.pattern({ id: args.id });;
        }
    },

    getAllPattern: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.patterns();
        }
    }
};


export const PatternMutation = {

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

   createPattern: {
    resolve: async (root, args, ctx, info) => {
        const userId = ctx.userId;
        return await ctx.db.createPattern(args.data);
    }
    },


    updatePattern: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updatePattern({
                where: {id: args.patternId},
                data: args.data
            });
        }
    },


    deletePattern: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deletePattern({
                id: args.patternId
            });

        }
    }
};