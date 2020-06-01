export const TableQuery = {
    getTable: {
        resolve: (root, args, ctx) => {
            return ctx.db.table({ id: args.id });;
        }
    },

    getAllTables: {
        resolve: (root, args, ctx) => {
            return ctx.db.tables();
        }
    }
};


export const TableMutation = {

};