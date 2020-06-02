export const CompanyQuery = {
    getCompany: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.company({ id: args.id });;
        }
    },

    getAllCompanies: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.companies();
        }
    }
};


export const CompanyMutation = {

    /* 
        mutation{
        createCompany(data: {
            name: "testCompanyPlayground",
            description: "testCompanyDescriptionPlayground",
            pattern_ids: {connect: [
            {
                id: "ckaxqi4n0000p0708dieqjsfp"
            }
            ]}
        }){
            name
        }
        }
    */

    createCompany: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createCompany(args.data);
        }
    },

    updateCompany: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateCompany({
                where: {id: args.companyId},
                data: args.data
            });
        }
    },


    deleteCompany: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteCompany({
                id: args.companyId
            });

        }
    }
};