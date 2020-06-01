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

};