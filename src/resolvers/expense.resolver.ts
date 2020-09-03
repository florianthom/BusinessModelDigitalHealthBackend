export const ExpenseQuery = {
    getExpense: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.expense({ id: args.id });;
        }
    },

    getAllExpenses: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.expenses();
        }
    }
};


export const ExpenseMutation = {

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

    createExpense: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createExpense(args.data);
        }
    },

    updateExpense: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateExpense({
                where: {id: args.expenseId},
                data: args.data
            });
        }
    },

    
    deleteExpense: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteExpense({
                id: args.expenseId
            });

        }
    }
};